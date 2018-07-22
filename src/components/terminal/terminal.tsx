import * as React from "react";
import { connect } from 'react-redux';
import { IRootState } from '../../store/reducer';
import Terminal from 'terminal-in-react';


export interface ITerminalProps {

}

export default class MyTerminal extends React.Component<ITerminalProps> {

  showMsg = () => 'Hello World'

  public render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            showmsg: this.showMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
        />
      </div>
    );
  }
}

