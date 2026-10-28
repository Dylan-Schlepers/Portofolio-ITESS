/*
  ============================================================
  PORTFOLIO DATA
  ============================================================
  This is the only file you need to edit to add a new assessment.
  Copy the TEMPLATE block near the bottom, paste it inside the
  ASSESSMENTS array, and fill in your own info.

  Fields:
    id       - unique, short, no spaces (used in the page URL)
    title    - name of the assessment / assignment
    course   - the course or module it belongs to
    year     - 1, 2, 3 or 4 - which year it belongs to
    period   - e.g. "Semester 1, Period 1" or a date
    status   - "planned" | "progress" | "completed"
    summary  - one or two sentences, shown on the year overview card
    description - longer explanation, shown on the detail page
    reflection  - your reflection on what you learned / did well /
                  would do differently (can be empty string "" for now)
    image    - path to a small picture for this assessment, e.g.
               "images/assessments/my-photo.jpg". Put the image file
               in images/assessments/ and match the filename here.
               Leave as "" if you don't have one yet — a placeholder
               will be shown instead.
    files    - list of evidence files/links, e.g.
                 [{ name: "Report (PDF)", url: "files/my-report.pdf" }]
               put the actual files in the /files folder and match
               the filename here. Leave as [] if there's nothing yet.
  ============================================================
*/

const ASSESSMENTS = [
  {
    id: "best-lesson",
    title: "My Best Lesson Plan",
    course: "educational studies",
    year: 1,
    period: "Semester 1, Period 1",
    status: "completed",
    summary: "For this assessment, we had to prepare our best lesson plan. The goal is to learn and evaluate big ideas about lesson planning, identify the steps, and define and create solid lesson objectives.",
    description: "The concept for this lesson plan is Migration, designed for a 45-minute lesson. The targeted audience is 12-13 year olds at an MYP school with a class of 24 students.",
    reflection: `Key Strengths:
- Inquiry-Driven: Built around the MYP concept of Time, Place, and Space, challenging students to investigate and analyze rather than receive information passively.
- Collaborative Mapping: Utilizing an effective 'jigsaw' group activity where students pool unique historical and modern migration data to map push and pull factors.
- Clear Alignment: Learning objectives are measurable and closely tied to classroom tasks and educational theory.

Areas for Growth:
- Integrating explicit formative assessment checkpoints during the research phase.
- Deepening the explicit instruction of source evaluation and information literacy skills.`,
    image: "images/MyBestLessonPlan_ES.png",
    files: [{ name: "Lesson plan (PDF)", url: "Portofolio-PDFs/Migration.pdf" }]
  },
  {
    id: "task_1",
    title: "The Egg Theory - Mini Lesson",
    course: "Educational Studies",
    year: 1,
    period: "Semester 1, Period 1",
    status: "planned",
    summary: "A 10-minute lesson where we had to teach something 'new' to our peers, for which I chose The Egg Theory.",
    description: "Using a PowerPoint presentation, I taught the class about a philosophical concept called 'The Egg Theory'.\n\nMy main objective for this lesson was to introduce my peers and teacher to philosophical inquiry and show them that philosophy can be quite interesting.\n\nThe Egg Theory serves as a great starting point because the format is engaging and relatively easy to understand, while still challenging people to think differently about how others experience life.",
    reflection: "",
    image: "images/TheEggTheoryPica.png",
    files: [{ name: "Egg Theory (PDF)", url: "Egg Theory.pdf" }]
  }
];
/* ---------- TEMPLATE (copy this block) ----------
{
  id: "assessment-1",
  title: "Name of the assessment",
  course: "Course name",
  year: 1,
  period: "Semester 1, Period 1",
  status: "planned",
  summary: "One or two sentences summarising the assessment.",
  description: "A short paragraph describing what this assessment involved.",
  reflection: "",
  image: "",
  files: []
},
--------------------------------------------------- */
