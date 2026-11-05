---
title: Spreadline
subtitle: An options-spread simulator for iPhone that prices on the device
summary: A SwiftUI app that shows what an options spread is worth as the price and the clock move. All pricing runs on the phone, in a Swift engine that matches my Python reference model to within 1e-15.
status: Building
groups: [iOS, Trading]
stack: [Swift, SwiftUI, Swift Package Manager, XCTest, Python]
order: 1
featured: true
workingName: true
cover: /projects/spreadline/cover.png
gallery:
  - src: /projects/spreadline/01-build.png
    caption: "1. Pick an outlook and place the spread."
  - src: /projects/spreadline/02-curve.png
    caption: "2. Drag the price and scrub time to see profit and loss."
  - src: /projects/spreadline/03-map.png
    caption: "3. The same position as a price-by-time heat map."
  - src: /projects/spreadline/04-greeks.png
    caption: "4. Position greeks that follow the price and time you pick."
architecture:
  columns:
    - title: iPhone app
      boxes:
        - name: SwiftUI screens
          detail: Build, simulate and track spreads with no network wait
        - name: On-device pricing engine
          detail: Dependency-free Swift package that prices and simulates locally
          highlight: true
        - name: Offline cache
          detail: Last data shows instantly on launch, refreshed in the background
    - title: Data service
      boxes:
        - name: Read-only API
          detail: Token-gated and rate-limited, with no write routes
        - name: Pluggable data source
          detail: One interface, so the source can change without an app update
          highlight: true
    - title: Research server
      boxes:
        - name: Reference model
          detail: The original Python engine, used as the test oracle and fallback
  links: [HTTPS + token, read-only]
  caption: Pricing lives on the device so every drag is instant. The servers only hand out data.
facts:
  - label: Engine tests
    value: 107 passing
  - label: Parity with the Python model
    value: 218,738 values, worst relative difference 7.8e-16
---

## Overview

Spreadline answers one question quickly: what is this spread worth if the price moves, and by when? You pick an outlook and place the spread. Then you drag the price and scrub time to see profit and loss as a curve, a heat map or a table. It's a personal build and isn't on the App Store yet. Every screenshot here uses a simulated demo market.

## Engineering highlights

- **On-device pricing.** I ported my Python options model to a dependency-free Swift package. The app reprices on every drag with no round trip and keeps working offline.
- **Exact parity, proven by tests.** The Swift engine is checked against golden outputs from the Python model. 218,738 values agree to within 7.8e-16 relative error, and most are bit-identical.
- **Fast by default.** Responses are cached and refreshed in the background, so a cold launch shows data straight away.
- **Designed for a production data source.** The data service sits behind one interface, so the provider can change without touching the app.
