var click_block=0

function layer(id){
	var res
	if(document.getElementById) res=document.getElementById(id)
	if(document.all) res=document.all[id]
	if (res) return res.style
	return null
}

var nsx;
var nsy;
if (!document.all) {
	document.captureEvents(Event.MOUSEMOVE);	
	document.onmousemove=get_mouse;
}

function get_mouse(e) {
	nsx=2;
	nsy=e.pageY+20;
}

function t_i(id) {
	var hlp=layer('Tp'+id)
	if (hlp) {
	if (document.all) {
	 nsy=event.y+document.body.scrollTop
	 nsx=event.x+document.body.scrollLeft
	}
	hlp.top=nsy+20
	hlp.left=(nsx>610?nsx-470:140)		
	hlp.visibility='visible'
}}
function t_o(id) {
	var hlp=layer('Tp'+id)
	if(hlp) hlp.visibility='hidden'
}


