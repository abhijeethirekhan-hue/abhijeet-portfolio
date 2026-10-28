import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Abhijeet Hirekhan",
  initials: "AH",
  url: "https://github.com/abhihirekhan",
  location: "Nagpur, India (Open to Relocate — Dubai / UAE)",
  locationLink: "https://www.google.com/maps/place/Nagpur,+Maharashtra,+India",
  description:
    "Senior Production Support & Application Support Analyst with 5+ years of experience in BFSI, Major Incident Management, UNIX, Oracle DB, AWS, Azure, and DevOps automation.",
  summary:
    "Senior Production Support & Application Support Analyst with 5+ years of experience supporting mission-critical enterprise applications across the Banking and Financial Services (BFSI) domain, acting as SME/team lead for L2/L3 support, techno-functional troubleshooting, and stakeholder-facing service delivery. Proven expertise in major incident management (MIM), problem management, root cause analysis (RCA), change/release management, batch operations (Control-M, Autosys), and messaging/middleware support (IBM MQ, Kafka), alongside Oracle DB/PL-SQL troubleshooting and monitoring tools (ITRS, AppDynamics, Splunk, Datadog, ServiceNow). Skilled in leading incident bridges, managing SLA-driven ticket queues, running weekly RTB (Run the Bank) governance calls, and coordinating with clients, developers, and L3/vendor teams during implementations and production releases. Experienced supporting cloud infrastructure (AWS, Azure) and CI/CD-enabled release pipelines as part of end-to-end application support.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Production Support", icon: Python },
    { name: "Application Support", icon: Python },
    { name: "Incident Management", icon: NextjsIconDark },
    { name: "ITRS / AppDynamics", icon: NextjsIconDark },
    { name: "ServiceNow", icon: NextjsIconDark },
    { name: "Control-M / Autosys", icon: NextjsIconDark },
    { name: "Splunk / Datadog", icon: NextjsIconDark },
    { name: "Oracle DB & PL/SQL", icon: Postgresql },
    { name: "UNIX Shell Scripting", icon: Python },
    { name: "AWS & Azure", icon: Kubernetes },
    { name: "DevOps & CI/CD", icon: Docker },
    { name: "Terraform / Ansible", icon: Docker },
    { name: "Java & Python", icon: Java },
    { name: "M365 Administration", icon: NextjsIconDark },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "abhijeet.herokhan@gmail.com",
    tel: "+918668322875",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abhihirekhan",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhi-hirekhan",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:abhijeet.herokhan@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "HCL Technologies",
      href: "https://www.hcltech.com",
      badges: ["BFSI", "Dubai / UAE Ready"],
      location: "Nagpur, MH",
      title: "Senior Production Support Analyst (SME) — Application & Cloud Support",
      logoUrl: "/mitremedia.png",
      start: "2022",
      end: "Present",
      description:
        "Acted as SME/techno-functional lead delivering L1/L2/L3 production support for 8 mission-critical Citi applications in the Banking domain, ensuring 99.5%+ availability through start-of-day checks, continuous monitoring, and regional shift handovers. Led incident bridges with cross-functional teams to resolve P1/P2 major incidents within SLA; achieved 40% faster incident resolution by leveraging real-time alerts (ITRS, ServiceNow) and structured root cause analysis (RCA). Implemented monitoring with Splunk, ITRS, AppDynamics, and ServiceNow. Monitored and supported scheduled batch jobs using Control-M and Autosys, and messaging/middleware over IBM MQ and Kafka. Automated risk reconciliations and batch processing using UNIX shell scripts and Oracle DB / PL-SQL queries, improving efficiency by 50%. Managed Change Requests as Production Change coordinator, performing application deployments and migrations across production and UAT environments. Supported AWS and Azure environments (EC2, VMs, S3, Blob, VPC, IAM) and Kubernetes containerized workloads (EKS/AKS), alongside M365 Administration (Exchange Online, SharePoint, Teams, Entra ID). Mentored 3 junior support analysts in problem management tools and ITIL processes, reducing repeat incidents by 30%.",
    },
    {
      company: "Ellorbit System",
      badges: [],
      href: "#",
      location: "Nagpur, MH",
      title: "Application & Infrastructure Support Engineer",
      logoUrl: "/mitremedia.png",
      start: "October 2020",
      end: "December 2022",
      description:
        "Provided operational support for Linux-based production systems, troubleshooting production issues in AWS environments and reducing Mean Time to Resolution (MTTR) by 35% through structured root cause analysis. Engineered Python-based monitoring tools and a visualization tool (using BFS and Union-Find algorithms) to group infrastructure alerts and map dependencies. Used UNIX shell scripts and cron jobs to optimize log monitoring and batch processing, ensuring stability and operational continuity. Authored detailed runbooks and standardized incident management processes, reducing recovery time by 20% and improving team efficiency by 15% using ITIL principles.",
    },
  ],
  education: [
    {
      school: "G.N.I.T College RTMNU Nagpur University",
      href: "#",
      degree: "B.E. in Computer Science and Engineering",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2020",
    },
    {
      school: "Sindhu Mahavidyalaya / Panchpaoli",
      href: "#",
      degree: "HSC, Maharashtra State Board",
      logoUrl: "/laurier.png",
      start: "2012",
      end: "2014",
    },
  ],
  projects: [
    {
      title: "Linux System Monitoring Tool",
      href: "https://github.com/abhihirekhan",
      dates: "2021 - 2022",
      active: true,
      description:
        "Developed Bash and Python scripts to automate log analysis and alerting for production support use cases, reducing manual checks by 70%.",
      technologies: [
        "Python",
        "Bash",
        "Linux",
        "Shell Scripting",
        "Automation",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhihirekhan",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Oracle DB Query Optimizer",
      href: "https://github.com/abhihirekhan",
      dates: "2021 - 2022",
      active: true,
      description:
        "Improved batch processing efficiency by 40% through PL/SQL tuning, indexing, and automated risk reconciliation queries.",
      technologies: [
        "Oracle DB",
        "PL/SQL",
        "SQL",
        "Performance Tuning",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhihirekhan",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Blockchain-Powered Digital Wallet",
      href: "https://github.com/abhihirekhan",
      dates: "2021",
      active: true,
      description:
        "Developed a digital wallet for securely managing cryptocurrencies and digital assets with a React.js frontend for checking balances, sending, and receiving assets.",
      technologies: [
        "React.js",
        "JavaScript",
        "Blockchain",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhihirekhan",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Knowledgesuttra Inc. & Startup Freelance",
      dates: "2020 - Present",
      location: "Nagpur, MH",
      description:
        "Founder of IT Startup Freelance & AWS Knowledgesuttra Inc. Published multiple apps on Google Play Store and published developer tools.",
      image: "/buildspace.jpg",
      mlh: "",
      links: [] as { title: string; href: string; icon: React.ReactNode }[],
    },
    {
      title: "Technical Internships & Certifications",
      dates: "2018 - 2020",
      location: "Nagpur, MH",
      description:
        "Completed internships at V3 Data, Ramai Infotech, Parsh Touch, IT Networkz, and Coca-Cola. Awarded 1st prize at Laxminarayan Institute. Achieved NIELIT 'O' Level certification and completed Machine Learning & Deep Learning Specialization on Coursera.",
      image: "/atomic.png",
      mlh: "",
      links: [] as { title: string; href: string; icon: React.ReactNode }[],
    },
  ],
};
