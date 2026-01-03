# StudyForge-AI

An intelligent AI-powered learning platform designed to personalize educational experiences through adaptive learning paths, intelligent tutoring, and comprehensive progress tracking.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Deployment Instructions](#deployment-instructions)
- [Core Features](#core-features)
- [Methodology](#methodology)
- [Example Flow](#example-flow)
- [File Structure](#file-structure)
- [Environment Variables](#environment-variables)
- [Contributing Guidelines](#contributing-guidelines)

## ✨ Features

### Adaptive Learning Paths
- Personalized learning journeys based on individual student profiles
- Dynamic difficulty adjustment based on performance metrics
- Real-time progress tracking and analytics

### AI-Powered Tutoring
- Intelligent question generation and answering
- Context-aware explanations and hints
- Multi-language support for global accessibility

### Comprehensive Assessment System
- Automated quiz generation
- Detailed performance analytics
- Skill gap identification and recommendations

### Progress & Analytics Dashboard
- Real-time learning metrics
- Visualization of learning patterns
- Performance benchmarking

### Content Management
- Structured curriculum organization
- Multi-format content support (text, video, interactive)
- Version control for learning materials

### User Management
- Role-based access control (Students, Teachers, Admins)
- Student progress monitoring for educators
- Customizable user profiles

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **API Documentation**: Swagger/OpenAPI

### Frontend
- **Framework**: React.js (v18+)
- **State Management**: Redux/Context API
- **Styling**: Tailwind CSS
- **UI Components**: Material-UI or similar
- **Charts & Analytics**: Chart.js or Recharts

### AI/ML Components
- **LLM Integration**: OpenAI GPT API / Anthropic Claude
- **NLP Processing**: Natural Language Processing for content analysis
- **Machine Learning**: Python-based models for personalization

### DevOps & Infrastructure
- **Containerization**: Docker
- **Orchestration**: Kubernetes (optional)
- **CI/CD**: GitHub Actions
- **Cloud Provider**: AWS / Google Cloud / Azure
- **Monitoring**: Prometheus + Grafana
- **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana)

### Development Tools
- **Version Control**: Git
- **Package Management**: npm/yarn
- **Testing**: Jest, Mocha, Chai
- **Code Quality**: ESLint, Prettier
- **API Testing**: Postman / Insomnia

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or Atlas cloud)
- Git
- Python (v3.9+) for ML components

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Adamanthagency/StudyForge-AI.git
   cd StudyForge-AI
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set Up Environment Variables**
   ```bash
   # Copy example env files
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```
   
   See [Environment Variables](#environment-variables) section for detailed configuration.

5. **Initialize Database**
   ```bash
   # Run migrations and seed data
   cd backend
   npm run db:migrate
   npm run db:seed
   ```

6. **Start Development Servers**

   **Backend** (Terminal 1):
   ```bash
   cd backend
   npm run dev
   ```

   **Frontend** (Terminal 2):
   ```bash
   cd frontend
   npm start
   ```

7. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - API Documentation: http://localhost:5000/api/docs

## 🚢 Deployment Instructions

### Docker Deployment

1. **Build Docker Images**
   ```bash
   # Build backend image
   docker build -t studyforge-ai-backend ./backend

   # Build frontend image
   docker build -t studyforge-ai-frontend ./frontend
   ```

2. **Create Docker Compose File**
   ```bash
   docker-compose up -d
   ```

### Kubernetes Deployment

1. **Create Kubernetes Manifests**
   ```bash
   kubectl apply -f k8s/namespace.yaml
   kubectl apply -f k8s/configmap.yaml
   kubectl apply -f k8s/secrets.yaml
   kubectl apply -f k8s/deployment.yaml
   kubectl apply -f k8s/service.yaml
   ```

2. **Verify Deployment**
   ```bash
   kubectl get pods -n studyforge
   kubectl get services -n studyforge
   ```

### Cloud Deployment (AWS/GCP/Azure)

1. **Prepare for Cloud**
   ```bash
   # Build and push images to container registry
   docker tag studyforge-ai-backend gcr.io/project-id/studyforge-backend
   docker push gcr.io/project-id/studyforge-backend
   ```

2. **Deploy Using Cloud Platform CLI**
   - **AWS**: Use ECS, EKS, or Elastic Beanstalk
   - **GCP**: Use Cloud Run or GKE
   - **Azure**: Use Container Instances or AKS

3. **Configure CI/CD Pipeline** (GitHub Actions)
   - See `.github/workflows/` for pipeline configuration
   - Automatically builds, tests, and deploys on push

### Environment Setup for Production

- Configure all required environment variables
- Set up SSL/TLS certificates
- Configure CDN for static assets
- Set up database backups
- Configure monitoring and logging

## 🎯 Core Features

### 1. Adaptive Learning Engine
- **Machine Learning Models**: Personalize learning paths based on:
  - Student performance metrics
  - Learning style preferences
  - Time spent on topics
  - Question difficulty levels
  
- **Recommendation System**: Suggest next topics and resources
- **Performance Prediction**: Predict likelihood of success

### 2. Intelligent Content Generation
- **AI-Powered Quiz Generation**: Automatically create quizzes from content
- **Explanation Generation**: Generate contextual explanations using LLMs
- **Content Summarization**: Create concise summaries of topics

### 3. Assessment & Analytics
- **Multi-Type Assessments**: Multiple choice, short answer, essay, coding
- **Instant Feedback**: Immediate feedback on submissions
- **Detailed Analytics**: 
  - Student performance trends
  - Topic mastery levels
  - Time-to-completion metrics
  - Comparative benchmarking

### 4. Collaboration Features
- **Discussion Forums**: Topic-based discussions
- **Peer Learning**: Student-to-student learning opportunities
- **Teacher Monitoring**: Real-time student progress visibility
- **Comments & Annotations**: Collaborative feedback on assignments

### 5. Gamification Elements
- **Badge System**: Earn badges for achievements
- **Leaderboards**: Class and global leaderboards
- **Point System**: Reward engagement and performance
- **Streaks**: Track consecutive learning days

## 📚 Methodology

### Learning Science Approach

StudyForge-AI is built on proven learning science principles:

1. **Spaced Repetition**: Optimal spacing of review sessions
2. **Interleaving**: Mixed practice of different topics
3. **Retrieval Practice**: Active recall through quizzes
4. **Elaboration**: Deep processing through explanations
5. **Metacognition**: Self-assessment and reflection

### Personalization Algorithm

```
Personalization Score = (Performance Weight × Student Performance) 
                        + (Engagement Weight × Student Engagement)
                        + (Style Weight × Learning Style Match)
                        + (Time Weight × Optimal Time Match)
```

### Data-Driven Decisions

- Continuous A/B testing of learning interventions
- Analytics-informed curriculum improvements
- Evidence-based feature development

## 📊 Example Flow

### Student Learning Journey

1. **Onboarding**
   - Student creates account
   - Completes learning style assessment
   - Selects course/subject

2. **Learning Path Generation**
   - AI analyzes student profile
   - Generates personalized learning path
   - Sets initial difficulty level

3. **Content Engagement**
   - Student accesses learning materials
   - AI tracks time spent and engagement
   - System provides adaptive hints

4. **Assessment**
   - Student completes quiz
   - AI evaluates performance
   - Provides instant feedback

5. **Path Adjustment**
   - System analyzes assessment results
   - Recommends next topics or review sessions
   - Adjusts difficulty for next content

6. **Progress Tracking**
   - Student views dashboard with metrics
   - Receives performance insights
   - Identifies areas for improvement

### API Request/Response Example

**Request: Get Personalized Learning Path**
```bash
POST /api/v1/students/:studentId/learning-path/generate
Content-Type: application/json
Authorization: Bearer {token}

{
  "courseId": "course123",
  "targetLevel": "advanced",
  "timePerWeek": 10
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "pathId": "path456",
    "topics": [
      {
        "topicId": "topic1",
        "title": "Advanced Python",
        "estimatedTime": "8 hours",
        "difficulty": "advanced",
        "order": 1
      }
    ],
    "estimatedCompletion": "2026-02-15"
  }
}
```

## 📁 File Structure

```
StudyForge-AI/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   ├── auth.js
│   │   │   └── ai.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── studentController.js
│   │   │   ├── courseController.js
│   │   │   ├── assessmentController.js
│   │   │   └── analyticsController.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Course.js
│   │   │   ├── Student.js
│   │   │   ├── Assessment.js
│   │   │   └── LearningPath.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── students.js
│   │   │   ├── courses.js
│   │   │   ├── assessments.js
│   │   │   └── analytics.js
│   │   ├── middleware/
│   │   │   ├── authentication.js
│   │   │   ├── authorization.js
│   │   │   ├── errorHandler.js
│   │   │   └── validation.js
│   │   ├── services/
│   │   │   ├── aiService.js
│   │   │   ├── learningPathService.js
│   │   │   ├── assessmentService.js
│   │   │   └── analyticsService.js
│   │   ├── utils/
│   │   │   ├── logger.js
│   │   │   ├── validators.js
│   │   │   └── helpers.js
│   │   └── app.js
│   ├── tests/
│   │   ├── unit/
│   │   ├── integration/
│   │   └── e2e/
│   ├── migrations/
│   ├── seeds/
│   ├── .env.example
│   ├── package.json
│   └── docker/Dockerfile
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard/
│   │   │   ├── LearningPath/
│   │   │   ├── Assessment/
│   │   │   ├── Analytics/
│   │   │   └── Common/
│   │   ├── pages/
│   │   │   ├── LoginPage.js
│   │   │   ├── DashboardPage.js
│   │   │   ├── LearningPage.js
│   │   │   └── ProfilePage.js
│   │   ├── services/
│   │   │   ├── apiService.js
│   │   │   └── authService.js
│   │   ├── store/
│   │   │   ├── slices/
│   │   │   ├── actions/
│   │   │   └── index.js
│   │   ├── styles/
│   │   │   └── tailwind.config.js
│   │   ├── utils/
│   │   └── App.js
│   ├── tests/
│   ├── .env.example
│   ├── package.json
│   └── docker/Dockerfile
│
├── ml-models/
│   ├── models/
│   │   ├── personalization_model.py
│   │   ├��─ difficulty_predictor.py
│   │   └── performance_predictor.py
│   ├── data/
│   ├── notebooks/
│   ├── requirements.txt
│   └── Dockerfile
│
├── k8s/
│   ├── namespace.yaml
│   ├── configmap.yaml
│   ├── secrets.yaml
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── test.yml
│       └── deploy.yml
│
├── docker-compose.yml
├── .gitignore
├── LICENSE
└── README.md
```

## 🔐 Environment Variables

### Backend Environment Variables

```bash
# Server Configuration
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/studyforge
MONGODB_TEST_URI=mongodb://localhost:27017/studyforge_test
DB_AUTO_SYNC=true

# Authentication
JWT_SECRET=your_super_secret_jwt_key_change_in_production
JWT_EXPIRE=7d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRE=30d

# AI/LLM Configuration
OPENAI_API_KEY=sk-your-openai-api-key
OPENAI_MODEL=gpt-4
CLAUDE_API_KEY=your-claude-api-key
CLAUDE_MODEL=claude-3-sonnet
AI_SERVICE_PROVIDER=openai  # or 'claude'

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
EMAIL_FROM=noreply@studyforge.com

# File Storage
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_S3_BUCKET=studyforge-assets

# Logging
LOG_LEVEL=info
LOG_FILE=logs/app.log

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000  # 15 minutes
RATE_LIMIT_MAX_REQUESTS=100

# Analytics
ANALYTICS_ENABLED=true
SEGMENT_WRITE_KEY=your-segment-key

# Redis (for caching)
REDIS_URL=redis://localhost:6379
REDIS_PASSWORD=your-redis-password

# Feature Flags
FEATURE_AI_TUTORING=true
FEATURE_GAMIFICATION=true
FEATURE_PEER_LEARNING=true
```

### Frontend Environment Variables

```bash
# API Configuration
REACT_APP_API_URL=http://localhost:5000/api/v1
REACT_APP_API_TIMEOUT=30000

# Authentication
REACT_APP_JWT_STORAGE_KEY=studyforge_token

# Application
REACT_APP_APP_NAME=StudyForge AI
REACT_APP_ENVIRONMENT=development

# Third-party Services
REACT_APP_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
REACT_APP_SEGMENT_WRITE_KEY=your-segment-key

# Feature Flags
REACT_APP_ENABLE_ANALYTICS=true
REACT_APP_ENABLE_FEEDBACK=true

# Maps & Location
REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-key
```

### Production Secrets Management

- Use environment variable management systems:
  - AWS Secrets Manager
  - Google Cloud Secret Manager
  - Azure Key Vault
  - HashiCorp Vault

- Never commit secrets to version control
- Use `.env.example` for template documentation

## 🤝 Contributing Guidelines

We welcome contributions from the community! Please follow these guidelines:

### Getting Started with Development

1. **Fork the Repository**
   ```bash
   git clone https://github.com/your-username/StudyForge-AI.git
   cd StudyForge-AI
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or for bug fixes:
   git checkout -b bugfix/your-bug-description
   ```

3. **Make Your Changes**
   - Follow the existing code style
   - Write clear, descriptive commit messages
   - Add tests for new functionality

4. **Testing**
   ```bash
   # Run all tests
   npm test

   # Run tests with coverage
   npm run test:coverage

   # Run specific test file
   npm test -- path/to/test.js
   ```

### Code Standards

#### JavaScript/TypeScript
- Use ESLint and Prettier for code formatting
  ```bash
  npm run lint
  npm run format
  ```
- Follow ES6+ best practices
- Use meaningful variable and function names
- Write JSDoc comments for functions

#### Python (ML Models)
- Follow PEP 8 style guide
- Use type hints
- Include docstrings for functions and classes

### Commit Message Format

Follow conventional commits:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring without feature changes
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build process, dependencies, etc.

**Example:**
```
feat(learning-path): add adaptive difficulty adjustment

- Implement machine learning model for difficulty prediction
- Add API endpoint for path adjustments
- Update frontend to display difficulty changes

Closes #123
```

### Pull Request Process

1. **Update Your Branch**
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Push Your Changes**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create Pull Request**
   - Provide clear title and description
   - Reference related issues
   - Include screenshots/demos if applicable

4. **PR Checklist**
   - [ ] Tests pass locally
   - [ ] Code follows style guidelines
   - [ ] Documentation updated
   - [ ] Commit messages follow format
   - [ ] No unnecessary dependencies added
   - [ ] Backwards compatible (if applicable)

5. **Code Review**
   - Address reviewer comments
   - Update code as needed
   - Re-request review when ready

6. **Merge**
   - Ensure all CI/CD checks pass
   - Maintainer will merge the PR

### Reporting Issues

When reporting bugs, please include:
- Clear, descriptive title
- Detailed description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots/logs if applicable
- Environment information (OS, Node version, etc.)

### Feature Requests

When suggesting features:
- Clear, descriptive title
- Detailed use case
- Expected benefits
- Potential implementation approach
- Any alternative solutions considered

### Documentation

- Keep README.md updated
- Add inline comments for complex logic
- Update API documentation for endpoint changes
- Include examples for new features

### Questions or Need Help?

- Open a GitHub Discussion
- Check existing issues and documentation
- Ask in the community forum
- Contact maintainers via email

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.

## 🙏 Acknowledgments

- Special thanks to all contributors
- Learning science research foundations
- Open-source community projects
- Educational technology pioneers

---

**Last Updated**: January 3, 2026

For more information, visit our [website](https://studyforge.ai) or contact us at info@studyforge.ai
