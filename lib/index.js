'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodeTaobaoTopclient = require('node-taobao-topclient');

var _nodeTaobaoTopclient2 = _interopRequireDefault(_nodeTaobaoTopclient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function send(options) {
  return new Promise(function (resolve, reject) {
    if (options) {
      if (!options.appkey || !options.appsecret) {
        reject('appkey or appsecret need!');
      }
      if (!options.params) {
        reject('params need!');
      }
      var https = options.https || true;

      var client = new _nodeTaobaoTopclient2.default({
        appkey: options.appkey,
        appsecret: options.appsecret,
        REST_URL: https ? 'https://eco.taobao.com/router/rest' : 'http://gw.api.taobao.com/router/rest'
      });
      client.execute('alibaba.aliqin.fc.sms.num.send', options.params).then(function (result) {
        resolve(result);
      }).catch(function (err) {
        reject(err);
      });
    }
  });
}

var sms = {
  send: send
};

exports.default = sms;