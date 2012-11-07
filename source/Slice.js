enyo.kind({
	name: "Slice",
	classes: "slice",
	published: {
		color: "#007bff",
		position: 0,
		icon: "",
		hover: "#ffffff"
	},
	components: [
		{name: "icon", kind: "Image", style: "max-height: 100px; max-width: 100px; display: table-cell; vertical-align: middle;"}
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
			left: "72.5%",
		},
		{
			top: "67%",
			left: "27.5%",
		}
	],
	rendered: function(){
		this.inherited(arguments);
		var p = this.positions[this.position];
		if(enyo.platform.firefox){
			this.applyStyle("top", p.top);
			this.applyStyle("left", p.left);
		}else{
			this.applyStyle("top", "50%");
			this.applyStyle("left", "50%");
		}
		
		this.$.icon.setSrc(this.icon);
	}
});