class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes('navigate') || lowercase.includes('menu')) {
        this.actionProvider.handleNavigation();
      } else {
        this.actionProvider.handleDefault();
      }
    }
  }
  
  export default MessageParser;
  