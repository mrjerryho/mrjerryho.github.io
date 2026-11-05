---
title: How I build
description: How I ship side projects in evening hours with a team of AI agents. They draft, tests verify, and I make the decisions.
---

I build side projects in the evenings and on weekends, and AI coding agents do most of the typing. I set the scope, review the work, and make the calls that are hard to undo.

## The team

I run a team of 13 Claude Code agents. Each has a narrow role, a fixed output format and a clear definition of done, so I review against a checklist instead of a vibe.

| Role | Owns |
|---|---|
| Product owner | Scope, priorities, and what not to build |
| Researcher | Prior art and competitors, with citations |
| Red-team critic | Arguing against a plan before it's built |
| UX and UI designers | Flows, every edge state, design tokens |
| Architect | System design, with decisions labelled by reversibility |
| Backend and frontend developers | Code, built to the architecture and UX specs |
| QA engineer | Tests that try to break things, and a ship / don't-ship call |
| Security engineer | Read-only audits |
| Infra engineer | CI, deployment and monitoring as code |

## Guardrails

Every role owns one source-of-truth document, and an agent stops if a task conflicts with a document it doesn't own. Hooks enforce the important rules in code, not in the agent's memory. Auditors get a read-only shell. Infra can plan but can't destroy anything. Trading research can't reach a live account. Destructive operations are never autonomous: the agent writes the command, states the blast radius and hands it to me.

## Verification first

Nothing counts as done until a test or a real run says so. When I port an engine between languages, the original produces golden fixtures and the port has to match them. When the agents can't verify something, the report labels it unverified. Any claimed result is a hypothesis until it's tested on real data.

## What I've learned

1. **Label every decision by reversibility.** Agents decide the cheap ones. One-way doors wait for me.
2. **Write the defaults down.** When I'm not around to answer, work goes ahead on recorded defaults that I can override later. It doesn't stall.
3. **The critic earns its place.** The red team has changed designs before a line of code was written, including moving a privacy-sensitive step onto the device.
4. **Let agents tell me I'm wrong.** The best pushback I've had came from an architect agent pointing out that a feature I wanted contradicted the product's core bet.
