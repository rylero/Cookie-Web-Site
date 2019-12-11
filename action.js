var cartList = document.getElementById('cartList');
var totalCost = 0;
var total = document.getElementById('total');
var address;
var emailAddress;

var ch;
var pb;
var nm;
var tc;
var sn;
var cform = document.forms[0];

function addToCart(name) {
	var node = document.createElement("LI");
	node.appendChild(document.createTextNode(name));
	cartList.appendChild(node);
	totalCost+=6.50;
	total.innerHTML = "$" + totalCost;
	if (name.startsWith("Chocolate Chip")) {
		cform.elements["ChocolateChip"].value++;
	} else if (name.startsWith("Peanut Butter")) {
		cform.elements["PeanutButter"].value++;
	} else if (name.startsWith("Neiman Marcus")) {
		cform.elements["NeimanMarcus"].value++;
	} else if (name.startsWith("Tiger Cookies")) {
		cform.elements["TigerCookies"].value++;
	} else if (name.startsWith("Snickerdoodle")) {
		cform.elements["Snickerdoodle"].value++;
	}
}

function clearCart() {
	document.getElementById("cartList").innerHTML = "";
	cform.elements["ChocolateChip"].value = 0;
	cform.elements["PeanutButter"].value = 0;
	cform.elements["NeimanMarcus"].value = 0;
	cform.elements["TigerCookies"].value = 0;
	cform.elements["Snickerdoodle"].value = 0;
}

function purchase() {
	alert("Thank you for your order!\n\nYour cookies will be delivered on "+cform.elements["time"].value+".\nPlease pay $"+totalCost+" in cash or check at delivery.");
}
