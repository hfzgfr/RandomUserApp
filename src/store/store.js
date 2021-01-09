import { createStore } from 'redux';
import usersReducer from '../reducers/users';

const store = createStore(usersReducer);
// store.subscribe method which will get fired when dispatch any action and able to see the updated store data using store.getState method
store.subscribe(() => {
  console.log('store data:', store.getState());
});
export default store;