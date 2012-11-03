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
