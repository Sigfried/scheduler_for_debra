"use strict";

var slots = localStorage['schedSlots'] || {
	M: [1,2,3,4,5,6],
	T: [1,2,3,4,5,6],
	W: [1,2,3,4,5,6],
	Th: [1,2,3,4,5,6],
	F: [1,2,3,4,5,6],

};
var schedule = {};


var kids = localStorage['schedkids'] || {
	'A': ['M:3,4,5,6:ESL', 'W:1,2:Reading'],
	'B': ['W:1,2,5,6:Something', 'F:1,2:ESL'],
	'C': ['M:3,4,5,6:Something', 'W:1,2:OT'],
};
function main() {

	var slotsdiv = document.getElementById("slots");
	var slotstxt = '';
	for (var day in slots) {
		slotstxt += `${day}: ${slots[day].join(',')}\n`;
		schedule[day] = [];
	}
	slotsdiv.value = slotstxt;

	var kidsdiv = document.getElementById("kids");
	var kidstxt = '';
	for (var kid in kids) {
		kidstxt += `${kid}: ${kids[kid].join(' | ')}\n`;
	}
	kidsdiv.value = kidstxt;

	var content = document.getElementById("content");
	fill();
	var schedtxt = '';
	for (var day in schedule) {
		schedtxt += `${day}: ${schedule[day].join(',')}\n`;
	}
	content.innerHTML = schedtxt;
}
function fill() {
	for (var kid in kids) {
		kids[kid].forEach(
			entry => {
				var [day,periods,activity] = entry.split(/:/);
				periods.split(',').forEach(
					period => schedule[day][period] = [kid,activity].join(':'));
			});
	}
	var i = 0;
	for (var day in slots) {
		slots[day].forEach(
			period => setKidSlot(
				nextKid(), day, period, 'Debra'));
	}
}
var kidIdx = 0;
var kidList = Object.keys(kids);
function nextKid() {
	return kidList[kidIdx++ % (kidList.length-1)];
}
function isKidSlotFull(kid, day, period) {
	var kidSlots = kids[kid];
	kidsSlots.forEach(act => {
		var [sday, periods, activity] = kidSlots.split(/:/);
		if (day === sday && periods.match(period))
			return true;
	});
}
function setKidSlot(kid, day, period, activity) {
	var kidSlots = kids[kid];
	kidSlots.forEach(entry => {
		var [sday, periods, activity] = entry.split(/:/);
		if (day === sday && periods.match(period)) {
			kidSlots.push([day,period,'Debra'].join(':'));
			schedule[day][period] = [kid,activity].join(':');
		}
	});
}
