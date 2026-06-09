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

## Multi-Agent Workflow System

### Setup (10 minutes)

1. Create directories:
   - `.claude/agents/` - Agent definitions
   - `.claude/commands/` - Slash commands

2. Create agent files:
   - `writer.md` - Writes code, no review
   - `reviewer.md` - Reviews code, reports findings
   - `tester.md` - Writes tests from spec

3. Create slash command:
   - `ship.md` - Orchestrates parallel agents

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

### Workflow Benefits

- **Throughput**: 3x more PRs per session
- **Separation of concerns**: Code, review, and tests handled by different agents
- **Parallel execution**: Writer and tester run simultaneously
- **Quality**: Dedicated reviewer catches issues writer misses