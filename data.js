// ============================================================
//  PORTFOLIO DATA — this file holds ALL your content.
//  Edit it easily through edit.html, or by hand here.
//  After changes, upload this file to GitHub to go live.
// ============================================================
window.PORTFOLIO_DATA = {
  name: "Abdallah",
  role: "Database Administrator & aspiring Data Engineer",

  hero: {
    line1: "Reliable data,",
    line2: "well-",
    accent: "structured",
    line2end: ".",
    sub: "I'm <strong>Abdallah</strong>, a Computer Science graduate specializing in database administration — designing schemas, tuning queries, and building the systems that keep data trustworthy."
  },

  about: {
    paragraphs: [
      "I graduated in <strong>Computer Science</strong> from Yanbu Industrial College on a Database Administration track, then spent a <strong>28-week co-op</strong> at the Industrial Research & Development Agency (RCJY) working close to real production systems.",
      "My comfort zone is the relational world: <strong>SQL Server</strong> and MySQL, schema design, normalization, indexing, and query optimization. Right now I'm extending into <strong>PostgreSQL, Linux, Python, and cloud data tooling</strong> — the skills that turn a DBA into a data engineer.",
      "I like problems where correctness matters: access control, approval workflows, and data that has to stay consistent under pressure. If a system quietly does the right thing every time, I've done my job."
    ],
    facts: [
      { k: "location",   v: "Yanbu, Saudi Arabia" },
      { k: "degree",     v: "B.Sc. Computer Science" },
      { k: "track",      v: "Database Administration" },
      { k: "experience", v: "28-week co-op · RCJY" },
      { k: "focus",      v: "DBA → Data Engineer" },
      { k: "languages",  v: "Arabic · English" }
    ]
  },

  // Each group = one category. Add/remove groups and items freely.
  skills: [
    { category: "Databases",        items: ["SQL Server", "MySQL", "PostgreSQL", "Oracle basics"] },
    { category: "Core DBA",         items: ["T-SQL", "Data modeling / ERD", "Normalization", "Indexing & tuning", "Backup & recovery"] },
    { category: "Data Engineering", items: ["ETL pipelines", "Python", "Data warehousing", "Azure basics"] },
    { category: "Development",      items: ["PHP", "Security (PDO / bcrypt / CSRF)", "REST basics"] },
    { category: "Tools",            items: ["Git & GitHub", "Linux", "SSMS", "Power BI basics"] },
    { category: "Foundations",      items: ["ACID properties", "Transactions", "Query optimization"] }
  ],

  projects: [
    {
      table: "weekly_reports_management_system",
      badge: "graduation project",
      title: "Weekly Reports Management System",
      desc: "A role-based reporting platform built during my co-op: employees submit weekly reports, supervisors review and approve them through a controlled workflow, and every action is scoped by permission. Designed for correctness and security from the schema up.",
      meta: [
        { num: "8",    lbl: "TABLES" },
        { num: "5",    lbl: "USER ROLES" },
        { num: "RBAC", lbl: "ACCESS CONTROL" }
      ],
      tags: ["PHP", "MySQL", "PDO", "bcrypt", "CSRF protection", "Approval workflow"],
      links: [
        { label: "View code", url: "#" },
        { label: "Schema / ERD", url: "#" }
      ]
    },
    {
      table: "etl_pipeline_demo",
      badge: "data engineering",
      title: "ETL Pipeline — extract, clean, load",
      desc: "A compact pipeline that pulls raw data from source files, validates and cleans it in Python, and loads it into a structured database — with logging and basic data-quality checks. Built to demonstrate the data-engineering half of my skill set.",
      meta: [
        { num: "3",      lbl: "STAGES" },
        { num: "Python", lbl: "TRANSFORM" },
        { num: "SQL",    lbl: "LOAD" }
      ],
      tags: ["Python", "pandas", "SQL", "Data cleaning", "Logging"],
      links: [
        { label: "View code", url: "#" },
        { label: "Read the write-up", url: "#" }
      ]
    },
    {
      table: "sql_query_library",
      badge: "reference",
      title: "SQL Query & Optimization Library",
      desc: "A curated collection of real SQL: complex joins, window functions, stored procedures, and before/after examples of query optimization and indexing. A working reference that doubles as proof of depth.",
      meta: [
        { num: "30+",    lbl: "QUERIES" },
        { num: "T-SQL",  lbl: "DIALECT" },
        { num: "Tuning", lbl: "FOCUS" }
      ],
      tags: ["T-SQL", "Stored procedures", "Window functions", "Indexing", "Execution plans"],
      links: [
        { label: "Browse the library", url: "#" }
      ]
    }
  ],

  // state must be one of: completed | in progress | planned | enrolled
  certs: [
    { name: "Microsoft DP-900",        desc: "Azure Data Fundamentals",                    state: "in progress" },
    { name: "Microsoft DP-300",        desc: "Azure Database Administrator Associate",     state: "planned" },
    { name: "Data Engineering Bootcamp", desc: "SDA · SQL, Python, Linux, Git",            state: "enrolled" },
    { name: "B.Sc. Computer Science",  desc: "Yanbu Industrial College · DBA track",       state: "completed" }
  ],

  contact: {
    intro: "Open to Database Administrator and Data Engineer roles across Saudi Arabia. The fastest way to reach me is below.",
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/your-profile",
    github: "https://github.com/your-username"
  }
};
