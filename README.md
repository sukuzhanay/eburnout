# eBurnout

### Occupational Burnout Detection & Management Platform

A full-stack health-tech ecosystem designed to **assess, monitor and support the management of occupational burnout risk among healthcare professionals**.

eBurnout combines questionnaire-based assessment, physiological data, wearable integration, mobile engineering and real-time analytics in a multi-platform system designed for clinical environments.

> **Engineering scope:** From data-science and predictive-risk concepts to mobile applications, cloud services, wearable integration and institutional analytics.

---

## Overview

Occupational burnout is a multidimensional problem that cannot be represented adequately by a single data source.

eBurnout was designed around a broader model combining:

- **Maslach-based burnout assessment**
- **Physiological data**
- **Wearable-device information**
- **Behavioral and longitudinal indicators**
- **Risk visualization and monitoring**

The system was conceived for use with **healthcare professionals** and developed in connection with real hospital environments.

Rather than implementing an isolated model or questionnaire, eBurnout explores the complete engineering problem:

**data acquisition → persistence → processing → risk assessment → visualization → monitoring**

---

## Architecture

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
      └─────────────────────┘             └─────────────────────┘
                                   │
                                   ▼
                        ┌─────────────────────┐
                        │ Firebase Cloud      │
                        │ Services            │
                        └─────────────────────┘
```

---

## System Components

### Mobile Application

`BurnOut/Ionic`

Cross-platform application for **iOS and Android**, built with Ionic 3 and Angular 5.

It provides the end-user experience for assessments, behavioral indicators, physiological-data integration and personalized risk visualization.

### Analytics Dashboard

`BurnOut/Back`

Web application designed to provide an aggregate view of burnout indicators and longitudinal information for institutional analysis.

Built with Angular and interactive visualization components.

### Cloud & Web Layer

`BurnOutLanding`

Firebase-backed components supporting authentication, real-time data persistence, hosting and the public-facing application layer.

---

## Key Engineering Features

**Offline-first architecture**  
Local persistence through Cordova SQLite Storage and Ionic Storage allows the mobile application to continue operating in low-connectivity environments, with synchronization when connectivity becomes available.

**Wearable integration**  
Fitbit authentication and physiological-data integration complement questionnaire-derived information with data obtained from connected devices.

**Multi-source assessment**  
The system combines traditional burnout assessment with physiological and behavioral information rather than relying on a single signal.

**Real-time analytics**  
Interactive dashboards expose individual and aggregate burnout indicators using ECharts and Chart.js.

**Cross-platform engineering**  
A shared Ionic/Angular architecture targets iOS and Android while retaining access to native device capabilities through Cordova.

**Serverless cloud architecture**  
Firebase services provide authentication, real-time persistence and hosting without requiring a traditionally managed application-server infrastructure.

**Security & privacy considerations**  
Authentication, controlled data access and anonymization mechanisms were incorporated into a system handling sensitive occupational-health information.

**Security validation**  
The deployed environment was subjected to external security validation, including McAfee SECURE certification.

---

## Technology Stack

| Layer | Technologies |
|---|---|
| **Mobile** | Ionic 3 · Angular 5 · TypeScript · Cordova |
| **Web Dashboard** | Angular 5 · Angular Flex-Layout · RxJS |
| **Cloud / Backend** | Firebase Authentication · Realtime Database · Hosting · AngularFire2 |
| **Visualization** | ECharts · ngx-echarts · Chart.js |
| **Local Persistence** | Cordova SQLite Storage · Ionic Storage |
| **Wearables** | Fitbit API · OAuth |
| **Development** | Docker · npm · Ionic CLI · Angular CLI |
| **Platforms** | iOS · Android · Web |

---

## Architectural Decisions

### Serverless vs. Custom Backend

**Decision — Firebase**

A managed serverless backend accelerated development and provided native real-time synchronization without maintaining a conventional application-server stack.

**Trade-off**

Reduced operational overhead and faster iteration in exchange for tighter coupling to Firebase's data model and fewer relational-query capabilities than a traditional SQL backend.

---

### Offline-first vs. Cloud-dependent Mobile

**Decision — Local persistence**

The mobile application incorporates SQLite/local storage rather than depending exclusively on continuous cloud connectivity.

**Trade-off**

Additional state and synchronization complexity in exchange for resilience in environments where connectivity may be unreliable — particularly relevant to hospital environments.

---

### Cross-platform vs. Native Applications

**Decision — Ionic + Angular + Cordova**

A common codebase was used across mobile platforms.

**Trade-off**

Reduced duplicated development effort and enabled a shared application architecture, while introducing a hybrid runtime and dependency on native plugins for device-specific capabilities.

---

### Questionnaire-only vs. Multi-source Assessment

**Decision — Combine assessment and physiological data**

Traditional burnout assessment was complemented with wearable-derived physiological information.

**Trade-off**

Greater data-integration complexity in exchange for a richer analytical foundation than questionnaire data alone.

---

### ECharts vs. Lower-level Visualization

**Decision — ECharts / Chart.js**

Higher-level visualization libraries were selected for the analytical interfaces.

**Trade-off**

Less low-level visualization control in exchange for faster implementation, responsive dashboards and straightforward integration with the Angular application.

---

## End-to-End Engineering Scope

```text
Clinical Use Case
       ↓
Mobile Application
       ↓
Questionnaire ────── Wearable / Physiological Data
       │                         │
       └────────────┬────────────┘
                    ↓
             Data Persistence
                    ↓
          Assessment / Analytics
                    ↓
        Individual Risk Dashboard
                    ↓
       Institutional Monitoring
                    ↓
           Cloud Infrastructure
```

eBurnout therefore represents more than an individual application.

It brings together:

**Software Engineering · Data Integration · Mobile · Cloud · Analytics · Health-Tech**

---

## Project Structure

```text
eburnout/
│
├── BurnOut/
│   ├── Ionic/                 # iOS / Android application
│   └── Back/                  # Analytics & administration dashboard
│
├── BurnOutLanding/            # Web / Firebase components
│
├── DIAGRAMA DE FLUJO eburnout.pdf
│                              # System and application-flow documentation
│
└── README.md
```

---

## Getting Started

> **Legacy environment:** eBurnout was developed with the Ionic 3 / Angular 5 ecosystem. Reproducing the original application may require compatible Node.js and dependency versions.

### Mobile

```bash
cd BurnOut/Ionic
npm install
ionic serve
```

For a native target:

```bash
ionic cordova platform add android
ionic cordova run android
```

or configure the corresponding iOS environment.

### Web Dashboard

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

## From eBurnout to Data & AI Architecture

eBurnout represents an earlier stage of my engineering work where several themes that remain central to my work today were already converging:

**data acquisition · system integration · cloud services · analytics · architecture**

My current work extends those foundations toward **AWS Data Architecture, Generative AI, Amazon Bedrock, RAG and AI-ready data platforms**.

---

## Author

**Christian Vladimir Sucuzhanay Arévalo**

Data & AI Solutions Architect | AWS Data Architecture | Generative AI & Amazon Bedrock | Big Data | Former University Lecturer

[Official Website](https://christiansucuzhanay.com/) ·
[Technical Portfolio](https://sukuzhanay.github.io/) ·
[AWS Builder](https://builder.aws.com/community/@sucuzhanay) ·
[LinkedIn](https://www.linkedin.com/in/sucuzhanay)

---

**Build. Explain. Teach. Share.**
