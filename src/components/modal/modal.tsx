import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { IRootState } from '../../store/reducer';
import { getModalOpen, getModalType} from './reducer';
import { Dispatch } from 'redux';
import { setModalOpen } from './actions/modal.actions';


export interface IMyModal {
  modalOpened: boolean;
  modalType: string;
}

export class MyModal extends React.Component<IMyModal & {dispatch: Dispatch}, {}> {

  handleClose = () => {
    this.props.dispatch(setModalOpen(false));
  }

  public render() {
    return (
      <Modal open={this.props.modalOpened} centered={false} onClose={this.handleClose} closeOnEscape={true} closeOnDimmerClick={true}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>We've found the following gravatar image associated with your e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    );
  }
}


const mapStateToProps = (state: IRootState) => {
  return { 
		modalOpened: getModalOpen(state),
		modalType: getModalType(state)
	};
}

export default connect(mapStateToProps)(MyModal);
