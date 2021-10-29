;
(function(win){
  //获得document对象
  var doc = win.document;
  //获得html标签
  var docEL = doc.documentElement;

  var metaEL = doc.querySelector('meta[name="viewport"]')

  //viewport-fit = cover，设置占满整个屏幕
  metaEL.setAttribute("content","initial-scale=.5, maximum-scale=.5, minimum-scale=.5, user-scalable=no viewport-fit=cover");

})(window)
