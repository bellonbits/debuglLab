import os
import json

def get_section_title(section_dir):
    parts = section_dir.split('_')
    if parts[0].isdigit():
        return " ".join(parts[1:])
    return " ".join(parts)

def parse_md_file(filepath, filename):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    title = filename.replace('_', ' ').replace('.md', '').title()
    for line in content.split('\n'):
        if line.startswith('# '):
            title = line[2:].strip()
            break
            
    # Clean up Debug Lab links and headers from content
    lines = content.split('\n')
    cleaned_lines = []
    skip_header = True
    
    for line in lines:
        if skip_header:
            if line.startswith('# ') or '**Source:**' in line or line.strip() == '---':
                continue
            if line.strip() == '':
                continue
            skip_header = False
        
        # Replace any other Debug Lab lesson links with dummy anchors to keep it purely offline
        import re
        line = re.sub(r'https?://(?:www\.)?thedebuglab\.com/lessons/[a-zA-Z0-9\-]+', '#', line)
        cleaned_lines.append(line)
        
    cleaned_content = "\n".join(cleaned_lines).strip()
            
    return {
        "id": filename.replace('.md', ''),
        "title": title,
        "url": "",
        "content": cleaned_content
    }


def main():
    base_dir = "/Users/mac/Debug Society"
    sections_list = []
    
    dirs = sorted([d for d in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, d)) and d[0].isdigit()])
    
    for d in dirs:
        section_path = os.path.join(base_dir, d)
        section_title = get_section_title(d)
        
        lessons = []
        files = sorted([f for f in os.listdir(section_path) if f.endswith('.md')])
        for f in files:
            filepath = os.path.join(section_path, f)
            lesson_info = parse_md_file(filepath, f)
            lessons.append(lesson_info)
            
        sections_list.append({
            "sectionId": d,
            "sectionTitle": section_title,
            "lessons": lessons
        })
        
    output_dir = os.path.join(base_dir, "src", "data")
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    output_path = os.path.join(output_dir, "lessonsData.ts")
    
    js_content = f"""// Automatically compiled course database (TypeScript module)

export interface Lesson {{
  id: string;
  title: string;
  url: string;
  content: string;
}}

export interface Section {{
  sectionId: string;
  sectionTitle: string;
  lessons: Lesson[];
}}

export const lessonsData: Section[] = {json.dumps(sections_list, indent=2, ensure_ascii=False)};
"""
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print(f"Compiled {len(sections_list)} sections to {output_path} successfully.")

if __name__ == "__main__":
    main()
