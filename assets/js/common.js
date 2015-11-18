/*
window.onselectstart=function()   {return   false;}       //禁用选择
window.oncopy=function()   {return   false;}       //禁止复制
*/

//禁止查看源代码
function stop(){
return false;
}
document.oncontextmenu=stop;
