//Thank you Matchstic, you beautiful person
const VERSION_CHECK_SUPPORTED = "<p>iOS %s is supported. ✓</p>";
const VERSION_CHECK_UNSUPPORTED = "<p>iOS %s is not supported. ✕</p>";
const VERSION_CHECK_UNCONFIRMED = "<p>iOS %s has not been tested!</p>";

function iOSversion() {
		if (/iP(hone|od|ad)/.test(navigator.platform)) {
			var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
			return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
		}
	}

var minios = 11.0;
var maxios = 12.4;
var version = iOSversion();
var versionNumber = parseFloat(version[0] + "." + version[1]);

	if(versionNumber >= minios && version <= maxios) {
		document.getElementById("ios").innerHTML = VERSION_CHECK_SUPPORTED.replace("%s", versionNumber);
	} else if(versionNumber > maxios) {
		document.getElementById("ios").innerHTML = VERSION_CHECK_UNCONFIRMED.replace("%s", versionNumber);
	} else if(!versionNumber) {
		document.getElementById("ios").innerHTML = "<p>Can't get device version.</p>";
	} else {
		document.getElementById("ios").innerHTML = VERSION_CHECK_UNSUPPORTED.replace("%s", versionNumber);
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
