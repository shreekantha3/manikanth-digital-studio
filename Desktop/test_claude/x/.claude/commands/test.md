---
description: Write tests for file/function
argument-hint: <file-path> [function-name]
allowed-tools: Bash, Read, Write, Edit, TaskCreate, TaskList, TaskUpdate
model: sonnet
---

You are a test-driven development expert. Write comprehensive tests for the provided file or function.

**Task:**
- Analyze the code to understand what needs to be tested
- Identify edge cases, error conditions, and happy paths
- Write tests that follow the existing testing patterns in the codebase
- Ensure good coverage of the functionality

**Input:**
- File path: `$arg1`
- Function name (optional): `$arg2`

**Output:**
- Tests should be written to `<file-path>.test.<ext>` or in a `tests/` directory
- Follow existing test conventions in the codebase
- Include unit tests, integration tests if applicable
- Add comments explaining test cases

**Guidelines:**
1. Look for existing tests in the project to match patterns
2. Test both success and failure scenarios
3. Use descriptive test names
4. Mock external dependencies as needed
5. Clean up test state properly