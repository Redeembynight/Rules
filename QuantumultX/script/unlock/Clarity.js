/*
ClarityWallppr下载

[rewrite_local]
^https?+:\/\/claritywallpaper\.com\/clarity\/api\/special\/queryByCatalogAll url script-response-body https://raw.githubusercontent.com/787a68/Script/main/Crack/Clarity.js

[mitm]
hostname = claritywallpaper.com

*/

var body = JSON.parse($response.body);

for (var i = 0; i < body.data.length; i++) {
  body.data[i].isFree = true;
  body.data[i].random = "Kqp5/Z35ga5WBeNcLue+dBwZW4ZWRoDFMAqqU48d06Y=";
}

$done({ body: JSON.stringify(body) });
