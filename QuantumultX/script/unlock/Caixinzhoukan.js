/*
Unlocks by Cuttlefish 公众号：墨鱼手记
# 财新周刊 解锁会员文章（by公众号墨鱼手记）
######经测试ios版有效，ipad版无效
http://ipadcms.caixin.com/tmp/articles/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/cxzk.js

ipadcms.caixin.com
*/
var body = $response.body.replace(/\u0069\u0073\u0066\u0072\u0065\u0065\u0022\u003a\u0030/g, '\u0069\u0073\u0066\u0072\u0065\u0065\u0022\u003a\u0031');
$done({ body });
