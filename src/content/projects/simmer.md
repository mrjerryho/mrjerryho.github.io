---
title: Simmer
subtitle: Privacy-first screenshot triage for iPhone, built by a team of AI coding agents
summary: An iPhone app that sorts your screenshots into the few worth acting on. Images never leave the phone, and private details are redacted on-device before anything is sent.
status: Building
groups: [iOS, AI]
stack: [Swift 6, SwiftUI, Vision, Python, Flask, SQLite, Claude Code]
order: 4
featured: true
workingName: true
gallery: []
architecture:
  columns:
    - title: On the iPhone
      boxes:
        - name: On-device OCR
          detail: Text recognition runs locally; images never leave the phone
        - name: Redaction
          detail: Sensitive details removed before any network call
          highlight: true
    - title: Thin backend
      boxes:
        - name: Text-only API
          detail: Rejects anything that isn't redacted text
          highlight: true
        - name: Classification
          detail: AI sorts items; every result is schema-validated
    - title: Back on the iPhone
      boxes:
        - name: Triage view
          detail: The items worth your time, with next steps
        - name: Delete all
          detail: Wipes local data and asks the server to purge
  links: [redacted text only, validated JSON]
  caption: The phone is the system of record. The server only ever sees redacted text.
facts:
  - label: Agent roles
    value: 13 defined, 11 used here
  - label: Decision records
    value: "11"
  - label: Redaction test cases
    value: "57"
---

## Overview

Most screenshots are noise, and the useful ones never get looked at again. Simmer reads them and brings up the few worth acting on. Screenshots also hold bank balances, private messages and one-time codes, so privacy was the first requirement, not something added later.

## Engineering highlights

- **Privacy enforced by the type system.** Network calls only accept a redacted-text type, so unredacted content can't be sent by mistake.
- **On-device first.** OCR, redaction and noise filtering run on the phone. The backend handles text only and refuses images outright.
- **Built by an agent team.** I wrote the product spec and made the decisions. A team of Claude Code agents designed, built, tested and audited the app under hook-enforced guardrails. More on [How I build](/how-i-build/).
- **Verified, not assumed.** Two security audits, and every fix was confirmed by re-running the test suites.
