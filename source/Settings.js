enyo.kind({
	name: "Settings",
	kind: "onyx.Popup",
	style: "background: #eee;color: black;",
	
	centered: true,
	modal: true,
	floating: true,
	scrim: true,
	
	events: {
		onShow: "popupShown",
		onHide: "popupHidden"
	},
	
	components: [
		{},
		{kind: "onyx.Button", content: "Close", ontap: "closeModalPopup"},
		{kind: "onyx.Button", content: "Another!", ontap: "showPopup", popup: "lightPopup"}
	]
});
