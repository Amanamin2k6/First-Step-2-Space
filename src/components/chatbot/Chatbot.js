import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

const ChatbotButton = () => {
  return (
    <div>
      <Chatbot
        config={config}
        actionProvider={new ActionProvider()}
        messageParser={new MessageParser()}
      />
    </div>
  );
};

export default ChatbotButton;
