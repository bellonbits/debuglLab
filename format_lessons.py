"""
One-shot reformatter for The Debug Society lesson markdown files.

Reads every lesson under NN_Section/NN_lesson.md and rewrites it into a
consistent, beautified structure:

    # Title

    > **Source:** [link]

    ---

    ## Overview

    > intro paragraph (as a blockquote callout)

    **You will learn:**
    - point 1
    - point 2

    ---

    ## Content

    ### Original sub-section heading
    body...

    ### Another sub-section
    body...

    ---

    ## Assignment

    body...

    ---

    ## Knowledge Check

    > intro line (as a blockquote callout)

    - [Question](#anchor)

The original lesson files use `### Heading` for every top-level section
(Introduction, Lesson overview, content concepts, Assignment, Knowledge check).
This script categorizes them and emits the same content with promoted
heading levels and visual separators.
"""

import os
import re

BASE_DIR = "/Users/mac/Debug Society"


def trim_blank_edges(lines):
    out = list(lines)
    while out and out[0].strip() == "":
        out.pop(0)
    while out and out[-1].strip() == "":
        out.pop()
    return out


def promote_subheadings(lines):
    """Promote `#### Heading` to `### Heading` inside a section body.

    The Assignment and Knowledge Check sections were originally at level
    `###`; their direct children were `####`.  After promoting those parents
    to `##`, the `####` children need to move up to `###` to keep the
    heading hierarchy contiguous.
    """
    promoted = []
    for line in lines:
        if line.startswith("#### ") and not line.startswith("##### "):
            promoted.append("### " + line[5:])
        else:
            promoted.append(line)
    return promoted


def blockquote_block(lines):
    """Wrap a paragraph block as a markdown blockquote.

    Empty lines become bare `>` so multiple paragraphs render as one quoted
    block with separated paragraphs.
    """
    result = []
    for line in lines:
        if line.strip() == "":
            result.append(">")
        else:
            result.append("> " + line)
    return result


def parse_lesson(text):
    lines = text.splitlines()
    n = len(lines)

    title = None
    source = None

    i = 0
    # Find title (# Heading)
    while i < n:
        if lines[i].startswith("# ") and not lines[i].startswith("## "):
            title = lines[i].strip()
            i += 1
            break
        i += 1

    # Find source line and skip leading separators / blanks
    while i < n:
        line = lines[i].strip()
        if line.startswith("**Source:**"):
            source = line
            i += 1
        elif line == "" or line == "---":
            i += 1
        else:
            break

    # Parse `### Heading` sections.  Anything between section headings becomes
    # that section's body.  Content before the first heading (if any) becomes a
    # "preamble" we'll attach to the first content slot.
    sections = []
    preamble = []
    current = None

    section_re = re.compile(r"^###\s+(.+?)\s*$")
    while i < n:
        line = lines[i]
        m = section_re.match(line)
        if m and not line.startswith("####"):
            if current is not None:
                sections.append(current)
            current = {"heading": m.group(1).strip(), "body": []}
        else:
            if current is None:
                preamble.append(line)
            else:
                current["body"].append(line)
        i += 1
    if current is not None:
        sections.append(current)

    intro = None
    overview = None
    assignment = None
    knowledge = None
    content_sections = []

    for sec in sections:
        h = sec["heading"].lower().strip().rstrip(":")
        if h == "introduction":
            intro = sec
        elif h in ("lesson overview", "overview"):
            overview = sec
        elif h == "assignment" or h == "assignments":
            assignment = sec
        elif h.startswith("knowledge"):
            knowledge = sec
        else:
            content_sections.append(sec)

    return {
        "title": title,
        "source": source,
        "preamble": trim_blank_edges(preamble),
        "intro": intro,
        "overview": overview,
        "content_sections": content_sections,
        "assignment": assignment,
        "knowledge": knowledge,
    }


