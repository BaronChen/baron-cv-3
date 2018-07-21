
import { combineReducers } from 'redux';

import {introductionReducer, IIntroductionState} from '../components/introduction/reducer'


export interface IRootState {
  introduction: IIntroductionState
}

export const rootReducer = combineReducers<IRootState>({
    introduction: introductionReducer
});