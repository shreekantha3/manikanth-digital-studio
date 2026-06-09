---
name: project-rules
description: Project coding standards and principles
metadata:
  type: project
---

# Project Rules

Always:

- Think before coding
- Create implementation plan first
- Review existing code before changes
- Explain root cause before fixes
- Follow SOLID principles
- Follow PEP8 for Python
- Add logging
- Add error handling
- Add type hints
- Add documentation
- Create tests when appropriate
- Perform self-review before completion

Never:

- Make assumptions
- Delete code without explanation
- Introduce breaking changes without warning
- Ignore edge cases

---

## Self-Check Protocol

Before showing any result, do ALL of:

1. Run the relevant test, build, or lint command
2. Read every file you edited end to end
3. Check for leftovers: console.log, print(), commented-out code, TODO markers
4. Confirm the diff matches what you intended to change

**"Done" requires evidence from this session.** Never claim success based on a previous turn.

---

## Multi-Agent Workflow System

### Setup (10 minutes)

1. Create directories: `.claude/agents/` and `.claude/commands/`
2. Create agent files: `writer.md`, `reviewer.md`, `tester.md`, `self-reviewer.md`
3. Create slash command: `ship.md`
4. Create settings: `.claude/settings.json` with hooks

### Usage

```
/ship <task description>
```

### Agents

| Agent | Role | Tools | When to Use |
|-------|------|-------|-------------|
| writer | Implements features | Read, Write, Edit, Glob, Grep, Bash | New code needed |
| reviewer | Reviews code quality | Read, Grep, Glob, Bash | After writer completes |
| tester | Writes tests from spec | Read, Write, Edit, Bash | After writer completes |
| self-reviewer | Self-checks work | Read, Grep, Glob, Bash | Before showing results |

### Settings Hooks

| Hook | When | What It Does |
|------|------|--------------|
| **PostToolUse** | After Write/Edit | Runs syntax check |
| **Stop** | Before session ends | Runs test suite |

### Workflow Benefits

- **Throughput**: 3x more PRs per session
- **Separation of concerns**: Code, review, and tests handled by different agents
- **Parallel execution**: Writer and tester run simultaneously
- **Quality**: Dedicated reviewer catches issues writer misses

---

## Slash Command Library

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `/ship` | Full workflow (write → test → review) | New features, medium-large tasks |
| `/review` | Code review for bugs/security/style | After writing code |
| `/test` | Write tests for file/function | After implementation |
| `/migrate` | Migrate patterns/libraries | Refactoring dependencies |
| `/audit` | Security audit | Before production, sensitive code |
| `/doc` | Update docs to match code | After API changes |
| `/triage` | Bug report triage | New issues to prioritize |
| `/refactor` | Safety-first refactoring | Improving code quality |