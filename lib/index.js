'use strict';
const http = require('http');
const request = require('request');

const agent = http.Agent({
  timeout: 30000, // Key Point: Node新增timeout参数，修改socket时间
  // freeSocketTimeout: 15000,
  // socketActiveTTL: 0,
});

http
  .createServer((req, res) => {
    res.write("hello world");
    res.end();
  })
  .listen(8080);

setInterval(() => {
  // const reqInfo = request.get('http://127.0.0.1:8080', { agent }, (err) => {
  //   if (!err) {
  //     console.log('success');
  //   } else if (err.code === 'ECONNRESET' && reqInfo.req.reusedSocket) {
  //     return request.get('http://127.0.0.1:8080', (err) => {
  //       if (err) {
  //         throw err;
  //       } else {
  //         console.log('success with retry');
  //       }
  //     })
  //   } else {
  //     throw err;
  //   }
  // });
  http.get('http://127.0.0.1:8080', { agent }, (res) => {
    res.on('data', (chunk) => {});
    res.on('end', () => {
      console.log('success');
    });
  });
}, 5000);
