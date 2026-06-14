// NVivo 14: Complete Practical Course — The Debug Society
// From Raw Transcripts to Published Findings

export interface NvivoLesson {
  id: string;
  title: string;
  url: string;
  content: string;
}

export interface NvivoSection {
  sectionId: string;
  sectionTitle: string;
  lessons: NvivoLesson[];
}

export const nvivoLessonsData: NvivoSection[] = [
  // ─────────────────────────────────────────────────────────────
  // MODULE 1 — FOUNDATIONS & NVIVO SETUP
  // ─────────────────────────────────────────────────────────────
  {
    sectionId: "nv_01_foundations",
    sectionTitle: "Module 1: Foundations & NVivo Setup",
    lessons: [
      {
        id: "nv-01-01",
        title: "What is NVivo and Why Does it Matter?",
        url: "",
        content: `## Overview

> **Course dataset:** Throughout this course we work with a real focus group transcript from a study on stress among pregnant mothers in low-income urban areas in Nairobi, Kenya. The transcript is anonymised but otherwise preserved exactly as collected in the field.

**You will learn:**
- What NVivo is and what it actually does (and doesn't do)
- Which qualitative methodologies NVivo supports
- Why CAQDAS tools matter for rigorous research

---

## What is NVivo?

NVivo is a **Computer-Assisted Qualitative Data Analysis Software (CAQDAS)**. It does not analyse your data for you — it is a sophisticated filing and retrieval system that helps you manage complexity.

In a study with 20 participants and 30-page transcripts each, you have 600 pages of data. Doing that by hand with highlighters and paper is error-prone and very slow. NVivo replaces the highlighter with coded electronic segments that are instantly searchable, countable, and linkable.

---

## Qualitative Methodologies NVivo Supports

| Methodology | Application |
|---|---|
| **Thematic Analysis** | Both inductive and framework/deductive approaches |
| **Grounded Theory** | Open, axial, and selective coding |
| **Phenomenology** | Exploring lived experiences |
| **Content Analysis** | Manifest and latent content |
| **Narrative Analysis** | Story structure and sequence |
| **Mixed Methods** | Linking qualitative themes to quantitative cases |

> **Field Note:** In the field, researchers most commonly use NVivo for thematic analysis. This course focuses on thematic analysis as the primary approach because it is the most transferable and widely used.

---

## What NVivo Does NOT Do

NVivo does not:
- Read your data and tell you what the findings are
- Generate themes automatically (AI assistance is a starting point only — see Module 4)
- Replace your analytical judgement as a researcher
- Validate your methodology

The analysis is always yours. NVivo simply makes managing large volumes of data faster and more systematic.

---

## Key Concepts

**Node / Code** — a labelled container for segments of data that share a common meaning.

**Reference** — a single coded segment assigned to a code.

**Case** — a unit of analysis (a participant, household, or organisation) that you can attach attributes to.

**Memo** — a researcher note linked to your data, codes, or project.

**Query** — an automated search across your coded data.
`
      },
      {
        id: "nv-01-02",
        title: "Installing NVivo 14",
        url: "",
        content: `## Overview

**You will learn:**
- System requirements for NVivo 14
- Where to obtain NVivo 14
- Critical storage and sync rules that prevent data loss

---

## System Requirements

| Component | Minimum | Recommended |
|---|---|---|
| **OS** | Windows 10 / macOS 12 | Windows 11 / macOS 14 |
| **RAM** | 8 GB | 16 GB |
| **Storage** | 5 GB free | 20 GB free |
| **Processor** | Intel Core i5 | Intel Core i7 / Apple M-series |

This course uses the **Windows version**. The Mac version has a slightly different ribbon layout but identical functionality.

---

## Obtaining NVivo 14

1. Go to **qsrinternational.com** and download NVivo 14
2. Student licences are available from most universities — check with your library or IT department before purchasing
3. After installation, choose your **language and date format settings** carefully — these affect sort orders in exports

---

## Critical Storage Rules

> **Warning:** Never run NVivo from a network drive or USB stick. Projects saved to cloud-synced folders (OneDrive, Dropbox, Google Drive) **can become corrupted during auto-sync**. Always save locally and back up manually.

**Safe storage:**
- A dedicated folder on your **local hard drive** (e.g., \`C:\\Research\\NVivo_Projects\\\`)
- Back up manually to cloud or USB after each session
- Never let auto-sync run while NVivo is open

**Unsafe storage:**
- Desktop (often synced automatically on university machines)
- Downloads folder
- Any folder inside OneDrive, Dropbox, or Google Drive

---

## After Installation

1. Open NVivo 14 and activate your licence
2. Set **language** to English (or your preference)
3. Set **date format** to match your locale
4. Navigate to **File > Application Options** and review default settings
`
      },
      {
        id: "nv-01-03",
        title: "Creating Your First Project",
        url: "",
        content: `## Overview

**You will learn:**
- How to create an NVivo project file
- Naming conventions and save location best practices
- The critical difference between Auto Save and reminder-based saving

---

## The NVivo Project File

Everything in NVivo — your data, codes, memos, queries, and visualisations — lives inside a single **project file** with the extension \`.nvp\`. This file grows as your project grows.

---

## Creating a New Project: Step by Step

| Step | Action |
|---|---|
| 1 | Open NVivo 14. On the welcome screen, click **New Project** |
| 2 | Enter your project name — use underscores, not spaces (e.g., \`Stress_Pregnant_Mothers_Nairobi_2024\`) |
| 3 | Choose a save location — a dedicated folder on your **local hard drive**, not Desktop or Downloads |
| 4 | On the Save Options screen, select **"Display a reminder to save every 15 minutes"** — do NOT use Auto Save |
| 5 | Click **Finish** — your project opens |

---

## Why Not Auto Save?

> **Critical:** Auto Save in NVivo has caused catastrophic data loss for many researchers. The reminder option forces you to consciously save with **Ctrl+S** every time you complete a meaningful action. There is no undo history after you close NVivo.

**The safe saving habit:**
- Press **Ctrl+S** after creating or renaming every code
- Press **Ctrl+S** after writing every memo
- Press **Ctrl+S** before running any query
- Press **Ctrl+S** before closing NVivo

---

## Project Naming Conventions

**Good names:**
- \`Maternal_Health_Nairobi_Phase1_2024\`
- \`FGD_Study_Kibera_Final\`

**Bad names:**
- \`my project\` (spaces cause problems on some systems)
- \`NVivo project 1\` (not descriptive)
- \`final_FINAL_v3\` (use dates instead of version labels)

---

## Backing Up Your Project

After each session:
1. Close NVivo
2. Copy the \`.nvp\` file to a USB drive **and** a cloud folder (since NVivo is closed, no sync corruption risk)
3. Name the backup with the date: \`Stress_Pregnant_Mothers_Nairobi_2024_backup_2024-03-15.nvp\`
`
      },
      {
        id: "nv-01-04",
        title: "NVivo Interface: The Six Panels",
        url: "",
        content: `## Overview

**You will learn:**
- The name and purpose of each interface panel
- Where you will spend most of your time
- How to customise the workspace for coding efficiency

---

## The Six Panels

| Panel | Purpose |
|---|---|
| **Navigation Pane (left)** | Your project's filing cabinet. Contains: Files, Codes, Cases, Notes, Sets, Queries, Visualizations, Reports |
| **Detail View (centre)** | Where your data opens. Transcripts display here when you double-click them |
| **List View** | Shows the contents of whatever folder is selected in the Navigation Pane |
| **Ribbon (top)** | Context-sensitive menu. Changes depending on what is selected. Key tabs: Home, Import, Create, Explore, Share |
| **Status Bar (bottom)** | Shows total references, nodes, files. Watch this as your project grows |
| **Quick Access Toolbar** | Customise to include your most-used commands (e.g., Save, Undo) |

---

## Navigating the Interface

When you first open a project, you will see the Navigation Pane on the left. Click on any section — **Files**, **Codes**, **Cases** — and the List View (centre-left) updates to show the contents of that section.

Double-click any item in the List View to open it in the **Detail View** (main content area).

---

## Optimising Your Workspace for Coding

> **Pro Tip:** Collapse the Navigation Pane when coding (click the arrow on its left edge). This gives your transcript more horizontal space and reduces distraction.

**Recommended layout for coding sessions:**
1. Collapse Navigation Pane
2. Keep List View visible showing your Codes list
3. Transcript open in Detail View
4. Code descriptions panel open on the right (View > Code Properties)

---

## The Ribbon: Key Tabs

| Tab | When You Use It |
|---|---|
| **Home** | General project management, opening items |
| **Import** | Importing files, survey data |
| **Create** | Creating new codes, cases, memos, queries |
| **Explore** | Running queries, auto-coding, cluster analysis |
| **Share** | Exporting code books, reports, visualisations |

---

## Quick Access Toolbar

Right-click any ribbon button → **Add to Quick Access Toolbar** to pin your most-used commands. Recommended additions:
- Save (**Ctrl+S**)
- Undo
- New Code
- New Memo
`
      },
      {
        id: "nv-01-05",
        title: "Understanding the Navigation Pane in Detail",
        url: "",
        content: `## Overview

**You will learn:**
- The difference between Files, Codes, Cases, Notes, and other Navigation Pane sections
- What "Cases" means in NVivo (not legal cases — analytical units)
- How Relationships work

---

## Files Section

| Item | Purpose |
|---|---|
| **Files** | Your transcripts, PDFs, images, audio, video |
| **File Classifications** | Categorise your files (e.g., by site, date, participant type) |
| **Externals** | Links to data you cannot import (physical artefacts, web pages) |

---

## Codes Section

| Item | Purpose |
|---|---|
| **Codes** | All your codes, organised in a hierarchy you create |
| **Sentiment** | Auto-detected positive/negative sentiment — use with caution in field research |
| **Relationships** | Links between two items (e.g., "Conflict with spouse" is related to "Domestic stress") |
| **Relationship Types** | The vocabulary for your relationships |

---

## Cases Section

**Cases** represent your research participants or units of analysis. A "case" in NVivo is simply a way to organise all material related to one participant, one household, or one organisation.

Setting up cases properly enables powerful comparison queries later — for example: *"Show me all women over 30 who mentioned joblessness."*

---

## Notes Section

| Item | Purpose |
|---|---|
| **Memos** | Researcher notes — analytical thinking, methodological decisions, reflexivity |
| **Annotations** | Short notes attached to a specific segment of data (like a margin comment) |

---

## Sets, Queries, Visualizations, Reports

| Item | Purpose |
|---|---|
| **Sets** | Custom groupings of files or codes for a specific query or analysis |
| **Queries** | Saved and reusable analysis searches |
| **Visualizations** | Charts, maps, word clouds generated from your data |
| **Reports** | Pre-built NVivo report templates |

> **Field Note:** You will primarily use Files, Codes, Cases, Notes, Queries, and Visualizations. The other sections become useful as your project matures.
`
      },
      {
        id: "nv-01-06",
        title: "Module 1 Practice Exercise",
        url: "",
        content: `## Module 1 Practice

This exercise consolidates everything from Module 1. Complete all steps before moving to Module 2.

---

## Tasks

**1. Create your project**
- Create a new NVivo project named after your research study
- Save it to a dedicated folder on your local hard drive
- Confirm the save reminder is set to 15 minutes

**2. Explore the interface**
- Open each section of the Navigation Pane: Files, Codes, Cases, Notes, Queries, Visualizations
- Identify each of the six panels
- Take a screenshot of the interface with labels added (you can use Paint or PowerPoint to annotate)

**3. Write a Project Memo**
- Go to **Notes > Memos** → right-click → **New Memo**
- Name it: \`Project Memo — [Your Study Name] — [Today's Date]\`
- Write a minimum 200-word memo covering:
  - Your research question
  - Your data type (interviews, focus groups, documents, etc.)
  - What you hope to achieve with NVivo in this study

**4. Save and back up**
- Press **Ctrl+S** to save
- Confirm the save by checking the title bar (it should not show an asterisk)
- Copy the \`.nvp\` file to a backup location

---

## Reflection Questions

After completing the tasks, write brief answers to these in your Project Memo:

1. What is the difference between a Code and a Case in NVivo?
2. Why should you not use Auto Save?
3. Where should you NOT save your project file?

---

> **Field Note:** The Project Memo you write here is used by experienced NVivo researchers at the outset of every project. It keeps you anchored to your research question during the long weeks of coding that follow.
`
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 2 — DATA MANAGEMENT & IMPORTING
  // ─────────────────────────────────────────────────────────────
  {
    sectionId: "nv_02_data_management",
    sectionTitle: "Module 2: Data Management & Importing",
    lessons: [
      {
        id: "nv-02-01",
        title: "What Data Can NVivo Handle?",
        url: "",
        content: `## Overview

**You will learn:**
- Every file type NVivo 14 can import and code
- Which format to prioritise for transcripts
- How audio, video, image, and survey data fit into a qualitative project

---

## Supported Data Types

| Data Type | Notes |
|---|---|
| **Word (.docx)** | Best format for transcripts. NVivo preserves formatting. Always transcribe into Word. |
| **PDF** | Import and code directly. Good for policy documents, published papers, project reports. |
| **Plain text (.txt)** | Usable but loses formatting. Use only if .docx is not available. |
| **Audio (.mp3, .mp4, .wav)** | Import directly and code audio segments with timestamps. |
| **Video (.mp4, .mov)** | Code video segments. Useful for observation data. |
| **Images (.jpg, .png)** | Code regions of images. Useful for visual data (community maps, photos). |
| **Survey data (.xlsx)** | Import quantitative survey data to link to qualitative cases. |
| **Social media data** | Requires NVivo Capture (browser extension) or manual copy/paste into Word. |

---

## Recommended Workflow by Data Type

**Interviews and Focus Groups:**
Always transcribe audio into a Word document (\`.docx\`) before importing. Import the Word file, not the audio, unless you specifically need to code at precise timestamps.

> **Pro Tip:** Audio coding is slower and harder to search. Transcribed text coding is faster, more flexible, and produces richer analysis in most qualitative studies.

**Policy Documents and Reports:**
Import as PDF. You can highlight and code text directly within the PDF view in NVivo.

**Survey Data:**
Import the \`.xlsx\` file as a dataset. NVivo creates one row per respondent and allows you to code open-text responses while linking to the numeric columns.

**Social Media:**
Use NVivo Capture (a browser extension) to collect tweets, Facebook posts, or web pages directly into your project. Alternatively, copy content into a Word document manually.

---

## File Size Considerations

Large audio or video files significantly increase project file size. For a 20-participant study with 60-minute interviews, expect the \`.nvp\` project file to reach 2–5 GB if audio is imported directly. Working with transcripts keeps projects under 200 MB in most cases.
`
      },
      {
        id: "nv-02-02",
        title: "Preparing Your Transcripts for Import",
        url: "",
        content: `## Overview

**You will learn:**
- The exact formatting standards your transcripts must meet
- Why inconsistent speaker labels cause problems
- How to structure a transcript for maximum NVivo compatibility

---

## Why Preparation Matters

The quality of your NVivo project depends heavily on how well your transcripts are prepared. Problems introduced at the transcript stage — inconsistent speaker labels, merged paragraphs, wrong styles — are very difficult to fix after importing.

---

## Transcript Formatting Standards

**Speaker labels:**
- Use a **consistent format** throughout: \`INTERVIEWER:\` and \`RESPONDENT 1:\`
- Never mix formats like "Int.", "R1", "Resp 1", "Respondent One" in the same document
- Each speaker turn on its **own paragraph** — never run two speakers in the same paragraph

**Identifying information:**
- Remove names, exact addresses, phone numbers before importing
- Unless your ethics approval explicitly covers identified data

**Document structure:**
- Use **Heading 1** style in Word for major sections (e.g., "Introduction", "Core Discussion", "Wrap-Up")
- Add a **header table** at the top of each document with: Date, Location, Participant count, Interviewer name, File reference number

**Formatting:**
- Use **12pt Arial or Times New Roman**
- Double-spaced
- No track changes left on
- No comments in the document margins

---

## Example: Correct Speaker Label Format

\`\`\`
INTERVIEWER: Can you tell me more about what makes you feel stressed during this pregnancy?

RESPONDENT 1: Maybe you do not have work, you're pregnant, when life becomes a challenge the husband becomes noisy in the house with arguments now and then, this makes mothers be stressed.

RESPONDENT 2: When sick during pregnancy period, as you can't manage yourself...
\`\`\`

> **Warning:** Inconsistent speaker labels are one of the most common causes of problems in NVivo auto-coding by speaker. Fix your formatting before importing — it is much harder to fix after.

---

## Checklist Before Import

- [ ] All speaker labels use the same format
- [ ] Each speaker turn is its own paragraph
- [ ] Personal identifying information removed
- [ ] Heading 1 style applied to major section breaks
- [ ] Header table at the top of the document
- [ ] Track changes turned off and accepted
- [ ] Saved as \`.docx\` (not \`.doc\`)
`
      },
      {
        id: "nv-02-03",
        title: "Importing a Single Transcript",
        url: "",
        content: `## Overview

**You will learn:**
- Two methods for importing files into NVivo
- What to check after importing
- The familiarisation step that rigorous researchers never skip

---

## Importing: Method 1 — Drag and Drop

| Step | Action |
|---|---|
| 1 | In the Navigation Pane, click **Files** to highlight it |
| 2 | Open Windows Explorer and locate your \`.docx\` transcript |
| 3 | Drag the file from Windows Explorer and drop it into the Files area in NVivo's List View |
| 4 | NVivo shows an import confirmation. Check the file name is correct. Click **Import** |
| 5 | The transcript appears in your Files list |

---

## Importing: Method 2 — Ribbon

| Step | Action |
|---|---|
| 1 | Click on **Files** in the Navigation Pane |
| 2 | Go to the ribbon → **Import > Files > From Computer** |
| 3 | Browse to your \`.docx\` file |
| 4 | Click **Open** |
| 5 | Confirm the import dialog |

---

## After Importing: Verification Steps

1. The file appears in the Files List View
2. Double-click the file — it opens in Detail View
3. Scroll through the document — check that speaker labels look correct and formatting is intact
4. Press **Ctrl+S** to save

---

## The Familiarisation Step

After importing, spend **10–15 minutes reading the transcript inside NVivo before any coding**. This is called **familiarisation** — a required step in rigorous thematic analysis (Braun & Clarke, 2006).

During familiarisation:
- Read the full transcript without coding anything
- Note initial impressions, surprises, and silences (what is not said)
- Write a brief **Analytical Memo** (see 2.6) with your first reactions

> **Field Note:** Researchers who skip familiarisation tend to code reactively — picking up only what confirms what they expected to find. Familiarisation opens you to what the data actually contains.
`
      },
      {
        id: "nv-02-04",
        title: "Importing Multiple Files at Once",
        url: "",
        content: `## Overview

**You will learn:**
- How to batch-import multiple transcripts
- How to organise files into sub-folders
- Best practices for multi-site or longitudinal studies

---

## Batch Import

| Step | Action |
|---|---|
| 1 | Click **Files** in the Navigation Pane |
| 2 | Go to **Import > Files > From Computer** |
| 3 | Hold **Ctrl** and click to select multiple files in the file browser |
| 4 | Click **Open** — NVivo imports all selected files |
| 5 | Check the file count in your Files list matches what you expected |

---

## Organising Files into Sub-folders

For studies with more than 5 transcripts, create sub-folders inside your Files section:

1. Right-click inside the Files area in the Navigation Pane → **New Folder**
2. Name the folder (e.g., "Phase 1 Interviews", "FGD Transcripts Nairobi", "Policy Documents")
3. Drag imported files into the appropriate folders

**Recommended folder structures by study type:**

*Multi-site study:*
- Files/
  - Nairobi Site/
  - Mombasa Site/
  - Kisumu Site/

*Longitudinal study:*
- Files/
  - Baseline 2023/
  - Follow-up 2024/

*Mixed methods:*
- Files/
  - Interview Transcripts/
  - Survey Open Responses/
  - Policy Documents/

---

## What Happens to Your Codes?

When you import multiple files, existing codes from your project are available to apply to any file. Codes do not belong to a single file — they are project-wide containers.

This means if you code "Joblessness" in Transcript 01, you can apply the same code to the same concept in Transcript 02, 03, and so on. The code accumulates references across all your files.
`
      },
      {
        id: "nv-02-05",
        title: "Setting Up Cases and Classifications",
        url: "",
        content: `## Overview

**You will learn:**
- What Cases are and why they enable powerful analysis
- How to create a Case Classification with participant attributes
- How to link Cases to their transcripts

---

## Why Cases Matter

Cases allow you to attach demographic and attribute information to your participants. This enables crosstab queries later — for example: *"How many unemployed participants mentioned housing insecurity?"* or *"Do women over 35 discuss health differently from those under 25?"*

This step separates **intermediate NVivo users from beginners**.

---

## Step 1: Create a Case Classification

| Step | Action |
|---|---|
| 1 | Go to **Cases** in the Navigation Pane |
| 2 | Right-click → **New Classification** |
| 3 | Name it "Participant" (or "Household", "Organisation", etc.) |
| 4 | Add **attributes**: Age Group, Gender, Location, Employment Status, Parity — these become columns in your classification sheet |

---

## Step 2: Create Individual Cases

| Step | Action |
|---|---|
| 1 | Right-click on **Cases** → **New Case** |
| 2 | Name consistently: P01, P02, P03... (or Group01, Group02...) |
| 3 | Assign the classification "Participant" to each case |
| 4 | Fill in the attribute values for each case |

---

## Step 3: Link Cases to Transcripts

| Step | Action |
|---|---|
| 1 | Open a Case by double-clicking it |
| 2 | Click the **Files** tab within the Case |
| 3 | Click **Assign Files** |
| 4 | Select the transcript belonging to this participant |

---

## Focus Group Studies

> **Field Note:** In a focus group study (like our Nairobi dataset), you may create one Case per **group** rather than per individual speaker — especially if you cannot reliably identify who is speaking from the transcript. Create attribute fields for: Group Location, Group Size, Date of Discussion, Average Age Range.

---

## The Classification Sheet View

After setting up cases and attributes, navigate to **Cases → Classification Sheets**. This shows a spreadsheet-like view of all your cases and their attribute values — similar to a SPSS or Excel participant data table. You can edit attribute values directly in this view.
`
      },
      {
        id: "nv-02-06",
        title: "Writing Memos During Data Familiarisation",
        url: "",
        content: `## Overview

**You will learn:**
- The four types of memos that rigorous researchers write
- How to create and link memos in NVivo
- Why memos are part of your audit trail

---

## Why Memos Matter

Memos are one of the most underused features in NVivo among beginners. In rigorous qualitative research, memos are a form of **audit trail** — they document your analytical thinking as it develops.

Examiners and peer reviewers increasingly expect evidence of **reflexivity and analytical process**. Your memos are that evidence. They also protect you if your methodology is ever questioned.

---

## The Four Types of Memos

| Memo Type | Purpose | When to Write |
|---|---|---|
| **Methodological** | How was this data collected? Field conditions? Any problems? | Immediately after data collection |
| **Reflexivity** | What assumptions do you bring? How might these affect interpretation? | Before and during analysis |
| **Analytical** | Initial impressions after reading a transcript. What stands out? | After familiarisation reading |
| **Code** | Why did you create this code? What does it include/exclude? | When creating or merging codes |

---

## Creating a Memo in NVivo

| Step | Action |
|---|---|
| 1 | Go to **Notes** in the Navigation Pane → click **Memos** |
| 2 | Right-click → **New Memo** |
| 3 | Give it a descriptive name: e.g., \`Analytical Memo – FGD Transcript 01 – 14 March 2024\` |
| 4 | Write your memo in the Detail View that opens |
| 5 | Save with **Ctrl+S** |

---

## Linking a Memo to Its Source

| Step | Action |
|---|---|
| 1 | Right-click the memo → **See Also Links → New Link** |
| 2 | Select the transcript or code you want to link this memo to |
| 3 | The link is saved — you can navigate between memo and source |

---

## What to Write in an Analytical Memo

After your familiarisation reading of a transcript, write:
1. **Initial impressions** — what stands out overall?
2. **Surprises** — what did you not expect to hear?
3. **Silences** — what did participants NOT say that you expected?
4. **Emerging patterns** — any early themes you notice?
5. **Methodological notes** — was the interview/FGD conducted well? Any quality issues?

Minimum length: **300 words per transcript**. Length signals depth of engagement with the data.
`
      },
      {
        id: "nv-02-07",
        title: "Module 2 Practice Exercise",
        url: "",
        content: `## Module 2 Practice

Complete all tasks before moving to Module 3. This exercise covers the full data import and setup workflow.

---

## Tasks

**1. Import the course transcript**
- Import the Nairobi pregnancy stress focus group transcript into your project
- Verify it appears in the Files list and opens correctly in Detail View

**2. Import a second document**
- Import at least one additional document: a policy document, published abstract, or a second transcript of your own
- Organise both files into a sub-folder named by document type

**3. Set up a Case Classification**
- Create a classification called "Participant Group"
- Add these attributes: Location, Group Size, Date, Average Age Range
- Create one Case for the focus group and fill in the attribute values

**4. Write a familiarisation memo**
- Read the full focus group transcript in NVivo without coding anything
- Write a minimum **300-word analytical memo** covering:
  - Initial impressions of the data
  - What surprised you
  - What participants seemed most concerned about
  - Any quality issues with the transcript

**5. Save and back up**
- Press **Ctrl+S**
- Copy the \`.nvp\` file to a backup location (USB or cloud, closed NVivo first)

---

## Reflection Questions

After completing the tasks, write answers to these in your memo:

1. What is the difference between a Case and a File in NVivo?
2. Why should you read the transcript before coding it?
3. What attribute information would be most useful for your specific research question?

---

> **Assessment link:** Your familiarisation memo from this exercise forms part of the **Module 1–2 Practice Assessment (10%)**.
`
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 3 — INDUCTIVE CODING
  // ─────────────────────────────────────────────────────────────
  {
    sectionId: "nv_03_inductive_coding",
    sectionTitle: "Module 3: Inductive Coding",
    lessons: [
      {
        id: "nv-03-01",
        title: "What is a Code?",
        url: "",
        content: `## Overview

**You will learn:**
- The definition of a qualitative code
- The three types of codes and when each is appropriate
- How to name codes effectively

---

## Definition

A code is a short, descriptive or interpretive **label applied to a segment of data** that captures what that segment is about in relation to your research question. Codes are the atomic unit of qualitative analysis.

---

## Three Types of Codes

| Code Type | Description | Example from Nairobi Study |
|---|---|---|
| **Descriptive** | Summarises what the data is about at face value | "Joblessness" — the participant literally said they had no job |
| **Interpretive** | Captures the meaning beneath the words | "Perceived loss of identity" — derived from a participant describing how not working made her feel worthless |
| **Pattern** | Identifies a recurring pattern across multiple participants | "Financial precarity as relational threat" — developed after reading the full dataset |

In **inductive coding** (this module), you start with descriptive codes directly from the data. You do not bring a pre-existing framework. The codes emerge from what participants say.

---

## How to Name Codes

> **Pro Tip:** Name your codes with a **noun phrase**, not a vague label.

| Weak Code Name | Strong Code Name |
|---|---|
| relationships | Conflict with spouse |
| money problems | Inability to pay school fees |
| health | Illness during pregnancy |
| housing | Inability to pay rent |
| support | Lack of financial support from spouse |

Specific code names make theme development in Module 5 much easier.

---

## The Coding Unit

A **coding unit** is the segment of text you highlight and assign to a code. The right coding unit:
- Is the **smallest segment that makes sense on its own**
- Is typically a **sentence or clause**, not a full paragraph
- Captures one idea or experience (not several)

> **Warning:** Do not code entire paragraphs at once. Over-coding (highlighting long passages) creates unwieldy codes that are hard to theme later. Under-coding (too few segments) misses analytical depth.

---

## Inductive vs. Deductive Coding at a Glance

| Inductive | Deductive |
|---|---|
| Bottom-up: codes emerge from the data | Top-down: codes come from a prior theory or framework |
| Used in exploratory research | Used when testing or applying established concepts |
| Module 3 focus | Module 4 focus |
`
      },
      {
        id: "nv-03-02",
        title: "The Coding Process in NVivo: Step by Step",
        url: "",
        content: `## Overview

**You will learn:**
- How to create a new code from selected text
- How to add text to an existing code
- How to navigate and review coded segments

---

## Creating a New Code from Selected Text

| Step | Action |
|---|---|
| 1 | Open your transcript in Detail View by double-clicking it in Files |
| 2 | Collapse the Navigation Pane by clicking the arrow on its left edge |
| 3 | Read a segment of the transcript. Identify text relevant to your research question |
| 4 | Click and drag your mouse to **highlight** the relevant text segment |
| 5 | Drag the highlighted text from the Detail View and drop it into the Codes area in the List View |
| 6 | A dialog box appears. **Type your code name** (e.g., "Joblessness"). Press Enter |
| 7 | NVivo creates the code and assigns this segment to it. A **coloured stripe** appears in the margin |

---

## Alternative Method: Right-Click to Code

1. Highlight the text segment
2. Right-click the selection → **Code Selection → New Code**
3. Type the code name → **OK**

This is faster once you are familiar with the interface.

---

## Adding to an Existing Code

| Step | Action |
|---|---|
| 1 | Highlight the new text segment in your transcript |
| 2 | Drag it and drop it onto the **existing code name** in the List View |
| 3 | NVivo adds this as a second reference under that code |
| 4 | Double-click on the code name to see all references under it |

---

## Reviewing Your Coded Segments

After coding for 30–60 minutes, pause and review:
1. Double-click any code in the List View
2. The Detail View shows all segments coded to that code, across all files
3. Read through them — do they genuinely belong together?
4. Is the code name still accurate for all segments it contains?

---

## Keyboard Shortcuts for Coding

| Shortcut | Action |
|---|---|
| **Ctrl+S** | Save |
| **Ctrl+Z** | Undo last coding action |
| **Ctrl+A** | Select all text in Detail View |
| **F2** | Rename selected code |
| **Delete** | Delete selected code (you will be asked to confirm) |
`
      },
      {
        id: "nv-03-03",
        title: "Live Coding Example: The Pregnancy Stress Transcript",
        url: "",
        content: `## Overview

This lesson walks through the first pages of the Nairobi focus group transcript, developing codes together. This mirrors exactly how an experienced researcher would approach this data.

---

## The Dataset Context

Our course transcript is from a focus group discussion (FGD) with pregnant women in low-income urban areas of Nairobi, Kenya. The research question is: **What are the sources of stress experienced by pregnant women in low-income urban areas?**

---

## Segment 1 — First Respondent

> *"Maybe you do not have work, you're pregnant, when life becomes a challenge the husband becomes noisy in the house with arguments now and then, this makes mothers be stressed."*

**Codes generated:**

| Code | Segment |
|---|---|
| **Joblessness** | "Maybe you do not have work" |
| **Conflict with spouse** | "the husband becomes noisy...arguments now and then" |
| **Financial vulnerability during pregnancy** | Implied by the connection between job loss and life becoming "a challenge" |

> **Pro Tip:** Notice that "Financial vulnerability during pregnancy" is not stated explicitly — it is an **interpretation**. At this stage, stick to descriptive codes. Save interpretive codes for when you have read the full dataset. Premature interpretation narrows your analysis.

---

## Segment 2 — Same Respondent Continues

> *"When sick during pregnancy period, as you can't manage yourself; to have kids, no work, there's no way you can feed them — this contributes to a lot of thoughts resulting into stress."*

**New codes generated:**

- **Illness during pregnancy**
- **Inability to provide for other children**

---

## Segment 3 — Second Respondent

> *"He cannot purchase food or parent, instead he runs away. You find yourself lonely, stressed on how you will pay rent, school fees and there is no way you can go to work."*

**New codes generated:**

- **Lack of financial support from spouse**
- **Spousal abandonment**
- **Multiple financial obligations** (rent, school fees, food)
- **Social isolation during pregnancy** (from "you find yourself lonely")

---

## What We Have So Far

After just three segments, we have **7 distinct codes**. In a full transcript, expect 15–25 initial codes. After coding the full dataset, you will group these into themes in Module 5.

---

## Pattern to Notice

The codes cluster naturally around two areas:
1. **Economic** — joblessness, financial obligations, inability to provide
2. **Relational** — conflict with spouse, abandonment, social isolation

These clusters will become the foundation of your themes. But at this stage, keep coding — do not collapse codes into themes prematurely.
`
      },
      {
        id: "nv-03-04",
        title: "Code Descriptions: The Step Everyone Skips",
        url: "",
        content: `## Overview

**You will learn:**
- Why code descriptions are essential for rigorous research
- How to write a useful code description
- How descriptions enable intercoder reliability

---

## Why Code Descriptions Matter

Every code in NVivo has a **Properties panel** where you can add a description. This is critically important and almost universally skipped by beginners.

Without descriptions:
- Two coders will code the same segments differently, producing inconsistent results
- You will forget what a code means after 6 weeks of coding
- Your methodology section cannot claim systematic analysis

With descriptions:
- Second coders can apply your codes consistently
- You can check your own consistency across sessions
- Your analysis becomes defensible in peer review and examination

> **Critical:** Writing code descriptions is what separates **defensible research** from sloppy research. If a second coder was given your project, would they code the same segments into the same codes? Code descriptions make this possible.

---

## How to Add a Description

| Step | Action |
|---|---|
| 1 | Right-click on any code in the Codes list |
| 2 | Select **Code Properties** |
| 3 | In the Description field, write your working definition |
| 4 | Click **OK** |

---

## What a Good Description Includes

A good code description answers four questions:
1. **What does this code include?** (definition)
2. **What does it exclude?** (boundary)
3. **How does it differ from similar codes?** (discrimination)
4. **Example** of a typical coded segment (illustration)

---

## Example: "Conflict with Spouse"

> *Applies to any segment where the participant describes arguments, disagreements, verbal conflict, physical altercations, or emotional distance with a husband or partner. Does NOT include conflicts with in-laws (use "Conflict with in-laws" for those) or general marital dissatisfaction without a specific incident mentioned. Example: "the husband becomes noisy in the house with arguments now and then."*

---

## When to Write Descriptions

- **When creating the code** — write a provisional description
- **After coding 2–3 transcripts** — revise the description based on new material
- **Before sharing the project** with a co-coder — ensure descriptions are complete

Write a **Code Memo** (in Notes) if a code requires extended methodological explanation — for instance, if it evolved significantly during analysis.
`
      },
      {
        id: "nv-03-05",
        title: "Renaming and Reorganising Codes",
        url: "",
        content: `## Overview

**You will learn:**
- How to rename, merge, and split codes
- Why reorganisation is a normal part of the analytical process
- How to document code changes in your audit trail

---

## Renaming a Code

1. Right-click the code → **Code Properties**
2. Edit the **Name** field → **OK**
3. All coding references move with the renamed code automatically — nothing is lost

When to rename: when your code name is no longer accurate for all the segments under it, or when you find a more precise phrase.

---

## Merging Two Codes

Use this when two codes are actually capturing the same concept and should be consolidated.

| Step | Action |
|---|---|
| 1 | Drag one code and drop it **onto another code** |
| 2 | NVivo asks: *"Merge into existing code?"* — click **Merge** |
| 3 | All references from the dragged code now appear under the target code |

> **Audit trail:** After merging, write a **Code Memo** explaining why you merged these codes. This documents your analytical reasoning and is part of your audit trail.

---

## Splitting a Broad Code

There is no direct "split" function. Use this manual process:

1. Create the two new, more specific codes
2. Double-click the original broad code to see all its references
3. For each reference, decide which new code it belongs to
4. Drag references to the appropriate new code
5. Once all references are reassigned, delete the original broad code

When to split: when a single code has grown to contain too many different kinds of segments — when re-reading the references, they no longer feel like the same thing.

---

## Code Reorganisation as Analysis

Reorganising codes is not a sign of failure — it is a sign of deepening analysis. Expect to:
- Rename codes 2–3 times as your understanding develops
- Merge 4–6 pairs of codes over the course of the project
- Split 1–2 broad codes that became too general

Document every major reorganisation in a **methodological memo**. These memos are the evidence that your analysis was systematic and not arbitrary.
`
      },
      {
        id: "nv-03-06",
        title: "Managing Your Coding Progress",
        url: "",
        content: `## Overview

**You will learn:**
- How to read and interpret coding stripes
- How to use the Coding Density bar
- How to conduct a systematic coding review

---

## Coding Stripes

When you open a coded transcript, **coloured stripes** appear in the right margin. Each colour represents one code.

| Stripe Feature | Meaning |
|---|---|
| A single stripe | One code applied to that segment |
| Multiple overlapping stripes | Multiple codes applied — analytically dense area |
| Wide stripe | Broad segment coded |
| Narrow stripe | Short segment coded |

Hover over a stripe to see the code name. Click on a stripe to jump to that coded segment.

**Analytically dense areas** (many overlapping stripes) are telling you multiple things at once — pay close attention to these when developing themes.

---

## Checking a Code's Coverage

To see all segments coded to a specific code:
1. Double-click the code in the List View
2. The Detail View shows all references across all files
3. Each reference shows the source document name and paragraph

---

## The Second-Pass Review

> **Field Note:** Experienced researchers code and re-code. Your first pass through the data is exploratory. After reading all transcripts once, go back to the beginning and code again — you will see things you missed the first time.

This second pass is called **focused coding**. During focused coding:
- You code more selectively, applying codes you have already developed
- You look for material that contradicts your emerging themes (negative cases)
- You start to notice which codes keep co-occurring

---

## Coding Progress Checklist

After completing your first pass through all transcripts, confirm:

- [ ] Every relevant segment has been coded — no relevant material left uncoded
- [ ] Every code has a written description
- [ ] You have written an analytical memo after each transcript
- [ ] You have 15–25 initial codes (not fewer, not far more)
- [ ] You have reviewed each code's references for consistency
`
      },
      {
        id: "nv-03-07",
        title: "Module 3 Practice Exercise",
        url: "",
        content: `## Module 3 Practice

This is the primary coding exercise. Complete it fully before moving to Module 4. This exercise forms part of the **Module 3–4 Coding Assignment (25%)**.

---

## Tasks

**1. Code the full focus group transcript**
- Open the Nairobi pregnancy stress focus group transcript
- Code every segment relevant to the research question: *What are sources of stress for pregnant women in low-income urban areas?*
- Do not leave any relevant segment uncoded
- Aim for **15–25 initial codes**

**2. Write descriptions for every code**
- Right-click each code → Code Properties → add a description
- Every code must have a description before you move on

**3. Write an analytical memo**
- After completing your first pass, write a minimum **300-word analytical memo** covering:
  - What patterns do you notice emerging?
  - What surprised you in the data?
  - What is absent that you expected to find?
  - Which segments are analytically ambiguous?

**4. Review and reorganise**
- Re-read each code's references
- Identify any codes that should be merged (they capture the same thing)
- Identify any codes that should be split (they capture too many different things)
- Rename any codes whose names are no longer accurate

**5. Save**
- Press **Ctrl+S** after every significant action
- Back up the \`.nvp\` file

---

## Reflection Questions

1. Which codes appear most frequently? What does this tell you?
2. Which segments were hardest to code? Why?
3. How did your code names evolve from your first segment to your last?

---

> **Marking criteria for the coding assignment:** Breadth of coverage, specificity of code names, quality of code descriptions, depth of analytical memo.
`
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 4 — DEDUCTIVE & STRUCTURAL CODING
  // ─────────────────────────────────────────────────────────────
  {
    sectionId: "nv_04_deductive_coding",
    sectionTitle: "Module 4: Deductive & Structural Coding",
    lessons: [
      {
        id: "nv-04-01",
        title: "Inductive vs. Deductive Coding",
        url: "",
        content: `## Overview

**You will learn:**
- The core difference between inductive and deductive coding
- When to use each approach
- What Framework Coding is and where it is used

---

## The Fundamental Difference

| Approach | Direction | Starting Point | When to Use |
|---|---|---|---|
| **Inductive** | Bottom-up | The data | When you want to discover what is really happening without prior assumptions |
| **Deductive** | Top-down | A theory or framework | When testing or applying established concepts |
| **Framework Coding** | Top-down with structure | A pre-defined matrix | Evaluations, policy research, applied social research |

---

## Inductive Coding (Module 3 Recap)

In inductive coding, codes **emerge from the data**. You read the transcript, identify meaningful segments, and create code names that describe what you find. You bring no predetermined categories.

This is the approach we used in Module 3.

---

## Deductive Coding

In deductive coding, you bring an existing **theoretical framework or conceptual model** and code the data against its categories.

**Example:** You are testing whether the **Stress-Diathesis Model** applies to pregnant women. The model has three components: vulnerability, stressor, and stress response. You create three codes (one per component) and code all data against them.

**When to use:**
- Replication studies (applying the same framework as a prior study)
- Theory testing
- Evaluation studies where outcomes are pre-defined
- Systematic reviews coding multiple documents against a framework

---

## Framework Coding (Ritchie & Spencer, 1994)

Framework Coding is a specific form of deductive coding developed for **applied policy research** in the UK. It uses a matrix where:
- **Rows** = participants or cases
- **Columns** = themes or dimensions from the analytical framework

This approach is covered in detail in Lesson 4.4.

---

## Can You Use Both in the Same Study?

Yes — this is common in **mixed-methods** and **multi-phase** qualitative studies:
1. Use **inductive coding** for initial data exploration
2. Apply **deductive coding** to test whether established theory explains your inductively developed themes
3. Report both sets of codes in your methods section, distinguishing them clearly
`
      },
      {
        id: "nv-04-02",
        title: "Auto-Coding by Speaker",
        url: "",
        content: `## Overview

**You will learn:**
- How to use NVivo's Auto Code function to code by speaker
- What conditions must be met for auto-coding to work
- How to verify auto-coded results

---

## What Auto-Coding by Speaker Does

If your transcript has **consistent speaker labels formatted as Word paragraph styles**, NVivo can automatically create one code (or case) per speaker label — assigning all text by RESPONDENT 1 to one code, all text by RESPONDENT 2 to another, and so on.

This is useful for:
- Focus group analysis (tracking which participant said what)
- Interview analysis (distinguishing interviewer turns from respondent turns)

---

## Step-by-Step

| Step | Action |
|---|---|
| 1 | Go to the **Explore** tab in the ribbon |
| 2 | Click **Auto Code** |
| 3 | Choose **"Structure content using existing styles"** |
| 4 | Select your transcript(s) |
| 5 | Choose the paragraph style your speaker labels use (usually Heading 1 or a custom style) |
| 6 | Click **OK** — NVivo creates one code per speaker label |

---

## Critical Conditions

> **Warning:** Auto-coding by speaker **only works** if:
> - Your speaker labels are perfectly consistent (same format every time)
> - Speaker labels are formatted as a **Word paragraph style** (not just bold text or manual formatting)

If labels are inconsistent (e.g., "R1:", "Resp 1:", "First respondent:"), auto-coding will miss segments or create multiple codes for the same person.

---

## After Auto-Coding: Verification

1. Double-click each auto-generated speaker code
2. Read through the references — do they all belong to that speaker?
3. Check for segments that were missed (not assigned to any speaker code)
4. Manually correct any errors by dragging segments to the right code

---

## Using Speaker Codes in Analysis

Speaker codes are useful for:
- Running **Crosstab Queries** (which participant mentioned which themes?)
- Creating **Cases** from speaker codes (each speaker becomes a case)
- Checking whether all voices are represented in your final analysis
`
      },
      {
        id: "nv-04-03",
        title: "Auto-Coding by Theme Using AI Assistance",
        url: "",
        content: `## Overview

**You will learn:**
- How NVivo 14's AI-assisted auto-coding works
- How to critically evaluate AI suggestions
- Why auto-coding is a starting point, never a finished analysis

---

## What AI-Assisted Auto-Coding Does

NVivo 14 includes AI-assisted auto-coding that analyses your text and **suggests codes based on semantic similarity**. It uses natural language processing to group segments that appear to be about the same topic.

---

## Step-by-Step

| Step | Action |
|---|---|
| 1 | Highlight one or more files in the Files list |
| 2 | Go to **Explore** tab → **Auto Code** |
| 3 | Choose **"Identify themes"** |
| 4 | NVivo analyses your text and suggests codes |
| 5 | Review each suggestion carefully |
| 6 | Accept, rename, or reject each suggested code |

---

## Critical Evaluation Framework

For each AI-suggested code, ask:
1. **Does this label accurately describe the segment?** AI labels are often generic ("Health", "Money") — rename to be specific.
2. **Are all segments under this code genuinely about the same thing?** AI groups by surface similarity, not analytical meaning.
3. **Does this code capture what matters for my research question?** The AI does not know your research question.
4. **Is this a new code I had not thought of?** Occasionally the AI identifies something you missed — useful discovery.

---

## The Non-Negotiable Rule

> **Critical:** AI-assisted auto-coding is **not analysis**. It is a computational suggestion. Accepting auto-codes without review is a serious methodological flaw.

Your analysis must reflect your **interpretive engagement with the data** — not a machine's pattern matching. Use auto-coding to generate a starting draft, then verify every single coded segment manually.

**In your methods section:** If you used AI-assisted auto-coding, you must disclose this AND describe how you verified the results. Failure to disclose is a research integrity issue.

---

## Practical Recommendation

For a dataset of this size (one FGD, 30–50 pages), manual inductive coding (Module 3) will produce more nuanced results than auto-coding. Use AI assistance for:
- Very large datasets (100+ documents)
- Initial orientation before manual coding
- Checking whether you missed any recurring topics
`
      },
      {
        id: "nv-04-04",
        title: "The Framework Matrix",
        url: "",
        content: `## Overview

**You will learn:**
- What the Framework Matrix is and where it comes from
- How to create and use a Framework Matrix in NVivo 14
- When to cite the Framework Method in your methodology section

---

## What is the Framework Matrix?

The **Framework Matrix** creates a spreadsheet-like view where:
- **Rows** = participants or cases
- **Columns** = themes or analytical dimensions

Each cell shows what that participant said about that theme. You can add your own interpretive summary in each cell.

The Framework Method originated with **Ritchie and Spencer (1994)** and is widely used in health services research, policy evaluation, and applied social research in the UK.

---

## Creating a Framework Matrix

| Step | Action |
|---|---|
| 1 | Go to **Explore** tab → **Framework Matrix** |
| 2 | Click **Create Framework Matrix** |
| 3 | Assign **rows**: select your Cases |
| 4 | Assign **columns**: select your Codes (themes) |
| 5 | Click **OK** — NVivo generates the matrix |

---

## Working in the Framework Matrix

- Click any cell to see the coded segments from that participant about that theme
- Type your **interpretive summary** directly in the cell — this becomes your analytical note
- Use the summary cells to write what that participant's contribution to each theme means, not just what they said

---

## Example: Our Nairobi Dataset

| | Financial Issues | Social Issues | Health Issues |
|---|---|---|---|
| **Group 1** | Described joblessness and inability to pay rent | Described conflict with spouse | Described illness during pregnancy |

The Framework Matrix turns this into a cell with the raw quotes AND space for your interpretive note: *"Group 1's financial stress was primarily driven by unemployment rather than by spouse's income — different from Groups 2 and 3."*

---

## When to Cite the Framework Method

If you use the Framework Matrix in applied or evaluation research, cite: **Ritchie, J. & Spencer, L. (1994). Qualitative data analysis for applied policy research.** In Bryman, A. & Burgess, R.G. (Eds.), *Analysing qualitative data*. London: Routledge.
`
      },
      {
        id: "nv-04-05",
        title: "Matrix Coding Query",
        url: "",
        content: `## Overview

**You will learn:**
- What a Matrix Coding Query does
- How to set up rows and columns
- How to interpret and use the results

---

## What the Matrix Coding Query Does

A **Matrix Coding Query** cross-tabulates two sets of codes or attributes. It answers questions like:
- "Which participants mentioned both joblessness AND conflict with spouse?"
- "Which themes appeared most frequently across all respondents?"
- "Do employed and unemployed participants code differently?"

---

## Step-by-Step

| Step | Action |
|---|---|
| 1 | Go to **Queries** in the Navigation Pane → **New Query → Matrix Coding** |
| 2 | Set **Rows**: select the codes or attributes for the row axis |
| 3 | Set **Columns**: select the codes or attributes for the column axis |
| 4 | Click **Run** |
| 5 | NVivo produces a matrix showing **counts of coding references** at each intersection |
| 6 | Click any cell to see the actual coded segments that produced that count |

---

## Example: Our Nairobi Dataset

**Rows:** Theme codes (Financial Issues, Social Issues, Health Issues)
**Columns:** Speaker codes (Respondent 1, Respondent 2, Respondent 3, Respondent 4)

The result tells you:
- How many references to Financial Issues came from each respondent
- Which respondent raised Health Issues most frequently
- Which combination (theme × respondent) had the most data

---

## Interpreting the Matrix

| Cell Value | Interpretation |
|---|---|
| **High count** | This participant contributed many segments on this theme |
| **Zero** | This participant did not mention this theme (absence is analytically significant) |
| **Consistent across all respondents** | This theme is universal in your dataset |
| **Concentrated in 1–2 respondents** | This theme may reflect individual rather than shared experience |

---

## Saving Results

After running the query:
1. Click **Save Results** to save the output as a static node
2. Right-click the query in the Queries list → **Save** to save the query itself for re-running later
`
      },
      {
        id: "nv-04-06",
        title: "Module 4 Practice Exercise",
        url: "",
        content: `## Module 4 Practice

This exercise forms part of the **Module 3–4 Coding Assignment (25%)**. Complete all tasks.

---

## Tasks

**1. Auto-Code by Speaker (if labels are consistent)**
- Run Auto Code by Speaker on the focus group transcript
- Review every auto-coded segment — correct any errors
- Write a brief note: which speakers contributed most data? Which contributed least?

**2. Critical Evaluation of AI Auto-Coding**
- Run AI-assisted Auto Code ("Identify themes") on the same transcript
- For each AI-suggested code, evaluate: accurate label? Consistent segments? Relevant to research question?
- Write a **150-word reflection**: what did the AI get right? What did it miss or mislabel?

**3. Framework Matrix**
- Create a Framework Matrix using your Case(s) as rows and your three themes (from Module 5 preview) as columns
- In each cell, write a 2–3 sentence interpretive summary of that case's contribution to that theme

**4. Matrix Coding Query**
- Run a Matrix Coding Query: Rows = Theme codes, Columns = Speaker codes
- Examine the distribution
- Write a 200-word analysis: which speakers raised which issues most frequently? What does this suggest about the data?

---

## Reflection Questions

1. What is the difference between the Framework Matrix and a Matrix Coding Query?
2. Why must AI auto-coding always be verified manually?
3. If you were running a policy evaluation (not an exploratory study), would you use inductive or deductive coding first? Why?
`
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 5 — THEME DEVELOPMENT
  // ─────────────────────────────────────────────────────────────
  {
    sectionId: "nv_05_theme_development",
    sectionTitle: "Module 5: Theme Development",
    lessons: [
      {
        id: "nv-05-01",
        title: "From Codes to Themes: The Core Analytical Move",
        url: "",
        content: `## Overview

**You will learn:**
- What a theme is (and is not)
- The difference between a category and a theme
- How to make the analytical move from codes to themes

---

## What is a Theme?

A **theme** is a pattern of shared meaning that runs across your dataset and is relevant to your research question. Braun and Clarke (2006, 2022) define a theme as capturing *"something important about the data in relation to the research question."*

**A theme is NOT:**
- Just a big code
- A list of topics participants mentioned
- A frequency count of what came up most often

---

## Category vs. Theme

| Category | Theme |
|---|---|
| Describes the topic of the data | Makes an analytical claim about the data |
| "Financial challenges" | "Economic precarity as a driver of maternal distress" |
| "Relationships with spouse" | "Marital tension as a compounding stressor during pregnancy" |
| "Health during pregnancy" | "Physical vulnerability as amplifier of existing stress" |

> **Pro Tip:** A good theme name does two things: it tells you what the theme is about AND it makes an **analytical claim**. The name should identify the nature of a relationship or pattern, not just a topic area.

---

## The Move from Codes to Themes

1. **Review all your codes** — read through every code and its references
2. **Identify shared meaning** — which codes are capturing related aspects of the same underlying pattern?
3. **Group codes tentatively** — drag related codes under a new parent code (the theme)
4. **Check coherence** — do the grouped codes genuinely belong together, or are they merely superficially similar?
5. **Name the theme** — at a level of abstraction that captures the pattern, not just describes the content
6. **Verify with evidence** — find 2–3 specific quotes from the data that exemplify this theme

---

## Expected Number of Themes

| Dataset Size | Expected Themes |
|---|---|
| 1 FGD (30–50 pages) | 3–5 themes |
| 5–10 interviews | 4–6 themes |
| 20+ interviews | 5–8 themes |

More than 8 themes usually means you have not completed the grouping and abstraction process. Fewer than 2 suggests you have been too broad in your coding.
`
      },
      {
        id: "nv-05-02",
        title: "Building Theme Hierarchies in NVivo",
        url: "",
        content: `## Overview

**You will learn:**
- How to represent themes as parent codes with child codes in NVivo
- How to use "Aggregate Coding from Children"
- Common mistakes when building theme hierarchies

---

## The Hierarchy Structure

In NVivo, themes are represented as **parent codes** with child codes nested beneath them:

\`\`\`
THEME: Financial Issues (parent code)
  ├── Joblessness (child code)
  ├── Lack of stable source of income (child code)
  ├── Inability to provide for other children (child code)
  └── Lack of sufficient financial support from spouse (child code)
\`\`\`

The parent code (theme) aggregates all references from all child codes.

---

## Step-by-Step: Building a Theme Hierarchy

| Step | Action |
|---|---|
| 1 | In the Codes section, right-click in an empty area → **New Code** |
| 2 | Name the new code with your theme name (e.g., "Financial Issues") |
| 3 | Drag the child codes onto the theme name — they become nested beneath it |
| 4 | Right-click the theme code → **Aggregate Coding from Children** |
| 5 | Repeat for each theme |

---

## Aggregate Coding from Children

This setting makes the theme code show all references from its child codes when you double-click it.

> **Warning:** "Aggregate Coding from Children" must be set on each parent code **individually**. If you add a new child code later, you must **re-aggregate**. Always check your theme reference counts after any changes to the hierarchy.

---

## Viewing the Hierarchy

In the Navigation Pane, click the arrow next to a theme code to expand and collapse its children. The number in parentheses next to each code shows its reference count.

---

## Common Mistakes

| Mistake | Problem | Fix |
|---|---|---|
| Nesting child codes too deeply (3+ levels) | Makes themes too narrow | Keep to 2 levels: theme → sub-code |
| Putting the same code under two themes | Creates analytical confusion | Each code belongs to one theme |
| Forgetting to re-aggregate | Theme count becomes incorrect | Re-aggregate after every change |
| Making themes too broad | Loses analytical specificity | Split broad themes into two focused ones |
`
      },
      {
        id: "nv-05-03",
        title: "Case Study: Three Themes from the Pregnancy Stress Data",
        url: "",
        content: `## Overview

This lesson presents the complete thematic framework developed from the Nairobi pregnancy stress dataset, with rationale for each theme.

---

## Theme 1: Financial Issues

**Child codes:**
- Joblessness
- Lack of stable source of income
- Inability to provide for other children
- Lack of sufficient financial support from spouse

**Rationale:** All four codes relate to the inability to meet material needs due to lack of income — either from employment or from a partner. The shared meaning is **economic vulnerability**, specifically as it shapes the daily lived experience of pregnant women. The connection between each code is not just that they all mention money — it is that they all describe a specific form of helplessness: the inability to fulfil the role of provider during a period of heightened material need (pregnancy).

**Exemplary quotes:**
> *"Maybe you do not have work, you're pregnant..."*
> *"There is no way you can feed them..."*

---

## Theme 2: Social Issues

**Child codes:**
- Conflict with spouse
- Poor relationship with neighbours

**Rationale:** Both codes relate to interpersonal conflict in the participant's immediate social environment. The shared meaning is **social friction** — the breakdown of supportive relationships that would normally buffer stress during pregnancy. Notably, both codes describe relationships that are supposed to be supportive (marriage, community) but have instead become sources of additional stress.

**Exemplary quotes:**
> *"The husband becomes noisy in the house with arguments now and then..."*

---

## Theme 3: Health Issues

**Child codes:**
- Illness during pregnancy

**Rationale:** Direct health experiences during pregnancy compound other stressors. This theme stands alone in this dataset but would likely absorb more codes with a larger sample (e.g., "Fear of complications", "Distance to health facilities", "Inadequate antenatal care").

---

## How the Themes Relate

The three themes are not independent — they interact:
- **Financial Issues** create pressure that spills into **Social Issues** (conflict with spouse often starts with money arguments)
- **Health Issues** are compounded by **Financial Issues** (cannot afford medication or transport to clinic)
- **Social Issues** create psychological burden that worsens **Health Issues**

This interaction is what you will synthesise in Module 8's report.
`
      },
      {
        id: "nv-05-04",
        title: "Checking Theme Quality: The Five Questions",
        url: "",
        content: `## Overview

**You will learn:**
- Five quality-check questions for each theme
- How to apply them to the Nairobi dataset
- What to do when a theme fails a quality check

---

## The Five Quality Questions

Before finalising your themes, ask these questions about each one:

| Question | What to Check |
|---|---|
| **1. Is this theme coherent?** | Do all child codes genuinely share a common meaning, or have you forced disparate codes together? |
| **2. Is this theme distinct?** | Does it differ meaningfully from your other themes, or is there significant overlap? |
| **3. Is this theme grounded?** | Can you point to specific coded segments that support it? |
| **4. Is this theme relevant?** | Does it help answer your research question? |
| **5. Is this theme named accurately?** | Does the name capture the pattern's essence, or is it vague? |

---

## Applying the Five Questions: Financial Issues

1. **Coherent?** Yes — all child codes (joblessness, lack of income, inability to provide, lack of spousal support) relate to economic inability. ✓
2. **Distinct?** Yes — differs from Social Issues (interpersonal conflict) and Health Issues (physical experience). ✓
3. **Grounded?** Yes — multiple direct quotes support it across all four respondents. ✓
4. **Relevant?** Yes — financial stress is directly implicated in the research question about stress sources. ✓
5. **Named accurately?** Partially — "Financial Issues" is a category label. A stronger name: *"Economic precarity as a primary driver of maternal stress."* ✓

---

## What to Do When a Theme Fails

| Failing | Action |
|---|---|
| Not coherent | Split into two more focused themes |
| Not distinct | Merge with a theme it overlaps with |
| Not grounded | Return to the data — code more segments, or reconsider the theme |
| Not relevant | Remove the theme (or reframe your research question) |
| Not named accurately | Rename — take time to find the right phrase |

---

## Peer Checking

After applying the five questions yourself, share your theme map with:
- Your supervisor or a knowledgeable colleague
- A fellow researcher who has NOT seen your data (blind check)

Ask: "Does this theme structure make analytical sense to you?" Their feedback identifies blind spots in your analysis.
`
      },
      {
        id: "nv-05-05",
        title: "Module 5 Practice Exercise",
        url: "",
        content: `## Module 5 Practice

This exercise produces your **Theme Map**, which forms the **Module 5 Theme Map Assessment (20%)**.

---

## Tasks

**1. Review and group all codes**
- Open your complete code list from Module 3
- Read through every code and its references
- On paper (or digitally), draw circles around codes that seem to share a common meaning
- Do this without looking at the course's three themes — attempt it independently first

**2. Build the theme hierarchy in NVivo**
- Create parent codes for each theme
- Drag child codes into the appropriate theme
- Enable "Aggregate Coding from Children" on each theme code
- Check that reference counts are accurate

**3. Write a theme definition memo for each theme**
For each theme, write a memo containing:
- The theme name
- A 2–3 sentence definition: what is this theme about? What unites the child codes?
- 2–3 direct quotes from the data that exemplify the theme
- Why this theme is relevant to the research question

**4. Apply the five quality questions**
- For each theme, work through all five quality questions
- Write one sentence per question
- If a theme fails any question, revise it and document the revision

**5. Produce a theme map**
- Draw a theme map showing:
  - Each theme
  - Its child codes
  - Any relationships between themes (arrows showing how they connect)
- This can be hand-drawn and photographed, or created digitally

---

> **Assessment note:** Submit your NVivo screenshot of the theme hierarchy, your theme definition memos, and your theme map as part of the Module 5 submission.
`
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 6 — ADVANCED ANALYSIS: QUERIES
  // ─────────────────────────────────────────────────────────────
  {
    sectionId: "nv_06_queries",
    sectionTitle: "Module 6: Advanced Analysis — Queries",
    lessons: [
      {
        id: "nv-06-01",
        title: "Why Use Queries?",
        url: "",
        content: `## Overview

**You will learn:**
- What queries are in NVivo
- The five main query types and when to use each
- Why queries dramatically accelerate systematic analysis

---

## The Value of Queries

Queries are NVivo's **analytical search tools**. They allow you to ask complex questions of your data that would take days to answer manually.

In a project with 20 transcripts and 40 codes, a query that takes **10 seconds in NVivo** would take **3 hours of manual searching**.

---

## The Five Query Types

| Query Type | Purpose | When to Use |
|---|---|---|
| **Word Frequency** | Counts how often each word appears across your dataset | Initial orientation, generating word clouds |
| **Text Search** | Finds every occurrence of a specific word or phrase | Checking coding consistency, finding missed references |
| **Coding Query** | Returns all segments coded at a specific combination of codes | Theme review, finding negative cases |
| **Matrix Coding Query** | Cross-tabulates two sets of codes to reveal patterns | Covered in Module 4 |
| **Crosstab Query** | Compares coding across attribute values | Comparing sub-groups (employed vs. unemployed) |

---

## Queries as Quality Control

Beyond discovery, queries serve as **quality control tools**:

- Use Text Search to check that you have coded all mentions of a key term
- Use Coding Query to find segments coded at a theme but not at any specific child code (ambiguous segments)
- Use Crosstab to check that your analysis represents all participant sub-groups fairly

---

## Saving Queries

Always **save your queries** after running them. A saved query is reusable — as you add more data, you can re-run it and the results update automatically.

This is especially important in longitudinal studies where you collect data in phases: save all your queries after Phase 1, import Phase 2 data, re-run — and your analysis updates instantly.
`
      },
      {
        id: "nv-06-02",
        title: "Word Frequency Query",
        url: "",
        content: `## Overview

**You will learn:**
- How to run a Word Frequency Query
- How to customise stop words
- What word frequency tells you — and what it does not

---

## Step-by-Step

| Step | Action |
|---|---|
| 1 | **Queries → New Query → Word Frequency** |
| 2 | Set **Scope**: select which files to include (all, or a subset) |
| 3 | Set **Display Words**: typically 100 most frequent |
| 4 | Click **Run** |
| 5 | NVivo produces a table: word, count, percentage of total words, weighted percentage |

---

## Customising Stop Words

Stop words are common words that should be excluded (the, a, and, is, of, to...).

| Step | Action |
|---|---|
| 1 | Go to **File → Application Options → Stop Words** |
| 2 | Review the default list |
| 3 | Add any study-specific words you want to exclude (e.g., "um", "like", "interviewer") |
| 4 | Re-run the query with the updated stop words list |

---

## Viewing Results

After running, switch between views:
- **Word** tab — ranked table of words
- **Word Cloud** tab — visual representation (covered in Module 7)
- **Tree Map** tab — size-coded treemap of word frequency

---

## What Word Frequency Tells You (and Does Not)

> **Warning:** Word frequency tells you what participants talked about most, not what is most analytically significant.

The word "stress" appearing 47 times is **unsurprising** in a study about stress. Look for **unexpected high-frequency words** — these are analytically interesting.

For example, if "neighbour" appears 23 times in a study about financial stress, that is worth investigating. Why are neighbours being mentioned? This might reveal a social dimension you underweighted in your coding.

---

## Exporting Results

1. After running, right-click in the results panel → **Export**
2. Save as \`.xlsx\` for further analysis in Excel
3. Include the exported table as an appendix in your report
`
      },
      {
        id: "nv-06-03",
        title: "Text Search Query",
        url: "",
        content: `## Overview

**You will learn:**
- How to find every occurrence of a word or phrase across all files
- How to use Boolean operators in Text Search
- How to use Text Search as a coding quality-control tool

---

## Step-by-Step

| Step | Action |
|---|---|
| 1 | **Queries → New Query → Text Search** |
| 2 | Enter your search term (e.g., \`husband OR spouse OR partner\`) |
| 3 | Enable **"Include synonyms"** if you want NVivo to find related terms automatically |
| 4 | Set **context**: "Narrow" (just the sentence), "Broad" (surrounding paragraphs), or "Custom" (set number of words before/after) |
| 5 | Click **Run** — review all instances |
| 6 | Optional: **Code all results** to a new code (search-based coding) |

---

## Boolean Operators

| Operator | Example | Effect |
|---|---|---|
| **OR** | \`husband OR spouse\` | Finds either term |
| **AND** | \`stress AND pregnancy\` | Finds segments containing both |
| **NOT** | \`money NOT salary\` | Excludes segments with "salary" |
| **" "** (phrase) | \`"school fees"\` | Finds exact phrase |

---

## Using Text Search for Coding Quality Control

> **Pro Tip:** Text Search is your **coding quality-control tool**. Use it to check that you have not missed relevant coded segments.

**Example workflow:**
1. Run Text Search for "money" and "financial" and "income"
2. Compare results against your "Financial Issues" coded segments
3. Are all search results already coded? If not, you have missed references — go back and code them

---

## Search-Based Coding

After running a Text Search:
1. Review the results carefully
2. Select all results that represent the concept you are looking for
3. Right-click → **Code Selection → existing or new code**

This is a fast way to ensure comprehensive coverage of a concept across a large dataset.
`
      },
      {
        id: "nv-06-04",
        title: "Coding Query: Finding Negative Cases",
        url: "",
        content: `## Overview

**You will learn:**
- What negative cases are and why they strengthen your analysis
- How to use Coding Queries to find them
- How to write a negative case analytical memo

---

## What is a Negative Case?

A **negative case** is a piece of data that **contradicts or complicates** your emerging themes. Finding negative cases strengthens your analysis by demonstrating that you have looked for disconfirming evidence — that your findings are not just confirmation bias.

Negative cases are a hallmark of rigorous qualitative research. They show that you engaged with the full complexity of the data, not just what supports your conclusions.

---

## Step-by-Step: Coding Query

| Step | Action |
|---|---|
| 1 | **Queries → New Query → Coding** |
| 2 | Set: Coded at [Theme Code] **AND NOT** coded at [Sub-code] |
| 3 | This returns segments coded at the theme but not at any specific child code — your **ambiguous segments** |
| 4 | Review each segment: Is it genuinely ambiguous? Does it belong to a different code? Or does it suggest a new code? |

---

## Types of Negative Cases in Our Dataset

**Example 1:** A participant who describes *not* experiencing conflict with her spouse despite being unemployed. This is a negative case for the assumption that financial stress always produces marital conflict.

**Example 2:** A participant who describes feeling *supported* by neighbours — contradicting the "Poor relationship with neighbours" code. This is a negative case for the Social Issues theme.

---

## What to Do with Negative Cases

1. **Code them** — create a specific code: "Exception: financial stress without marital conflict"
2. **Write a memo** — explore why this participant's experience differs. Is it age? Religion? Extended family support?
3. **Report them** — include negative cases in your findings. "While most participants described conflict with spouses as a stressor, one participant described her spouse as a protective factor..."
4. **Refine your theme** — if there are many negative cases, your theme may need to be qualified or narrowed

---

> **Field Note:** The absence of a negative case is itself analytically significant. If all participants describe the same experience with no exceptions, that unanimity is a strong finding worth reporting explicitly.
`
      },
      {
        id: "nv-06-05",
        title: "Crosstab Query: Comparing Across Participants",
        url: "",
        content: `## Overview

**You will learn:**
- How to compare coded data across participant sub-groups
- How to set up a Crosstab Query
- How to interpret and use Crosstab results

---

## What a Crosstab Query Does

A **Crosstab Query** compares how much different sub-groups (defined by Case attributes) talked about each theme.

**Example questions:**
- "Did employed and unemployed participants discuss financial stress differently?"
- "Did younger and older women describe health issues differently?"
- "Did participants from Kibera discuss social issues more than participants from Mathare?"

---

## Step-by-Step

| Step | Action |
|---|---|
| 1 | **Queries → New Query → Crosstab** |
| 2 | Set **Rows**: select your attribute (e.g., "Employment Status" from Case Classification) |
| 3 | Set **Columns**: select your theme codes |
| 4 | Click **Run** |
| 5 | The result shows how many references to each theme came from each attribute group |
| 6 | Click any cell to see the actual segments driving that count |

---

## Interpreting Results

| Pattern | Interpretation |
|---|---|
| High count in one group | This sub-group contributed disproportionately to this theme |
| Zero in one group | This sub-group did not mention this theme — analytically significant |
| Similar counts across groups | This theme is universal — not differentiated by this attribute |

---

## Exporting for Your Report

1. After running, click **Export** → save as \`.xlsx\`
2. In your report: present the crosstab table with a paragraph of interpretation
3. In your methods section: note that you conducted Crosstab analysis to check for sub-group variation

> **Field Note:** Crosstab queries are particularly valuable in health research, community development studies, and evaluations where funders ask "Did responses differ by age or gender?" A Crosstab query gives you the evidence in minutes.
`
      },
      {
        id: "nv-06-06",
        title: "Saving and Running Queries Again",
        url: "",
        content: `## Overview

**You will learn:**
- How to save a query for re-use
- The difference between saving query results and saving the query itself
- How saved queries support longitudinal and multi-phase studies

---

## Two Things You Can Save

| What | How | When to Use |
|---|---|---|
| **Query results** | After running, click **Save Results** → saves as a static node (snapshot) | When you want to compare this run's results against a future run |
| **The query itself** | Right-click the query in Queries list → **Save to Queries** | When you want to re-run the same query on updated data |

---

## Step-by-Step: Saving a Query

| Step | Action |
|---|---|
| 1 | Run your query |
| 2 | In the results panel, right-click → **Save Query** (saves the query definition) |
| 3 | Give it a descriptive name: e.g., "Word Frequency — Full Dataset — Run 1" |
| 4 | The query appears in your Queries list |

---

## Step-by-Step: Re-Running a Saved Query

| Step | Action |
|---|---|
| 1 | Go to **Queries** in the Navigation Pane |
| 2 | Right-click the saved query → **Run Query** |
| 3 | NVivo runs the same query on the current state of your data |
| 4 | Compare results with your saved snapshot from the previous run |

---

## Why This Matters for Multi-Phase Studies

If you are collecting data in phases:
1. After Phase 1 data collection: run all your queries, save results
2. Import Phase 2 data
3. Re-run all saved queries
4. Compare Phase 1 and Phase 2 results — this is your longitudinal analysis

The saved query is the specification. The saved results are the evidence at a point in time. You need both.
`
      },
      {
        id: "nv-06-07",
        title: "Module 6 Practice Exercise",
        url: "",
        content: `## Module 6 Practice

This exercise forms the **Module 6 Query Portfolio (15%)**. Run all four queries and document your results.

---

## Tasks

**1. Word Frequency Query**
- Run a Word Frequency Query on the full dataset (top 100 words, excluding stop words)
- Identify the **5 most analytically significant** words (not just the most frequent — the most *meaningful*)
- Write 2–3 sentences for each explaining why that word matters for the research question
- Export the results table

**2. Text Search Query — Quality Control Check**
- Run a Text Search for "husband" and "spouse"
- Compare results against your "Conflict with spouse" and "Lack of financial support from spouse" codes
- Are there any mentions not coded? If so, code them now
- Write a 100-word note: did this quality check reveal any gaps in your coding?

**3. Crosstab Query**
- If you have speaker codes from Module 4, run: Rows = speaker codes, Columns = themes
- Write 200 words: what do the patterns suggest about which participants raised which issues most frequently? Is any participant's voice over- or under-represented in your analysis?

**4. Negative Case Analysis**
- Run a Coding Query to identify ambiguous segments
- Identify at least **one negative case** — a segment that contradicts or complicates your dominant themes
- Write a 200-word analytical memo: what is the negative case? Why might it differ from the majority? What does it tell you about the limits of your themes?

---

> **Submission:** Include exported query results, screenshots of query settings, and all written interpretations in your Query Portfolio submission.
`
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 7 — VISUALISATION
  // ─────────────────────────────────────────────────────────────
  {
    sectionId: "nv_07_visualisation",
    sectionTitle: "Module 7: Visualisation",
    lessons: [
      {
        id: "nv-07-01",
        title: "Why Visualise?",
        url: "",
        content: `## Overview

**You will learn:**
- The two purposes of visualisation in qualitative research
- Which visualisation types NVivo 14 offers
- Which visualisations to include in your report vs. appendix

---

## Two Purposes of Visualisation

Visualisations in qualitative research serve two distinct purposes:

| Purpose | Goal | Audience |
|---|---|---|
| **Analytical** | Helping *you* see patterns in your data | Yourself (used during analysis) |
| **Communicative** | Helping your *audience* understand your findings | Readers, examiners, funders |

Not all analytical visualisations belong in your report. Some are working tools that help you during analysis but are not polished enough for publication.

---

## NVivo 14 Visualisation Tools

| Visualisation | What It Shows | Best For |
|---|---|---|
| **Hierarchy Chart (Treemap/Sunburst)** | Structure of your coding — which themes contain which codes, and their relative weight | Showing theme structure in reports |
| **Mind Map** | Manually drawn relationship between theme and its child codes | Opening each theme section in a report |
| **Word Cloud** | Frequency of words across the dataset | Illustrating data in introduction to findings |
| **Cluster Analysis** | Which codes co-occur most frequently | Identifying unexpected patterns during analysis |

---

## Where Each Visualisation Goes

| Visualisation | Report Location |
|---|---|
| Overview/summary table | Start of findings section |
| Mind Map (one per theme) | Start of each theme section |
| Hierarchy Chart | Within theme section |
| Word Cloud | Appendix or introduction to findings |
| Cluster Analysis | Synthesis section or methods appendix |

---

## Publication Standards

For any visualisation you include in a report:
- Export at **high resolution** — zoom in to maximum before screenshotting if NVivo's export DPI is insufficient
- Write a **figure caption** below every visualisation
- **Reference every figure** in your text before it appears
- Maintain the original **aspect ratio** — never stretch or compress the image
- Export in **black-and-white** if the report will be printed
`
      },
      {
        id: "nv-07-02",
        title: "Hierarchy Chart (Sunburst / Treemap)",
        url: "",
        content: `## Overview

**You will learn:**
- How to create a Hierarchy Chart for a theme or the full code set
- How to switch between Treemap and Sunburst views
- How to export in black-and-white for print

---

## What a Hierarchy Chart Shows

A Hierarchy Chart visualises the **structure of your coding** — which themes contain which codes, and how much data is coded to each. The size of each segment corresponds to the number of coding references.

It is particularly useful for **showing the relative weight of different themes** and sub-codes at a glance.

---

## Step-by-Step

| Step | Action |
|---|---|
| 1 | In the Navigation Pane, right-click on a theme code (e.g., "Financial Issues") |
| 2 | Select **Visualize → Hierarchy Chart of Codes** |
| 3 | NVivo opens a Treemap by default |
| 4 | Click the dropdown in the top-left to switch between **Treemap** and **Sunburst** views |
| 5 | Click inside the chart to navigate into sub-levels |

---

## Formatting the Chart

In the Format panel on the left:
- **Colours**: change to match your report's colour scheme
- **Black-and-white mode**: switches to pattern fills that remain distinguishable when printed
- **Labels**: adjust font size for readability

> **Pro Tip:** Always export in black-and-white if your report will be printed or submitted as a PDF. Coloured charts lose their meaning in greyscale photocopies.

---

## Exporting

| Step | Action |
|---|---|
| 1 | With the chart visible, press **Ctrl+Shift+E** |
| 2 | Save as \`.png\` or \`.jpg\` |
| 3 | Choose the highest resolution available |
| 4 | Add a caption in Word: *"Figure 1: Hierarchy chart showing sub-codes under the theme of Financial Issues"* |

---

## Interpreting the Chart

The **largest segment** = most coded references (dominant sub-code)
The **smallest segment** = fewest references (marginal sub-code — but still analytically important!)

A sub-code with very few references is not necessarily unimportant — a single powerful quote can be analytically significant even with low frequency.
`
      },
      {
        id: "nv-07-03",
        title: "Mind Map",
        url: "",
        content: `## Overview

**You will learn:**
- How to create a Mind Map in NVivo 14
- How to format it for publication
- Where to place Mind Maps in your report

---

## What a Mind Map Shows

A Mind Map in NVivo is a **manually constructed visual** showing the relationship between a theme and its child codes. Unlike the Hierarchy Chart (auto-generated from your coding data), you build the Mind Map yourself.

---

## Step-by-Step

| Step | Action |
|---|---|
| 1 | Go to **Visualizations → Mind Maps** OR **Explore tab → Mind Map** |
| 2 | Right-click in the mind map area → **New Mind Map**. Name it (e.g., "Social Issues Theme Map") |
| 3 | Double-click in the centre of the canvas to add the theme name |
| 4 | Click on the theme circle → click **Child** in the ribbon to add a child node |
| 5 | Type each child code name |
| 6 | Repeat for all child codes |

---

## Formatting for Publication

| Format Item | Setting |
|---|---|
| Node fill colour | White |
| Node border | Black |
| Font | Times New Roman 12pt |
| Theme name | Bold |
| Lines connecting nodes | Black, medium weight |

To apply: Select all nodes (**Ctrl+A**) → Format panel → apply settings.

---

## Exporting

Press **Ctrl+Shift+E** → Save as image (\`.png\`).

---

## Where Mind Maps Go in Your Report

> **Field Note:** Mind Maps are not just decorative. Place each theme's Mind Map at the **start of the section that discusses that theme**. It helps your reader understand the analytical structure of the theme before the written discussion begins.

**Report placement:**
- **Theme 1 section header** → Mind Map of Theme 1
- **Theme 2 section header** → Mind Map of Theme 2
- **Theme 3 section header** → Mind Map of Theme 3

---

## Alternative: Drawing Your Own

If you prefer, you can draw Mind Maps in **Microsoft PowerPoint**, **Canva**, or by hand (photograph it). NVivo's built-in Mind Map tool is convenient but not the only option.
`
      },
      {
        id: "nv-07-04",
        title: "Word Cloud",
        url: "",
        content: `## Overview

**You will learn:**
- How to generate a Word Cloud from your Word Frequency Query results
- How to adjust the Word Cloud for clarity
- How to write interpretation to accompany a Word Cloud

---

## Step-by-Step

| Step | Action |
|---|---|
| 1 | Run a **Word Frequency Query** (as in Module 6) |
| 2 | After running, click on the **Word Cloud** tab in the results panel |
| 3 | NVivo generates the word cloud automatically from the frequency results |
| 4 | Adjust: set minimum word length to 4 (excludes short filler words) |
| 5 | Adjust the number of words displayed (typically 50–75 for clarity) |
| 6 | Export as image: **Ctrl+Shift+E** |

---

## What Word Clouds Show (and Don't Show)

A Word Cloud shows **frequency**, not **meaning**.

The largest words are the most frequent. This can be misleading if high-frequency words are incidental (names of interviewers, place names, filler phrases).

**Always pair a Word Cloud with interpretive text.**

---

## Writing Interpretation for a Word Cloud

A Word Cloud in your report must be followed by a paragraph such as:

*"The word cloud for the focus group discussion reveals that terms relating to family and financial responsibility — 'husband', 'work', 'children', 'money', 'school' — dominate the data. This is consistent with the dominant theme of financial issues, in which participants consistently linked unemployment to their inability to fulfil maternal and domestic roles. The prominence of 'alone' and 'stress' as high-frequency words underscores the psychological dimension of financial precarity experienced by these participants."*

> **Warning:** Do not present a Word Cloud as your analysis. It is an illustration of frequency, not of meaning. A Word Cloud without commentary is not analysis.

---

## Colours and Export

For the Word Cloud:
- Use a **white background** for reports
- Use **dark colours on white** for print clarity
- Avoid rainbow colour schemes that suggest meaningful colour variation (there is none)
`
      },
      {
        id: "nv-07-05",
        title: "Cluster Analysis Chart",
        url: "",
        content: `## Overview

**You will learn:**
- What a Cluster Analysis chart shows in NVivo
- How to generate and interpret a dendrogram
- How unexpected clustering drives analytical discovery

---

## What Cluster Analysis Shows

A **Cluster Analysis chart** groups your codes by how often they appear **together in the same coded segments**. Codes that frequently co-occur are clustered together in the dendrogram (branching tree diagram).

This answers: *"Which codes tend to appear together in the same passages?"*

---

## Step-by-Step

| Step | Action |
|---|---|
| 1 | Go to **Explore → Cluster Analysis** |
| 2 | Select the codes you want to analyse (or select all) |
| 3 | Choose your clustering basis: **"Coding similarity"** (most common) or "Word similarity" |
| 4 | Click **Run** |
| 5 | NVivo produces a **dendrogram** |
| 6 | Export as image |

---

## Reading a Dendrogram

- Codes that are **close together** (connected by short branches) frequently co-occur
- Codes that are **far apart** (connected by long branches) rarely co-occur
- **Clusters** of codes that group together may indicate a theme you have not yet named

---

## Using Unexpected Clustering Analytically

> **Pro Tip:** If two codes you expected to be closely related appear **far apart** in the cluster analysis, this is analytically significant. It means participants who mentioned one did not typically also mention the other. Explore why — this often leads to the most interesting findings.

**Example from our dataset:**
If "Joblessness" and "Conflict with spouse" appear far apart despite both being stressors, it suggests they are mentioned in different contexts by different participants — not necessarily linked in participants' own accounts, even though they co-exist in our theme framework.

---

## Cluster Analysis as a Theme-Check Tool

Use the Cluster Analysis **after** developing your themes to verify them:
- Do codes within the same theme cluster together? (They should.)
- Do codes from different themes cluster separately? (They should.)
- If codes from different themes cluster together, reconsider your theme boundaries.
`
      },
      {
        id: "nv-07-06",
        title: "Exporting Visualisations for Your Report",
        url: "",
        content: `## Overview

**You will learn:**
- Best practices for publication-quality exports
- How to caption and reference figures correctly
- How to handle image sizing in Word

---

## Export Settings

NVivo's default export DPI (96 DPI) is suitable for screen viewing but marginal for print. For print-quality exports:

1. Before exporting, **zoom in** to the maximum view in NVivo
2. Use **Ctrl+Shift+E** to export
3. Choose \`.png\` format (better quality than \`.jpg\` for diagrams with text)
4. If the exported resolution is insufficient: take a **full-screen screenshot** (Windows: **Win+Shift+S**) at maximum zoom

---

## Figure Captions

Every figure in your report needs a caption:

**Format:**
*Figure 1: [Description of what the figure shows and what dataset it is from]*

**Examples:**
- *Figure 1: Hierarchy chart showing sub-codes under the theme of Financial Issues (Nairobi FGD, N=4)*
- *Figure 2: Mind map of the Social Issues theme and its constituent codes*
- *Figure 3: Word cloud generated from all focus group transcripts (N=1 FGD, 50 most frequent words)*

---

## Referencing Figures in Text

Every figure must be **referenced in text before it appears**:

> *"As shown in Figure 1, Financial Issues is the most heavily coded theme, with Joblessness accounting for the largest proportion of references."*

Figures that appear without a text reference are a common academic writing error — examiners notice this.

---

## Sizing in Word

- Insert the image → right-click → **Size and Position**
- Enable **"Lock aspect ratio"** before resizing
- Do NOT stretch or compress — always resize proportionally
- For A4 reports: images should typically be 80–90% of page width for clarity
`
      },
      {
        id: "nv-07-07",
        title: "Module 7 Practice Exercise",
        url: "",
        content: `## Module 7 Practice

This exercise produces your **Visualisation Pack**, which forms the **Module 7 Visualisation Assessment (10%)**.

---

## Tasks

**1. Hierarchy Charts (3 charts)**
- Create a Hierarchy Chart for each of your three themes
- Switch between Treemap and Sunburst views — choose the one that most clearly shows sub-code proportions
- Export all three in black-and-white
- Write a one-sentence caption for each

**2. Mind Map — Social Issues**
- Build a Mind Map for the "Social Issues" theme showing its two child codes
- Format: white fill, black borders, bold theme name, Times New Roman 12pt
- Export as \`.png\`

**3. Word Cloud and Interpretation**
- Generate a Word Cloud for the full dataset (top 75 words, minimum length 4)
- Export
- Write a **150-word paragraph** interpreting the word cloud: what do the dominant words tell you about what matters to these participants? What is absent that surprises you?

**4. Cluster Analysis — Unexpected Finding**
- Run a Cluster Analysis on all your codes
- Identify **one pair of codes** that cluster unexpectedly (either closer than expected or further apart)
- Write a **200-word analytical memo** exploring what this unexpected clustering might mean analytically

---

## Submission Requirements

Your Visualisation Pack should include:
- 3 Hierarchy Chart images (with captions)
- 1 Mind Map image (with caption)
- 1 Word Cloud image + 150-word interpretation paragraph
- 1 Cluster Analysis screenshot + 200-word memo
- All images inserted into a single Word document with figure numbers and captions
`
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 8 — REPORTING & WRITING YOUR ANALYSIS
  // ─────────────────────────────────────────────────────────────
  {
    sectionId: "nv_08_reporting",
    sectionTitle: "Module 8: Reporting & Writing Your Analysis",
    lessons: [
      {
        id: "nv-08-01",
        title: "Exporting the Code Book",
        url: "",
        content: `## Overview

**You will learn:**
- What a code book is and why it is submitted with qualitative research
- How to export the code book from NVivo
- How to format it for appendix submission

---

## What is a Code Book?

The **code book** is the definitive record of every code in your project — its name, description, number of references, and number of files containing that code. It is submitted as an **appendix** to your dissertation, report, or journal article.

The code book serves three purposes:
1. **Transparency** — shows exactly what codes you used
2. **Replicability** — allows another researcher to apply the same codes to the same data
3. **Credibility** — demonstrates that your analysis was systematic

---

## Step-by-Step: Exporting the Code Book

| Step | Action |
|---|---|
| 1 | In the Navigation Pane, click **Codes** to highlight the full Codes section |
| 2 | Right-click on Codes → **Export → Export List** |
| 3 | Save as Excel (\`.xlsx\`) |
| 4 | NVivo exports the full code list with: hierarchy levels, reference counts, file counts |

---

## Formatting for Submission

After exporting to Excel:
1. Add a column: **"Code Description"**
2. Copy your code descriptions from NVivo's Code Properties into this column
3. Add a column: **"Theme"** (the parent theme each code belongs to)
4. Sort by theme, then by code name
5. Format as a clean table with borders, header row bolded

---

## Code Book Structure

| Column | Content |
|---|---|
| Code Name | Exact code name as in NVivo |
| Theme | Parent theme |
| Description | Working definition (include/exclude, distinguish from similar codes) |
| References | Total number of coded segments |
| Files | Number of files containing this code |
`
      },
      {
        id: "nv-08-02",
        title: "Exporting Individual Code References",
        url: "",
        content: `## Overview

**You will learn:**
- How to export all segments coded to a theme as a Word document
- How to use the export as a "quotes bank" when writing
- Best practices for managing large quote collections

---

## The Quotes Bank

When writing your findings section, you need direct quotes from the data to support each point. The most efficient approach is to create a **quotes bank** — a Word document containing all coded segments for each theme, ready to copy and paste.

---

## Exporting Code References

| Step | Action |
|---|---|
| 1 | Right-click on any code or theme in the Codes list |
| 2 | Select **Export → Export Code** |
| 3 | Choose to export as \`.docx\` |
| 4 | The export contains: every coded segment, with the source file name and location for each |

---

## Using the Quotes Bank

When writing Theme 1 (Financial Issues):
1. Open your "Financial Issues" export document
2. Read through all coded segments
3. Identify the **3–5 most illustrative quotes** for each sub-code
4. Copy them into your report draft
5. After each quote, write your **analytical interpretation** (see 8.4)

---

## Managing Long Quotes

Qualitative reports use three quote lengths:

| Quote Type | Length | Purpose |
|---|---|---|
| **Short quote** | 1–10 words | Used inline: *participants described feeling "lonely and stressed"* |
| **Medium quote** | 1–3 sentences | Indented blockquote — most common in qualitative reports |
| **Long quote** | 3+ sentences | Use sparingly — only when the full passage is essential |

**In APA 7th edition:** Quotes of 40+ words are formatted as an indented block quotation without quotation marks.
`
      },
      {
        id: "nv-08-03",
        title: "The Structure of a Qualitative Data Analysis Report",
        url: "",
        content: `## Overview

**You will learn:**
- The standard structure of a qualitative findings report
- What belongs in each section
- How to transition between sections

---

## Standard Report Structure

| Section | Content |
|---|---|
| **1. Introduction** | Restate the research question; describe the data and analysis approach (e.g., "Inductive thematic analysis was conducted using NVivo 14") |
| **2. Overview Table** | A table connecting the research question to the themes that emerged |
| **3. Theme 1** | Theme name and definition; explanation of constituent codes; supporting quotes; analytical interpretation |
| **4. Theme 2** | Same structure |
| **5. Theme 3** | Same structure |
| **6. Synthesis** | How do the themes relate? What is the overall story of the data? |
| **7. Conclusion** | How does the analysis answer the research question? |

---

## The Overview Table

Place this at the start of the findings section:

| Research Question | Theme | Sub-codes |
|---|---|---|
| What are the sources of stress for pregnant women in low-income urban Nairobi? | Financial Issues | Joblessness, Lack of income, Inability to provide, Lack of spousal support |
| | Social Issues | Conflict with spouse, Poor neighbour relations |
| | Health Issues | Illness during pregnancy |

---

## Transition Sentences Between Sections

Each section needs a transition sentence that links it to the previous section and previews what is coming:

*"Having established the financial dimensions of stress during pregnancy, the analysis now turns to its social dimensions — specifically the role of interpersonal conflict in compounding economic vulnerability."*

---

## Report Length Guidelines

| Report Type | Word Count |
|---|---|
| Dissertation chapter (MSc) | 4,000–6,000 words |
| Dissertation chapter (PhD) | 8,000–12,000 words |
| Evaluation report | 2,500–4,000 words |
| Journal article findings section | 2,000–3,500 words |
| This course's Module 8 assignment | 2,000 words |
`
      },
      {
        id: "nv-08-04",
        title: "Writing the Analysis: The Code-Quote-Comment Structure",
        url: "",
        content: `## Overview

**You will learn:**
- The Code-Quote-Comment (CQC) structure for presenting qualitative findings
- Why "the quote speaks for itself" is never acceptable
- How to write analytical interpretation that adds value

---

## The Three-Part Structure

Every code you discuss in your findings section follows this structure:

---

### Step 1: Code — Introduce the Code

Introduce the code and state its significance in the dataset.

*"Joblessness was one of the most prominent codes within the theme of Financial Issues, appearing across all four respondents in the focus group."*

---

### Step 2: Quote — Provide the Evidence

Introduce the quote with a framing sentence, then present it indented:

*"Participants directly connected unemployment to the onset of stress during pregnancy, as one respondent described:"*

> *"This really stressed me as I didn't know what to do as I was jobless."*

---

### Step 3: Comment — Interpret the Quote

Explain what the quote means. This is where your analysis lives.

*"This extract illustrates not only the material consequences of joblessness but the psychological burden of uncertainty — the respondent emphasises cognitive overwhelm ('I didn't know what to do') rather than the practical problem of income alone. This suggests that financial stress operates through a mechanism of perceived helplessness, compounding the physiological vulnerabilities of pregnancy."*

---

## Why the Comment is Non-Negotiable

> **Critical:** The Comment is where your analysis lives. Beginners often stop after the quote, as if the quote speaks for itself. It does not. Your job as a researcher is to **interpret** — to say what the quote means in the context of your research question and the existing literature.

A report full of quotes without interpretation is a transcript summary, not a qualitative analysis.

---

## Comment Quality Checklist

A strong Comment does at least one of these:
- **Explains WHY** the quote is significant (not just what it says)
- **Connects** the quote to other data (other respondents, other codes)
- **Links** the quote to existing theory or literature
- **Identifies** what the quote reveals about participants' underlying experience (not just surface content)
- **Notes** any notable language choice the participant made (word selection is data)
`
      },
      {
        id: "nv-08-05",
        title: "Where Each Visual Goes in Your Report",
        url: "",
        content: `## Overview

**You will learn:**
- The exact placement for each visualisation type
- How to integrate visuals with text
- How to caption and number figures correctly

---

## Visualisation Placement Guide

| Visual | Recommended Placement | Purpose |
|---|---|---|
| **Overview Table** | Start of findings section | Maps research question to themes — orients the reader |
| **Mind Map** (per theme) | Start of each theme section | Shows theme structure before the written discussion |
| **Hierarchy Chart** | Within the theme section, after introducing the theme | Shows relative weight of sub-codes |
| **Word Cloud** | Introduction to findings section, or Appendix | Illustrates the overall vocabulary of the dataset |
| **Cluster Analysis** | Synthesis section, or methods appendix | Discusses relationships between themes |
| **Code Book** | Appendix | Full methodological record |

---

## Integration Principle

**Every visual must be:**
1. **Referenced in text** before it appears (*"As illustrated in Figure 2..."*)
2. **Captioned** immediately below the image
3. **Interpreted** — never left without accompanying text

---

## Example of Well-Integrated Visual

*"The structural relationship between the Financial Issues theme and its four constituent codes is illustrated in Figure 1. Joblessness (accounting for 34% of all references under this theme) emerges as the dominant sub-code, reflecting the consistent emphasis participants placed on unemployment as the primary trigger of financial stress during pregnancy."*

[Figure 1: Hierarchy chart — Financial Issues theme with four sub-codes]

---

## Numbering Figures

Number figures sequentially throughout the report:
- Figure 1, Figure 2, Figure 3...
- Tables are numbered separately: Table 1, Table 2...
- In the appendix: Figure A1, Figure A2... or Appendix A, Appendix B...

Maintain a **List of Figures** at the start of your document if you have more than 4 figures.
`
      },
      {
        id: "nv-08-06",
        title: "A Complete Sample Report Section",
        url: "",
        content: `## Overview

This lesson presents a complete, annotated sample of Theme 1 written in the Code-Quote-Comment structure. Use this as a template for your own report.

---

## Sample: Theme 1 — Financial Issues

After conducting data analysis, the theme of **Financial Issues** emerged as the most prominent pattern in the dataset, supported by four constituent codes: Joblessness, Lack of stable source of income, Inability to provide for other children, and Lack of sufficient financial support from spouse *(see Figure 1 — Hierarchy Chart, Appendix A)*.

---

### Joblessness as a Primary Stressor

Joblessness was identified as the most frequently cited contributor to financial stress among participants. The intersection of unemployment and pregnancy created a specific form of vulnerability described consistently across all four respondents.

> *"Maybe you do not have work, you're pregnant..."*

> *"This really stressed me as I didn't know what to do as I was jobless."*

These extracts reveal that joblessness during pregnancy is not experienced as a passive state but as an **active threat** — participants describe not knowing what to do, suggesting **cognitive and emotional overwhelm** rather than merely financial shortfall. The co-occurrence of pregnancy (a state requiring additional resources) with unemployment (a state of resource depletion) creates a compounded vulnerability that extends beyond individual financial management into questions of maternal and foetal welfare.

---

### Inability to Provide for Other Children

The presence of existing children significantly amplified financial stress, as participants described the impossibility of meeting their children's basic needs while pregnant and unemployed.

> *"To have kids, no work, there's no way you can feed them — this contributes to a lot of thoughts resulting into stress."*

The framing of inability to feed children as producing "a lot of thoughts" is analytically significant. It positions financial failure not primarily as an economic problem but as a **cognitive burden** — one that triggers rumination. This aligns with research on financial anxiety as a form of mental load (Kaur et al., 2019) and reinforces the importance of psychological interventions alongside material support.

---

### Analytical Note

The four sub-codes within Financial Issues are not experienced by participants as separate phenomena — they are described as a **cascade**: unemployment leads to inability to pay rent and school fees, which creates conflict with the spouse, which leads to potential abandonment. This cascading structure was not apparent in the individual codes but emerged clearly in the theme-level review of all Financial Issues references together.

---

> **Writing note:** The sample above demonstrates: theme introduction with figure reference, CQC structure for each sub-code, analytic claim in the Comment, connection to literature, and cross-reference to another theme (Social Issues). Aim for this level of analytical depth in your own report.
`
      },
      {
        id: "nv-08-07",
        title: "Intercoder Reliability: Ensuring Rigour",
        url: "",
        content: `## Overview

**You will learn:**
- What intercoder reliability is and why it matters
- How to run a Coding Comparison Query in NVivo
- How to interpret and report Cohen's Kappa

---

## What is Intercoder Reliability?

**Intercoder reliability** (also called intercoder agreement) is a measure of whether two or more independent coders, applying the same code book to the same data, arrive at the same results.

It is a key indicator of **methodological rigour** — demonstrating that your findings are not just one person's interpretation but a systematic and reproducible analysis.

---

## The Process

| Step | Action |
|---|---|
| 1 | Two coders independently code the same subset of data (typically **20% of the dataset**) |
| 2 | Both coders import their coded files into the same NVivo project under separate user accounts |
| 3 | Go to **Explore → Coding Comparison Query** |
| 4 | Select the two users/coders |
| 5 | Select the codes or files to compare |
| 6 | Click **Run** — NVivo produces a **Kappa coefficient** (Cohen's Kappa) |

---

## Interpreting Cohen's Kappa

| Kappa Value | Interpretation |
|---|---|
| < 0.40 | Poor agreement — code descriptions need significant revision |
| 0.40–0.60 | Moderate agreement — review disagreements and refine code descriptions |
| 0.61–0.80 | Substantial agreement — acceptable for most qualitative research |
| 0.81–1.00 | Almost perfect agreement — excellent reliability |

Report your Kappa in your **methodology section**: *"Intercoder reliability was assessed using NVivo's Coding Comparison Query. A Kappa coefficient of 0.74 indicated substantial agreement (Landis & Koch, 1977)."*

---

## For Single-Researcher Studies

For most dissertations (single researcher), full intercoder reliability testing is not required, but you should:
1. Have your supervisor or a colleague review **20% of your codes** without access to your interpretations
2. Document any disagreements and how you resolved them
3. Report this as "peer review of coding" in your methodology section

---

## When to Conduct Intercoder Checking

- **Before finalising your code book** (check early, refine descriptions)
- **After completing the first full pass** of coding
- **Before developing themes** (ensure the codes are stable)
`
      },
      {
        id: "nv-08-08",
        title: "Final Report Checklist & Assessment Guide",
        url: "",
        content: `## Overview

This lesson provides a comprehensive checklist for your Module 8 final report and a guide to the full course assessment.

---

## Final Report Checklist

Before submitting your qualitative data analysis report, confirm each of the following:

**Research Question & Introduction**
- [ ] Research question is clearly stated
- [ ] Data source and collection method are described
- [ ] Analysis approach is named (e.g., "inductive thematic analysis using NVivo 14")
- [ ] Any limitations of the dataset are acknowledged

**Methodology**
- [ ] Sampling approach described (purposive, snowball, convenience, etc.)
- [ ] Number of participants/documents stated
- [ ] Transcription process described
- [ ] Coding process described — inductive or deductive, number of codes generated
- [ ] Theme development process described
- [ ] Intercoder reliability or peer checking described

**Findings Structure**
- [ ] Overview table present at start of findings
- [ ] Each theme has its own section
- [ ] Each section contains a Mind Map or Hierarchy Chart
- [ ] Each sub-code is introduced with a framing sentence (Code)
- [ ] Each point is supported by at least one direct quote (Quote)
- [ ] Every quote has analytical interpretation following it (Comment)
- [ ] Negative cases or exceptions are acknowledged

**Visuals**
- [ ] Every figure is referenced in text before it appears
- [ ] Every figure has a numbered caption
- [ ] Figures are high resolution and readable
- [ ] Code book is included as an appendix

**Synthesis & Conclusion**
- [ ] Synthesis section explains how themes relate to each other
- [ ] Conclusion directly answers the research question
- [ ] Limitations are acknowledged

---

## Course Assessment Summary

| Task | Weight | Key Requirements |
|---|---|---|
| **Module 1–2 Practice** | 10% | Project setup, familiarisation memo (300 words) |
| **Module 3–4 Coding Assignment** | 25% | Full transcript coded, descriptions written, AI auto-code reflection |
| **Module 5 Theme Map** | 20% | Theme hierarchy, definition memos, quality checks |
| **Module 6 Query Portfolio** | 15% | 4 queries run and interpreted with exported evidence |
| **Module 7 Visualisation Pack** | 10% | 3 hierarchy charts, 1 mind map, word cloud + cluster analysis |
| **Module 8 Final Report** | 20% | 2,000-word qualitative analysis report |

---

## Grading Standards for the Final Report

| Grade | Standard |
|---|---|
| **Distinction (70%+)** | Analysis demonstrates genuine interpretive engagement. Comments add analytical value beyond description. Negative cases acknowledged. Themes are coherent, distinct, and grounded. Visuals are publication-ready. |
| **Merit (60–69%)** | Solid coding and thematic structure. Most Comments are interpretive. Minor gaps in negative case analysis or visual quality. |
| **Pass (50–59%)** | Adequate coverage but Comments tend toward description rather than interpretation. Themes may lack full coherence. |
| **Fail (<50%)** | Insufficient coding, missing descriptions, no interpretive engagement, or failure to use the CQC structure |

---

## Congratulations

Completing this course means you can now:
- Set up and manage an NVivo 14 project from scratch
- Import and organise any qualitative data type
- Code inductively and deductively with documented rigour
- Develop defensible themes using Braun & Clarke's framework
- Run all five NVivo query types and interpret the results
- Produce publication-quality visualisations
- Write a structured qualitative findings report

These are the same skills used by published researchers and professional evaluators. The workflow you have learned here is directly transferable to any qualitative study — in health, social science, development, education, or policy.
`
      }
    ]
  }
];
