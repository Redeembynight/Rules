/*
#美图秀秀粉钻 by-Gökotta
下载地址：https://apps.apple.com/us/app/meitu/id416048305

[rewrite_local]
https:\/\/api\.xiuxiu\.meitu\.com\/v1\/user\/show\.json url script-response-body https://raw.githubusercontent.com/callmeheihei/Black/script/Crack/mtxx.js

MITM = api.xiuxiu.meitu.com
*/


let obj=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);obj['\x64\x61\x74\x61']['\x76\x69\x70\x5f\x74\x79\x70\x65']=1;$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](obj)});
