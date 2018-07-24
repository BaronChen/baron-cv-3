
import { combineReducers } from 'redux';

import {introductionReducer, IIntroductionState} from '../components/introduction/reducer'
import {modalReducer, IModalState} from '../components/modal/reducer'


export interface IRootState {
  introduction: IIntroductionState,
  modal: IModalState
}

export const rootReducer = combineReducers<IRootState>({
    introduction: introductionReducer,
    modal: modalReducer
});