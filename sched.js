"use strict";

var slots = localStorage['schedSlots'] || {
	M: [1,2,3,4,5,6],
	T: [1,2,3,4,5,6],
	W: [1,2,3,4,5,6],
	Th: [1,2,3,4,5,6],
	F: [1,2,3,4,5,6],

};

var kids = localStorage['schedkids'] || {
	'A': ['M:3,4,5,6:ESL', 'W:1,2:Reading'],
	'B': ['W:1,2,5,6:Something', 'F:1,2:ESL'],
	'C': ['M:3,4,5,6:Something', 'W:1,2:OT'],
};
function main() {
	var div = document.getElementById("content");
	var slotsdiv = document.getElementById("slots");

	div.innerHTML = "hello";
	var slotstxt = '';
	for (var day in slots) {
		slotstxt += `${day}: ${slots[day].join(',')}\n`;
	}

	slotsdiv.value = slotstxt;
}
