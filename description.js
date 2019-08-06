function iOSVersion() {
	var match = (navigator.appVersion).split('OS ');
	if (match.length > 1) {
		return match[1].split(' ')[0].split('_').join('.');
	}
	return false;
}

function loadPackageInfo() {
	var urlSplit = window.location.href.split('description.html?id=');
	var formURL = urlSplit[0] + "packageInfo/" + urlSplit[1];

	$.ajax({
		url: formURL,
		type: "GET",
		cache: false,
		crossDomain: true,
		success: function (returnhtml) {
			console.log(returnhtml);
			var decodeResp = JSON.parse(returnhtml);
			if(decodeResp.name) {
				document.title = decodeResp.name;
				$("#name").text(decodeResp.name);
			}
			if(decodeResp.version) {
				$("#version").html(decodeResp.version);
			}
			if(decodeResp.description) {
				$("#description").html(decodeResp.description);
			}
			if(decodeResp.screenshot) {
				$("#screenshot").html(decodeResp.screenshot);
			}
			if(decodeResp.whatsnew) {
				$("#whatsnew").html(decodeResp.whatsnew);
			}
			if(decodeResp.licence) {
				$("#licence").html(decodeResp.licence);
			}
			if(decodeResp.updated) {
				$("#updated").html(decodeResp.updated);
			}
			if(decodeResp.supported) {
				$("#supported").html(decodeResp.supported);
			}
			if(decodeResp.topicon) {
				$("#topicon").attr('src', decodeResp.topicon);
			}
			if(decodeResp.title) {
				$("#title").html(decodeResp.title);
			}
        },
		error: function (err) {
			alert(err);
		}
	});
}