
String.prototype.rot13 = function(){
	// rot13 decoder, with addition of mapping * to @
    return this.replace(/[a-zA-Z]/g, function(c){
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    }).replace("*","@");
};

function jsNSshow(l,c) {
	// rot13 the address and display it
	l = l.rot13();
	// note that the link here uses an encoded mailto as well to obfuscate the source slightly
	x = '<a href=' + 'znvygb'.rot13() +':' + l + ' rel="nofollow"'
	if (typeof c != 'undefined' && c != "") {
		x+= ' class="' + c + '"';
	}
	x += '>' + l + '<\/a>'
	return x
}

function jsNSemail(e,s,t,c) {
	// e: the rot13 encoded email address (also replace @ with *)
	// s: true require an action to reveal, false to simply show it. Default=True
	// t: if s=true optional text to override the default, if s=false this will be interpreted as c
	// c: if s=true this will be the optional class to apply to the span (if s=false, then t will initially contain the value and code will move it)
	if (typeof s === 'undefined') {
		s = false
	}
	if (!s && typeof t != 'undefined') {
		// if s=false, but there is a third parameter, then it's treated as the class to style with
		c = t
	}
	var tDefault = "click to reveal" // default text for hidden email address
	// note: by default this uses 'onmouseover' to reveal email, may want to change to 'onclick' for more positive action
	if (s) {
		document.write("<span style='cursor:pointer' tabindex='0' role='button' id='" + e + "' class='" + c + "' onkeydown='if (event.keyCode == 13) {this.outerHTML=jsNSshow(this.id,this.className); return false} else { return event.keyCode}' onmouseover='this.outerHTML=jsNSshow(this.id,this.className)'>" + (t || tDefault) + "<\/span>");
	} else {
		document.write(jsNSshow(e,c));
	}
}