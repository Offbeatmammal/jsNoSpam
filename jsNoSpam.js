
String.prototype.rot13 = function(){
	// rot13 decoder, with addition of mapping * to @
    return this.replace(/[a-zA-Z]/g, function(c){
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    }).replace("*","@");
};

function jsNSshow(l) {
	// rot13 the address and display it
	l = l.rot13();
	// not that the link here uses an encoded piece as well simply to obfuscate the source slightly
	return '<a href=' + 'znvygb'.rot13() +':' + l + '>' + l + '<\/a>'
}

function jsNSemail(e,s,t) {
	// e: the rot13 encoded email address (also replace @ with *)
	// s: true require an action to reveal, false to simply show it
	// t: if s=true optional text to override the default
	var tDefault = "click to reveal" // default text for hidden email address
	// note: by default this uses 'onmouseover' to reveal email, may want to change to 'onclick' for more positive action
	if (s) {
		document.write("<span style='cursor:pointer' tabindex='0' role='button' id='" + e + "' onkeydown='if (event.keyCode == 13) {this.outerHTML=jsNSshow(this.id); return false} else { return event.keyCode}' onmouseover='this.outerHTML=jsNSshow(this.id)'>" + (t || tDefault) + "<\/span>");
	} else {
		document.write(jsNSshow(e));
	}
}