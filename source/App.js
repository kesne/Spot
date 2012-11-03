enyo.kind({
	name: "App",
	fit: true,
	classes: "onyx",
	hasDrawn: false,
	handlers: {
		onSettings: "drawIcons"
	},
	
	components: [
		{content: "`", classes: "icon", style: "font-size: 2em; position: absolute; right: 5px; top: 0px; margin: 0px; padding: 0px; color: white; opacity: 0.5;", onclick: "settingsClick", onmouseover: "settingsSpin", onmouseout: "settingsOff"},
		{name: "search", classes: "search", components: [
			{name: "inpd", kind: "onyx.InputDecorator", classes: "searchInput", alwaysLooksFocused: true, components: [
				{name: "searchText", kind: "onyx.Input", onfocus: "fsearch", onblur: "bsearch", defaultFocus: true, selectOnFocus: true, placeholder: "Just type...", onkeyup:"inputChanged", alwaysLooksFocused: true}
			]},
		]},
		{name: "spot", tag: "div", classes: "spot", onmouseover: "spotIn", onmouseout: "shrinkBack"},
		{name: "slices", showing: false, components: [
			{kind: "Slice", position: 0, onmouseover: "sliceIn", onmouseout: "sliceOut", onclick: "fastClick"},
			{kind: "Slice", position: 1, onmouseover: "sliceIn", onmouseout: "sliceOut", onclick: "fastClick"},
			{kind: "Slice", position: 2, onmouseover: "sliceIn", onmouseout: "sliceOut", onclick: "fastClick"},
			{kind: "Slice", position: 3, onmouseover: "sliceIn", onmouseout: "sliceOut", onclick: "fastClick"},
			{kind: "Slice", position: 4, onmouseover: "sliceIn", onmouseout: "sliceOut", onclick: "fastClick"},
		]},
		{kind: "Time"},
		
		{kind: "ColorGenerator", name: "CG"},
		
		{kind: "Settings", name: "settings"}
	],
	
	settingsClick: function(inSender){
		this.settingsOff(inSender);
		this.$.settings.show();
	},
	
	settingsSpin: function(inSender){
		enyo.jq(inSender).animate({opacity: 1}).rotate({
			animateTo: 360,
			callback: enyo.bind(this, function(){
				enyo.jq(inSender).rotate(0);
			})
		});
	},
	
	settingsOff: function(inSender){
		enyo.jq(inSender).animate({opacity: 0.5});
	},
	
	create: function(){
		this.inherited(arguments);
		
		//Escape key to close out of the spot.
		$(document).keyup(enyo.bind(this, function(e) {
			this.fsearch();
			if (e.keyCode == 27) {
				this.spotOut();
			}
		}));
	},
	
	drawIcons: function(){
		var f = Settings.settings.favorites;
		var c = this.$.slices.getClientControls();
		for(var x in c){
			if(c.hasOwnProperty(x)){
				c[x].url = f[x].url;
				c[x].icon = f[x].icon;
				c[x].hover = f[x].hover;
			}
		}
		this.render();
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
					left: inSender.positions[inSender.position].left,
					width: "200px",
					height: "200px",
					marginLeft: "-100px",
					marginTop: "-100px"
				}, 1000, "easeOutElastic", enyo.bind(this, function(){
					this.moving = false;
					this.startExpanding(inSender);
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
				//this.startExpanding();
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
						//this.startExpanding();
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
						//this.startExpanding();
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
	
	startExpanding: function(inSender){
		if(!this.selectedFinal){
			if(!this.moving){
				enyo.jq(this.$.spot.getId()).stop(true, false).animate({
					width: "100px",
					height: "100px",
					marginLeft: "-50px",
					marginTop: "-50px"
				}, 1000, "easeInCubic", enyo.bind(this, function(){
					this.selectedFinal = true;
					enyo.jq(this.$.slices).fadeOut("fast");
					
					enyo.jq(this.$.spot.getId()).animate({
						width: "0%",
						height: "0%",
						marginLeft: "0",
						marginTop: "0"
					}, 300, function(){
						window.location = inSender.url || "http://facebook.com";
					});
				}));
			}
		}
	},
	stopExpanding: function(){
		enyo.jq(this.$.search.getId()).fadeIn("slow");
	}
});