def split_overview_body(body):
    """Find the first bullet line; return (intro_para_lines, bullet_block_lines).

    The default Odin overview text "This section contains a general overview of
    topics that you will learn in this lesson." is treated as boilerplate and
    dropped — we replace it with a clean "**You will learn:**" label.
    """
    body = trim_blank_edges(body)
    bullet_idx = None
    for idx, line in enumerate(body):
        stripped = line.lstrip()
        if stripped.startswith("- ") or stripped.startswith("* "):
            bullet_idx = idx
            break

    if bullet_idx is None:
        return body, []

    bullets = body[bullet_idx:]
    intro = trim_blank_edges(body[:bullet_idx])
    boiler = "this section contains a general overview"
    if intro and intro[0].lower().startswith(boiler):
        intro = []
    return intro, bullets


def render_lesson(parsed):
    out = []

    if parsed["title"]:
        out.append(parsed["title"])
        out.append("")

    if parsed["source"]:
        out.append("> " + parsed["source"])
        out.append("")

    out.append("---")
    out.append("")

    # Overview ---------------------------------------------------------------
    out.append("## Overview")
    out.append("")

    if parsed["intro"]:
        intro_body = trim_blank_edges(parsed["intro"]["body"])
        if intro_body:
            out.extend(blockquote_block(intro_body))
            out.append("")

    if parsed["overview"]:
        ov_intro, ov_bullets = split_overview_body(parsed["overview"]["body"])
        if ov_intro:
            out.extend(ov_intro)
            out.append("")
        if ov_bullets:
            out.append("**You will learn:**")
            out.append("")
            out.extend(ov_bullets)
            out.append("")

    # Content ----------------------------------------------------------------
    if parsed["content_sections"] or parsed["preamble"]:
        out.append("---")
        out.append("")
        out.append("## Content")
        out.append("")

        if parsed["preamble"]:
            out.extend(parsed["preamble"])
            out.append("")

        for sec in parsed["content_sections"]:
            out.append("### " + sec["heading"])
            out.append("")
            body = trim_blank_edges(sec["body"])
            out.extend(body)
            out.append("")

    # Assignment -------------------------------------------------------------
    if parsed["assignment"]:
        out.append("---")
        out.append("")
        out.append("## Assignment")
        out.append("")
        body = trim_blank_edges(parsed["assignment"]["body"])
        body = promote_subheadings(body)
        out.extend(body)
        out.append("")

    # Knowledge Check --------------------------------------------------------
    if parsed["knowledge"]:
        out.append("---")
        out.append("")
        out.append("## Knowledge Check")
        out.append("")
        body = trim_blank_edges(parsed["knowledge"]["body"])
        body = promote_subheadings(body)
        bullet_idx = None
        for idx, line in enumerate(body):
            if line.lstrip().startswith("- "):
                bullet_idx = idx
                break
        if bullet_idx is not None and bullet_idx > 0:
            intro_lines = trim_blank_edges(body[:bullet_idx])
            if intro_lines:
                out.extend(blockquote_block(intro_lines))
                out.append("")
            out.extend(body[bullet_idx:])
        else:
            out.extend(body)
        out.append("")

    # Collapse trailing blanks
    while out and out[-1] == "":
        out.pop()
    out.append("")  # Single final newline

    # Collapse 3+ consecutive blank lines down to 2
    collapsed = []
    blank_run = 0
    for line in out:
        if line == "":
            blank_run += 1
            if blank_run > 2:
                continue
        else:
            blank_run = 0
        collapsed.append(line)

    return "\n".join(collapsed)


def main():
    section_dirs = sorted(
        d
        for d in os.listdir(BASE_DIR)
        if os.path.isdir(os.path.join(BASE_DIR, d)) and d[:2].isdigit()
    )

    formatted = 0
    for sd in section_dirs:
        section_path = os.path.join(BASE_DIR, sd)
        for fname in sorted(os.listdir(section_path)):
            if not fname.endswith(".md"):
                continue
            fpath = os.path.join(section_path, fname)
            with open(fpath, "r", encoding="utf-8") as f:
                text = f.read()

            parsed = parse_lesson(text)
            rendered = render_lesson(parsed)

            with open(fpath, "w", encoding="utf-8") as f:
                f.write(rendered)
            formatted += 1
            print(f"  {sd}/{fname}")

    print(f"\nFormatted {formatted} lesson files.")


if __name__ == "__main__":
    main()
