import { Action, Dispatch } from 'redux';

export const actionTypes = {
  SET_BASIC_INFO: '[INTRO]SET_BASIC_INFO'
}


export interface ISetBasicInfo extends Action {
  name : string, 
  title : string
}

export type IntroductionActions = ISetBasicInfo | Action;

export const setBasicInfo = (name:string, title:string): ISetBasicInfo => ({
  type: actionTypes.SET_BASIC_INFO,
  name,
  title,
});
