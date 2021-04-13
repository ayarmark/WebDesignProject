$(document).ready(function() {
	$("#datepicker").datepicker({
		minDate : new Date(),
		showButtonPanel : true
	});
});

//	$("#Submit").onclick(function() {

//$("#dialog").dialog({
//	modal : true
//});
//	});

function thankYou() {
	$("#dialog").dialog({
		modal : true
	});
}


$(document).ready(function() {
	$("#accordion").accordion({
		event : "mouseover",
		heightStyle : "content",
		collapsible : true,
	});
}); 