---
description: Refactor the target with a safety-first approach
argument-hint: <file-or-function> [goal]
allowed-tools: Read, Edit, Bash
model: sonnet
---

Refactor target: $ARGUMENTS

Rules:
1. Enter plan mode first. Show me the plan before any edit.
2. Never touch more than the explicit target without asking.
3. Run the tests before refactoring to capture the baseline.
4. Run the tests after every change.
5. If a test breaks, stop and explain. Do not proceed until I approve.

Goal: maintain behavior, improve readability and maintainability.
If you can't do that without changing behavior, stop and ask.