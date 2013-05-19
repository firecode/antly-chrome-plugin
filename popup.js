$(function() {
	$("#add").click(add_url_to_list);
});

function add_url_to_list() {
	chrome.tabs.getSelected(null, function(tab) {
		alert(tab.url);
	});
}

function get_current_url() {
	var ret_url = null;
	chrome.tabs.getSelected(null, function(tab) {
		ret_url = tab.url;
	});
	return ret_url;
}