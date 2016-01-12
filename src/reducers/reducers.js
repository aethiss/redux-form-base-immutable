import {reducer as formReducer} from 'redux-form';
import { combineReducers } from 'redux-immutablejs';
import Immutable from 'immutable';


const reducer = combineReducers({
  form: (state = Immutable.fromJS({}), action) => Immutable.fromJS(formReducer(state.toJS(), action))
})

export default reducer


// TEST
/* requestLogin: (Userstate = Immutable.fromJS({action: 'requestLogin'}), action) => {
  if(action.type === 'requestLogin') {
    return Userstate.merge(action.data);
  }
  return Userstate;
} */