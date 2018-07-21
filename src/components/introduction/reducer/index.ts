import { combineReducers } from 'redux';
import { createSelector } from 'reselect'

import { actionTypes, IntroductionActions, ISetBasicInfo } from '../actions/introduction.actions';
import { IRootState } from '../../../store/reducer';


export interface IIntroductionState {
  readonly name: string,
  readonly title: string
};

export const introductionReducer = (state:IIntroductionState = {name:'', title:''}, action:IntroductionActions) => {
  switch (action.type) {
    case actionTypes.SET_BASIC_INFO:
      return Object.assign({}, state, {name: (action as ISetBasicInfo).name, title: (action as ISetBasicInfo).title})
    default: 
      return state;
  }
}

export const getIntroduction = (state: IRootState):IIntroductionState => state.introduction;

export const getName =  createSelector<IRootState, IIntroductionState, string>(
  getIntroduction,
  (state:IIntroductionState) => state.name
);

export const getTitle =  createSelector<IRootState, IIntroductionState, string>(
  getIntroduction,
  (state:IIntroductionState) => state.title
);