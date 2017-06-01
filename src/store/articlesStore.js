import ObjectAssign from 'object-assign';
import AppDispatcher from '../dispatcher';
import Constants from '../constants/constants';

const EventEmitter = require('events').EventEmitter;


const CHANGE_EVENT = 'change';

// Define the store as an empty array
let _store = {
  list: null
};


const ArticleStore = ObjectAssign({}, EventEmitter.prototype, {

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },
  getList() {
    return _store;
  }
});

AppDispatcher.register((payload) => {
  const action = payload.action;
  switch (action.actionType) {
    case Constants.NEW_NEWS:
      const newArticle = action.response;
      _store.list = newArticle;
      ArticleStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

export default ArticleStore;
