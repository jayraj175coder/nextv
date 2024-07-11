import axios from 'axios';

const API_ENDPOINT = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const API_KEY = 'YOUR_OPENAI_API_KEY';

export const getAnswer = async (question) => {
  const response = await axios.post(
    API_ENDPOINT,
    {
      prompt: question,
      max_tokens: 100,
    },
    {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    }
  );
  return response.data.choices[0].text.trim();
};
