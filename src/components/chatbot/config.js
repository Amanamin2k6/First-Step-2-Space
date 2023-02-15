import React from 'react';
import Navigation from './Navigation';

const config = {
  botName: 'Navigation Bot',
  initialMessages: [
    {
      type: 'botMessage',
      message: 'Hi, how can I help you today?',
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#376B7E',
    },
  },
  widgets: [
    {
      widgetName: 'navigation',
      widgetFunc: (props) => <Navigation {...props} />,
    },
  ],
};
export default config;
