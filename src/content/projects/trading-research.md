---
title: Backtesting & validation platform
subtitle: Research infrastructure for futures, built to reject overfit backtests
summary: Clean futures data, realistic fills and a validation library that treats every backtest as unproven until it survives out-of-sample checks.
status: Research
groups: [Trading, Data]
stack: [Python, pandas, NumPy / SciPy, Parquet, pytest, Claude Code hooks]
order: 5
featured: false
architecture:
  columns:
    - title: Data
      boxes:
        - name: Layered Parquet store
          detail: Immutable raw data; higher timeframes built from one base series
        - name: Data audits
          detail: Automated checks for gaps and contract-change artifacts
    - title: Continuous contracts
      boxes:
        - name: Roll-aware series
          detail: Adjusted prices for signals, real prices for fills
          highlight: true
    - title: Validation
      boxes:
        - name: Trial log
          detail: Every variant recorded before results are read
        - name: Overfitting checks
          detail: Walk-forward, purged k-fold, deflated Sharpe, PBO
          highlight: true
  links: [stitched contracts, every variant logged]
  caption: Each stage enforces one rule in code, so a later script can't quietly skip it.
facts:
  - label: Contract rolls verified
    value: 12, asserted in tests
---

## Overview

Backtests are easy to flatter: try enough variants and one wins by luck. I built research infrastructure for index futures where the common mistakes are hard to make by accident. By default, "does this work?" gets the answer "not proven yet."

## Engineering highlights

- **Trustworthy data.** Raw data is never modified. Every timeframe comes from one base series, so the timeframes can't disagree with each other.
- **Correct contract rolls.** Continuous futures use adjusted prices for signals and real prices for fills. Known-answer tests and real-data checks catch roll bugs.
- **Realistic fills.** Strategies can't choose their own fill price. A shared cost model fills at the next bar and charges spread and commission.
- **Overfitting defenses.** Walk-forward and purged cross-validation, the deflated Sharpe ratio and the probability of backtest overfitting. All of them read their trial counts from an append-only log.
- **Safety by construction.** Research agents work only against a paper account, and hooks block anything that points at a live connection.
