function iOSversion() {
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
	}
	else {
		return 0;
	}
}
ver = iOSversion();
if (ver[0] >= 11 || (ver[0] === 12 && ver[1] <= 2)) {
	document.getElementById('version').innerHTML='<p><strong>✓</strong> Your device is supported.</p>';
}
else {
	document.getElementById('version').innerHTML='<p><strong>x</strong> Your device is not supported.</p>';
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