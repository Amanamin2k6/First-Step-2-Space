import React from 'react';
import Chatbot from 'react-chatbot-kit';

const config = {
  botName: 'My Bot',
  backgroundColor: '#fafafa',
  botAvatar: 'https://i.imgur.com/8aN31Dn.png',
  userAvatar: 'https://i.imgur.com/52PmUAd.png',
  steps: [
    {
      id: '1',
      message: 'Hello, how can I help you today?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Sorry, I am not programmed to understand your response. Please try again.',
      trigger: '2',
    },
  ],
};


const ChatbotButton = () => {
  return (
    <div>
      <Chatbot config={config} />
    </div>
  );
};

export default ChatbotButton;