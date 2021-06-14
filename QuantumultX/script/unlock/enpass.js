/
# license.enpass.io
#enpass（by 越南老哥）
^https:\/\/license\.enpass\.io/api/.+/subscription/me url script-response-body https://raw.githubusercontent.com/langkhach270389/Surge-LK/main/scripts/langkhach/enpass.js

/
let obj=JSON.parse($response.body);
obj.license="premium";
obj.info.purchase_type="premium";
obj.info.store="premium";
$done({body:JSON.stringify(obj)});
