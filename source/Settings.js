enyo.kind({
	name: "Settings",
	kind: "onyx.Popup",
	style: "background: #eee; color: black; width: 320px;",
	
	statics: {
		settings: {}
	},
	
	centered: true,
	modal: true,
	floating: true,
	scrim: true,
	
	handlers: {
		onShow: "popupShown",
		onHide: "popupHidden",
		onEditFav: "editFav",
		onSettingsUpdated: "setupdated"
	},
	
	rendered: function(){
		this.inherited(arguments);
		if(!this.hasRendered){
			this.hasRendered = true;
			//Default Settings:
			Settings.settings = JSON.parse(localStorage.getItem("settings")) || {
				selected: "Favorites",
				
				favorites: {
					Favorites: [
						{icon: "assets/facebook.png", url: "http://facebook.com", hover: "#3d5b96"},
						{icon: "assets/google.png", url: "http://google.com", hover: "#0f7f12"},
						{icon: "assets/youtube.png", url: "http://youtube.com", hover: "#AF2B26"},
						{icon: "assets/verge.png", url: "http://theverge.com", hover: "#d4dae0"},
						{icon: "assets/reddit.png", url: "http://reddit.com", hover: "#ffffff"}
					]
				}
			};
			
			var f = Settings.settings.favorites[Settings.settings.selected];
			for(var x in f){
				if(f.hasOwnProperty(x)){
					enyo.prefetch(f[x].url);
				}
			}
			
			this.bubble("onSettings");
			this.waterfall("onSettings")
		}
	},
	setupdated: function(){
		this.bubble("onSettings");
		this.waterfall("onSettings");
	},
	
	components: [
		{content: "Settings", style: "font-size: 1.5em; margin-bottom: 10px;"},
		{style: "height: 250px;", components: [
			{kind: "MiniMap", name: "minimap"},
		]},
		{kind: "onyx.Button", content: "Close", onclick: "closeSettings", style: "width: 100%;", ontap: "closeModalPopup"},
		{kind: "onyx.Popup", style: "background: #eee; color: black; width: 320px;", name: "editor", modal: true, scrim: true, centered: true, floating: true, components: [
			{content: "Editing Favorite", style: "font-size: 1.5em;"},
			{style: "margin-top: 10px;", components: [
				{content: "URL", style: "font-weight: bold; font-size: 0.8em;"},
				{kind: "onyx.InputDecorator", components: [
					{kind: "onyx.Input", value: "", style: "width: 300px;", name: "urlInput"}
				]}
			]},
			{style: "margin-top: 10px;", components: [
				{content: "Icon", style: "font-weight: bold; font-size: 0.8em;"},
				{kind: "onyx.InputDecorator", components: [
					{kind: "onyx.Input", value: "", style: "width: 300px;", name: "iconInput", onkeyup: "goGenerate"}
				]}
			]},
			{style: "margin-top: 10px;", components: [
				{content: "Hover Color", style: "font-weight: bold; font-size: 0.8em;"},
				{kind: "onyx.InputDecorator", components: [
					{kind: "onyx.Input", name: "hoverInput", style: "width: 300px;", type: "color"}
				]}
			]},
			{kind: "onyx.Button", content: "Save", onclick: "saveUpdate", style: "width: 100%; margin-top: 20px;"}
		]},
		
		{kind: "ColorGenerator", name: "CG"}
	],
	
	goGenerate: function(inSender){
		enyo.job("updateThumb", enyo.bind(this, function(){
			this.$.CG.generate(inSender.getValue(), enyo.bind(this, function(color){
				console.log(color);
				this.$.hoverInput.setValue(color);
			}));
		}), 500);
	},
	
	saveUpdate: function(){
		var f = Settings.settings.favorites[Settings.settings.selected];
		var p = f[this.positionEdit];
		p.url = this.$.urlInput.getValue();
		p.icon = this.$.iconInput.getValue();
		p.hover = this.$.hoverInput.getValue();
		f[this.positionEdit] = p;
		Settings.settings.favorites[Settings.settings.selected] = f;
		this.$.editor.hide();
		this.waterfallDown("onSettings");
		
		localStorage.setItem("settings", JSON.stringify(Settings.settings)) 
	},
	
	closeSettings: function(){
		this.hide();
		this.bubble("onSettingsUpdated");
	},
	
	editFav: function(inSender, inContent){
		inContent.mouseOut();
		var f = Settings.settings.favorites[Settings.settings.selected];
		this.$.editor.show();
		this.positionEdit = inContent.position;
		this.$.urlInput.setValue(f[inContent.position].url);
		this.$.iconInput.setValue(f[inContent.position].icon);
		this.$.hoverInput.setValue(f[inContent.position].hover);
	}
});

enyo.kind({
	name: "MiniMap",
	style: "height: 200px; width: 320px;",
	components: [
		{kind: "MiniSlice", position: 0, onclick: "editFav"},
		{kind: "MiniSlice", position: 1, onclick: "editFav"},
		{kind: "MiniSlice", position: 2, onclick: "editFav"},
		{kind: "MiniSlice", position: 3, onclick: "editFav"},
		{kind: "MiniSlice", position: 4, onclick: "editFav"},
		{style: "width: 32px; height: 32px; margin-left: -16px; margin-top: -16px; position: relative; left: 50%; top: 50%; border: 2px solid black; border-radius: 100px;"}	
	],
	editFav: function(inSender){
		this.bubble("onEditFav", inSender);
	}
});

enyo.kind({
	name: "MiniSlice",
	style: "width: 44px; height: 44px; margin-left: -22px; margin-top: -22px; position: absolute; border-radius: 100px; text-align: center;",
	published: {
		position: 0,
		hover: "transparent"
	},
	handlers: {
		onmouseover: "mouseOver",
		onmouseout: "mouseOut",
		onSettings: "updateView"
	},
	components: [
		{name: "icon", kind: "Image", style: "width: 32px; height: 32px; margin: 6px auto;"}
	],
	positions: [
		{
			top: "25%",
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
			top: "59%",
			left: "72%",
		},
		{
			top: "59%",
			left: "28%",
		}
	],
	mouseOver: function(){
		enyo.jq(this).stop(true, false).animate({
			backgroundColor: this.hover
		});
	},
	mouseOut: function(){
		enyo.jq(this).stop(true, false).animate({
			backgroundColor: "transparent"
		});
	},
	create: function(){
		this.inherited(arguments);
		var p = this.positions[this.position];
		this.applyStyle("top", p.top);
		this.applyStyle("left", p.left);
	},
	updateView: function(){
		var f = Settings.settings.favorites[Settings.settings.selected];
		this.$.icon.setSrc(f[this.position].icon);
		this.setHover(f[this.position].hover);
	}
});
