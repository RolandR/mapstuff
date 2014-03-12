document.addEventListener('DOMContentLoaded', function(){
	Mapstuff.init();
});

var Mapstuff = new function(){
	
	var DOM = {
		 canvas: document.getElementById('mindmapCanvas')
		,context: DOM.canvas.getContext('2d')
		,canvasParent: DOM.canvas.parentNode
	}
	
	function init(){
		DOM.canvas.width = DOM.canvasParent.width;
		DOM.canvas.height = DOM.canvasParent.height;
	}
	
	return {
		init: init
	}
}
