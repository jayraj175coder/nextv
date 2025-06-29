# Contributing to CollegeFinder

Thank you for your interest in contributing to CollegeFinder! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Git

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/nextv.git
   cd nextv
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory with your configuration:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   REACT_APP_OPENAI_API_KEY=your_openai_api_key
   ```
5. Start the development server:
   ```bash
   npm start
   ```

## 📝 Development Guidelines

### Code Style

- Use consistent indentation (2 spaces)
- Follow ESLint rules
- Use meaningful variable and function names
- Add comments for complex logic
- Use TypeScript-like prop types for components

### Component Structure

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ComponentName.css';

const ComponentName = ({ prop1, prop2 }) => {
  // Component logic here
  
  return (
    <div className="component-name">
      {/* JSX content */}
    </div>
  );
};

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number
};

ComponentName.defaultProps = {
  prop2: 0
};

export default ComponentName;
```

### CSS Guidelines

- Use CSS custom properties (variables) for consistent theming
- Follow BEM methodology for class naming
- Use responsive design principles
- Include accessibility considerations

### Git Workflow

1. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes
3. Commit with descriptive messages:
   ```bash
   git commit -m "feat: add new college search functionality"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a Pull Request

### Commit Message Format

Use conventional commit messages:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

## 🎯 Areas for Contribution

### High Priority
- [ ] Improve mobile responsiveness
- [ ] Add more college data
- [ ] Enhance AI assistant functionality
- [ ] Add unit tests
- [ ] Improve accessibility

### Medium Priority
- [ ] Add dark mode support
- [ ] Implement caching strategies
- [ ] Add more regional data
- [ ] Improve search algorithms
- [ ] Add user preferences

### Low Priority
- [ ] Add animations and transitions
- [ ] Implement PWA features
- [ ] Add internationalization
- [ ] Create admin dashboard
- [ ] Add analytics

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Description**: Clear description of the issue
2. **Steps to reproduce**: Detailed steps to reproduce the bug
3. **Expected behavior**: What you expected to happen
4. **Actual behavior**: What actually happened
5. **Environment**: Browser, OS, device information
6. **Screenshots**: If applicable

## 💡 Feature Requests

When suggesting features:

1. **Description**: Clear description of the feature
2. **Use case**: Why this feature would be useful
3. **Implementation ideas**: Any thoughts on how to implement
4. **Mockups**: If you have design ideas

## 📋 Pull Request Guidelines

### Before submitting a PR:

1. **Test your changes**: Ensure everything works as expected
2. **Update documentation**: Update README, comments, etc.
3. **Check for conflicts**: Resolve any merge conflicts
4. **Follow the style guide**: Ensure code follows project conventions
5. **Add tests**: If applicable, add or update tests

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested on different browsers

## Screenshots
Add screenshots if applicable

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
- [ ] Responsive design maintained
```

## 🤝 Code Review Process

1. All PRs require at least one review
2. Address review comments promptly
3. Maintainers may request changes
4. Once approved, PRs will be merged

## 📞 Getting Help

- **Issues**: Use GitHub issues for bugs and feature requests
- **Discussions**: Use GitHub discussions for questions and ideas
- **Email**: Contact jayrajsanas175@gmail.com for urgent matters

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

## 📄 License

By contributing to CollegeFinder, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to CollegeFinder! 🎓 