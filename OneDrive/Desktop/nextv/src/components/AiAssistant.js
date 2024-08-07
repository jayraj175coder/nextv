import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { NavBar } from './NavBar';
import './AiAssistant.css';
import AnimatedBackground from './AnimatedBackground';

const predefinedAnswers = {
  'what is meaning of direct second year?': 'What is DSY (Direct Second Year) Engineering? Direct Second Year Engineering refers to a program or admission process that allows students who have completed a polytechnic diploma or an equivalent degree in a related field to directly join the second year of an engineering program (B. Tech or BE).',
  'why one go degree': 'for better growth you one choose degree',
  'what is degree Benefits?': 'High Salary, Many company hired only degree students,More learning',
  'what is dsy means?': 'THe meaninig of this isDirect Second Year.',
  'hi how are you': 'I am good. Feel free to ask me Direct Second year related questions...',
  'hi': 'HI, Feel free to ask me Direct Second year related questions... ',
  'if I not get degree college then': 'There are serval ways to go,  if you unable to find degree college...  1.You pursue BS degree. 2.You go for foreign 3.You tried to institute level seats round',
};

const AiAssistant = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAsk = async () => {
    const trimmedQuestion = question.trim().toLowerCase();
    if (predefinedAnswers[trimmedQuestion]) {
      setAnswer(predefinedAnswers[trimmedQuestion]);
    } else {
      try {
        const response = await axios.post(
          'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBkhxvZVguq_fhfjvjfVIz3CNV_pkXGisA',
          {
            prompt: question,
            max_tokens: 100,
            temperature: 0.5,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('API Response:', response.data);
        if (response.data.choices && response.data.choices.length > 0) {
          setAnswer(response.data.choices[0].text.trim());
        } else {
          setAnswer('No answer received from the model.');
        }
      } catch (error) {
        console.error('Error getting answer:', error.response ? error.response.data : error.message);
        if (error.response && error.response.status === 400) {
          setAnswer('Invalid request. Please check the input and try again.');
        } else if (error.response && error.response.status === 401) {
          setAnswer('Authorization failed. Please check your API token.');
        } else {
          setAnswer('Sorry, I am unable to get the answer at the moment.');
        }
      }
    }
  };

  return (
    <div>
      <NavBar />
      <AnimatedBackground />
      <div className="container mt-5">
        <h1 className="text-center mb-4">AI Assistant</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Ask a question..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleAsk}>
                Ask
              </button>
            </div>
            {answer && (
              <div className="alert alert-info mt-3">
                <strong>Answer:</strong> {answer}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAssistant;
