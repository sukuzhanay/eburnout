# eBurnout

### Occupational Burnout Detection & Management Platform

![HealthTech](https://img.shields.io/badge/HealthTech-eBurnout-08111f?style=flat-square)
![Mobile](https://img.shields.io/badge/Mobile-Ionic-08111f?style=flat-square)
![Cloud](https://img.shields.io/badge/Cloud-Firebase-f59e0b?style=flat-square)
![Data](https://img.shields.io/badge/Data-Analytics-08111f?style=flat-square)
![Wearables](https://img.shields.io/badge/Wearables-Fitbit-f59e0b?style=flat-square)

A comprehensive, full-stack **health-tech ecosystem** designed to assess, monitor and support the management of occupational burnout risk among healthcare professionals.

eBurnout combines **questionnaire-based assessment, physiological data, wearable integration, mobile engineering, predictive risk concepts and real-time analytics** in a multi-platform system designed for clinical environments.

> **Engineering scope:** From data-science conceptualization and predictive-risk modeling to mobile applications, cloud services, wearable integration and institutional analytics.

[Overview](#-overview) ·
[Architecture](#-system-architecture) ·
[Engineering](#-key-engineering-features) ·
[Stack](#-technology-stack) ·
[Decisions](#-architectural-decisions) ·
[Run](#-getting-started)

---

## 🎯 Overview

Occupational burnout is a multidimensional problem that cannot be represented adequately by a single data source.

eBurnout was designed around a broader assessment model combining:

- **Maslach-based burnout assessment**
- **Physiological data**
- **Wearable-device information**
- **Behavioral and longitudinal indicators**
- **Predictive risk concepts**
- **Risk visualization and monitoring**

The system was conceived for **healthcare professionals** and developed in connection with real hospital environments.

Rather than implementing an isolated model or questionnaire, eBurnout addresses the complete engineering problem:

```text
Data Acquisition
      ↓
Local & Cloud Persistence
      ↓
Data Processing
      ↓
Risk Assessment
      ↓
Visualization
      ↓
Institutional Monitoring
```

---

## 🏗️ System Architecture

```text
                         ┌─────────────────────┐
                         │ Healthcare          │
                         │ Professional        │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │ Ionic / Angular App │
                         │    iOS · Android    │
                         └──────────┬──────────┘
                                    │
                   ┌────────────────┴────────────────┐
                   │                                 │
                   ▼                                 ▼
        ┌────────────────────┐            ┌────────────────────┐
        │ Maslach &          │            │ Fitbit / Wearable  │
        │ Assessment Data    │            │ Physiological Data │
        └─────────┬──────────┘            └─────────┬──────────┘
                  │                                 │
                  └────────────────┬────────────────┘
                                   │
                                   ▼
                        ┌─────────────────────┐
                        │ Risk Assessment &   │
                        │ Application Logic   │
                        └──────────┬──────────┘
                                   │
                 ┌─────────────────┴─────────────────┐
                 │                                   │
                 ▼                                   ▼
      ┌─────────────────────┐             ┌─────────────────────┐
      │ Personal Dashboard  │             │ Institutional       │
      │ & Risk Indicators   │             │ Analytics Dashboard │
      └─────────────────────┘             └──────────┬──────────┘
                                                    │
                                                    ▼
                                         ┌─────────────────────┐
                                         │ Firebase Cloud      │
                                         │ Services            │
                                         └─────────────────────┘
```

The architecture separates the user-facing mobile experience, analytical interfaces, external data sources and cloud services while keeping them integrated as a single product ecosystem.

---

## 🧩 System Components

### 📱 Mobile Application — `BurnOut/Ionic`

An offline-first, cross-platform application for **iOS and Android**, built with Ionic 3, Angular 5 and TypeScript.

The mobile application provides the user-facing experience for:

- completing burnout assessments;
- collecting and presenting behavioral indicators;
- integrating physiological information;
- accessing wearable-derived data;
- visualizing personalized risk indicators;
- operating with local persistence when network connectivity is limited.

---

### 📊 Web Analytics Dashboard — `BurnOut/Back`

A responsive Angular-based administrative and analytical interface.

The dashboard provides visualization of burnout indicators and longitudinal information, supporting an aggregate view of the data for institutional analysis.

Interactive charts allow complex health-related indicators to be presented in a more accessible form.

---

### ☁️ Cloud & Web Layer — `BurnOutLanding`

Firebase-backed components provide the cloud-connected and public-facing layers of the eBurnout ecosystem.

The architecture incorporates managed cloud services for areas including:

- authentication;
- real-time data persistence;
- synchronization;
- hosting;
- public web components.

---

## ⚙️ Key Engineering Features

### 📱 Cross-platform Mobile Engineering

A shared Ionic/Angular codebase targets iOS and Android while retaining access to native device capabilities through Cordova.

This approach reduces duplicated application logic while maintaining a common architecture across mobile platforms.

---

### ⌚ Wearable & Physiological Data Integration

The project contains **Fitbit authentication and integration logic**, allowing physiological information obtained from wearable devices to complement questionnaire-based burnout assessment.

This creates a multi-source data model rather than relying exclusively on self-reported information.

---

### 🧠 Predictive Risk & Data Science

eBurnout was conceived as part of a broader data-driven approach to occupational burnout.

The engineering ecosystem connects application-generated assessment information and physiological data with the conceptualization of **predictive risk modeling and machine-learning-based risk stratification**.

This data-science dimension complements the operational mobile and cloud architecture.

---

### 💾 Offline-First Data Persistence

Local caching through **Cordova SQLite Storage and Ionic Storage** allows the application to retain functionality in environments with limited or unstable network connectivity.

This design is particularly relevant in clinical environments where continuous connectivity cannot always be assumed.

Synchronization mechanisms allow locally persisted information to be reconciled with the connected application environment when connectivity becomes available.

---

### 📊 Advanced Data Visualization

Interactive dashboards use technologies including:

- **ECharts**
- **ngx-echarts**
- **Chart.js**

to visualize multidimensional burnout indicators across mobile and web interfaces.

---

### ☁️ Serverless Cloud Architecture

Firebase provides managed backend capabilities including authentication, real-time persistence and hosting.

The serverless approach reduces the need to operate a traditional application-server infrastructure while providing scalable managed services for the application.

---

### 📷 Native Device Integration

Cordova enables access to native device functionality, including camera capabilities and secure in-app browsing for supporting application workflows.

---

### 🔐 Security & Privacy

The system incorporates secure authentication flows, controlled access and data-anonymization considerations appropriate for handling sensitive occupational-health information.

The deployed environment was also subjected to external security validation, including **McAfee SECURE certification**.

---

### 🐳 Containerized Development

Docker tooling is included as part of the Ionic development workflow, providing a reproducible development environment for portions of the project.

---

## 🧰 Technology Stack

| Layer | Technologies |
|---|---|
| 📱 **Mobile** | Ionic 3 · Angular 5 · TypeScript · Cordova |
| 🖥️ **Web Dashboard** | Angular 5 · Angular Flex-Layout · RxJS |
| ☁️ **Cloud / Backend** | Firebase Authentication · Realtime Database · Hosting · AngularFire2 |
| 📊 **Visualization** | ECharts · ngx-echarts · Chart.js |
| 💾 **Local Persistence** | Cordova SQLite Storage · Ionic Storage |
| ⌚ **Wearables** | Fitbit API · OAuth |
| 🐳 **Development** | Docker · npm · Ionic CLI · Angular CLI |
| 📲 **Platforms** | iOS · Android · Web |

---

## ⚖️ Architectural Decisions

Architecture is not simply a collection of technologies. Each major technology choice involved a trade-off between development speed, operational complexity, resilience and flexibility.

### ☁️ Serverless vs. Custom Backend

**Decision — Firebase**

Firebase was selected as the managed backend platform.

**Why**

It enabled rapid development, authentication, real-time synchronization and managed hosting without requiring a conventional server infrastructure.

**Trade-off**

The architecture sacrifices some relational-query flexibility and introduces greater coupling to Firebase's data model in exchange for:

- lower infrastructure-management overhead;
- native real-time synchronization;
- faster development cycles;
- managed scalability.

---

### 💾 Offline-First vs. Cloud-Dependent Mobile

**Decision — Local SQLite / application storage**

The mobile application incorporates local persistence instead of depending exclusively on continuous API connectivity.

**Why**

Clinical environments may contain areas where network connectivity is unreliable.

**Trade-off**

Local persistence increases state-management and synchronization complexity but provides significantly greater application resilience.

---

### 📱 Cross-platform vs. Native Applications

**Decision — Ionic + Angular + Cordova**

A shared application architecture was selected for iOS and Android.

**Trade-off**

The approach reduces duplicated development effort and enables a common codebase while introducing:

- a hybrid runtime;
- dependency on Cordova plugins;
- additional abstraction around native platform capabilities.

---

### ⌚ Questionnaire-only vs. Multi-source Assessment

**Decision — Combine assessment and physiological data**

Traditional questionnaire-derived burnout information was complemented with physiological information obtained from wearable devices.

**Trade-off**

Integrating heterogeneous sources increases data and application complexity, but provides a richer analytical foundation than a single-source assessment model.

---

### 📊 ECharts vs. Lower-level Visualization

**Decision — ECharts / Chart.js**

Higher-level visualization libraries were selected for analytical interfaces.

**Trade-off**

The architecture accepts less low-level visualization control in exchange for:

- faster implementation;
- responsive dashboards;
- reusable visualization components;
- straightforward Angular integration.

---

## 🔄 End-to-End Engineering

eBurnout spans multiple engineering domains within one system:

```text
                 Clinical Use Case
                        │
                        ▼
                Mobile Application
                        │
              ┌─────────┴─────────┐
              │                   │
              ▼                   ▼
        Questionnaire         Wearables
           Data            Physiological Data
              │                   │
              └─────────┬─────────┘
                        │
                        ▼
                Data Persistence
                        │
                        ▼
              Processing & Analytics
                        │
                        ▼
               Risk Assessment
                        │
              ┌─────────┴─────────┐
              │                   │
              ▼                   ▼
        Personal Risk       Institutional
          Dashboard           Analytics
              │                   │
              └─────────┬─────────┘
                        │
                        ▼
                  Cloud Services
```

The project therefore represents more than an individual mobile application.

It brings together:

**Software Engineering · Data Integration · Mobile · Cloud · Analytics · Health-Tech**

---

## 📂 Project Structure

```text
eburnout/
│
├── BurnOut/
│   │
│   ├── Ionic/                 # iOS / Android mobile application
│   │
│   └── Back/                  # Analytics & administration dashboard
│
├── BurnOutLanding/            # Web / Firebase components
│
├── DIAGRAMA DE FLUJO eburnout.pdf
│                              # System architecture & application flows
│
└── README.md                  # Project documentation
```

---

## 🚀 Getting Started

> **Legacy environment:** eBurnout was developed using the Ionic 3 / Angular 5 ecosystem. Reproducing the original application may require compatible Node.js and dependency versions.

### 1. Mobile Application

```bash
cd BurnOut/Ionic
npm install
ionic serve
```

For Android:

```bash
ionic cordova platform add android
ionic cordova run android
```

For iOS, configure the corresponding Cordova/iOS development environment.

---

### 2. Web Analytics Dashboard

```bash
cd BurnOut/Back
npm install
ng serve
```

Then open:

```text
http://localhost:4200/
```

---

## 🧭 From eBurnout to Data & AI Architecture

eBurnout represents an earlier stage of my engineering work where several themes that remain central to my work today were already converging:

**data acquisition · system integration · cloud services · analytics · architecture**

My current work extends those foundations toward:

**AWS Data Architecture · Generative AI · Amazon Bedrock · RAG · Big Data · AI-ready data platforms**

---

## 🔗 Related Work & Professional Identity

<p align="left">

<a href="https://christiansucuzhanay.com/">
  <img src="assets/christian-sucuzhanay-profile.jpg" width="28" height="28" alt="Christian Vladimir Sucuzhanay Arévalo" style="vertical-align:middle;">
</a>
&nbsp;
<a href="https://christiansucuzhanay.com/">
  <img src="https://img.shields.io/badge/ChristianSucuzhanay.com-08111F?style=for-the-badge" alt="Official Website">
</a>

<a href="https://www.linkedin.com/in/sucuzhanay">
  <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
</a>

<a href="https://builder.aws.com/community/@sucuzhanay">
  <img src="https://img.shields.io/badge/AWS_Builder-232F3E?style=for-the-badge&logo=amazonwebservices&logoColor=FF9900" alt="AWS Builder">
</a>

<a href="https://github.com/sukuzhanay">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</a>

</p>

---

## 👤 Author

### Christian Vladimir Sucuzhanay Arévalo

**Data & AI Solutions Architect | AWS Data Architecture | Generative AI & Amazon Bedrock | Big Data | Former University Lecturer**

<p align="left">

<a href="https://christiansucuzhanay.com/">
      
  <img src="BurnOutLanding/CHRISTIAN_VLADIMIR_SUCUZHANAY_AREVALO_500x600_1.jpg" width="24" height="24" alt="Christian Sucuzhanay" style="vertical-align:middle;">
</a>
&nbsp;
<a href="https://christiansucuzhanay.com/">
  <img src="https://img.shields.io/badge/Website-08111F?style=flat-square" alt="Website">
</a>

<a href="https://www.linkedin.com/in/sucuzhanay">
  <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn">
</a>

<a href="https://builder.aws.com/community/@sucuzhanay">
  <img src="https://img.shields.io/badge/AWS_Builder-232F3E?style=flat-square&logo=amazonwebservices&logoColor=FF9900" alt="AWS Builder">
</a>

<a href="https://github.com/sukuzhanay">
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub">
</a>

</p>

---

<p align="center">
  <strong>Build. Explain. Teach. Share.</strong>
</p>
