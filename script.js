function onClick() {
	let msg = document.getElementById("buttonId").innerHTML;
	let count = msg.charAt(msg.length - 1);
	let substring = msg.substring(0, msg.length - 2);
	count++;
	document.getElementById("buttonId").innerHTML = substring + " " + count;
}