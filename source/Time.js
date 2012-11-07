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
		var hours = d.getHours();
		  // Convert the hours component to 12-hour format if needed
		hours = ( hours > 12 ) ? hours - 12 : hours;
		hours = ( hours == 0 ) ? 12 : hours;
		
		this.$.time.setContent(hours + ":" + ("0" + d.getMinutes()).slice(-2));
		this.$.date.setContent(this.months[d.getMonth()] + " " +  d.getDate() + ", " + d.getFullYear())
	}
});