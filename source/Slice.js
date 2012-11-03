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
			left: "72.5%",
		},
		{
			top: "67%",
			left: "27.5%",
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