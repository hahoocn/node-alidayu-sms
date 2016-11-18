import TopClient from 'node-taobao-topclient';

function send(options) {
  return new Promise((resolve, reject) => {
    if (options) {
      if (!options.appkey || !options.appsecret) {
        reject('appkey or appsecret need!');
      }
      if (!options.params) {
        reject('params need!');
      }
      const https = options.https || true;

      const client = new TopClient({
        appkey: options.appkey,
        appsecret: options.appsecret,
        REST_URL: https ? 'https://eco.taobao.com/router/rest' : 'http://gw.api.taobao.com/router/rest'
      });
      client.execute('alibaba.aliqin.fc.sms.num.send', options.params)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
    }
  });
}

const sms = {
  send,
};

export default sms;
