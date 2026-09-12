# eBurnout: Occupational Burnout Detection & Management System

A comprehensive, full-stack ecosystem designed to assess, monitor, and mitigate occupational burnout risk among healthcare professionals. The system bridges machine learning risk-stratification with a cross-platform mobile application and a real-time web analytics dashboard.

> **Architectural Note:** This project demonstrates an end-to-end product lifecycle, from data science conceptualization (predictive modeling) to a deployed, scalable, serverless multi-platform application.

---

## 🏗️ System Architecture

The solution is decoupled into three primary components, orchestrated via a serverless cloud backend:

1. **Mobile Application (`BurnOut/Ionic`)**  
   An offline-first, cross-platform app (iOS/Android) built with Ionic 3 and Angular 5. It allows end-users to complete daily assessments, track behavioral metrics, and view personalized risk dashboards.
2. **Web Analytics Dashboard (`BurnOut/Back`)**  
   A responsive administrative portal for HR and medical staff to monitor aggregate institutional risk, manage user cohorts, and visualize longitudinal burnout trends.
3. **Cloud Infrastructure & Landing (`BurnOutLanding`)**  
   A serverless backend powered by Firebase (Authentication, Realtime Database, Hosting), ensuring high availability, automatic scaling, and real-time data synchronization without DevOps overhead.

---

## ⚙️ Key Technical Features

- **Offline-First Data Persistence**: Local caching via `cordova-sqlite-storage` ensures full app functionality in low-connectivity environments (e.g., hospital basements), with automatic conflict resolution upon reconnection.
- **Advanced Data Visualization**: Integration of `ECharts` and `Chart.js` for rendering complex, multi-dimensional health metrics efficiently on both mobile and web clients.
- **Hardware Integration**: Native access to device camera and secure in-app browsing for supplementary health documentation.
- **Security & Compliance**: Implementation of secure authentication flows and data anonymization protocols, validated by McAfee SECURE certification.

---

## 🧰 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Mobile** | Ionic 3, Angular 5, TypeScript, Cordova (iOS/Android) |
| **Web Dashboard** | Angular 5, Angular Flex-Layout, RxJS |
| **Backend / Cloud** | Firebase (Auth, Realtime DB, Hosting), AngularFire2 |
| **Data Visualization** | ECharts (`ngx-echarts`), Chart.js |
| **Local Storage** | Cordova SQLite Storage, Ionic Storage |

---

## ⚖️ Architectural Trade-offs & Decisions

As an architect, every technology choice involves a trade-off. Key decisions for this system include:

1. **Serverless (Firebase) vs. Custom Backend (Node.js/PostgreSQL)**  
   - *Decision*: Adopted Firebase.  
   - *Trade-off*: Sacrificed complex relational query flexibility and strict SQL ACID guarantees in exchange for rapid development cycles, native real-time synchronization, and zero server maintenance. The NoSQL document model was carefully structured around user-centric trees to mitigate query limitations.
2. **Offline-First Mobile Strategy**  
   - *Decision*: Implemented local SQLite caching instead of pure cloud-dependent API calls.  
   - *Trade-off*: Increased local storage footprint and complexity in state synchronization, but guaranteed 100% uptime for the end-user in environments with unstable network coverage.
3. **ECharts over D3.js**  
   - *Decision*: Selected `ECharts` via `ngx-echarts`.  
   - *Trade-off*: Less granular, pixel-perfect customizability than D3.js, but gained significant advantages in out-of-the-box mobile rendering performance, smaller bundle size impact, and easier Angular integration.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v8.x or higher recommended for legacy Angular 5 compatibility)
- Ionic CLI (`npm install -g ionic`)
- Angular CLI (`npm install -g @angular/cli@1.5.0`)

### 1. Mobile Application (Ionic)
```bash
cd BurnOut/Ioniceburnout/
npm install
ionic cordova platform add android # or ios
ionic cordova run android
```
### 2. Web Dashboard (Angular)
```bash
cd BurnOut/Back
npm install
ng serve --open
```
## 📂 Project Structure
```bash
eburnout/
├── BurnOut/
│   ├── Ionic/               # Cross-platform mobile application source
│   └── Back/                # Angular web dashboard for administrators
├── BurnOutLanding/          # Firebase-hosted public landing page
├── DIAGRAMA DE FLUJO eburnout.pdf # System architecture and user flow diagrams
└── README.md                # Project documentation
```

## 👤 Author & Maintainer

**Christian Vladimir Sucuzhanay Arevalo**  
*Data & AI Solutions Architect*  
Building production-grade GenAI systems and data architectures on AWS.

🔗 [LinkedIn](https://www.linkedin.com/in/sucuzhanay) · 🌐 [Portfolio](https://christiansucuzhanay.com/) · ☁️ [AWS Builder](https://builder.aws.com/community/@sucuzhanay)



