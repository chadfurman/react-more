import {combineReducers} from 'redux-immutable';
import counter from './modules/counter';

const App = combineReducers({
  counter
});

export default App;
