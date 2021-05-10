/** 禁止微博feed流
    相关信息：https://api.weibo.cn/2/video/tiny_stream_mid_detail 获取短视频详情
    https://api.weibo.cn/2/video/tiny_stream_video_list 
*/

try{
    let body = $response.body;
    let bodyObj = JSON.parse(body);
    if (bodyObj.statuses
        && Array.isArray(bodyObj.statuses)
        && bodyObj.statuses.length !== 0) {
        bodyObj.statuses = []
        console.log('[disableWbFeed]视频流过滤成功，仅保留一条')
    } else {
        console.log('[disableWbFeed]未找到对应字段，fallback');
    }
    console.log('[disableWbFeed]' + JSON.stringify(bodyObj.statuses));
    $done({
        body: JSON.stringify(bodyObj)
    })
} catch(e) {
    console.log('[disableWbFeed]视频流接口处理失败' + JSON.stringify(e))
    $done()
}
