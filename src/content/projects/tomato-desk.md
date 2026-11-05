---
title: Tomato Desk
subtitle: A Pomodoro timer and focus log for the web
summary: A Next.js and Supabase Pomodoro app whose timer stays accurate in background tabs, with every session logged with a note, tags and an energy rating.
status: Building
groups: [Web]
stack: [Next.js 16, TypeScript, React 19, Tailwind CSS v4, shadcn/ui, Supabase, Postgres (RLS)]
order: 6
featured: false
architecture:
  columns:
    - title: Client
      boxes:
        - name: Deadline-based timer
          detail: Remaining time is always computed from a stored end time
          highlight: true
        - name: App-shell state
          detail: The countdown keeps running as you move between pages
    - title: App
      boxes:
        - name: Focus log
          detail: Notes, tags and energy rating saved after each session
        - name: Reports
          detail: Streaks, weekly and monthly totals, charts
    - title: Supabase
      boxes:
        - name: Postgres + RLS
          detail: Every table limited to its owner by row-level security
          highlight: true
  links: [saves sessions, queries as the user]
  caption: The countdown never depends on the network; the database is touched only when a session ends.
---

## Overview

Most browser timers count down by ticks, and browsers throttle ticks in background tabs. Switch away for a 25-minute block and the timer can come back minutes behind. Tomato Desk stays accurate in the background, and it keeps a record of what you worked on and how it went.

## Engineering highlights

- **Drift-free timing.** The timer stores a deadline and works out the remaining time from it, so a late tick never adds error.
- **State that survives navigation.** The timer lives in the app shell, so the countdown keeps running across pages.
- **Per-user data isolation.** Row-level security on every table, including join tables. Default settings are created on signup by a database trigger.
- **Typed end to end.** Strict TypeScript, with a typed data-access layer kept out of the components.
