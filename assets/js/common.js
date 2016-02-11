/*
window.onselectstart=function()   {return   false;}       //禁用选择
window.oncopy=function()   {return   false;}       //禁止复制
*/

//禁止查看源代码
function stop()
{
    return false;
}
document.oncontextmenu=stop;

//获取传递给html页面的参数
function getQuery(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return unescape(r[2]); return null;
}