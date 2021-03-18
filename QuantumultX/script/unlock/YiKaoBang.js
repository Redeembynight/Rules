/*
Unlocks by Cuttlefish 公众号：墨鱼手记
应用内题库及课程已解锁，更新脚本即可

[rewrite_remote]
https://api.yikaobang.com.cn/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/ykb.js

hostname = api.yikaobang.com.cn
*/
var body = $response.body.replace(/\u0069\u0073\u005F\u0076\u0069\u0070\u0022\u003A\u0022\u0030/g, '\u0069\u0073\u005F\u0076\u0069\u0070\u0022\u003A\u0022\u0031').replace(/\u0070\u0061\u0073\u0073\u0022\u003A\u0030/g, '\u0070\u0061\u0073\u0073\u0022\u003A\u0031').replace(/\u0077\u0061\u0074\u0063\u0068\u005F\u0070\u0065\u0072\u006D\u0069\u0073\u0073\u0069\u006F\u006E\u0022\u003A\u0022\u0030/g, '\u0077\u0061\u0074\u0063\u0068\u005F\u0070\u0065\u0072\u006D\u0069\u0073\u0073\u0069\u006F\u006E\u0022\u003A\u0022\u0031')
$done({ body });
