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
		//{content: "L", classes: "icon", style: "font-size: 2em; position: absolute; left: 5px; top: 0px; margin: 0px; padding: 0px; color: white; opacity: 0.5;", onclick: "profiles"},
		/*{content: "L", onclick: "profiles", name: "L", kind: "Button", classes: "icon", style: "background: transparent; border: none; font-size: 2em; position: absolute; left: 5px; top: 0px; margin: 0px; padding: 0px; color: white; opacity: 0.5;"},
		{name: "profileMenu", showing: false, style: "position: absolute; top: 40px; width: 220px; background-color: #eee;", onShow: "profiles", onHide: "profilesOut", components: [
			{kind: "Control", name: "editableM", components: []}
		]},*/
		
		{name: "search", classes: "search", components: [
			{name: "inpd", kind: "onyx.InputDecorator", classes: "searchInput", alwaysLooksFocused: true, components: [
				{name: "searchText", kind: "onyx.Input", onfocus: "fsearch", onblur: "bsearch", defaultFocus: false, selectOnFocus: true, placeholder: "Just type...", onkeyup:"inputChanged", alwaysLooksFocused: true}
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
		
		{kind: "Settings", name: "settings"}
	],
	
	itemSelected: function(inSender, inContent){
		Settings.settings.selected = inContent.content;
		this.bubble("onSettings");
		this.waterfall("onSettings");
		//localStorage.setItem("settings");
	},
	
	profiles: function(inSender){
		this.$.profileMenu.setShowing(true);
		this.$.L.applyStyle("opacity", 1);
	},
	profilesOut: function(inSender){
		this.$.profileMenu.setShowing(false);
		this.$.L.applyStyle("opacity", 0.5);
	},
	
	settingsClick: function(inSender){
		this.settingsOff(inSender);
		this.$.settings.show();
	},
	
	settingsSpin: function(inSender){
		enyo.jq(inSender).stop(true, false).animate({opacity: 1}).rotate({
			animateTo: 360,
			callback: enyo.bind(this, function(){
				enyo.jq(inSender).rotate(0);
			})
		});
	},
	
	settingsOff: function(inSender){
		enyo.jq(inSender).stop(true, false).animate({opacity: 0.5});
	},
	
	create: function(){
		this.inherited(arguments);
		
		//Escape key to close out of the spot.
		$(document).keyup(enyo.bind(this, function(e) {
			console.log("KU");
			if (e.keyCode == 27) {
				this.spotOut();
			}else{
				this.fsearch();
			}
		}));
		/*
		$(document).click(enyo.bind(this, function(e) {
			if(e.srcElement.innerHTML !== "L"){
				this.profilesOut();
			}
		}))*/
	},
	
	drawIcons: function(firstLoad){
		var f = Settings.settings.favorites[Settings.settings.selected];
		var c = this.$.slices.getClientControls();
		for(var x in c){
			if(c.hasOwnProperty(x)){
				c[x].url = f[x].url;
				c[x].icon = f[x].icon;
				c[x].hover = f[x].hover;
			}
		}
		/*
		var e = Settings.settings.favorites;
		var w = [];
		for(var y in e){
			if(e.hasOwnProperty(y)){
				w.push({content: y, kind: "onyx.MenuItem", classes: "hoverFix"});
			}
		}
		this.$.editableM.destroyComponents();
		this.$.editableM.createComponents(w);
		*/
		this.$.slices.render();
		if(this.firstload){
			this.spotOut();
		}else{
			this.firstload = true;
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
		if(!this.selectedFinal && !this.shrinking){
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
		if(!this.selectedFinal && !this.shrinking){
			if(this.expanded){
				//this.startExpanding();
			}else{
				enyo.jq(this.$.search.getId()).fadeOut("fast");
				
				enyo.jq(this.$.slices).fadeIn("slow");
				var c = this.$.slices.getClientControls();
				for(var x in c){
					if(c.hasOwnProperty(x)){
						enyo.jq(c[x]).animate({
							top: c[x].positions[c[x].position].top,
							left: c[x].positions[c[x].position].left
						}, "slow", "easeOutExpo");
					}
				}
				
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
	spotOut: function(inSender){
		if(!this.selectedFinal){
			this.expanded = false;
			this.shrinking = true;
			this.stopExpanding();
			enyo.jq(this.$.slices).fadeOut("slow");
			var c = this.$.slices.getClientControls();
			for(var x in c){
				if(c.hasOwnProperty(x)){
					enyo.jq(c[x]).animate({
						top: "50%",
						left: "50%"
					}, "slow", "easeOutQuad");
				}
			}
			enyo.jq(this.$.spot.getId()).stop(true, false).animate({
				width: "100px",
				height: "100px",
				marginLeft: "-50px",
				marginTop: "-50px",
				top: "50%",
				left: "50%",
				backgroundColor: "transparent"
			}, 1000, "swing", enyo.bind(this, function(){
				this.shrinking = false;
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
					}, 300, enyo.bind(this, function(){
						window.location = inSender.url || "#";
						window.setTimeout(enyo.bind(this, function(){
							enyo.jq(this.$.slices).fadeIn("fast");
							enyo.jq(this.$.spot.getId()).stop(true, false).animate({
								width: "200px",
								height: "200px",
								marginLeft: "-100px",
								marginTop: "-100px"
							}, enyo.bind(this, function(){
								this.selectedFinal = false;
								this.sliceOut();
								this.shrinkBack();
							}));
						}), 1000);
					}));
				}));
			}
		}
	},
	stopExpanding: function(){
		enyo.jq(this.$.search.getId()).fadeIn("slow");
	}
});
