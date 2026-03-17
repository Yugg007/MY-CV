const Projects = [
  {
    id: "routely",
    name: "Routely – High-Concurrency Ride Sharing Platform",
    github: "https://github.com/Yugg007/Routely",
    description: `
Engineered a cloud-native microservices ecosystem focused on high availability and sub-100ms latency. This project demonstrates enterprise-grade patterns for data consistency and real-time communication.

Key features include:
- 🚀 Distributed Consistency: Achieved 99.9% data consistency using the Transactional Outbox Pattern and Kafka event-driven lifecycles.
- ⚡ Performance Optimization: Reduced driver-searching latency by 60% by migrating to Redis Geo-indexing (OpsForGeo).
- 🛠️ Scalable Communication: Architected a centralized library using Protobuf (gRPC), reducing network payload sizes by 75%.
- 🛡️ Reliability: Configured API Gateway Rate Limiting to handle 1,000+ requests per second and enforced Ride PIN Verification.

Tech Stack: Java · Spring Boot · Kafka · Redis · gRPC · Protobuf · Docker · React · Socket.IO
`
  },
  {
    id: "talentai",
    name: "TalentAI – AI Recruitment Platform",
    github: "https://github.com/Yugg007/TalentAI",
    description: `
A cloud-native recruitment ecosystem that leverages Artificial Intelligence to automate the hiring pipeline.

Key features include:
- 🔍 AI-Driven ATS Engine: Developed an intelligent scoring engine that analyzes resumes against job descriptions using custom prompts.
- 💬 Real-Time Collaboration: Integrated Socket.IO for candidate-recruiter chat and peer interview scheduling.
- 🌐 Personalized Intelligence: Features a tech-specialized news feed and an AI chatbot optimized with caching for high performance.

Tech Stack: Spring Boot · React.js · Node.js · MongoDB · AWS (EC2, S3) · Socket.IO · AI/LLM Integration
`
  },
  {
    id: "gsoc23",
    name: "AOSSIE – GSoC '23 (Blockchain Governance)",
    description: `
Successfully contributed to the AOSSIE organization during Google Summer of Code 2023, focusing on decentralized voting systems.

Key features include:
- 🗳️ Algorithmic Implementation: Engineered and integrated complex voting algorithms including Borda count, Schulze, and Score.
- 💎 Smart Contract Architecture: Architected modular Smart Contracts using the Diamond Standard (EIP-2535) to enhance upgradability.
- 🔐 Access Control: Developed versatile election frameworks with both Permissionless and Invite-only access controls.

Tech Stack: Blockchain · Solidity · Smart Contracts (EIP-2535) · Algorithms
`
  },
  {
    id: "investfin",
    name: "InvestFin AI – Personal Finance Advisor",
    description: `
Smart finance assistant offering automated budget insights and investment suggestions through real-time data analysis.

Key features include:
- 💰 Financial Intelligence: Provides personalized investment suggestions and transaction analysis using AI models.
- 🔌 API Integration: Leverages Setu/FinBox APIs to fetch and process real-time financial data securely.

Tech Stack: React · Node.js · AI Models · Financial APIs
`
  },
  {
    id: "skybnb",
    name: "SkyBnb – Airbnb Clone",
    description: `
A comprehensive full-stack property listing and booking platform designed for scalability and seamless user experience.

Key features include:
- 🏠 Booking System: Features a complete end-to-end workflow for property discovery, listing management, and user bookings.
- 🔑 Authentication: Secure user authentication and profile management integrated with a persistent database.

Tech Stack: React · Spring Boot · MongoDB · Java
`
  },
  {
    id: "whishper",
    name: "Whishper – Anonymous Secret Sharing",
    github: "https://github.com/Yugg007/Whisper-App",
    description: `
A secure, scalable web application for anonymous secret sharing, focusing on robust identity management and data privacy.

Key features include:
- 🔒 Secure Auth: Implemented OAuth 2.0 (Google) and local passport strategies for encrypted, anonymous access.
- 🚀 Scalable Backend: Developed a RESTful architecture using Node.js and Express with MongoDB.

Tech Stack: Node.js · Express.js · React.js · MongoDB · Passport.js · OAuth 2.0
  `
  }
];

export default Projects;