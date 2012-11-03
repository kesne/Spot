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
		onEditFav: "editFav"
	},
	
	rendered: function(){
		this.inherited(arguments);
		if(!this.hasRendered){
			this.hasRendered = true;
			Settings.settings = localStorage.getItem("settings") || {
				favorites: [
					{icon: "assets/facebook.png", url: "http://facebook.com", hover: "#3d5b96"},
					{icon: "assets/google.png", url: "http://google.com", hover: "#0f7f12"},
					{icon: "assets/youtube.png", url: "http://youtube.com", hover: "#AF2B26"},
					{icon: "assets/verge.png", url: "http://theverge.com", hover: "#d4dae0"},
					{icon: "assets/reddit.png", url: "http://reddit.com", hover: "#ffffff"}
				]
			};
			
			for(var x in Settings.settings.favorites){
				if(Settings.settings.favorites.hasOwnProperty(x)){
					enyo.prefetch(Settings.settings.favorites[x].url);
				}
			}
			
			this.bubble("onSettings");
			this.waterfall("onSettings")
		}
	},
	
	components: [
		{content: "Settings", style: "font-size: 1.5em; margin-bottom: 10px;"},
		{kind: "Scroller", touch: true, style: "height: 350px;", components: [
			{content: "Favorites", style: "font-size: 1.2em; color: gray;"},
			{kind: "MiniMap"},
		]},
		{kind: "onyx.Button", content: "Save", style: "width: 100%;", ontap: "closeModalPopup"},
		{kind: "onyx.Popup", style: "background: #eee; color: black; width: 320px;", name: "editor", modal: true, scrim: true, centered: true, floating: true, components: [
			{content: "Editing Favorite", style: "font-size: 1.5em;"},
			{style: "margin-top: 10px;", components: [
				{content: "URL", style: "font-weight: bold; font-size: 0.8em;"},
				{kind: "onyx.InputDecorator", style: "width: 300px;", components: [
					{kind: "onyx.Input", value: "", name: "urlInput"}
				]}
			]},
			{style: "margin-top: 10px;", components: [
				{content: "Icon", style: "font-weight: bold; font-size: 0.8em;"},
				{kind: "onyx.InputDecorator", style: "width: 300px;", components: [
					{kind: "onyx.Input", value: "", name: "iconInput"}
				]}
			]},
			{style: "margin-top: 10px;", components: [
				{content: "Hover Color", style: "font-weight: bold; font-size: 0.8em;"},
				{kind: "onyx.InputDecorator", style: "width: 300px;", components: [
					{kind: "onyx.Input", value: "#b97a57", name: "hoverInput", type: "color"}
				]}
			]},
			{kind: "onyx.Button", content: "Save", style: "width: 100%; margin-top: 20px;"}
		]}
	],
	
	editFav: function(inSender, inContent){
		inContent.mouseOut();
		var f = Settings.settings.favorites;
		this.$.editor.show();
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
			top: "15%",
			left: "50%",
		},
		{
			top: "27%",
			left: "70%"
		},
		{
			top: "27%",
			left: "30%"
		},
		{
			top: "45%",
			left: "72%",
		},
		{
			top: "45%",
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
		var f = Settings.settings.favorites;
		this.$.icon.setSrc(f[this.position].icon);
		this.setHover(f[this.position].hover);
	}
});
