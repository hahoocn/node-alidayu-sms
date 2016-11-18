# node-alidayu-sms

[![npm version](https://img.shields.io/npm/v/node-alidayu-sms.svg?style=flat-square)](https://www.npmjs.com/package/node-alidayu-sms)

Node.js下阿里大于(原阿里大鱼)短信客户端

## 安装
```
npm install node-alidayu-sms --save
```

## 使用方法
### 发送短信 send(options)
返回Promise格式结果

```javascript
import sms from 'node-alidayu-sms';

sms.send({
  appkey: 'appkey',
  appsecret: 'appsecret',
  params: {
    extend: '123456',
    sms_type: 'normal',
    sms_free_sign_name: '大鱼测试',
    rec_num: '18900000000',
    sms_template_code: 'SMS_8985285',
    sms_param: {
      customer: 'Ray'
    }
  }
})
.then((result) => {
  console.log(result);
})
.catch((err) => {
  console.error(err);
});
```

### 参数
* `appkey` 阿里大于TOP分配给应用的AppKey
* `appsecret` 阿里大于TOP分配给应用的AppSecret
* `https` 是否使用https调用接口 (默认: true)
* `params` 短信发送请求参数(请参考官方说明文档)

### 返回结果
返回json格式的结果 (具体返回内容请参考官方说明文档)

## License
MIT
