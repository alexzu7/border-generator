(function(){
	'use strict';
			
	var borderWidthEl = document.getElementById('border-width-range'),
		borderWidthValueEl = document.getElementById('preview-border-width-val'),
		borderColorEl = document.getElementById('border-color-range'),
		borderColorValueEl = document.getElementById('border-color-range-val'),
		previewEl = document.getElementById('preview'),
		borderStyleValueEl = document.getElementById('preview-border-style-val');
	
	var reset = function(){
		borderWidthEl.value = 0;
		borderColorEl.value = 0;
		document.getElementById('border-solid').checked = true;
	};
	
	var initEvents = function(){
	
		borderWidthEl.addEventListener('change', function(){
			previewEl.style.borderWidth = this.value + 'px';
			borderWidthValueEl.innerHTML = this.value;
		}, false);
		
		borderColorEl.addEventListener('change', function(){	
			
			var red, green, blue, frequency = 0.3;			
			
			red = Math.round(Math.sin(frequency*this.value + 0) * 127 + 128);
			green = Math.round(Math.sin(frequency*this.value + 2) * 127 + 128);
			blue = Math.round(Math.sin(frequency*this.value + 4) * 127 + 128);
			
			previewEl.style.borderColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
			//console.log('rgb(' + red + ',' + green + ',' + blue + ')');
			borderColorValueEl.innerHTML = 'rgb(' + red + ',' + green + ',' + blue + ')';
			
		}, false);
		
		document.getElementById('border-solid').addEventListener('change', function(){
			borderStyleValueEl.innerHTML = 'solid';	
			previewEl.style.borderStyle = 'solid';			
		}, false);
		
		document.getElementById('border-dashed').addEventListener('change', function(){
		    borderStyleValueEl.innerHTML = 'dashed';	
			previewEl.style.borderStyle = 'dashed';
		}, false);
		
		document.getElementById('border-dotted').addEventListener('change', function(){
		    borderStyleValueEl.innerHTML = 'dotted';
			previewEl.style.borderStyle = 'dotted';
		}, false);
	};	
	
	reset();
	initEvents();
})();