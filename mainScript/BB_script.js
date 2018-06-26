var id = 'BB-8r9hv7xcjipl9mh6';
var date = new Date();
var h = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+":"+date.getMilliseconds();
var url = window.location.href,
    date = date.getMonth()+1+"/"+date.getDate()+"/"+date.getFullYear(),
    reslW = window.screen.availWidth,
    reslH = window.screen.availHeight,
    ref = document.referrer,
    time = h,
    res = reslW+" X "+reslH;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
 } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xhttp.open("POST", "http://localhost:3000/test", true);
xhttp.setRequestHeader("Content-Type", "application/json;chartset=UTF-8");
var data = JSON.stringify({url:url, date: date, res: res, ref: ref, time: time,S_id: id});
xhttp.send(data);