import ServiceCloud from "../assets/img/service-cloud.png";
import ServiceDevops from "../assets/img/service-devops.png";
import ServiceSRE from "../assets/img/sre.png";
import ServiceInfra from "../assets/img/infra.png";
import ServiceDatabase from "../assets/img/db.png";

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "TNLWorks offers expert solutions in Cloud, DevOps, SRE, Infrastructure, and Databases with 20+ years of experience.",
  email: "cihan.tunali@gmail.com",
};

// SERVICES SECTION
export const servicesData = [
  {
    title: "Cloud Architecture & Migration",
    image: ServiceCloud,
    imageKey: "cloud",
    description:
      "Designing secure, scalable cloud infrastructure and managing smooth migration to Huawei Cloud, AWS, Azure, or GCP.",
    details: [
      "Multi-cloud architecture design",
      "Cross-platform migration strategy",
      "Security, IAM and policy configuration",
      "Cost-efficient deployment planning",
      "AWS, Azure, GCP, Huawei Cloud expertise",
    ],
  },
  {
    title: "DevOps Automation",
    image: ServiceDevops,
    imageKey: "devops",
    description:
      "CI/CD pipelines, infrastructure-as-code, and release automation tailored for your speed and reliability goals.",
    details: [
      "CI/CD pipeline setup (GitHub Actions, GitLab, Jenkins)",
      "Infrastructure as Code (Terraform, Ansible)",
      "Automated testing & deployment workflows",
      "Container orchestration with Docker & Kubernetes",
      "Secrets and environment config automation",
    ],
  },
  {
    title: "SRE & Monitoring",
    image: ServiceSRE,
    imageKey: "sre",
    description:
      "Implementing SRE practices and intelligent observability to proactively ensure service health and performance.",
    details: [
      "SLI/SLO-based reliability management",
      "Incident response & postmortem process setup",
      "Alerting systems with Grafana, Prometheus",
      "Log analysis with ELK / OpenSearch stacks",
      "Uptime tracking and error budgeting",
    ],
  },
  {
    title: "Infrastructure Management",
    image: ServiceInfra,
    imageKey: "infra",
    description:
      "On-prem to hybrid architecture, VMware-based solutions, network design, and reliable system operations.",
    details: [
      "Hybrid and on-prem infrastructure planning",
      "VMware, vCenter, VxRail expertise",
      "High-availability network setup",
      "Capacity & cost optimization",
      "Patch and configuration management",
    ],
  },
  {
    title: "Database Solutions",
    image: ServiceDatabase,
    imageKey: "db",
    description:
      "Setup, scaling, replication, and performance tuning of SQL/NoSQL systems for mission-critical applications.",
    details: [
      "PostgreSQL, MySQL, MongoDB, Redis",
      "Replication & sharding setup",
      "Performance monitoring & tuning",
      "Backup & restore automation",
      "High availability database clusters",
    ],
  },
];

// EXPORT
export {
  navBar,
  getInTouch,
};