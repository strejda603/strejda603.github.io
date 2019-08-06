window.onload = function () {
  document.getElementById("AirmailPremium").addEventListener("click", packagesEventHandler);
  document.getElementById("GetAirmailPremium").addEventListener("click", packagesEventHandler);
}

function packagesEventHandler(e) {
  switch(e.currentTarget.id) {
    case "AirmailPremium":
      window.open("https://strejda603.github.io/description.html?id=com.strejda603.airmailpremium", "_self");
      break;
    case "GetAirmailPremium":
      window.open("https://cydia.saurik.com/api/share#?source=https://strejda603.github.io/&package=com.strejda603.airmailpremium");
      break;
  }
  e.stopPropagation();
}