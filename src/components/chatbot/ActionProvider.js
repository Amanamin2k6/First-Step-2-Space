class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleDefault = () => {
      const message = this.createChatBotMessage(
        "I'm sorry, I didn't understand. Can you please rephrase your question?"
      );
  
      this.updateChatbotState(message);
    };
  
    handleNavigation = () => {
      const message = this.createChatBotMessage(
        "Here are the available pages on our website:",
        {
          widget: 'navigation',
        }
      );
  
      this.updateChatbotState(message);
    };
  
    updateChatbotState(message) {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;