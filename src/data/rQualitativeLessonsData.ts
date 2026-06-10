// Qualitative Research Analysis with R — Kenya Edition
// The Debug Society

export interface RQualitativeLesson {
  id: string;
  title: string;
  url: string;
  content: string;
}

export interface RQualitativeSection {
  sectionId: string;
  sectionTitle: string;
  lessons: RQualitativeLesson[];
}

export const rQualitativeLessonsData: RQualitativeSection[] = [
  {
    sectionId: "rq_01_introduction",
    sectionTitle: "Module 1: Introduction to Qualitative Research",
    lessons: [
      {
        id: "rq-01-what-is-qualitative",
        title: "What is Qualitative Research?",
        url: "",
        content: `## Overview

> **Kwa nini hii course?** Qualitative research ni moja ya njia bora za kuelewa watu — mindset yao, struggles, na experiences zao. R inakusaidia ku-organize, analyze, visualize na report findings zako kwa njia ya professional na reproducible.

**You will learn:**
- The definition and purpose of qualitative research
- Real-world Kenyan examples of qualitative insights
- Why qualitative research matters alongside quantitative data

---

## What is Qualitative Research?

Qualitative research ni research inayouliza **"WHY"** na **"HOW"** badala ya **"HOW MANY"** au **"HOW MUCH"**.

**Simple analogy:**
- **Quantitative:** "63% ya Wakenya hawana access ya clean water" — *hii ni number*
- **Qualitative:** "Mama Njeri anachukua maji kutoka River Ndarugu kila asubuhi saa 12 alfajiri kwa sababu borehole iliharibika na county haijafanya repairs — na hii inamfanya arrive shule mtoto wake akiwa amechelewa" — *hii ni STORY*

Qualitative research inakuambia **experience ya kweli ya mtu** — si just statistics.

---

## Kenyan Real-World Example: M-Pesa Adoption Study

Imagine unafanya research kwa KNBS kuhusu *why some rural women in Murang'a don't use M-Pesa despite owning phones*:

**Quantitative data inakuambia:**
- 34% ya wanawake vijijini hawatumii M-Pesa regularly

**Qualitative research inakuambia:**
- *"Siamini M-Pesa kwa sababu mara moja mtoto wangu alituma pesa mbaya na tulipoteza KES 3,000. Hakuna mtu alitusaidia."* — Interview respondent, Murang'a
- Wengine wana hofu ya **SIM swap fraud**
- Wengine hawajui kujisajili peke yao — **literacy barrier**

---

## Characteristics of Qualitative Inquiry

| Characteristic | Maana yake | Kenyan Example |
|---|---|---|
| **Naturalistic** | Data inakusanywa katika natural setting | Kuzungumza na mama-lishe kwa vibanda vyao Gikomba |
| **Inductive** | Unaanza na data, kisha unajenga theory | Unasikiliza Bodaboda operators Thika Rd, unaona patterns |
| **Holistic** | Unatazama whole picture | Ku-understand hawker economy Nairobi si just numbers |
| **Interpretive** | Unatoa meaning kutoka kwa data | Unaelewa kwa nini watu wanapigia kura namna fulani |
| **Reflexive** | Unakuwa aware ya influence yako kama researcher | Ukiwa Kikuyu unafanya research Nyeri — utambue bias yako |

---

## Qualitative vs Quantitative — Tofauti ya Msingi

\`\`\`
QUALITATIVE                          QUANTITATIVE
──────────────────────────           ──────────────────────────
Words, stories, meanings             Numbers, statistics
WHY and HOW                          HOW MANY and HOW MUCH
Small sample, deep dive              Large sample, surface level
Flexible design                      Fixed design
Subjectivity acknowledged            Objectivity assumed
Interviews, observations             Surveys, experiments
Themes and patterns                  Means, correlations
\`\`\`

> **Sheng moment:** Quantitative ni kama KCPE results za shule nzima. Qualitative ni kama conversation na mwanafunzi mmoja kuelewa kwa nini alipata marks hizo. *Both ni important!*

---

## Key Takeaways

1. Qualitative research answers WHY and HOW — not just HOW MANY
2. It uses words, stories, and experiences — not numbers
3. It gives rich, contextual understanding that surveys cannot provide
4. Both qualitative and quantitative approaches complement each other
`
      },
      {
        id: "rq-01-paradigms-reasoning",
        title: "Research Paradigms & Reasoning",
        url: "",
        content: `## Overview

**You will learn:**
- Key research paradigms underpinning qualitative work
- The difference between inductive and deductive reasoning
- How these concepts apply to Kenyan research contexts

---

## Research Paradigms

Hizi ni philosophical assumptions behind your research:

### Interpretivism (Main paradigm ya qualitative research)
> "Reality ni subjective — kila mtu anaona dunia kwa macho yake mwenyewe"

**Kenyan Example:** Watu wawili wanaishi Kibera:
- Mtu wa kwanza: "Kibera ni danger zone — watu wanakimbia usiku."
- Mtu wa pili: "Kibera ni home yangu — community hapa iko tight."

*Wote wawili wana ukweli wao.*

### Constructivism
> "Knowledge inaundwa kupitia social interaction na experience"

**Kenyan Example:** Maana ya "corruption" kwa mwanafunzi wa UoN ni different kuliko maana yake kwa contractor wa KENHA. Knowledge ya kila mmoja imeundwa na experience yake.

---

## Inductive vs Deductive Reasoning

\`\`\`
INDUCTIVE (Bottom-up)
Observations → Patterns → Theory

Example: Unaona wafanyabiashara Eastleigh wengi wanakataa credit.
         Unaongea nao. Unaona pattern ya distrust ya formal banking.
         Unajenga theory: "Somali diaspora preference for hawala systems
         is rooted in institutional distrust from displacement experiences"

DEDUCTIVE (Top-down)
Theory → Hypothesis → Test → Confirm/Reject

Example: Theory inasema "poverty inasababisha crime".
         Unafanya research Mathare kutest hii theory.
\`\`\`

---

## Overview of Qualitative Methodologies

| Methodology | Best For | Kenyan Research Example |
|---|---|---|
| **Case Study** | In-depth analysis ya moja au chache | How Equity Bank expanded to rural Kenya |
| **Ethnography** | Understanding culture from inside | Living with pastoralists in Marsabit for 3 months |
| **Grounded Theory** | Building theory from scratch | Understanding matatu informal economy |
| **Phenomenology** | Lived experiences | Experience of refugees in Kakuma camp |
| **Narrative Research** | Personal stories and life histories | Stories of women politicians in Kenya |
| **Action Research** | Research + immediate change | Working with Kibera teachers to improve reading |

---

## Module 1 Assignment: Theme Spotting

**Real-World Task:** Soma interview excerpt hii kisha identify emerging themes:

> *"Nilifanya kazi Mombasa kwa hoteli kubwa. Walipita Covid, tulifutwa kazi wote without notice. Hakuna severance. Nilijaribu kupata job nyingine lakini siku zote wanasema 'hatuna nafasi'. Nikaanza kuuza mahindi kando ya barabara — watu walisema ni kushuka ngazi. Lakini kwa kweli, biashara yangu inaona KES 800-1200 kwa siku — more than ninavyoona hospitality sector sasa hivi. Sijutii."*
> — James, 34, Mombasa (2021 research interview)

**Fanya hivi:**
1. Soma excerpt mara tatu
2. Andika words/phrases zinazoonekana important
3. Group related ideas pamoja
4. Name each group — hizo ni potential themes

**Sample Themes:**
- *Economic vulnerability na COVID impact*
- *Stigma ya informal work*
- *Resilience na agency*
- *Income comparison: formal vs informal sector*
`
      }
    ]
  },
  {
    sectionId: "rq_02_research_design",
    sectionTitle: "Module 2: Research Design & Qualitative Methodologies",
    lessons: [
      {
        id: "rq-02-case-ethnography",
        title: "Case Study & Ethnography",
        url: "",
        content: `## Overview

**You will learn:**
- How to design case study research with Kenyan examples
- What ethnography involves and when to use it
- Practical application of both methodologies locally

---

## Case Study Research

Case study ni in-depth investigation ya mtu mmoja, organization, event, au phenomenon — looking at it from multiple angles.

### When to Use It
Unataka kuelewa **"how" au "why"** something happened in a specific, real-world context.

### Kenyan Case Study Example: Twiga Foods

**Research Question:** "How did Twiga Foods disrupt informal fresh produce supply chains in Nairobi's informal settlements?"

**Data Sources:**
- Interviews na Twiga delivery agents
- Interviews na mama-lishe wanunuzi
- Documents: Twiga investor reports, news articles
- Observations: Delivery process Kawangware

**What makes this a Case Study:** Unafocus exclusively on **one organization** na unaexamine it kwa kina.

---

## Ethnography

Ethnography ni pale researcher **anaishi ndani ya** community anayoistudy — kwa weeks, months, hata years.

> **Sheng moment:** Ethnography ni kama undercover journalist — unaingia kwa group, unaishi maisha yao, unaona kila kitu kutoka ndani. Si ku-survey watu — ni ku-*become* part yao (temporarily).

### Kenyan Example: Matatu Culture Study

Imagine unafanya ethnography ya **matatu industry Nairobi**:
- Unakaa na crew ya matatu — makanga, dereva — kwa wiki kadhaa
- Unasafiri routes zao: CBD-Kawangware, CBD-Rongai
- Unashiriki mazungumzo, unasimama sehemu wanazokaa
- Unaona: hierarchy ndani ya industry, corruption dynamics na police, loyalty kati ya crews, informal codes za conduct

**This gives you data impossible to get from a survey.**

---

## Key Differences

| | Case Study | Ethnography |
|---|---|---|
| **Focus** | One case, multiple angles | One community, immersive |
| **Duration** | Weeks to months | Months to years |
| **Data** | Docs, interviews, observation | Primarily observation + notes |
| **Goal** | Deep understanding of a case | Understanding culture from inside |
`
      },
      {
        id: "rq-02-grounded-pheno-narrative-action",
        title: "Grounded Theory, Phenomenology, Narrative & Action Research",
        url: "",
        content: `## Overview

**You will learn:**
- Four more qualitative methodologies
- When each is appropriate in a Kenyan research context
- How to write a research proposal using any of these approaches

---

## Grounded Theory

Grounded theory ni methodology inayolenga **kuunda theory mpya** directly kutoka kwa data — si kutest existing theory.

### Process:
\`\`\`
Collect data → Code it →
Compare codes → Develop categories →
Collect more data (theoretical sampling) →
Saturate categories → Build theory
\`\`\`

### Kenyan Example: Boda Boda Economy Theory
Researcher anaanza bila theory yoyote. Anaongea na boda boda operators Thika Road. Kupitia grounded theory process, anaweza develop theory kama:

*"Entry into boda boda work follows a crisis-response pathway triggered by urban unemployment shocks, sustained by social networks of established operators"*

---

## Phenomenology

Phenomenology inashughulikia **lived experience** ya mtu — jinsi kitu kilivyo felt na experienced kutoka ndani.

### Kenyan Example: Living with Diabetes in Rural Rift Valley

**Central question:** "What is the lived experience of managing Type 2 diabetes in rural Nakuru county?"

Unataka kuelewa:
- Emotional experience (shame, denial, acceptance)
- Practical challenges (cost ya medication, distance to hospital)
- Social experience (family reactions, dietary restrictions)
- Spiritual dimension (role ya prayer na traditional healing)

---

## Narrative Research

Narrative research inashughulikia **maisha stories** za watu — jinsi wanavyoeleza experiences zao kama hadithi.

### Kenyan Example: Women in STEM Stories

Research inayochunguza stories za **first-generation university women** studying Computer Science in Kenya — from rural backgrounds:
- Turning points: nini kilisababisha choice ya CS?
- Challenges: stereotypes, family expectations, financial barriers
- Support systems: teachers, mentors, scholarships
- Identity navigation: kuwa *mwanamke wa kisasa* na bado ku-respect tradition

---

## Action Research

Action Research ni pale research inaunganishwa na **direct action ya kubadilisha hali**. Researcher na community wanafanya kazi pamoja.

### Kenyan Example: Water Access in Laikipia

1. **Plan:** Researcher na wananchi wanashirikiana kuidentify problem
2. **Act:** Unatest intervention — e.g., new water committee structure
3. **Observe:** Unaangalia results
4. **Reflect:** Mnajifunza nini? Unabadilisha nini?
5. **Repeat:** Cycle inaendelea

---

## Module 2 Assignment: Research Proposal

**Task:** Andika qualitative research proposal (1-2 pages) kuhusu moja ya topics hizi:

1. **Fintech & Financial Inclusion** — Why do small traders in Gikomba prefer mobile money but avoid formal bank loans?
2. **Youth Unemployment** — Lived experience of educated youth doing menial work in Nairobi
3. **Climate Change** — Farmers' perceptions of changing rainfall patterns in Machakos County
4. **Gender & Tech** — Experiences of women in Kenya's tech startup ecosystem

**Proposal yako should include:**
- Research question
- Chosen methodology (na kwa nini)
- Proposed data collection method
- Sample/participants (who and why)
- Brief ethical considerations
`
      }
    ]
  },
  {
    sectionId: "rq_03_data_collection",
    sectionTitle: "Module 3: Data Collection Methods",
    lessons: [
      {
        id: "rq-03-interviews-focus-groups",
        title: "Interviews & Focus Groups",
        url: "",
        content: `## Overview

**You will learn:**
- Three types of qualitative interviews and when to use each
- How to write an interview guide for a Kenyan context
- Focus group design and facilitation techniques

---

## Interviews

Interviews ni the most common qualitative data collection method. Kuna aina tatu:

| Type | Maana | When to Use |
|---|---|---|
| **Structured** | Maswali fixed — yanafuatana order | Surveys-style, comparison research |
| **Semi-structured** | Guide ya maswali lakini flexible | Most qualitative research |
| **Unstructured** | Mazungumzo ya kawaida — conversation | Exploratory research, ethnography |

---

## Interview Guide Sample — Kenyan Context

**Research Topic:** Digital literacy and mobile money in Kisumu fishing communities

\`\`\`
INTERVIEW GUIDE

Opening (5 mins):
- Niambie kidogo kuhusu wewe — unafanyaje kazi?
- Umekuwa ukitumia simu ya mkononi kwa muda gani?

Core Questions (30-40 mins):
1. Unatumia M-Pesa, Airtel Money, au app nyingine kupokea/kutuma pesa?
   Niambie zaidi kuhusu jinsi unavyoitumia kwa biashara yako.

2. Kulikuwa na wakati gani ulipata ugumu na mobile money?
   Nini kilitokea?

3. Familia yako/majirani wanafikiri nini kuhusu digital payments?

4. Kama ungepewa power ya kubadilisha kitu kimoja kuhusu
   mobile money services, ni kitu gani?

Closing (5 mins):
- Kuna kitu kingine ungetaka kuniambia?
- Je, una maswali yoyote kwangu?
\`\`\`

---

## Focus Groups

Focus groups ni discussions za **watu 6-10** zinazozungumzia topic moja. Researcher ni facilitator.

**Advantage:** Group dynamics zinaweza kuzalisha ideas ambazo individual interviews hazingezalisha.

### Kenyan Focus Group Example

**Topic:** Youth attitudes toward entrepreneurship vs employment in Nairobi

**Participants:** Young people 18-30, mix ya genders, backgrounds (university graduates, TVET graduates, informal workers)

**Sample Discussion Flow:**
\`\`\`
1. Warm up: Kila mtu aseme jina lake na "kazi ya ndoto yake"
2. Opening: "Ukipewa KES 500,000 sasa hivi, unafanya nini?"
3. Core questions:
   - Kwa nini kazi ya serikali bado inashikilia prestige nyingi Kenya?
   - Wenzenu walianza biashara — mnawaambia nini?
   - Nini ni biggest barrier ya kuanza biashara ukiwa young?
4. Closing: Summarize themes — "Nimesikia... je nimeelewa vizuri?"
\`\`\`
`
      },
      {
        id: "rq-03-observations-documents-transcription",
        title: "Observations, Document Analysis & Transcription",
        url: "",
        content: `## Overview

**You will learn:**
- How to conduct systematic observations
- Document analysis techniques for Kenyan media and policy
- Tools for transcribing qualitative data in R

---

## Observations

Observation ni pale unaona na kurekodi behavior/events bila kuingilia.

**Types:**
- **Participant Observation:** Unashiriki (ethnography)
- **Non-participant Observation:** Unaangalia tu (e.g., classroom observation)

### Kenyan Example: Jua Kali Sector

Unafanya observation study ya **metalworkers Kamukunji** — watching their work processes, customer interactions, training of apprentices. Unarekodi:
- Spatial arrangement ya workshop
- Division of labor
- Communication patterns
- Safety practices (au lack thereof)

---

## Document Analysis

Unaanalyze existing documents — reports, newspapers, social media posts, government policies.

### Kenyan Example: Analyzing Huduma Namba Coverage

Unasoma **newspaper articles kutoka Daily Nation, Standard, na The Star** (2018-2019) kuhusu Huduma Namba. Unaangalia:
- Jinsi media ilivyoframe story (positive, negative, neutral?)
- Voices zilizopewa nafasi — government vs civil society vs citizens
- Language iliyotumiwa — "security tool" vs "surveillance state"

---

## Recording and Transcription in R

### Tools za Transcription Kenya:
- **Otter.ai** — automated transcription (Swahili support improving)
- **Whisper (OpenAI)** — free, local, supports Swahili/Sheng audio
- **Manual transcription** — best accuracy, most time-consuming

### R Code: Reading a Transcript

\`\`\`r
# Install packages
install.packages("readr")
library(readr)

# Read a transcript file
transcript <- read_lines("data/interview_james_mombasa.txt")

# Preview first 20 lines
head(transcript, 20)

# Check how many lines
length(transcript)
\`\`\`

---

## Module 3 Assignment: Interview Guide

**Task:** Create a complete interview guide kwa research ya:

**"Understanding why university graduates in Nairobi take up boda boda work"**

Your guide should have:
- Welcome/introduction paragraph (ikijumuisha informed consent)
- 3-4 warm-up questions
- 8-10 core questions (semi-structured style)
- 2-3 closing questions
- Note kuhusu language — will you conduct in Kiswahili, English, au Sheng? Kwa nini?
`
      }
    ]
  },
  {
    sectionId: "rq_04_intro_r",
    sectionTitle: "Module 4: Introduction to R and RStudio",
    lessons: [
      {
        id: "rq-04-install-interface",
        title: "Installing R, RStudio & the Interface",
        url: "",
        content: `## Overview

**You will learn:**
- How to install R and RStudio
- Navigate the four-pane RStudio interface
- Write and run your first R commands

---

## Installing R and RStudio

**Step 1: Install R**
- Nenda: https://cran.r-project.org/
- Chagua "Download R for Windows" au "for macOS"
- Install normally

**Step 2: Install RStudio**
- Nenda: https://posit.co/downloads/
- Download RStudio Desktop (free version)
- Install normally

> **Sheng moment:** Fikiria R kama *engine ya gari* — ndiyo inafanya kazi. RStudio ni *dashboard ya gari* — ndiyo unaona, unacontrol. Unahitaji wote wawili.

---

## The RStudio Interface

\`\`\`
┌───────────────────────┬──────────────────────┐
│                       │    Environment/      │
│   Script Editor       │    History           │
│   (andika code hapa)  │    (variables zako)  │
│                       │                      │
├───────────────────────┼──────────────────────┤
│                       │    Files/Plots/       │
│   Console             │    Packages/Help     │
│   (results zinaonea)  │                      │
│                       │                      │
└───────────────────────┴──────────────────────┘
\`\`\`

**Console** — Run code moja kwa moja hapa, inaexecute immediately

**Script Editor** — Andika script nzima, save, run later

**Environment** — Unaona variables zako zote (data, objects)

**Files/Plots** — Unaona files zako na visualizations

---

## Basic R Commands

\`\`\`r
# Hii ni comment — R haisomi maneno baada ya #

# Basic arithmetic
2 + 2          # Returns 4
10 * 3         # Returns 30
100 / 4        # Returns 25

# Create variables
jina <- "Wanjiku"
umri <- 24
bei_unga <- 210  # KES per 2kg unga wa Jogoo

# Print variable
print(jina)
cat("Jina lake ni:", jina, "ana miaka", umri, "\\n")

# Vectors (list ya values)
miji <- c("Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret")
temperatures <- c(22, 28, 29, 18, 20)

# Access elements
miji[1]         # "Nairobi"
miji[3]         # "Kisumu"

# Basic functions
length(miji)        # 5
mean(temperatures)  # Average temperature
max(temperatures)   # Hottest city
min(temperatures)   # Coolest city
\`\`\`
`
      },
      {
        id: "rq-04-packages-workflows",
        title: "Packages, Project Structure & Basic Assignment",
        url: "",
        content: `## Overview

**You will learn:**
- Install and load R packages
- Understand reproducible project folder structure
- Complete your first R data exercise with Kenyan city data

---

## Installing and Loading Packages

> **Sheng moment:** R packages ni kama *apps kwa simu yako*. R ya base ni phone yenyewe. Packages zinaongeza uwezo — kama WhatsApp inaongeza messaging, tidyverse inaongeza data manipulation powers.

\`\`\`r
# Install packages (fanya mara moja tu)
install.packages("tidyverse")   # Data wrangling + ggplot2
install.packages("readxl")      # Read Excel files — MUHIMU SANA
install.packages("writexl")     # Write back to Excel
install.packages("openxlsx")    # Advanced Excel (multiple sheets)
install.packages("janitor")     # Clean messy Excel headers
install.packages("tidytext")    # Text analysis
install.packages("wordcloud")   # Word clouds

# Load packages (fanya kila session)
library(tidyverse)
library(readxl)
library(writexl)
library(janitor)
library(tidytext)

# Get help on a function
?read_excel
help(clean_names)
\`\`\`

---

## Reproducible Project Structure

**Create a project kwa qualitative research yako:**

\`\`\`
📁 my_qualitative_research/
├── 📁 data/
│   ├── 📁 raw/          # Original transcripts — NEVER edit these
│   └── 📁 processed/    # Cleaned data
├── 📁 scripts/
│   ├── 01_import.R
│   ├── 02_clean.R
│   ├── 03_code.R
│   └── 04_visualize.R
├── 📁 outputs/
│   ├── 📁 figures/
│   └── 📁 reports/
└── README.md
\`\`\`

**In RStudio:** File → New Project → New Directory → New Project

---

## Module 4 Assignment: Kenyan Cities Data Exercise

\`\`\`r
# 1. Create data about Kenyan cities
mji <- c("Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret",
         "Thika", "Kitale", "Garissa", "Nyeri", "Malindi")

idadi_watu <- c(4397073, 1208333, 610082, 421000, 289000,
                279849, 117840, 160814, 133530, 57605)

kanda <- c("Central", "Coast", "Nyanza", "Rift Valley", "Rift Valley",
           "Central", "Rift Valley", "North Eastern", "Central", "Coast")

# 2. Create a dataframe
miji_kenya <- data.frame(
  mji = mji,
  idadi_watu = idadi_watu,
  kanda = kanda
)

# 3. Explore the data
print(miji_kenya)
nrow(miji_kenya)     # Miji mingapi?
ncol(miji_kenya)     # Columns mingapi?
str(miji_kenya)      # Structure ya data
summary(miji_kenya)  # Summary statistics

# 4. Which city has the highest population?
miji_kenya[which.max(miji_kenya\\$idadi_watu), ]

# 5. Filter — cities with population > 300,000
kubwa <- miji_kenya[miji_kenya\\$idadi_watu > 300000, ]
print(kubwa)
\`\`\`
`
      }
    ]
  },
  {
    sectionId: "rq_05_working_with_data",
    sectionTitle: "Module 5: Working with Qualitative Data in R",
    lessons: [
      {
        id: "rq-05-reading-excel",
        title: "Reading Excel Files with readxl",
        url: "",
        content: `## Overview

**You will learn:**
- Import Excel (.xlsx) files into R
- Read specific sheets by name
- Loop over all sheets automatically using purrr

---

## File Formats We Will Use

| Format | Description | R Package | R Function |
|---|---|---|---|
| \`.xlsx\` | Excel workbook (most common) | \`readxl\` | \`read_excel()\` |
| \`.csv\` | Comma-separated values | \`readr\` | \`read_csv()\` |
| \`.xls\` | Old Excel format | \`readxl\` | \`read_xls()\` |

---

## Basic Excel Import

\`\`\`r
library(readxl)

# Read first sheet (default)
interviews <- read_excel("data/raw/interviews_nairobi.xlsx")

# Preview
head(interviews)
glimpse(interviews)
nrow(interviews)   # How many responses?
ncol(interviews)   # How many columns?
\`\`\`

---

## Reading a Specific Sheet

Excel files mara nyingi zina multiple sheets — e.g., kila county iko sheet yake.

\`\`\`r
# See all sheet names kwanza
excel_sheets("data/raw/interviews_all_counties.xlsx")
# Output: [1] "Nairobi" "Mombasa" "Kisumu" "Nakuru" "Eldoret"

# Read specific sheet
nairobi <- read_excel("data/raw/interviews_all_counties.xlsx", sheet = "Nairobi")
mombasa <- read_excel("data/raw/interviews_all_counties.xlsx", sheet = "Mombasa")
kisumu  <- read_excel("data/raw/interviews_all_counties.xlsx", sheet = "Kisumu")

# Combine all sheets into one dataframe
all_interviews <- bind_rows(
  nairobi %>% mutate(county = "Nairobi"),
  mombasa %>% mutate(county = "Mombasa"),
  kisumu  %>% mutate(county = "Kisumu")
)

nrow(all_interviews)
table(all_interviews\\$county)
\`\`\`

---

## Loop — Read ALL Sheets Automatically

\`\`\`r
# Fanya hii kama sheets ni nyingi sana
file_path <- "data/raw/interviews_all_counties.xlsx"

all_sheets <- excel_sheets(file_path)

all_data <- map_dfr(all_sheets, function(sheet_name) {
  read_excel(file_path, sheet = sheet_name) %>%
    mutate(county = sheet_name)  # Ongeza column ya county
})

print(all_data)
\`\`\`

---

## The Typical Kenyan Research Excel Structure

\`\`\`
Column A    | Column B      | Column C | Column D | Column E
------------|---------------|----------|----------|------------------
ID          | Jina          | Jinsia   | Kaunti   | Jibu la Swali
INT001      | Kamau M.      | Mwanaume | Nairobi  | Nilianza hii kazi...
INT002      | Atieno A.     | Mwanamke | Kisumu   | Biashara ilikuwa...
\`\`\`

\`\`\`r
# Access column yenye space kwa backticks
data\\$\`Jibu la Swali Kuu\`
\`\`\`
`
      },
      {
        id: "rq-05-excel-problems",
        title: "Handling Common Excel Problems",
        url: "",
        content: `## Overview

**You will learn:**
- Fix messy column names with janitor
- Handle merged headers, date serial numbers, empty rows
- Resolve encoding issues with Swahili/special characters

---

## Common Excel Problems

> **Sheng moment:** Excel ni *mama wa confusion* kwa R. Mtu anaweza kutengeneza Excel yenye merged cells, colored headers, empty rows, dates zisizo standard — na R itakataa au itapata data mbaya.

**Common issues:**
- Column names zina spaces: "Participant Name", "Date of Interview"
- Excel date serial numbers: 44927 instead of 2023-01-01
- Empty rows and columns from accidental Enter presses
- Mixed data types in a column: "32", "thirty", "N/A"

---

## Problem 1: Messy Column Names

\`\`\`r
library(janitor)

# Raw import — column names zina spaces na caps
raw <- read_excel("data/raw/interviews.xlsx")
names(raw)
# [1] "Participant ID" "Full Name" "Date of Interview" "County/Region"

# Fix with janitor::clean_names()
clean <- raw %>% clean_names()
names(clean)
# [1] "participant_id" "full_name" "date_of_interview" "county_region"

# Now unaweza access columns bila backticks
clean\\$participant_id
clean\\$response_main_question
\`\`\`

---

## Problem 2: Merged Header Rows

\`\`\`r
# Skip merged header rows na start from real data
data <- read_excel("data/raw/interviews.xlsx",
                   skip = 2,        # Skip first 2 rows
                   col_names = TRUE) # Row 3 becomes column names

# Au specify column names manually
data <- read_excel("data/raw/interviews.xlsx",
                   skip = 2,
                   col_names = c("id", "name", "county",
                                  "interview_date", "response"))
\`\`\`

---

## Problem 3: Excel Date Serial Numbers

\`\`\`r
# Tatizo: date column inakuja kama numbers
data\\$interview_date
# [1] 44927 44932 44945  — hizi ni Excel serial numbers!

# Fix: convert properly using janitor
data <- data %>%
  mutate(interview_date = janitor::excel_numeric_to_date(interview_date))

data\\$interview_date
# [1] "2023-01-01" "2023-01-06" "2023-01-19"
\`\`\`

---

## Problem 4: Empty Rows and Columns

\`\`\`r
# Au use janitor (easiest)
data_clean <- data %>%
  remove_empty(which = c("rows", "cols"))

nrow(data)        # Before
nrow(data_clean)  # After — empty rows zimeenda
\`\`\`

---

## Problem 5: Mixed Data Types in a Column

\`\`\`r
# Column "age" iko na: 32, "thirty", "N/A", NA, "28 years"
data <- data %>%
  mutate(
    age_clean = as.numeric(str_extract(age, "\\\\d+")),
    age_clean = na_if(age_clean, 0)
  )
\`\`\`

---

## Module 5 Assignment: Import & Combine Excel Data

**Setup — Create \`field_data.xlsx\` na sheets 3:**
- Sheet 1: "Nairobi" — 5 interview rows
- Sheet 2: "Mombasa" — 4 interview rows
- Sheet 3: "Kisumu" — 3 interview rows

**Columns:** \`ID | Jina | Jinsia | Umri | Kazi | Jibu\`

**R Script tasks:**
1. Read all 3 sheets na combine into one dataframe
2. Use \`clean_names()\` to fix column names
3. Remove any empty rows/columns
4. Print: total interviews, breakdown by county, breakdown by gender
5. Save combined clean data as both \`.csv\` AND \`.xlsx\`
`
      }
    ]
  },
  {
    sectionId: "rq_06_data_cleaning",
    sectionTitle: "Module 6: Data Cleaning and Preparation",
    lessons: [
      {
        id: "rq-06-cleaning-pipeline",
        title: "Complete Excel Cleaning Pipeline",
        url: "",
        content: `## Overview

**You will learn:**
- Build a full cleaning pipeline for Excel qualitative data
- Handle the 8 most common cleaning tasks in Kenyan research datasets
- Generate a quality report after cleaning

---

## Why Clean Qualitative Data from Excel?

Excel files kutoka field researchers mara nyingi zina problems hizi:

\`\`\`
❌ Column names zina spaces: "Participant Name", "Date of Interview"
❌ Inconsistent text:  "nairobi" vs "Nairobi" vs "NAIROBI"
❌ Filler words: "eeh", "umm", "unaelewa?"
❌ Extra whitespace:   "  Kamau Njoroge  "
❌ Mixed languages/abbreviations: "M", "Male", "mwanaume", "1"
❌ Empty cells ndani ya response column
❌ Duplicate entries
❌ Inconsistent date formats: "15/03/2024" vs "March 15"
\`\`\`

---

## Complete Excel Cleaning Pipeline

\`\`\`r
library(readxl)
library(janitor)
library(tidyverse)
library(stringr)

# ── STEP 1: IMPORT ─────────────────────────────────────────────
raw <- read_excel("data/raw/field_interviews.xlsx") %>%
  clean_names() %>%
  remove_empty(c("rows","cols"))

cat("Raw data:", nrow(raw), "rows,", ncol(raw), "columns\\n")

# ── STEP 2: STANDARDIZE TEXT COLUMNS ────────────────────────────
clean <- raw %>%
  mutate(
    across(where(is.character), str_trim),
    county = str_to_title(county),   # "nairobi" → "Nairobi"
    gender = case_when(
      str_to_lower(gender) %in% c("m", "male", "mwanaume", "1") ~ "Male",
      str_to_lower(gender) %in% c("f", "female", "mwanamke", "2") ~ "Female",
      TRUE ~ NA_character_
    ),
    occupation = str_to_lower(str_trim(occupation))
  )

# ── STEP 3: CLEAN RESPONSE TEXT ─────────────────────────────────
clean <- clean %>%
  mutate(
    response_clean = response,
    response_clean = str_remove_all(response_clean,
      "\\\\b(eeh+|umm+|aaah+|sema|unaelewa|unaona|naskia|si hivyo|yaani)\\\\b"),
    response_clean = str_squish(response_clean),
    word_count_clean = str_count(response_clean, "\\\\S+")
  )

# ── STEP 4: FIX DATES ───────────────────────────────────────────
clean <- clean %>%
  mutate(
    interview_date = janitor::excel_numeric_to_date(as.numeric(interview_date))
  )

# ── STEP 5: REMOVE DUPLICATES ───────────────────────────────────
clean <- clean %>% distinct()

# ── STEP 6: QUALITY SUMMARY ─────────────────────────────────────
cat("\\n── DATA QUALITY REPORT ────────────────────\\n")
cat("Total interviews:", nrow(clean), "\\n")
cat("Counties:\\n"); print(table(clean\\$county))
cat("Gender breakdown:\\n"); print(table(clean\\$gender))

# ── STEP 7: SAVE CLEAN DATA ──────────────────────────────────────
write_csv(clean, "data/processed/interviews_clean.csv")
cat("✅ Saved: data/processed/interviews_clean.csv\\n")
\`\`\`
`
      },
      {
        id: "rq-06-missing-data",
        title: "Handling Missing Data & Before/After Comparison",
        url: "",
        content: `## Overview

**You will learn:**
- Identify and document missing data patterns
- Build a before vs after cleaning comparison report
- Make evidence-based decisions about missing responses

---

## Standardizing Inconsistent Text

\`\`\`r
# See all unique values ya county column
sort(unique(clean\\$county))
# "nairobi" "Nairobi" "NAIROBI" "Nrb" "Nbi"
# "mombasa" "Mombasa" "MSA"

# Fix using case_when
clean <- clean %>%
  mutate(county = case_when(
    str_to_lower(county) %in% c("nairobi", "nrb", "nbi") ~ "Nairobi",
    str_to_lower(county) %in% c("mombasa", "msa")        ~ "Mombasa",
    str_to_lower(county) %in% c("kisumu", "ksm", "kisumo") ~ "Kisumu",
    str_to_lower(county) %in% c("nakuru", "nkr")         ~ "Nakuru",
    TRUE ~ str_to_title(county)
  ))
\`\`\`

---

## Handling Missing Data

\`\`\`r
# View Missing Data Pattern
missing_summary <- clean %>%
  summarise(across(everything(), ~sum(is.na(.)))) %>%
  pivot_longer(everything(), names_to = "column", values_to = "missing_count") %>%
  filter(missing_count > 0) %>%
  mutate(pct_missing = round(missing_count / nrow(clean) * 100, 1)) %>%
  arrange(desc(missing_count))

print(missing_summary)

# Decision Framework:
# 1. Missing RESPONSE — exclude from analysis
# 2. Missing AGE — keep row, note in analysis
# 3. Missing DATE — keep row, note limitation

# Document missing in an audit trail
missing_responses <- clean %>%
  filter(is.na(response) | str_trim(response) == "") %>%
  select(id, county, interview_date) %>%
  mutate(reason = "Response not recorded — participant declined")

write_csv(missing_responses, "outputs/audit_trail/missing_responses_log.csv")
\`\`\`

---

## Before vs After Cleaning Comparison

\`\`\`r
comparison <- tibble(
  metric = c("Total rows", "Duplicate rows", "Missing responses",
             "County name variants", "Gender inconsistencies"),
  before_cleaning = c(
    nrow(raw),
    nrow(raw) - nrow(raw %>% distinct()),
    sum(is.na(raw\\$response) | raw\\$response == ""),
    n_distinct(raw\\$county),
    n_distinct(raw\\$gender)
  ),
  after_cleaning = c(
    nrow(clean),
    0,
    sum(is.na(clean\\$response) | clean\\$response == ""),
    n_distinct(clean\\$county),
    n_distinct(clean\\$gender)
  )
)

print(comparison)
write_csv(comparison, "outputs/cleaning_report.csv")
\`\`\`

---

## Module 6 Assignment: Full Excel Cleaning

**Create \`messy_interviews.xlsx\`** with these intentional issues:
- INT001 is a duplicate row
- INT002 age is text ("thirty")
- INT004 has no response or age
- Dates are serial numbers, text, and mixed formats
- County names are inconsistent (nairobi, KISUMU, Msa)
- Gender is inconsistent (M, Female, mwanamke, F)
- Filler words present (eeh, umm, yaani)

**Task:** Andika complete cleaning script inayofix problems zote na kutoa cleaning report.
`
      }
    ]
  },
  {
    sectionId: "rq_07_coding",
    sectionTitle: "Module 7: Coding Qualitative Data",
    lessons: [
      {
        id: "rq-07-coding-types",
        title: "What is Coding & Types of Coding",
        url: "",
        content: `## Overview

**You will learn:**
- What qualitative coding means and why it matters
- Four types of coding: open, axial, selective, in-vivo
- How to recognize codes in real Kenyan interview data

---

## What is Coding?

Coding ni process ya **kuweka labels kwa segments za data** — sentences, paragraphs, au passages — ambazo zinashare common concept.

> **Sheng moment:** Fikiria coding kama ku-tag tweets. Ukiona tweet inasema "KPLC tena imekata umeme", unaitag: *#Frustration* na *#Infrastructure*. Qualitative coding ni hiyo — lakini kwa interview data, na kwa depth zaidi.

---

## Types of Coding

### Open Coding (First Pass)
Unasoma data na unaandika codes za kwanza ukiwa free-minded.

**Example excerpt:**
> *"Kila siku naenda stendi saa kumi alfajiri. Nakaa huko hadi usiku. Wakati mwingine sipata hata KES 200 baada ya kulipa rent ya bodaboda. Familia wanategemea mimi peke yangu."*

**Open codes:**
- \`long_working_hours\`
- \`income_uncertainty\`
- \`debt_pressure\` (bodaboda rent)
- \`sole_breadwinner\`
- \`financial_stress\`

---

### Axial Coding (Second Pass)
Unaorganize codes za open coding — unaona relationships kati ya codes.

\`\`\`
Category: ECONOMIC PRESSURE
├── income_uncertainty
├── debt_pressure
├── financial_stress
└── sole_breadwinner

Category: WORK CONDITIONS
├── long_working_hours
├── physical_exposure
└── no_days_off
\`\`\`

---

### Selective Coding (Third Pass)
Unachagua **core category** inayounganisha kila kitu.

**Core category example:** \`Survival strategies among urban informal transport workers\`

---

### In-Vivo Coding
Kutumia maneno ya mshiriki wenyewe kama code name.

**Participant's words:** *"Hii kazi ni kuishi leo, leo tu"*

**In-vivo code:** \`kuishi leo leo\` — captures the exact sentiment better than any researcher-generated label
`
      },
      {
        id: "rq-07-codebook-r",
        title: "Creating a Codebook & Applying Codes in R",
        url: "",
        content: `## Overview

**You will learn:**
- Build a formal codebook as a tibble
- Apply codes to Excel-sourced data using keyword detection
- Generate a code frequency summary

---

## Creating a Codebook in R

\`\`\`r
library(tidyverse)

codebook <- tibble(
  code_id = c("EC01", "EC02", "EC03", "WC01", "WC02", "RS01", "RS02"),
  code_name = c(
    "income_uncertainty",
    "debt_pressure",
    "sole_breadwinner",
    "long_working_hours",
    "physical_exposure",
    "community_support",
    "family_remittances"
  ),
  category = c(
    "Economic Pressure", "Economic Pressure", "Economic Pressure",
    "Work Conditions", "Work Conditions",
    "Resilience Strategies", "Resilience Strategies"
  ),
  definition = c(
    "Participant expresses uncertainty about daily/weekly income",
    "Participant mentions owing money for vehicle/equipment rental or loans",
    "Participant identifies self as primary/only income earner",
    "Participant describes working 10+ hours daily or 7 days/week",
    "Participant mentions health risks from weather, dust, physical strain",
    "Participant mentions support from neighbors, sacco, or community groups",
    "Participant mentions sending money to rural family or dependents"
  )
)

write_csv(codebook, "outputs/codebook.csv")
print(codebook %>% select(code_id, code_name, category))
\`\`\`

---

## Applying Codes to Excel Data

\`\`\`r
library(readxl)
library(janitor)
library(tidyverse)

# Load cleaned Excel data
interviews <- read_excel("data/processed/interviews_clean.xlsx") %>%
  clean_names()

# Keyword-based coding on the response column
interviews_coded <- interviews %>%
  mutate(
    code_income_uncertainty = str_detect(
      str_to_lower(response),
      "sipati|uncertainty|pesa kidogo|siku ngumu|bila kazi"
    ),
    code_debt_pressure = str_detect(
      str_to_lower(response),
      "deni|loan|mkopo|kulipa|rent ya"
    ),
    code_community_support = str_detect(
      str_to_lower(response),
      "sacco|chama|wenzangu|tunasaidiana|jirani"
    ),
    code_digital_distrust = str_detect(
      str_to_lower(response),
      "nilidanganywa|waliiba|fraud|siwaamini|ninaogopa app"
    )
  )

# Code frequency summary
code_summary <- interviews_coded %>%
  summarise(
    income_uncertainty_n  = sum(code_income_uncertainty, na.rm = TRUE),
    debt_pressure_n       = sum(code_debt_pressure, na.rm = TRUE),
    community_support_n   = sum(code_community_support, na.rm = TRUE),
    digital_distrust_n    = sum(code_digital_distrust, na.rm = TRUE)
  ) %>%
  pivot_longer(everything(), names_to = "code", values_to = "count") %>%
  mutate(pct = round(count / nrow(interviews_coded) * 100))

print(code_summary)

# Save coded data back to Excel
write_xlsx(interviews_coded, "data/processed/interviews_coded.xlsx")
\`\`\`

---

## Module 7 Assignment: Develop Coding Framework

**Dataset:** Use this mini dataset of 10 interview responses kuhusu digital banking na unbanked Kenyans.

\`\`\`r
responses <- tibble(
  id = paste0("INT0", 1:10),
  response = c(
    "Sijawahi ingia benki maishani. Fees zao ni nyingi sana.",
    "Equity ndio nilianza — kwa sababu hawakuwa na minimum balance.",
    "Natumia M-Pesa tu. Ninaweza kutuma pesa shule ya mtoto.",
    "Benki hazielewi watu kama sisi. Unahitaji payslip, ID, guarantor.",
    "Nilijaribu Fuliza mara moja. Baadaye nilikuta interest kubwa sana.",
    "KCB M-Pesa imenisaidia sana. Hii ni financial freedom kweli.",
    "Siamini apps za pesa. Mwenzangu alivamiwa data.",
    "Shangazi yangu hafanyi biashara bila agency banking.",
    "Mimi bado natumia chama ya akiba. Kila Jumamosi tunakusanyika.",
    "Utalii uliniua — hakuna mtalii, hakuna kazi."
  )
)
\`\`\`

**Task:**
1. Develop codebook ya angalau 8 codes (na definitions)
2. Apply codes kwa dataset
3. Summarize: codes zipi zinaonekana mara nyingi zaidi?
`
      }
    ]
  },
  {
    sectionId: "rq_08_thematic_analysis",
    sectionTitle: "Module 8: Thematic Analysis",
    lessons: [
      {
        id: "rq-08-braun-clarke",
        title: "What is Thematic Analysis & Braun & Clarke's Six Phases",
        url: "",
        content: `## Overview

**You will learn:**
- The purpose and definition of thematic analysis
- Braun & Clarke's six-phase framework
- How to apply it systematically to Kenyan qualitative data

---

## What is Thematic Analysis?

Thematic Analysis (TA) ni moja ya most popular qualitative analysis methods. Inaidentify, analyze, na interpret **patterns of meaning (themes)** katika data.

> **Sheng moment:** Codes ni kama individual LEGO pieces. Themes ni kama structure unayojenga na pieces hizo. Code \`income_uncertainty\` + \`debt_pressure\` + \`no_savings\` zote zinaunganika kutengeneza theme kubwa ya *"Financial Precarity Among Informal Workers"*.

---

## Braun & Clarke's Six-Phase Process

### Phase 1: Familiarization
- Soma data mara nyingi. Andika initial thoughts.
- Kenya context: Simama na interview — sikiliza recording tena.

### Phase 2: Initial Coding
- Code kila interesting thing katika data.
- Kenya context: Code kwa Swahili au English — whichever captures meaning better.

### Phase 3: Searching for Themes
- Angalia codes na group related ones together.
- Kenya context: Unaweza kugundua theme ambayo specific to Kenyan experience.

### Phase 4: Reviewing Themes
- Check: Je, theme hii inasupported na data? Is it distinct?
- Kenya context: Pata mtu mwingine (peer review) kusoma na kukuambia anaona nini.

### Phase 5: Defining and Naming Themes
- Write clear definition ya kila theme.
- Kenya context: Name themes kwa language inayoakisi participants — in-vivo names ni powerful.

### Phase 6: Producing the Report
- Write up findings na quotes za supporting evidence.
- Kenya context: Include Swahili quotes with English translations.

---

## Thematic Analysis in R

\`\`\`r
library(tidyverse)
library(tidytext)

# Load coded interviews
interviews <- read_csv("data/processed/interviews_coded.csv")

# Step 1: Unnest tokens
interview_words <- interviews %>%
  unnest_tokens(word, response)

# Step 2: Remove stop words (Swahili + English)
swahili_stopwords <- c(
  "na", "ya", "wa", "ni", "kwa", "la", "za", "katika",
  "pia", "lakini", "au", "hata", "kama", "ndiyo", "hapana",
  "sana", "sasa", "hapa", "pale", "yule", "huyu", "hizi"
)

interview_words_clean <- interview_words %>%
  filter(!word %in% swahili_stopwords) %>%
  filter(!word %in% stop_words\\$word) %>%
  filter(str_length(word) > 2)

# Step 3: Count word frequencies
word_freq <- interview_words_clean %>%
  count(word, sort = TRUE)

head(word_freq, 20)
\`\`\`
`
      },
      {
        id: "rq-08-theme-map",
        title: "Building a Theme Map & Assignment",
        url: "",
        content: `## Overview

**You will learn:**
- Create a structured theme map tibble
- Document theme definitions, supporting codes, and participant counts
- Export the theme map for use in your report

---

## Building a Theme Map in R

\`\`\`r
theme_map <- tibble(
  theme = c(
    "Financial Precarity",
    "Digital Trust Deficit",
    "Informal Safety Nets",
    "Agency and Empowerment"
  ),
  description = c(
    "Participants describe constant uncertainty about income, debt cycles, and inability to save",
    "Distrust of digital financial systems due to personal or network fraud experiences",
    "Reliance on traditional savings groups (chama), family networks, and community borrowing",
    "Participants who express control over financial choices and positive agency"
  ),
  supporting_codes = c(
    "income_uncertainty, debt_pressure, no_savings, daily_hustle",
    "fraud_experience, data_theft, bank_distrust, app_anxiety",
    "chama_participation, family_support, neighbor_lending, sacco_membership",
    "own_choice, positive_outcome, self_efficacy, financial_planning"
  ),
  n_participants_with_theme = c(8, 6, 7, 4),
  sample_quote = c(
    "Siku ya Jumamosi ndiyo wiki nzuri — lakini Jumatatu tena mwanzo",
    "Mwenzangu alivamiwa data — tangu hapo mimi ntumie cash tu",
    "Chama yetu ni benki yetu — tunajuana, tunaamini",
    "Leo nina akili — ninajua pesa yangu inaenda wapi"
  )
)

write_csv(theme_map, "outputs/theme_map.csv")
print(theme_map)
\`\`\`

---

## Reading the Theme Map

Once you have your theme map, you can summarize patterns:

\`\`\`r
# Which themes are most prevalent?
theme_map %>%
  arrange(desc(n_participants_with_theme)) %>%
  select(theme, n_participants_with_theme)

# Add percentage
theme_map %>%
  mutate(pct = round(n_participants_with_theme / 10 * 100)) %>%
  arrange(desc(pct))
\`\`\`

---

## Module 8 Assignment: Thematic Analysis

**Using the dataset from Module 7** (10 banking responses):

1. Read all 10 responses carefully
2. Identify angalau **3 major themes**
3. Kwa kila theme:
   - Write a clear definition (2-3 sentences)
   - List supporting codes
   - Provide 2 example quotes from data
   - Count: how many participants expressed this theme?
4. Create \`theme_map\` tibble na save kama CSV
5. **Bonus:** Create a bar chart showing number of participants per theme
`
      }
    ]
  },
  {
    sectionId: "rq_09_content_analysis",
    sectionTitle: "Module 9: Content Analysis",
    lessons: [
      {
        id: "rq-09-content-analysis",
        title: "Content Analysis — Theory & Practice in R",
        url: "",
        content: `## Overview

**You will learn:**
- The difference between manifest and latent content analysis
- Apply systematic content analysis to Kenyan media texts in R
- Measure positive vs negative framing by source

---

## What is Content Analysis?

Content analysis ni systematic method ya analyzing **written, verbal, au visual communication** — newspapers, social media, speeches, policy documents.

**Two types:**
- **Manifest content** — what is literally said/written (obvious, countable)
- **Latent content** — deeper meaning, subtext, implied messages

### Kenyan Example: Budget Speech Analysis

**Manifest:** "We allocate KES 50 billion to the healthcare sector" — factual, countable

**Latent:** Which communities are mentioned? Which are absent? Whose needs are centered?

---

## Content Analysis in R

\`\`\`r
library(tidyverse)
library(tidytext)

# Kenyan newspaper articles kuhusu Hustler Fund
articles <- tibble(
  article_id = 1:6,
  source = c("Daily Nation", "The Star", "Standard",
             "Daily Nation", "Business Daily", "Citizen TV"),
  date = as.Date(c("2022-12-01", "2022-12-05", "2022-12-10",
                   "2023-01-15", "2023-02-20", "2023-03-01")),
  text = c(
    "The Hustler Fund has disbursed over KES 10 billion to millions of Kenyans. President Ruto praised the fund as transformative for the common mwananchi.",
    "Critics question sustainability of Hustler Fund as repayment rates fall below 50 percent.",
    "Small traders in Eastleigh say Hustler Fund helped them survive tough times.",
    "Hustler Fund reaches 15 million Kenyans in first year. Opposition calls for independent audit.",
    "Financial analysts note that Hustler Fund interest rates at 8 percent annually are competitive.",
    "Youth in Kibera access Hustler Fund for small ventures. Stories of success and debt both emerging."
  )
)

# Tokenize and analyze
article_words <- articles %>%
  unnest_tokens(word, text) %>%
  filter(!word %in% stop_words\\$word) %>%
  filter(str_length(word) > 2)

# Top 20 words
word_freq <- article_words %>%
  count(word, sort = TRUE) %>%
  head(20)

print(word_freq)
\`\`\`

---

## Framing Analysis by Source

\`\`\`r
positive_words <- c("success", "transformative", "helped", "access", "competitive")
negative_words <- c("critics", "risk", "debt", "unsustainable", "inadequate")

# Sentiment framing by source
articles %>%
  mutate(
    positive_framing = str_count(str_to_lower(text),
                                  paste(positive_words, collapse = "|")),
    negative_framing = str_count(str_to_lower(text),
                                  paste(negative_words, collapse = "|"))
  ) %>%
  select(source, positive_framing, negative_framing) %>%
  print()
\`\`\`

---

## Module 9 Assignment: Policy Document Analysis

**Task:** Analyze kitu kimoja kati ya hizi (choose one):
1. 10 tweets/posts kuhusu #HustlerFund au #AffordableHousing (simulate if needed)
2. 5 newspaper headlines kuhusu drought in Northern Kenya (2022-2023)
3. 5 paragraphs from Kenya's current health sector policy document

**Analysis:**
1. Count most frequent words (excluding stopwords)
2. Identify top 5 themes/categories kwa manifest content
3. Write 1 paragraph kuhusu latent content — what's NOT said? Whose voices are missing?
4. Create frequency table na bar chart
`
      }
    ]
  },
  {
    sectionId: "rq_10_text_mining",
    sectionTitle: "Module 10: Text Mining for Qualitative Research",
    lessons: [
      {
        id: "rq-10-tokenization-frequencies",
        title: "Tokenization & Word Frequencies",
        url: "",
        content: `## Overview

**You will learn:**
- Tokenize text at word and sentence levels
- Generate and visualize word frequency tables
- Remove Swahili and English stopwords effectively

---

## Tokenization

Tokenization ni process ya kuvunja text into individual units (words, sentences, n-grams).

\`\`\`r
library(tidytext)
library(tidyverse)

# Sample political speech (Kenyan context)
speech <- tibble(
  paragraph = 1:4,
  text = c(
    "Ndugu wananchi, tumekusanyika leo kuzungumza kuhusu mustakabali wa taifa letu.",
    "Serikali yangu imejipanga kuhakikisha kila mwananchi anapata elimu bora.",
    "Hatua za kiuchumi zimechukuliwa ili kuboresha maisha ya watu wa kawaida.",
    "Pamoja, tutajenga Kenya mpya — Kenya ya tunu, Kenya ya furaha."
  )
)

# Word-level tokenization
words <- speech %>%
  unnest_tokens(word, text)

# Sentence-level tokenization
sentences <- speech %>%
  unnest_tokens(sentence, text, token = "sentences")

# N-gram tokenization (bigrams)
bigrams <- speech %>%
  unnest_tokens(bigram, text, token = "ngrams", n = 2)

bigrams %>%
  count(bigram, sort = TRUE) %>%
  head(10)
\`\`\`

---

## Word Frequencies

\`\`\`r
interviews <- read_csv("data/processed/interviews_clean.csv")

swahili_stopwords <- c("na", "ya", "wa", "ni", "kwa", "la", "za",
                        "katika", "pia", "lakini", "au", "hata", "kama")

word_freq <- interviews %>%
  unnest_tokens(word, response) %>%
  filter(!word %in% stop_words\\$word) %>%
  filter(!word %in% swahili_stopwords) %>%
  count(word, sort = TRUE)

# Bar chart
top30 <- head(word_freq, 30)

ggplot(top30, aes(x = reorder(word, n), y = n)) +
  geom_col(fill = "#006600") +  # Kenyan green
  coord_flip() +
  labs(
    title = "Most Common Words in Interview Data",
    subtitle = "Qualitative Research — Nairobi Informal Sector Study",
    x = "Word",
    y = "Frequency"
  ) +
  theme_minimal()
\`\`\`
`
      },
      {
        id: "rq-10-ngrams-sentiment",
        title: "N-Grams Analysis & Sentiment Analysis",
        url: "",
        content: `## Overview

**You will learn:**
- Analyze word pairs (bigrams) to find co-occurring concepts
- Apply English sentiment lexicons to qualitative data
- Build a custom Swahili sentiment lexicon

---

## N-Grams Analysis

\`\`\`r
# Bigrams analysis — what words go together?
bigrams_clean <- interviews %>%
  unnest_tokens(bigram, response, token = "ngrams", n = 2) %>%
  separate(bigram, c("word1", "word2"), sep = " ") %>%
  filter(!word1 %in% stop_words\\$word,
         !word2 %in% stop_words\\$word,
         !word1 %in% c("na", "ya", "wa", "ni"),
         !word2 %in% c("na", "ya", "wa", "ni")) %>%
  count(word1, word2, sort = TRUE)

head(bigrams_clean, 15)

# Reunite bigrams for display
bigrams_united <- bigrams_clean %>%
  unite(bigram, word1, word2, sep = " ")

head(bigrams_united, 15)
\`\`\`

---

## Sentiment Analysis

> **Important note:** Sentiment lexicons zote zimeundwa kwa English. Kwa Swahili/Sheng data, utahitaji ku-create custom lexicon au ku-translate first.

\`\`\`r
library(tidytext)

# Apply to English interviews
english_interviews <- tibble(
  id = 1:5,
  text = c(
    "The program was wonderful and helped many families access clean water",
    "People are suffering due to corruption and mismanagement of funds",
    "The health center was finally built and now mothers can deliver safely",
    "Youth unemployment is devastating and causing hopelessness in communities",
    "Community leaders are working hard to solve the garbage collection crisis"
  )
)

sentiment_analysis <- english_interviews %>%
  unnest_tokens(word, text) %>%
  inner_join(get_sentiments("bing"), by = "word") %>%
  count(id, sentiment) %>%
  pivot_wider(names_from = sentiment, values_from = n, values_fill = 0) %>%
  mutate(net_sentiment = positive - negative)

print(sentiment_analysis)
\`\`\`

---

## Custom Swahili Sentiment Lexicon

\`\`\`r
swahili_sentiment <- tibble(
  word = c("furaha", "mafanikio", "msaada", "upendo", "amani",
           "shida", "umaskini", "hofu", "hasira", "udhalimu"),
  sentiment = c("positive", "positive", "positive", "positive", "positive",
                "negative", "negative", "negative", "negative", "negative"),
  score = c(3, 4, 3, 4, 4, -3, -4, -3, -3, -4)
)
\`\`\`

---

## Module 10 Assignment: Word Frequency Analysis

**Dataset:** Use Module 7 banking responses (10 responses)

**Tasks:**
1. Tokenize all responses into individual words
2. Remove Swahili and English stopwords
3. Create frequency table ya top 20 words
4. Create bar chart
5. Create bigrams analysis — what 2-word combinations appear most?
6. Interpret results: What do the frequent words tell you about the main concerns?
`
      }
    ]
  },
  {
    sectionId: "rq_11_visualization",
    sectionTitle: "Module 11: Visualizing Qualitative Data",
    lessons: [
      {
        id: "rq-11-wordclouds-barcharts",
        title: "Word Clouds & Frequency Charts",
        url: "",
        content: `## Overview

**You will learn:**
- Create styled word clouds using Kenyan flag colors
- Build professional theme frequency bar charts with ggplot2
- Export visualizations for reports

---

## Word Clouds

\`\`\`r
library(wordcloud)
library(tidytext)
library(tidyverse)
library(RColorBrewer)

# Prepare word frequency data
word_freq <- interviews %>%
  unnest_tokens(word, response) %>%
  filter(!word %in% stop_words\\$word) %>%
  count(word, sort = TRUE)

# Styled word cloud — Kenyan flag colors
set.seed(42)
wordcloud(
  words = word_freq\\$word,
  freq = word_freq\\$n,
  min.freq = 2,
  max.words = 80,
  random.order = FALSE,
  scale = c(4, 0.5),
  colors = c("#006600", "#BB0000", "#000000"),  # Kenya: green, red, black
  rot.per = 0.2
)
\`\`\`

---

## Theme Frequency Bar Charts

\`\`\`r
library(ggplot2)
library(tidyverse)

theme_counts <- tibble(
  theme = c("Financial Precarity", "Digital Trust Deficit",
            "Informal Safety Nets", "Agency & Empowerment",
            "Infrastructure Barriers"),
  n_participants = c(8, 6, 7, 4, 5),
  percentage = n_participants / 10 * 100
)

ggplot(theme_counts, aes(x = reorder(theme, n_participants),
                          y = n_participants,
                          fill = theme)) +
  geom_col(show.legend = FALSE) +
  geom_text(aes(label = paste0(n_participants, "/10 (", percentage, "%)")),
            hjust = -0.1, size = 3.5) +
  coord_flip() +
  scale_fill_manual(values = c("#006600", "#BB0000", "#000000",
                                "#3399FF", "#FF9900")) +
  labs(
    title = "Theme Distribution Across Participants",
    subtitle = "Qualitative Study: Digital Financial Services (n=10)",
    x = "Theme",
    y = "Number of Participants",
    caption = "Source: Primary Interview Data, 2024"
  ) +
  xlim(c(NA, 12)) +
  theme_minimal(base_size = 12) +
  theme(plot.title = element_text(face = "bold"))

ggsave("outputs/figures/theme_frequency.png", width = 10, height = 6, dpi = 300)
\`\`\`
`
      },
      {
        id: "rq-11-networks-theme-maps",
        title: "Co-occurrence Networks & Theme Map Visualization",
        url: "",
        content: `## Overview

**You will learn:**
- Build word co-occurrence network visualizations using ggraph
- Create theme hierarchy maps with ggplot2
- Export all visualizations for professional reports

---

## Co-occurrence Network

\`\`\`r
library(ggraph)
library(igraph)
library(tidyverse)
library(tidytext)

# Create bigrams for network
bigrams <- interviews %>%
  unnest_tokens(bigram, response, token = "ngrams", n = 2) %>%
  separate(bigram, c("word1", "word2"), sep = " ") %>%
  filter(!word1 %in% stop_words\\$word,
         !word2 %in% stop_words\\$word) %>%
  count(word1, word2, sort = TRUE) %>%
  filter(n >= 2)  # Only pairs appearing 2+ times

# Create graph object
bigram_graph <- bigrams %>%
  graph_from_data_frame()

# Visualize network
set.seed(42)
ggraph(bigram_graph, layout = "fr") +
  geom_edge_link(aes(edge_alpha = n, edge_width = n),
                 edge_colour = "#006600") +
  geom_node_point(color = "#BB0000", size = 3) +
  geom_node_text(aes(label = name), vjust = 1.5, size = 3) +
  labs(
    title = "Word Co-occurrence Network",
    subtitle = "Interview Data — Nairobi Financial Services Study"
  ) +
  theme_void()
\`\`\`

---

## Theme Map Visualization

\`\`\`r
theme_hierarchy <- tibble(
  level = c(rep("Core Theme", 2), rep("Sub-theme", 5)),
  label = c(
    "Survival & Precarity",
    "Trust & Agency",
    "Income Instability",
    "Debt Cycles",
    "Digital Distrust",
    "Community Resilience",
    "Financial Empowerment"
  ),
  x = c(0.25, 0.75, 0.1, 0.4, 0.6, 0.8, 0.95),
  y = c(0.9, 0.9, 0.6, 0.6, 0.6, 0.6, 0.6)
)

ggplot(theme_hierarchy, aes(x = x, y = y, label = label, color = level)) +
  geom_label(size = 3, fontface = "bold") +
  scale_color_manual(values = c("Core Theme" = "#BB0000",
                                 "Sub-theme" = "#006600")) +
  labs(title = "Qualitative Theme Hierarchy Map",
       subtitle = "Nairobi Informal Sector Research 2024") +
  theme_void() +
  theme(legend.position = "bottom")

ggsave("outputs/figures/theme_map.png", width = 12, height = 7, dpi = 300)
\`\`\`

---

## Module 11 Assignment: Create Visualizations

Using the Module 7/8 banking dataset:

1. **Word Cloud** — Create colorful word cloud ya most frequent words
2. **Bar Chart** — Show theme distribution (how many participants per theme)
3. **Bigram Network** — Show word co-occurrence network
4. Export all three as PNG files to \`outputs/figures/\`
5. **Write interpretation:** Paragraph moja kwa kila visualization — what does it tell you?
`
      }
    ]
  },
  {
    sectionId: "rq_12_trustworthiness",
    sectionTitle: "Module 12: Trustworthiness & Quality Assurance",
    lessons: [
      {
        id: "rq-12-trustworthiness-criteria",
        title: "Four Criteria of Trustworthiness & QA Checklist in R",
        url: "",
        content: `## Overview

**You will learn:**
- Why trustworthiness replaces validity/reliability in qualitative research
- Apply Lincoln & Guba's four criteria in a Kenyan context
- Build and track a QA checklist in R

---

## Why Trustworthiness Matters

> **Sheng moment:** Katika quantitative research, unasema "reliability" na "validity." Kwa qualitative research, hizi concepts zina different names kwa sababu logic ni different. Si kuhusu repeatability — ni kuhusu *credibility* na *integrity* ya research yako.

---

## The Four Criteria

### 1. Credibility (= Internal Validity)
"Je, findings zako zinaakisi ukweli wa participants?"

**Strategies:**
- **Member checking** — Rudi kwa participants, show them findings: "Je, hii inawakilisha experience yako?"
- **Prolonged engagement** — Spend enough time na community
- **Peer debriefing** — Have colleague review your analysis

**Kenya Example:** Ukifanya research Kibera, baada ya analysis, rudi community, share themes, pata feedback.

---

### 2. Dependability (= Reliability)
"Je, mtu mwingine akifanya research hii ingekuwa na similar process?"

**Strategy: Audit Trail**
\`\`\`
Andika kila hatua ya research:
- When and where interviews were conducted
- How you developed codes
- Why you merged/split certain themes
- Changes made during analysis (and why)
\`\`\`

---

### 3. Confirmability (= Objectivity)
"Je, findings zinatoka kwa data, si kwa biases za researcher?"

**Strategy: Reflexivity statement**
> "I am a Nairobi-based researcher with middle-class background. I have never worked in the informal sector. I acknowledge this position may have influenced what I asked and how I interpreted responses."

---

### 4. Transferability (= External Validity)
"Je, findings zinaweza kutumika mahali pengine?"

**Strategy:** Provide **thick description** — detailed context ya research setting.

---

## QA Checklist in R

\`\`\`r
qa_checklist <- tibble(
  criterion = c(
    rep("Credibility", 4),
    rep("Dependability", 3),
    rep("Confirmability", 3),
    rep("Transferability", 3)
  ),
  strategy = c(
    "Prolonged engagement with community",
    "Member checking completed",
    "Peer debriefing conducted",
    "Negative case analysis done",
    "Audit trail maintained in project folder",
    "Codebook documented with definitions",
    "Memos and reflexive notes kept",
    "Reflexivity statement written",
    "Multiple coders used",
    "Data sources triangulated",
    "Thick description of context provided",
    "Site/participant characteristics documented",
    "Limitations of transferability acknowledged"
  ),
  completed = c(
    TRUE, TRUE, FALSE, TRUE,
    TRUE, TRUE, TRUE,
    TRUE, FALSE, TRUE,
    TRUE, TRUE, TRUE
  )
)

# View completion summary
qa_checklist %>%
  group_by(criterion) %>%
  summarise(
    total = n(),
    done = sum(completed),
    rate = paste0(round(sum(completed)/n()*100), "%")
  )

write_csv(qa_checklist, "outputs/quality_assurance_checklist.csv")
\`\`\`

---

## Module 12 Assignment

1. Populate the QA checklist kwa research yako
2. Identify 2 areas ambazo bado hazijafanywa
3. Andika plan ya kuziaddress
4. Write a 200-word **reflexivity statement** kwa nafsi yako kama researcher
`
      }
    ]
  },
  {
    sectionId: "rq_13_ethics",
    sectionTitle: "Module 13: Ethics in Qualitative Research",
    lessons: [
      {
        id: "rq-13-ethics-principles",
        title: "Core Ethical Principles & Anonymization in R",
        url: "",
        content: `## Overview

**You will learn:**
- Why ethics matters especially in Kenyan research contexts
- The five core ethical principles and how to apply them
- How to anonymize participant data programmatically in R

---

## Why Ethics Matters — Especially in Kenya

> Kenya ina history ya research exploitation — especially on communities ambazo hazikupata benefits za research iliyofanywa juu yao. Nairobi slums zimekuwa "research destinations" kwa miongo — lakini communities hazijawahi kuona findings au benefits.

**Key principle:** *Do no harm. Leave communities better than you found them.*

---

## Core Ethical Principles

| Principle | Maana | Kenyan Application |
|---|---|---|
| **Informed Consent** | Participants wana haki kuelewa research na kuamua kushiriki | Consent form kwa Kiswahili na kwa lugha ya jamii |
| **Confidentiality** | Personal information haishiriwi bila permission | Use pseudonyms: "James Mombasa" si "James Otieno Mwambu" |
| **Anonymization** | Remove identifying information kutoka data | Futa jina, eneo exact, kazi specific |
| **Data Protection** | Store data securely | Password-protected folders, no WhatsApp for sensitive data |
| **Research Integrity** | Honest reporting ya findings | Don't cherry-pick quotes — include contradictions |

---

## Anonymization in R

\`\`\`r
library(tidyverse)

raw_data <- tibble(
  real_name = c("Grace Wambua", "Hassan Said", "Akinyi Atieno"),
  phone = c("0712345678", "0799887766", "0723456789"),
  exact_address = c("House 14, Mathare 4A", "Eastleigh Sec 3", "Kibera Olympic"),
  age = c(32, 45, 28),
  response = c(
    "Serikali haisaidii watu kama sisi...",
    "Biashara yangu imekuwa poa lakini...",
    "Mama yangu ana ugonjwa na hakuna pesa ya dawa..."
  )
)

# Anonymize data
anonymized_data <- raw_data %>%
  select(-real_name) %>%         # Remove real names
  select(-phone) %>%             # Remove phone numbers
  mutate(area = str_extract(exact_address, "^[A-Za-z]+")) %>%
  select(-exact_address) %>%     # Remove exact address
  mutate(
    participant_id = paste0("P", str_pad(row_number(), 3, pad = "0")),
    age_range = case_when(       # Age range instead of exact age
      age < 30 ~ "18-29",
      age < 40 ~ "30-39",
      age < 50 ~ "40-49",
      TRUE ~ "50+"
    )
  ) %>%
  select(-age)

print(anonymized_data)
write_csv(anonymized_data, "data/processed/interviews_anonymized.csv")
\`\`\`

---

## Sample Informed Consent Form (Kenya)

\`\`\`
FOMU YA IDHINI YA USHIRIKI KATIKA UTAFITI

LENGO LA UTAFITI:
Tunataka kuelewa jinsi watu wanavyotumia huduma za fedha za kidijitali
hapa Nairobi.

UTASHIRIKI VIPI:
Tutakuomba mazungumzo ya dakika 30-45. Tutarekodi (kama utakubali).

HAKI ZAKO:
✓ Una haki ya kukataa kushiriki bila adhabu yoyote
✓ Unaweza kusimama mazungumzo wakati wowote
✓ Majibu yako yatakuwa ya siri — jina lako halitaandikwa popote
✓ Utapewa nakala ya matokeo ukitaka

Je, unakubali kushiriki?
☐ NDIYO — Saini: _______________ Tarehe: ______
☐ HAPANA — Asante kwa wakati wako.
\`\`\`

---

## Module 13 Assignment: Consent Form

Create a complete informed consent form kwa:

*"Research kuhusu uzoefu wa wanafunzi wa secondary school wa kupata elimu wakati wa mvua nyingi — Homabay County"*

Form iwe kwa Kiswahili. Include: background ya researcher, purpose ya research, what participation involves, confidentiality assurances, right to withdraw, contact information, signature section (mshiriki na mzazi/guardian kwa minors).
`
      }
    ]
  },
  {
    sectionId: "rq_14_reporting",
    sectionTitle: "Module 14: Reporting & Presenting Findings",
    lessons: [
      {
        id: "rq-14-report-structure",
        title: "Report Structure & Writing Themes with Quotes",
        url: "",
        content: `## Overview

**You will learn:**
- The standard structure of a qualitative research report
- How to write themes with supporting participant quotes
- Best practices for including Swahili quotes with translations

---

## Structure of a Qualitative Research Report

\`\`\`
1. ABSTRACT (300 words)
   - Background, purpose, methods, key findings, implications

2. INTRODUCTION
   - Background context (Kenya/East Africa specific)
   - Problem statement
   - Research questions
   - Significance of study

3. LITERATURE REVIEW
   - What other studies have found
   - Gaps your research fills

4. METHODOLOGY
   - Research design (why qualitative?)
   - Participants (who, how many, how selected)
   - Data collection (how, when, where)
   - Analysis process (which approach?)
   - Quality assurance measures

5. FINDINGS
   - Theme 1 + sub-themes + quotes
   - Theme 2 + sub-themes + quotes
   - Visualizations

6. DISCUSSION
   - What do findings mean?
   - Connection to existing literature
   - Unexpected findings

7. CONCLUSION
   - Summary
   - Implications for policy/practice
   - Limitations
   - Future research

8. REFERENCES

9. APPENDICES
   - Interview guide, Consent form, Codebook
\`\`\`

---

## Writing Up Themes with Quotes

**Format ya kuandika theme:**

---

**Theme 1: Financial Precarity as a Daily Reality**

Participants consistently described living in a state of financial uncertainty, where income was unpredictable and expenses were constant.

James (INT004), a matatu driver from Nairobi, captured this vividly:
> *"Kila asubuhi unaamka na maswali — leo nitapata nini? Naweza kulipa rent? Naweza kupeleka mtoto shule? Hujui. Unaishi leo leo."*
> [Every morning you wake up with questions — what will I get today? Can I pay rent? Can I send my child to school? You don't know. You live day to day.]

This daily uncertainty was compounded by fixed obligations. Grace (INT007), a fish trader in Kisumu, explained:
> *"Hata ukipata KES 200 au 2000 — rent ya bodaboda ni KES 500 kila siku."*
> [Even if you earn 200 or 2,000 — bodaboda rent is 500 every day. There is no economic rest day.]

This theme was present in **8 out of 10 participants**, making it the most pervasive finding of this study.

---

## Best Practices

1. **Always provide English translations** for Swahili quotes
2. **Use participant codes** (INT004), not real names
3. **Count prevalence** — "8 out of 10 participants"
4. **Connect quotes to analysis** — don't just drop quotes, explain what they mean
5. **Include deviant cases** — participants who don't fit the theme
`
      },
      {
        id: "rq-14-professional-figures",
        title: "Professional Report Figures with ggplot2",
        url: "",
        content: `## Overview

**You will learn:**
- Create publication-quality theme prevalence charts
- Format figures appropriately for academic reports
- Save high-resolution PNG files for your report

---

## Publication-Quality Theme Chart

\`\`\`r
library(ggplot2)
library(tidyverse)

theme_data <- tibble(
  theme = c("Financial Precarity", "Digital Trust Deficit",
            "Informal Safety Nets", "Agency & Choice",
            "Infrastructure Barriers"),
  count = c(8, 6, 7, 4, 5),
  pct = c(80, 60, 70, 40, 50)
)

ggplot(theme_data, aes(x = reorder(theme, pct), y = pct)) +
  geom_col(fill = "#1a5276", width = 0.65) +
  geom_text(aes(label = paste0(pct, "%  (n=", count, ")")),
            hjust = -0.05, size = 3.8, color = "#1a5276", fontface = "bold") +
  coord_flip() +
  scale_y_continuous(limits = c(0, 110),
                     labels = function(x) paste0(x, "%")) +
  labs(
    title = "Prevalence of Themes Across Participant Responses",
    subtitle = "Qualitative Study on Digital Financial Services, Nairobi 2024",
    x = NULL,
    y = "Percentage of Participants (%)",
    caption = "Note: Percentages based on n=10 participants. Multiple themes per participant possible."
  ) +
  theme_minimal(base_size = 12) +
  theme(
    plot.title = element_text(face = "bold", size = 14),
    plot.subtitle = element_text(color = "gray50"),
    axis.text.y = element_text(size = 11),
    panel.grid.major.y = element_blank()
  )

ggsave("outputs/figures/theme_prevalence.png",
       width = 10, height = 6, dpi = 300)
\`\`\`

---

## Module 14 Assignment: Findings Report

Write a 2-3 page qualitative findings report kwa Module 7/8 dataset (banking data):

1. **Introduction** (1 paragraph) — Background context ya digital banking Kenya
2. **Methodology** (1 paragraph) — Describe what analysis was done
3. **Findings** (3 themes × 1-2 paragraphs each, include 1-2 quotes per theme)
4. **Discussion** (1 paragraph) — What do findings mean for financial inclusion in Kenya?
5. **Conclusion** (1 paragraph)
6. Include at least 1 visualization
`
      }
    ]
  },
  {
    sectionId: "rq_15_reproducible",
    sectionTitle: "Module 15: Reproducible Qualitative Research",
    lessons: [
      {
        id: "rq-15-rmarkdown-quarto",
        title: "R Markdown & Quarto for Reproducible Reports",
        url: "",
        content: `## Overview

**You will learn:**
- Structure an R Markdown document for qualitative research
- Configure Quarto YAML for multi-format output (HTML, PDF, DOCX)
- Combine text, code, and analysis in one reproducible document

---

## R Markdown — What and Why?

R Markdown ni format inayokuruhusu **kuchanganya text, code, na output** katika document moja.

> **Sheng moment:** Fikiria R Markdown kama *Google Doc + Python notebook* katika moja. Unaandika text yako, unaandika code yako, na document inakuonesha *both* — text na results. Ukibadilisha data, document inabadilika automatically. Hii ndio **reproducibility**.

---

## Basic R Markdown Structure

\`\`\`markdown
---
title: "Digital Financial Services in Nairobi: A Qualitative Study"
author: "Peter Mwangi"
date: "\`r Sys.Date()\`"
output:
  html_document:
    toc: true
    toc_float: true
    theme: flatly
---

# Introduction

This study examines how informal workers in Nairobi navigate
digital financial services...

\`\`\`{r setup, include=FALSE}
library(tidyverse)
library(tidytext)
library(wordcloud)
knitr::opts_chunk\\$set(echo = FALSE, message = FALSE, warning = FALSE)
\`\`\`

\`\`\`{r load-data}
interviews <- read_csv("data/processed/interviews_clean.csv")
\`\`\`

\`\`\`{r word-frequency, fig.cap="Most frequent words"}
word_freq <- interviews %>%
  unnest_tokens(word, response) %>%
  count(word, sort = TRUE) %>%
  head(20)

ggplot(word_freq, aes(x = reorder(word, n), y = n)) +
  geom_col(fill = "#006600") +
  coord_flip() +
  theme_minimal()
\`\`\`
\`\`\`

---

## Quarto (Modern Version of R Markdown)

\`\`\`yaml
---
title: "Qualitative Research Report"
author: "Peter Mwangi"
date: today
format:
  html:
    toc: true
    code-fold: true
  pdf:
    documentclass: report
  docx:
    reference-doc: template.docx
execute:
  echo: false
  warning: false
---
\`\`\`

---

## Key Workflow

\`\`\`r
# Render the R Markdown report
rmarkdown::render("reports/final_report.Rmd")

# Renders to HTML by default. To get PDF:
rmarkdown::render("reports/final_report.Rmd",
                  output_format = "pdf_document")
\`\`\`
`
      },
      {
        id: "rq-15-version-control-docs",
        title: "Version Control, Documentation & Module 15 Assignment",
        url: "",
        content: `## Overview

**You will learn:**
- Use Git to track analysis decisions in qualitative research
- Write a project README for reproducibility
- Complete the final reproducible report assignment

---

## Version Control with Git

\`\`\`bash
# Initialize git repository
cd qualitative_project
git init

# Create .gitignore (don't track sensitive data!)
echo "data/raw/" >> .gitignore
echo "participants_list.xlsx" >> .gitignore

# Track your code and reports
git add scripts/
git add reports/
git add README.md
git commit -m "Initial commit: coding framework and analysis scripts"

# Document analysis decisions in commit messages
git commit -m "Updated coding: merged two sub-themes on trust into one"
git commit -m "Fixed sentiment analysis — added Swahili stopwords"
\`\`\`

---

## Project README.md

\`\`\`markdown
# Digital Financial Services Research — Nairobi 2024

## Study Overview
Qualitative study examining informal workers' experiences with
digital financial services. Conducted March-June 2024.

## Research Questions
1. How do informal workers navigate digital financial tools?
2. What barriers and facilitators shape digital finance adoption?

## Participants
- n = 10 semi-structured interviews
- Counties: Nairobi (8), Kiambu (2)
- Sectors: Matatu (3), Fish trade (2), Street vending (3), Farming (2)

## Reproduce Analysis
1. Clone this repository
2. Place raw data in \`data/raw/\` (contact researcher for access)
3. Run scripts in order: \`01_import.R\` → \`02_clean.R\` → \`03_code.R\`
4. Render: \`rmarkdown::render("reports/final_report.Rmd")\`
\`\`\`

---

## Module 15 Assignment: Reproducible Report

Create a complete reproducible research report kwa R Markdown:

1. **File:** \`final_report.Rmd\`
2. **Include:**
   - YAML header (title, author, date, output formats)
   - Introduction section (with Kenyan context)
   - Methodology section
   - Code chunks: data loading, cleaning, word frequency analysis
   - Visualizations (word cloud + bar chart)
   - Findings section (3 themes + quotes)
   - Conclusion
3. **Knit** report to HTML
4. **Bonus:** Knit to PDF as well
`
      }
    ]
  },
  {
    sectionId: "rq_16_capstone",
    sectionTitle: "Capstone: Final Research Project",
    lessons: [
      {
        id: "rq-16-capstone-overview",
        title: "Capstone Overview, Options & Deliverables",
        url: "",
        content: `## Overview

**You will:**
- Select a real-world qualitative research topic relevant to Kenya/East Africa
- Apply the complete pipeline: design → collect → clean → code → analyze → report
- Produce a fully reproducible R Markdown document

---

## Capstone Options

Choose one of the following:

### Option A: Youth Unemployment in Nairobi
Analyze 15 simulated interview transcripts with unemployed graduates in Nairobi.

### Option B: Climate Change Perceptions — Rift Valley Farmers
Analyze 12 interviews with farmers about changing rainfall patterns.

### Option C: Healthcare Access — Northern Kenya
Analyze 10 focus group discussions about healthcare barriers in Marsabit/Garissa.

### Option D: YOUR OWN DATA (Best option!)
Conduct 5 real interviews with people about any topic relevant to Kenya. Apply everything you've learned.

---

## Deliverables

### 1. Research Proposal (Week 1-2)
- Research question
- Chosen methodology
- Participant profile
- Ethical considerations

### 2. Clean Dataset (Week 3-4)
- Raw data file (CSV/TXT)
- Cleaned data file
- Documentation of cleaning decisions

### 3. Codebook (Week 5-6)
- Minimum 8 codes
- Code ID, name, definition, example quote
- Intercoder reliability check (if working with partner)

### 4. Thematic Analysis Report (Week 7-10)
- Minimum 3 themes
- Each theme: definition, sub-themes, quotes, prevalence
- Discussion of how themes relate to each other

### 5. Visualizations (Week 9-10)
- Word cloud
- Theme frequency chart
- One additional visualization of your choice

### 6. Final Reproducible Report (Week 11-12)
- Full R Markdown document
- All code included and annotated
- Knitted to HTML and PDF
- Push to GitHub

---

## Grading Rubric

| Component | Marks | Key Criteria |
|---|---|---|
| Research Proposal | 10% | Clear question, appropriate methodology, ethical consideration |
| Dataset & Cleaning | 15% | Well-documented, reproducible cleaning process |
| Codebook | 20% | Clear definitions, appropriate codes, consistency |
| Thematic Analysis | 25% | Depth of analysis, quality of theme development |
| Visualizations | 15% | Appropriate, well-labeled, interpretable |
| Reproducible Report | 15% | Clean code, proper documentation, renders without errors |
`
      },
      {
        id: "rq-16-quick-reference",
        title: "Quick Reference: Key R Commands for Qualitative Research",
        url: "",
        content: `## Quick Reference Card

This is your go-to cheatsheet for all the essential R commands used in qualitative research analysis.

---

## Essential Packages

\`\`\`r
library(tidyverse)   # Data manipulation and visualization
library(readxl)      # Read Excel files — primary data source
library(writexl)     # Write Excel files
library(openxlsx)    # Multi-sheet Excel output
library(janitor)     # Clean messy Excel headers/empty rows
library(tidytext)    # Text analysis
library(wordcloud)   # Word clouds
library(ggraph)      # Network visualizations
library(igraph)      # Network analysis
\`\`\`

---

## Excel & CSV Import

\`\`\`r
read_excel("file.xlsx")                        # Read first sheet
read_excel("file.xlsx", sheet = "Nairobi")     # Read named sheet
read_excel("file.xlsx", skip = 2)              # Skip header rows
excel_sheets("file.xlsx")                      # List all sheets
read_csv("file.csv")                           # Read CSV
read_csv("file.csv", locale=locale(encoding="UTF-8"))  # Fix encoding
\`\`\`

---

## Excel Cleaning

\`\`\`r
clean_names(df)                          # Fix column name spaces/caps
remove_empty(df, c("rows","cols"))       # Remove blank rows & columns
excel_numeric_to_date(44927)             # Fix Excel date serials
str_to_title(county)                     # Standardize text case
str_trim(text)                           # Remove extra whitespace
str_squish(text)                         # Remove ALL extra spaces
distinct(df)                             # Remove duplicate rows
\`\`\`

---

## Text Analysis

\`\`\`r
unnest_tokens(df, word, text)      # Tokenize
count(word, sort = TRUE)           # Word frequency
inner_join(get_sentiments("bing")) # Sentiment
\`\`\`

---

## Visualization

\`\`\`r
ggplot(data, aes(x, y)) + geom_col()   # Bar chart
wordcloud(words, freq)                  # Word cloud
ggsave("plot.png", width=10, height=6) # Save plot
\`\`\`

---

## Export

\`\`\`r
write_csv(data, "outputs/file.csv")          # Save CSV
write_xlsx(data, "outputs/file.xlsx")        # Save Excel (single sheet)
saveWorkbook(wb, "outputs/file.xlsx")        # Save Excel (multi-sheet)
\`\`\`

---

## Swahili/Sheng Glossary — Research Terms

| English Term | Kiswahili | Maelezo |
|---|---|---|
| Qualitative Research | Utafiti wa ubora | Research ya kuelewa watu, si kuhesabu tu |
| Interview | Mahojiano | Conversation ya makusudi na mtu |
| Theme | Mada | Main idea inayotokea kwenye data |
| Code | Msimbo/Lebo | Tag unayoweka kwa segment ya data |
| Transcript | Maandishi ya mazungumzo | Text ya maneno yaliyosemwa |
| Triangulation | Uthibitisho wa njia nyingi | Kuangalia kitu kutoka pande tatu |
| Reflexivity | Kutafakari nafsi | Kujua bias zako kama researcher |
| Saturation | Ukamilifu | Pale data mpya haisaidii |
| Member checking | Uthibitisho na washiriki | Rudi kwa washiriki, pata feedback |
| Codebook | Kitabu cha misimbo | Document inayofafanua codes zako |
| Trustworthiness | Uaminifu wa utafiti | Equivalent ya reliability/validity |

---

*Good luck na research yako — **ufanikiwe!***
`
      }
    ]
  }
];
