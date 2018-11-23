/*悬浮可移动按钮 JS 方案*/
var ReportalServer="http://47.74.152.122/";
var PortalUrl="http://app.helianhealth.com/getPortal.html";
document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\""+ReportalServer+"css/bootstrap/css/bootstrap.min.css\" />");
document.write("<a href=\""+PortalUrl+"\"><img id=\"portalBtn\" src=\""+ReportalServer+"img/net.png\" style=\"position:fixed;height: 150px !important;width: 150px !important;right:10px;bottom: 50px\" class=\"img-circle\"></a>");
document.write("<script type=\"text/javascript\" src=\""+ReportalServer+"moveBtn.js\"></script>");
