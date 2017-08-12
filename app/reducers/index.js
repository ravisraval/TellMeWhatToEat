import { combineReducers } from 'redux';
import messages from './messages';
import auth from './auth';
import QuestionsReducer from './questions_reducer';

export default combineReducers({
  messages,
  auth,
  QuestionsReducer
});
