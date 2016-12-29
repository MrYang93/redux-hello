import { createStore } from 'redux';
import rootReducer from './reducers';


let comments = [
  "hello1",
  "hello2"
]

const posts = [
  {
    id: 1,
    title: 'redux-hello',
    likes: 3
  },
  {
    id: 2,
    title: 'redux-baby',
    likes: 6
  }
]

const defaultState = {
  posts,
  comments
}

const store = createStore(rootReducer, defaultState);

export default store;
