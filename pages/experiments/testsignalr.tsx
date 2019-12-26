import React, { Component, ReactPropTypes } from "react";
import * as signalR from "@microsoft/signalr";

type ChatState = {
    nick: string,
    message: string,
    messages: Array<string>,
    hubConnection?: signalR.HubConnection,
};

class Chat extends Component<{}, ChatState> {
  constructor(props: ReactPropTypes) {
    super(props);
     
    this.state = {
      nick: 'test-user',
      message: '',
      messages: [],
      hubConnection: undefined,
    }; 
  }

  componentDidMount = () => {
    const hubConnection = new signalR
                .HubConnectionBuilder()
                .withUrl("http://localhost:57321/chat")
                .build();

    hubConnection.on('broadcastMessage', (name: string, message: string) => {
        this.state.messages.push(message);
        this.setState({
            messages: this.state.messages
        });
    });

    this.setState({
        hubConnection: hubConnection
    }, () => {
        hubConnection 
            .start()
            .then(() => console.log("Connection started!"))
            .catch(err => console.log("Error while establishing connection :("));
    });
  }
  
  render() {
    return (
          <div>
            {this.state.messages.map((message, index) => (
              <span style={{display: 'block'}} key={index}> {message} </span>
            ))}
          </div>
      );
  }
}

export default Chat;