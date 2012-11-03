enyo.kind({
	name: "Time",
	classes: "footer",
	components: [
		{name: "time", classes: "time"},
		{name: "date", classes: "date"}
	],
	months: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	],
	create: function(){
		this.inherited(arguments);
		this.updateTime();
		window.setInterval(enyo.bind(this, "updateTime"), 250);
	},
	updateTime: function(){
		var d = new Date();
		var hours;
		if (d.getHours() > 12) {
			hours = d.getHours() - 12;
		} else {
			hours = d.getHours();
		}
		this.$.time.setContent(hours + ":" + ("0" + d.getMinutes()).slice(-2));
		this.$.date.setContent(this.months[d.getMonth()] + " " +  d.getDate() + ", " + d.getFullYear())
	}
});