---
title: TiltGuard
subtitle: AI discipline coach for options traders
summary: A desktop app that listens while you trade, transcribes speech on the machine, and flags emotional trading in real time. The AI helps interpret what you say, and your own pre-set rules decide.
status: Building
groups: [Trading, AI]
stack: [Tauri v2, Rust, React, TypeScript, whisper.cpp, SQLite, Claude on AWS Bedrock]
order: 2
featured: true
cover: /projects/tiltguard/03-red-alert.png
gallery:
  - src: /projects/tiltguard/01-rules.png
    caption: "1. Set your own rules before the session."
  - src: /projects/tiltguard/02-live-transcript.png
    caption: "2. Think out loud. Speech is transcribed locally and checked as you go."
  - src: /projects/tiltguard/03-red-alert.png
    caption: "3. When it hears tilt, it steps in and slows you down."
architecture:
  columns:
    - title: Desktop UI (React)
      boxes:
        - name: Live dashboard
          detail: Session view with the transcript and controls
        - name: Interventions
          detail: Escalating prompts that slow you down when tilt shows up
          highlight: true
    - title: Core (Rust)
      boxes:
        - name: Local speech pipeline
          detail: On-device transcription; audio never leaves the machine
        - name: Rules engine
          detail: Deterministic checks of the rules you set before the session
          highlight: true
    - title: Storage & AI
      boxes:
        - name: Local journal
          detail: Sessions and events stored in SQLite on your machine
        - name: Claude on Bedrock
          detail: Summaries and structured extraction only
  links: [Tauri commands + events, local writes]
  caption: The model reads and summarizes, but enforcement is plain, tested code, so the model never has the final say.
---

## Overview

Traders usually lose money by breaking their own rules, not by picking bad setups. TiltGuard holds you to the rules you set before the session. It doesn't give signals or tell you what to trade. It notices when you start trading on emotion and gets in the way.

## Engineering highlights

- **Real-time, private voice.** Audio is captured and transcribed on the machine by a Rust pipeline that runs off the UI thread. Nothing is sent over the network.
- **AI kept out of enforcement.** The model turns speech into structured input and writes summaries. Rule checks are deterministic Rust, so a confident wrong answer can't talk you past your own limits.
- **Native desktop app.** Built with Tauri v2: a Rust core, a strict TypeScript React UI, and a local SQLite journal.
- **Testable by design.** The rules and session logic are pure functions with unit tests that need no UI, microphone or network.
