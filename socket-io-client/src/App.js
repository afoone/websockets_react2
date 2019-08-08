import React from 'react';
import socketIOClient from 'socket.io-client';


class App extends React.Component{


  socket=null;

  constructor(props){
    super(props);
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001"
    }
    this.socket = socketIOClient(this.state.endpoint);
  }

  componentDidMount(){
    //this.socket = socketIOClient(this.state.endpoint);
    this.socket.on("chat", data =>{console.log(data); this.setState({response: data})});
  }

  render() {
    return (
      <>
      <p>Mensaje recibido... {this.state.response}</p>
      <button onClick={e=>{
        this.socket.emit("chat", "hola");
      }}>Enviar mensaje</button>
      </>
    )
  }
}

export default App;
