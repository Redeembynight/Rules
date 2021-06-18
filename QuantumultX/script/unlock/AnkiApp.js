/
#AnkiApp
下载地址：https://apps.apple.com/us/app/ankiapp-flashcards/id689185915

^https:\/\/api\.ankiapp\.com\/users\/account$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Surge-LK/main/scripts/langkhach/ankiapp.js

api.ankiapp.com
/
re('"has_unlimited":false','"has_unlimited":true');
function re(){var body=$response.body;if(arguments[0].includes("@")){var regs=arguments[0].split("@");var strs=arguments[1].split("@");for(i=0;i<regs.length;i++){var reg=new RegExp(regs[i],"g");body=body.replace(reg,strs[i]);}}
else{var reg=new RegExp(arguments[0],"g");body=body.replace(reg,arguments[1]);}
$done({body});}
