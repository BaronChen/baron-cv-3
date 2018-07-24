import { Action, Dispatch } from 'redux';

export const actionTypes = {
  SET_MODAL_OPEN: '[MODAL]SET_MODAL_OPEN',
  SET_MODAL_TYPE: '[MODAL]SET_MODAL_TYPE'
}

export interface ISetModalOpen extends Action {
  modalOpened : boolean, 
}

export interface ISetModalType extends Action {
  modalType : string, 
}

export type ModalActions = ISetModalOpen | ISetModalType | Action;

export const setModalOpen = (modalOpened:boolean): ISetModalOpen => ({
  type: actionTypes.SET_MODAL_OPEN,
  modalOpened
});

export const setModalType = (modalType:string): ISetModalType => ({
  type: actionTypes.SET_MODAL_TYPE,
  modalType
});