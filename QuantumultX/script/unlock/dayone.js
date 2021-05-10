/*
#dayone
越南老哥langkhach270389

下载地址 https://apps.apple.com/us/app/day-one-journal/id1044867788

^https:\/\/dayone\.me\/api\/(users|v2\/users\/account-status)$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Surge-LK/main/scripts/langkhach/dayone.js

dayone.me, 
*/
if ($response.status == 200) {
  if ($request.url.endsWith("account-status")) {
$done({body: JSON.stringify({
  "expirationDate": 1893427199000,
  "startDate": 1546272000000,
  "subscriptionPlan": "com.bloombuilt.dayoneios.subscription.premium.yearly_discounted_trial",
  "lastRenewalDate": 1546531200000,
  "subscriptionName": "premium",
  "bundleReason": "purchase",
  "cancellationDate": 0
} )});
} 
else { let body= $response.body;
	     let obj= JSON.parse(body);
	     const feature= {"bundleName":"premium","features":[{"name":"imagesPerEntry","limit":30,"canUpgrade":false},{"name":"printingDiscount","canUpgrade":false},{"name":"syncMac","canUpgrade":false},{"name":"prioritySupport","canUpgrade":false},{"name":"sync","canUpgrade":false},{"name":"journalLimit","limit":100,"canUpgrade":false},{"name":"audioPerEntry","limit":10,"canUpgrade":false}]};
    if(body.indexOf("featureBundle") !=-1)
      {
      obj["featureBundle"]= feature;
      }
       else {
	    	obj["bundle"]= feature;
	    }
	    $done({body: JSON.stringify(obj)});
        }
} else {
	$done({});
}
