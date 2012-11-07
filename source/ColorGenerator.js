enyo.kind({
	name: "ColorGenerator",
	canvas: [
		{tag: "canvas", name: "canvas", attributes: {width: 500, height: 500}}
	],
	generate: function(src, callback){
	    var common = {};
		
		//
		var tc = enyo.clone(this.canvas);
		tc.name = "canvas" + Math.round(Math.random() * 100);
		el = this.createComponent(tc, {tag: "canvas",  style: "visibility: hidden; position: absolute; top: -1000; left: -1000;"});
		this.render();
		
		canvas = document.getElementById(el.getId());
		context = canvas.getContext("2d");
		
		var img = new Image();
		img.crossOrigin = '';
		img.onload = function(){
			context.drawImage(img,0,0);
			var imgd = context.getImageData(0, 0, canvas.width, canvas.height);
			var pix = imgd.data;
			
			// Loop over each pixel and invert the color.
			for (var i = 0, n = pix.length; i < n; i += 4) {
			    var r = pix[i  ]; // red
			    var g = pix[i+1]; // green
			    var b = pix[i+2]; // blue
			    // i+3 is alpha (the fourth element)
			    
			    var hex = enyo.hex(r, g, b);
			    
			    if(hex !== "#000000" && hex !== "#ffffff"){   
				    if(!common[hex]){
				    	common[hex] = 1;
				    }else{
				    	common[hex]++;
				    }
			    }
			}
			
			var sortable = [];
			for (var color in common){
				if(common.hasOwnProperty(color)){
					sortable.push([color, common[color]]);
				}
			}
			sortable.sort(function(a,b){
		    	return a[1] - b[1];
			});
			
			callback(sortable[sortable.length-1][0]);
		};
		img.src = src;	
	}
});