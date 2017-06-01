const Dispatcher = require('flux').Dispatcher;

const AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function (action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action
  });
};

AppDispatcher.handleServerAction = function (action) {
  this.dispatch({
    source: 'SERVER_ACTION',
    action
  });
};

module.exports = AppDispatcher;
