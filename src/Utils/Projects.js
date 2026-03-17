const Projects = [
  {
    id: "routely",
    name: "Routely – High-Concurrency Ride Sharing Platform",
    github: "https://github.com/Yugg007/Routely", // Ensure this matches your repo name
    description: `
Engineered a cloud-native microservices ecosystem focused on high availability and sub-100ms latency. This project demonstrates enterprise-grade patterns for data consistency and real-time communication.

Key features include:
- 🚀 Distributed Consistency: Implemented the Transactional Outbox Pattern and Kafka event-driven lifecycles to achieve 99.9% data consistency across services[cite: 85].
- ⚡ Performance Optimization: Reduced driver-search latency by 60% by migrating from SQL lookups to Redis Geo-indexing (OpsForGeo)[cite: 88].
- 🛠️ Scalable Communication: Architected a centralized 'routely-common' library using Protobuf (gRPC), reducing network payload sizes by 75% compared to standard JSON[cite: 86, 87].
- 🛡️ Reliability & Security: Integrated API Gateway Rate Limiting (1,000+ req/s) and established a secure "Ride PIN Verification" handshake to eliminate unauthorized ride starts[cite: 90, 92].

Tech Stack: Java · Spring Boot · Kafka · Redis · gRPC · Protobuf · Docker · React · Socket.IO
`,
  },
  {
    id: "talentai",
    name: "TalentAI – AI Recruitment Platform",
    github: "https://github.com/Yugg007/TalentAI",
    description: `
A cloud-native full-stack recruitment platform that automates hiring workflows through AI-driven insights and real-time networking[cite: 95].

Key features include:
- 🔍 AI-Driven ATS Engine: Developed an intelligent scoring system that analyzes resumes against job descriptions using custom prompts and NLP[cite: 97].
- 💬 Real-Time Collaboration: Integrated Socket.IO for candidate-recruiter chat, peer interview scheduling, and instant UI state synchronization[cite: 96].
- 🌐 Personalized Intelligence: Features a tech-specialized news feed and an AI chatbot optimized with caching for high performance[cite: 97].

Tech Stack: Spring Boot · React.js · Node.js · MongoDB · AWS (EC2, S3) · Socket.IO · AI/LLM Integration
`,
  },
  {
    id: "whishper",
    name: "Whishper – Anonymous Secret Sharing",
    github: "https://github.com/Yugg007/Whisper-App",
    description: `
A secure, scalable web application for anonymous secret sharing, focusing on robust identity management and data privacy[cite: 44, 47].

Key features include:
- 🔒 Secure Auth: Implemented OAuth 2.0 (Google) and local passport strategies for encrypted, anonymous access.
- 🚀 Scalable Backend: Developed a RESTful architecture using Node.js and Express with MongoDB for persistent, encrypted storage[cite: 47].

Tech Stack: Node.js · Express.js · React.js · MongoDB · Passport.js · OAuth 2.0
  `,
  },
];

export default Projects;
