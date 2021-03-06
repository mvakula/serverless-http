'use strict';

module.exports = function cleanupEvent(evt) {
  const event = evt || {};

  event.httpMethod = event.httpMethod || 'GET';
  event.body = event.body || '';
  event.headers = event.headers || {};
  event.requestContext = event.requestContext || {};
  event.requestContext.path = event.requestContext.path || '/';
  event.requestContext.identity = event.requestContext.identity || {};

  return event;
};
