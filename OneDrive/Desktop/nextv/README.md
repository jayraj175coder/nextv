# CollegeFinder - Next Generation College Discovery Platform

A modern, responsive web application designed to help students find their ideal colleges with advanced features like AI assistance, college predictions, and community discussions.

## 🚀 Features

- **Smart College Search**: Find colleges based on your preferences and scores
- **AI Assistant**: Get personalized college recommendations using AI
- **Cutoff Analysis**: View historical cutoff data for colleges
- **College Predictor**: Predict your chances of getting into specific colleges
- **Community Discussion**: Connect with other students and share experiences
- **Notice Board**: Stay updated with latest announcements
- **Responsive Design**: Works seamlessly on all devices

## 🛠️ Tech Stack

- **Frontend**: React.js 18.3.1
- **Styling**: Bootstrap 5.3.3, CSS3
- **Routing**: React Router DOM 6.24.1
- **Backend**: Firebase (Authentication & Database)
- **AI Integration**: OpenAI API
- **Deployment**: GitHub Pages
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/jayraj175coder/nextv.git
cd nextv
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_OPENAI_API_KEY=your_openai_api_key
```

4. Start the development server:
```bash
npm start
```

5. Build for production:
```bash
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Home.js         # Landing page
│   ├── NavBar.js       # Navigation component
│   ├── Colleges.js     # College listing
│   ├── Cutoff.js       # Cutoff analysis
│   ├── AiAssistant.js  # AI-powered assistant
│   ├── Discuss.js      # Community discussions
│   ├── Login.js        # Authentication
│   └── ...
├── services/           # API services
├── assets/            # Static assets
└── styles/           # Global styles
```

## 🚀 Deployment

The application is deployed on GitHub Pages. To deploy:

```bash
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Jayraj Sanas**
- GitHub: [@jayraj175coder](https://github.com/jayraj175coder)
- Medium: [@jayrajsanas175](https://medium.com/@jayrajsanas175)

## 🙏 Acknowledgments

- Bootstrap for the UI framework
- Firebase for backend services
- OpenAI for AI capabilities
- React community for excellent documentation

## 📞 Support

For support, email jayrajsanas175@gmail.com or create an issue in this repository.
