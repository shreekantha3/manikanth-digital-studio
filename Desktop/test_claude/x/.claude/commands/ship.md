---
description: Run the writer, reviewer, and tester subagents in parallel on the same task
argument-hint: <task description>
allowed-tools: Read, Grep, Glob, Bash, Task
model: opus
---

Ship the following task: $ARGUMENTS

Step 1: Write a one-paragraph brief that defines the task. Include:
- Goal
- Files in scope
- Definition of done
- Out of scope

Step 2: Dispatch in parallel using the Task tool:
- writer agent with the brief
- tester agent with the brief (so tests are designed from the spec, not
  from implementation)
- reviewer agent will run after writer completes

Step 3: When writer finishes, dispatch reviewer with the writer's diff.

Step 4: Collect all three reports. Show me a single summary:
- Writer: what was implemented (file:line)
- Tester: tests written and current pass/fail status
- Reviewer: critical, important, and nitpick findings

Step 5: Do not commit. Wait for my approval. If I approve, commit with a
message that references the brief.