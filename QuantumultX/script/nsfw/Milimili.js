/*
公众号少年歌行pro整理

原作者iOS黑科技
作者微信公众号：ios黑科技
作者官方网站：s7aa.cn

QX:
[rewrite_local]
#咪哩视频
^https:\/\/awmattack\.(.+)\.com\/(api/member/info|api/video/video/video_play) url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/s7aa.cn/mlsp.json

[mitm]
hostname = awmattack.*.com

下载地址
咪哩视频:
http://69n1.cn
http://neihan4871.com

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const a = '/api/member/info';
const b = '/api/video/video/video_play';

if (url.indexOf(a) != -1) {
    obj.data.item.vip = 1,
    obj.data.item.vip_expire = 4092647115,
    obj.data.item.coin = 999880,
    obj.data.item.nick = "咪哩视频无限看",
    body = JSON.stringify(obj);
}
if (url.indexOf(b) != -1) {
    obj.data.vip = 0,
    obj.data.price = 0,
    body = JSON.stringify(obj);
}


$done({body});
