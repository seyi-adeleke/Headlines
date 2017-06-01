import AppDispatcher from '../dispatcher';
import Constants from '../constants/constants';

module.exports = {
  receiveArticle: function (response) {
    AppDispatcher.handleServerAction({
      actionType: Constants.NEW_ARTICLE,
      response: response
    });
  }
};