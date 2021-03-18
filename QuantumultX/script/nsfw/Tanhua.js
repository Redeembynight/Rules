/*
#探花Lives解锁会员去广告
https://1008610010.laikanshu.top/Member/getUserInfo url script-response-body https://raw.githubusercontent.com/reapple/quantumult_js/main/tanhua.js 

1008610010.laikanshu.top
*/
var body = {
  "status" : "200",
  "msg" : "返回成功",
  "data" : {
    "mobile" : "18866889999",
    "status" : 1,
    "is_vip" : 1,
    "member_name" : "作者TG@iCodess",
    "head_pic" : "https://s3.ax1x.com/2021/01/26/sOLQKA.jpg",
    "parent_id" : 22,
    "user_viptime" : "2066-06-06"
  }
};

$done({body:JSON.stringify(body)});
