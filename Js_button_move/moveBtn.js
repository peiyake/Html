/*悬浮可移动按钮 JS 方案*/

portalBtn.addEventListener("touchstart", handleDiaStart, false);
portalBtn.addEventListener("touchmove", handleDiaMove, false);

var isTouchStart,initX,initY,initOffsetX,initOffsetY;

function handleDiaStart(evt){
    initX=evt.touches[0].clientX;
    initY=evt.touches[0].clientY;
    btnOffsetX=portalBtn.offsetLeft;
    btnOffsetY=portalBtn.offsetTop;
    initOffsetX=initX-btnOffsetX;
    initOffsetY=initY-btnOffsetY;
}

function handleDiaMove(evt){
    evt.preventDefault();
    var moveLeft=evt.touches[0].clientX - initOffsetX ;
    var moveTop=evt.touches[0].clientY  - initOffsetY ;
    var btnoffsetWidth=portalBtn.offsetWidth;
    var btnoffsetHeight=portalBtn.offsetHeight;
    var winWidth=window.innerWidth;
    var winHeigth=window.innerHeight;
    if((moveLeft + btnoffsetWidth) > winWidth)
      moveLeft=moveLeft-(moveLeft+btnoffsetWidth-winWidth)
    if((moveTop + btnoffsetHeight) > winHeigth)
      moveTop=moveTop-(moveTop+btnoffsetHeight-winHeigth)
    if(moveLeft < 0)
      moveLeft=0;
    if(moveTop < 0)
      moveTop=0;
    portalBtn.style.left = moveLeft+"px";
    portalBtn.style.top = moveTop+"px";
}
