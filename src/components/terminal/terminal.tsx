import * as React from "react";
import { connect } from 'react-redux';
import { IRootState } from '../../store/reducer';
import Terminal from 'terminal-in-react';
import { Dispatch } from 'redux';
import { setModalOpen } from '../modal/actions/modal.actions'


export interface ITerminalProps {

}

export class MyTerminal extends React.Component<ITerminalProps & {dispatch: Dispatch}, {}> {

  showMsg = () => 'Hello World'

  public render() {
    return (
      <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            showmsg: this.showMsg,
            popup: () => alert('Terminal in React'),
            education: () => {this.props.dispatch(setModalOpen(true))}
          }}
          descriptions={{
            showmsg: 'shows a message',
            popup: 'alert',
            education: 'Show my education'
          }}
          msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return { 

	};
}

export default connect(mapStateToProps, null)(MyTerminal);

