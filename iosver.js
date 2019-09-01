//Thank you Matchstic, you beautiful person
const VERSION_CHECK_SUPPORTED = "<p>iOS %s is supported. ✓</p>";
const VERSION_CHECK_UNSUPPORTED = "<p>iOS %s is not supported. ✕</p>";
const VERSION_CHECK_UNCONFIRMED = "<p>iOS %s has not been tested!</p>";

function iOSVersion() {
	var match = (navigator.appVersion).split('OS ');
	if (match.length > 1) {
		return match[1].split(' ')[0].split('_').join('.');
	}
	return false;
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
		document.getElementById("ios").innerHTML=VERSION_CHECK_UNSUPPORTED.replace("%s", versionNumber);
	}
