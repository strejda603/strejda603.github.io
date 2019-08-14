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
	document.getElementById('ios').innerHTML='<p>Your device is supported.</p>';
}
else {
	document.getElementById('ios').innerHTML='<p>Your device is not supported.</p>';
}
