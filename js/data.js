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
    status: "completed",
    summary: "A 10-minute micro-teaching session introducing peers to the philosophical concept of 'The Egg Theory' through a structured PowerPoint presentation.",
    description: "For Task 1, I prepared and delivered a 10-minute mini-lesson in a guided semi-authentic context to introduce my peer student teachers to a 'new' unknown subject: The Egg Theory.\n\nThe objective was to spark philosophical inquiry, challenge perspectives on human life, and practice the 'plan-teach-evaluate' cycle by structuring a concise beginning, middle, and end within a strict time limit.",
    reflection: "For my detailed self-analysis, peer feedback evaluation, and actionable re-teaching improvements, please see Task 2.",
    image: "images/TheEggTheoryPica.png",
    files: [
      { name: "Lesson Plan & Materials (PDF)", url: "Portofolio-PDFs/LessonPlan-EggTheory.pdf" },
      { name: "Mini-Lesson Video Recording", url: "YOUR_VIDEO_LINK_HERE" }
    ]
  },
  {
    id: "task_2",
    title: "The Egg Theory - Reflection",
    course: "Educational Studies",
    year: 1,
    period: "Semester 1, Period 1",
    status: "completed",
    summary: "A comprehensive reflection on my mini-lesson, peer feedback, and observations from attending peer micro-teaching sessions.",
    description: "A critical reflection covering my recorded video, received peer feedback forms, areas for improvement (such as pacing and technical setup), and observations from watching my peers teach.",
    reflection: "While teaching this complex philosophical concept presented initial hurdles with pacing, timing, and technical setup (running short and lacking presenter notes), it turned out to be an invaluable learning experience. Peer feedback highlighted my calm presence but correctly noted the need for better time management, interactive activities, and vocal projection. Moving forward, I plan to incorporate student-centered tasks, structured activities, and purposeful hand gestures to drive engagement.",
    image: "images/TheEggTheoryPica.png",
    files: [{ name: "Portofolio-PDFs/Reflection Mini Lesson - Dylan Schlepers 5882966.pdf", url: "Portofolio-PDFs/Reflection Mini Lesson - Dylan Schlepers 5882966.pdf" }]
  }
],

{
  id: "active-learning-teaching-styles",
  title: "Active Learning and Teaching Styles in History Lessons",
  course: "Educational Studies 1.1",
  year: 1,
  period: "Semester 1, Period 1",
  status: "completed",
  summary: "An exploration of active learning principles, Vygotsky's constructivism, and Mosston's spectrum of teaching styles applied to history education.",
  description: "Examined the theoretical foundations of active learning, contrasting it with passive instruction and busywork. Developed ten practical, tech-integrated history activities mapped across Mosston's teaching styles, Bloom's taxonomy levels, and structured planning criteria.",
  reflection: "",
  image: "images/ActiveLearning.jpg",
  files: [
    {
      name: "Active Learning & Teaching Styles PDF",
      path: "Portofolio-PDFs/ActiveLearning&TeachingStyles-DylanSchlepers5882966.pdf"
    }
  ]
}
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
