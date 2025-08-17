if (document.getElementsByTagName) {
	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		if (links[i].className == 'navlink') {
			links[i].onmouseover = function() {this.style.color = '#fff';};
			links[i].onmouseout = function() {this.style.color = "#999";};
		}
	}
}