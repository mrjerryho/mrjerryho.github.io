---
title: FitFlight
subtitle: Camera-based fitness arcade game for iOS
summary: An iOS game where squats, push-ups and pull-ups control the character. On-device pose tracking turns your body into the controller.
status: Building
groups: [iOS]
stack: [Swift, SwiftUI, SpriteKit, Apple Vision, AVFoundation, Supabase, XCTest]
order: 3
featured: true
cover: /projects/fitflight/04-gameplay.png
gallery:
  - src: /projects/fitflight/01-home.png
    caption: "1. Home: your daily goal and streak (Simulator)."
  - src: /projects/fitflight/02-select-exercise.png
    caption: "2. Pick an exercise and difficulty (Simulator)."
  - src: /projects/fitflight/03-calibration.png
    caption: "3. A quick calibration fits the game to your body (Simulator, mock pose data)."
  - src: /projects/fitflight/04-gameplay.png
    caption: "4. Your movement steers the character (Simulator, mock pose data)."
  - src: /projects/fitflight/05-results.png
    caption: "5. Results and progress toward your goal (Simulator, mock pose data)."
architecture:
  columns:
    - title: Capture
      boxes:
        - name: Camera + pose
          detail: Front camera into Apple Vision body pose, all on-device
    - title: Interpret
      boxes:
        - name: Rep detection
          detail: Turns noisy joint data into reliable rep counts
          highlight: true
        - name: Calibration
          detail: Adapts to each player's body and camera position
          highlight: true
    - title: Game
      boxes:
        - name: SpriteKit scene
          detail: Endless side-scroller driven by your movement
    - title: Persist
      boxes:
        - name: Progress + leaderboard
          detail: Streaks on device; optional Sign in with Apple leaderboard
  links: [pose frames, reps + position, session result]
  caption: Detection and mapping are plain Swift with no UI dependencies, so the riskiest part can be unit-tested.
facts:
  - label: Unit tests
    value: 92 passing
  - label: Exercises
    value: Squat, push-up, pull-up
---

## Overview

Prop up your phone and start a set, and your body steers the character through an endless side-scroller. No wearables are needed, and camera frames never leave the device.

## Engineering highlights

- **From pose to gameplay in real time.** Camera frames go through on-device pose detection into the game loop. Frames are dropped under load, so latency never builds up.
- **Reliable rep counting.** Each exercise has its own detector, built to ignore tracking jitter. A per-session calibration handles different bodies and camera angles.
- **Testable core.** The detection and mapping code doesn't depend on any UI. 92 unit tests drive it with synthetic poses.
- **Offline-first backend.** An optional Supabase leaderboard uses row-level security and queues scores while you're offline.
