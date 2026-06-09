---
description: Migrate code from one pattern, library, or version to another
argument-hint: <from> to <to> (e.g., "axios to fetch")
allowed-tools: Read, Edit, Grep, Glob, Bash
model: sonnet
---

Migration: $ARGUMENTS

Steps:
1. Use Grep to find every file using the old pattern
2. List the files first. Show me the plan before changing anything.
3. After approval, edit one file at a time. Run the test suite after each.
4. If a test breaks, stop and explain what happened.

Never do a bulk find-and-replace. Each file needs its own context.