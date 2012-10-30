enyo.jq = function(id){
	if(typeof(id) === "string"){
		return $("#" + id);
	}else{
		return $("#" + id.getId());
	}
}

enyo.hex = function(r,g,b){
	var componentToHex = function(c) {
	    var hex = c.toString(16);
	    return hex.length == 1 ? "0" + hex : hex;
	}
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

enyo.rgb = function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

if (!String.prototype.trim) {
	String.prototype.trim = function(){
		return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	};
}

enyo.prefetch = function(url){
	var cr = document.createElement("link");
	cr.rel = "prerender";
	cr.href = url;
	document.getElementsByTagName("head")[0].appendChild(cr);
	
	var ff = document.createElement("link");
	ff.rel = "prefetch";
	ff.href = url;
	document.getElementsByTagName("head")[0].appendChild(ff);
}

enyo.kind({
	name: "App",
	fit: true,
	classes: "onyx",
	hasDrawn: false,
	components: [
		{name: "search", classes: "search", components: [
			{name: "inpd", kind: "onyx.InputDecorator", style: "display: block; margin: 10px auto; width: 320px; opacity: 0.3;", alwaysLooksFocused: true, components: [
				{name: "searchText", kind: "onyx.Input", onfocus: "fsearch", onblur: "bsearch", defaultFocus: true, selectOnFocus: true, placeholder: "search...", onkeyup:"inputChanged", alwaysLooksFocused: true}
			]},
		]},
		{name: "spot", tag: "div", classes: "spot", onmouseover: "spotIn", onmouseout: "shrinkBack"},
		{name: "slices", showing: false, components: [
			{kind: "Slice", position: 0, icon: "assets/facebook.png", url: "http://facebook.com", onmouseover: "sliceIn", onmouseout: "sliceOut", onclick: "fastClick"},
			{kind: "Slice", position: 1, icon: "assets/google.png", url: "http://google.com", onmouseover: "sliceIn", onmouseout: "sliceOut", onclick: "fastClick"},
			{kind: "Slice", position: 2, icon: "assets/facebook.png", url: "#", onmouseover: "sliceIn", onmouseout: "sliceOut", onclick: "fastClick"},
			{kind: "Slice", position: 3, icon: "assets/facebook.png", url: "#", onmouseover: "sliceIn", onmouseout: "sliceOut", onclick: "fastClick"},
			{kind: "Slice", position: 4, icon: "assets/facebook.png", url: "#", onmouseover: "sliceIn", onmouseout: "sliceOut", onclick: "fastClick"},
		]},
		{kind: "ColorGenerator", name: "CG"}
	],
	
	create: function(){
		this.inherited(arguments);
		
		//TODO: Actually prefetch the pages on our favorites.
		enyo.prefetch("http://facebook.com");
		
		//Escape key to close out of the spot.
		$(document).keyup(enyo.bind(this, function(e) {
			this.fsearch();
			if (e.keyCode == 27) {
				this.spotOut();
			}
		}));
	},
	
	rendered: function(){
		this.inherited(arguments);
		this.generateIconColors();
	},
	
	//TODO: Should only do this when they first add icons, then we store the value, that way we reduce initial load time.
	generateIconColors: function(){
		var c = this.$.slices.getClientControls();
		for(var icons in c){
			if(c.hasOwnProperty(icons)){
				this.$.CG.generate(c[icons].icon, c[icons]);
			}
		}
	},
	
	//Jump quicker with fast click:
	fastClick: function(inSender){
		window.location = inSender.url;
	},
	
	
	/*
	 * SLICE MOUSE EVENTS:
	 */
	
	sliceIn: function(inSender){
		if(!this.selectedFinal){
			this.moving = true;
			//Force this to true to allow power users to move faster:
			this.expanded = true;
			
			if(this.position !== inSender.position){
				this.position = inSender.position;
				var rgb = enyo.rgb(inSender.hover);
				enyo.jq(this.$.spot).stop(true, false).animate({
					backgroundColor: rgb ? "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",0.5)" : "transparent",
					top: inSender.positions[inSender.position].top,
					left: inSender.positions[inSender.position].left
				}, 1000, "easeOutElastic", enyo.bind(this, function(){
					this.moving = false;
					this.startExpanding();
				}));
			}
		}
	},
	sliceOut: function(){
		if(!this.selectedFinal){
			this.position = null;
			this.shrinkBack(true);
		}
	},
	
	
	fsearch: function(){
		//Don't focus on load.
		if(!this.hasDrawn){
			this.hasDrawn = true;
		}else{
			enyo.jq(this.$.inpd.getId()).stop(true, false).animate({opacity: 1});
		}
	},
	bsearch: function(){
		enyo.jq(this.$.inpd.getId()).stop(true, false).animate({opacity: 0.3});
	},
	inputChanged: function(inSender, inEvent){
		if(!this.selectedFinal){
			if(inEvent.keyCode === 13 && this.$.searchText.getValue().trim() !== ""){
				window.location = "https://www.google.com/search?q=" + this.$.searchText.getValue();
			}
		}
	},
	spotIn: function(){
		if(!this.selectedFinal){
			if(this.expanded){
				this.startExpanding();
			}else{
				enyo.jq(this.$.search.getId()).fadeOut("fast");
				enyo.jq(this.$.slices).fadeIn();
				enyo.jq(this.$.spot.getId()).stop(true, false).animate({
					width: "200px",
					height: "200px",
					marginLeft: "-100px",
					marginTop: "-100px"
				}, 1000, "easeOutElastic", enyo.bind(this, function(){
					this.expanded = true;
					if(enyo.jq(this.$.spot).is(':hover')){
						this.startExpanding();
					}
				}));
			}
		}
	},
	shrinkBack: function(force){
		if(!this.selectedFinal){
			if(this.expanded && (!this.moving || force)){
				enyo.jq(this.$.spot.getId()).stop(true, false).animate({
					top: "50%",
					left: "50%",
					width: "200px",
					height: "200px",
					marginLeft: "-100px",
					marginTop: "-100px",
					backgroundColor: "transparent"
				}, 1000, "swing", enyo.bind(this, function(){
					this.moving = false;
					if(enyo.jq(this.$.spot).is(':hover')){
						this.startExpanding();
					}
				}));
			}
		}
	},
	spotOut: function(){
		if(!this.selectedFinal){
			this.expanded = false;
			this.stopExpanding();
			enyo.jq(this.$.slices).fadeOut();
			enyo.jq(this.$.spot.getId()).stop(true, false).animate({
				width: "100px",
				height: "100px",
				marginLeft: "-50px",
				marginTop: "-50px",
				top: "50%",
				left: "50%",
				backgroundColor: "transparent"
			}, 1000, "swing", enyo.bind(this, function(){
				this.moving = false;
			}));
		}
	},
	
	startExpanding: function(){
		if(!this.selectedFinal){
			if(!this.moving){
				enyo.jq(this.$.spot.getId()).stop(true, false).animate({
					width: "400px",
					height: "400px",
					marginLeft: "-200px",
					marginTop: "-200px"
				}, 1000, "easeInCubic", enyo.bind(this, function(){
					this.selectedFinal = true;
					enyo.jq(this.$.slices).fadeOut("fast");
					enyo.jq(this.$.spot.getId()).animate({
						width: "300%",
						height: "300%",
						top: "0px",
						left: "0px",
						marginLeft: "-100%",
						marginTop: "-100%"
					}, 300, function(){
						window.location = "http://facebook.com";
					});
				}));
			}
		}
	},
	stopExpanding: function(){
		enyo.jq(this.$.search.getId()).fadeIn("slow");
	}
});

enyo.kind({
	name: "ColorGenerator",
	components: [
		{tag: "canvas", name: "canvas", attributes: {width: 500, height: 500}, style: "visibility: hidden; position: absolute; top: -1000; left: -1000;"}
	],
	generate: function(src, inSender){
	    var common = {};
		     
		canvas = document.getElementById(this.$.canvas.getId());
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
			
			inSender.setHover(sortable[sortable.length-1][0]);
		};
		img.src = src;	
	}
});

enyo.kind({
	name: "Slice",
	classes: "slice",
	published: {
		color: "#007bff",
		position: 0,
		icon: "",
		hover: "transparent"
	},
	components: [
		{name: "icon", kind: "Image", style: "width: 100px; height: 100px;"}
	],
	positions: [
		{
			top: "20%",
			left: "50%",
		},
		{
			top: "37%",
			left: "70%"
		},
		{
			top: "37%",
			left: "30%"
		},
		{
			top: "67%",
			left: "80%",
		},
		{
			top: "67%",
			left: "20%",
		}
	],
	create: function(){
		this.inherited(arguments);
		var p = this.positions[this.position];
		this.applyStyle("top", p.top);
		this.applyStyle("left", p.left);
		this.$.icon.setSrc(this.icon);
	}
});
