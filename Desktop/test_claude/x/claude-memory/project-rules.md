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

## Honesty Rules (Read Every Turn)

Before claiming a function, class, or import exists, verify it by reading
the file or running a grep. Never fabricate symbols.

If you cannot verify something, say "I haven't verified this" explicitly.
Do not write code that depends on the unverified claim.

If a task asks you to use a library you've never seen referenced in this
project, ask before adding it.

If a task involved tests or builds, do not claim success unless you
actually ran the test or build command in this session.

Never invent error messages, API responses, or stack traces. If you
didn't see them, say so.

When you genuinely don't know, the correct answer is "I don't know" or
"I need to check first." Both are better than a confident guess.

---

## Verification Protocol

Before writing or editing code that uses a symbol (function, class, type,
constant), do one of:

1. Read the file where it's defined and confirm the signature
2. Run `grep -r "symbolName" .` or use Glob to find it
3. Check package.json, requirements.txt, Cargo.toml, or equivalent for the dependency

If you skip verification, prefix the code with:
`// UNVERIFIED: I have not confirmed this symbol exists`

Plan-then-execute mode is preferred for any task touching more than one file.

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

## Privacy Lockdown Setup

### Environment Variables

```bash
# Kill all non-essential traffic
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1

# Don't save session transcripts
export CLAUDE_CODE_SKIP_PROMPT_HISTORY=1

# Hide working directory
export CLAUDE_CODE_HIDE_CWD=1
```

### Settings Check

1. claude.ai → Settings → Privacy
2. Turn OFF "Model improvement"
3. Turn OFF "Conversation history for training"
4. Enable Incognito mode for sensitive work

### Deny Rules

```json
{
  "permissions": {
    "deny": [
      "Read(**/.env*)",
      "Read(**/.ssh/**)",
      "Read(**/.aws/**)",
      "Bash(curl *)",
      "Bash(wget *)"
    ]
  }
}
```

### Privacy Checklist

- [ ] Set privacy environment variables
- [ ] Turn off model improvement in settings
- [ ] Add deny rules for sensitive files
- [ ] Use Incognito mode for sensitive work

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

---

## Implementation Summary

### What Was Built

| System | Components | Purpose |
|--------|------------|---------|
| **Multi-Agent** | 9 agents | Parallel code review, testing, verification |
| **Slash Commands** | 8 commands | One-command workflows |
| **Hooks** | 2 types | Auto-lint, auto-test |
| **Privacy** | 3 env vars + deny rules | Data protection |
| **Memory** | 3 files | Persistent project context |

### How to Use in New Projects

1. **Copy the configuration:**
   ```bash
   cp -r .claude/ /new/project/
   cp CLAUDE.md /new/project/
   ```

2. **Set environment variables:**
   ```bash
   export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
   export CLAUDE_CODE_SKIP_PROMPT_HISTORY=1
   export CLAUDE_CODE_HIDE_CWD=1
   ```

3. **Start using:**
   ```bash
   /ship "implement feature X"
   @reviewer check the last commit
   @fact-checker verify all claims
   ```

### Best Practices

**🔴 High Priority:**
- Use `/ship` for all medium-large tasks
- Always run `@fact-checker` before commits
- Keep deny rules for sensitive files

**🟡 Medium Priority:**
- Set up hooks for auto-linting
- Use `@test-writer` for comprehensive tests

**🟢 Low Priority:**
- Privacy environment variables
- Memory files for context