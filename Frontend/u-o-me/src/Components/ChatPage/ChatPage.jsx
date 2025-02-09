import React from "react";
import { ChatFeed, Message } from "react-chat-ui";
import { createMessage, getMessages } from "../../handlers/chatHandler";
class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
      ],
      newMessageText: ""
    };
  }
  async componentDidMount() {
    this.fetchMessages();
  }
  fetchMessages = async () =>{
    try{
      const messages = await getMessages(this.props.chat_id);
      this.setState({messages});
    } catch (error){
      console.error(error);
    }
  }
  handleInputChange = (event) =>{
    this.setState({newMessageText: event.target.value});
  }

  handleSend = async() =>{
    const { chat_id, sender } = this.props;
    const { newMessageText } = this.state;

    try{
      await createMessage(this.props.chat_id, this.props.sender, newMessageText);
      await this.fetchMessages();
      this.setState({newMessageText: ""});
    }catch(error){
      console.error(error);
    }
  }
  render() {
    const { messages, newMessageText } = this.state;
    const { sender } = this.props;
    return (
      <div className="chat-app">
        <div className="messages">
          {messages.map((msg) => (
            <div 
              key={msg.id}

              className={`bubble ${msg.sender === sender ? "bubble-right" : "bubble-left"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="You owe me..."
            value={newMessageText}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleSend}>Send</button>
        </div>
      </div>
    );
  }
}
export default Bubble;