import { combineReducers } from 'redux';
import { createSelector } from 'reselect'

import { actionTypes, ModalActions, setModalOpen, ISetModalOpen, ISetModalType } from '../actions/modal.actions';
import { IRootState } from '../../../store/reducer';


export interface IModalState {
  readonly modalOpened: boolean,
  readonly modalType: string
};

export const modalReducer = (state:IModalState = {modalOpened:false, modalType:''}, action: ModalActions) => {
  switch (action.type) {
    case actionTypes.SET_MODAL_OPEN:
      return Object.assign({}, state, {modalOpened: (action as ISetModalOpen).modalOpened});
    case actionTypes.SET_MODAL_TYPE:
      return Object.assign({}, state, {modalType: (action as ISetModalType).modalType});
    default: 
      return state;
  }
}

export const getModalState = (state: IRootState):IModalState => state.modal;

export const getModalType =  createSelector<IRootState, IModalState, string>(
  getModalState,
  (state:IModalState) => state.modalType
);

export const getModalOpen =  createSelector<IRootState, IModalState, boolean>(
  getModalState,
  (state:IModalState) => state.modalOpened
);
