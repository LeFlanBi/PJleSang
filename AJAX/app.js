var getHttpRequest = function () {
  var httpRequest = false;

  if (window.XMLHttpRequest) {
    // Mozilla, Safari,...
    httpRequest = new XMLHttpRequest();
    if (httpRequest.overrideMimeType) {
      httpRequest.overrideMimeType("text/xml");
    }
  } else if (window.ActiveXObject) {
    // IE
    try {
      httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }

  if (!httpRequest) {
    alert("Abandon :( Impossible de créer une instance XMLHTTP");
    return false;
  }

  return httpRequest;
};
var httpRequest = getHttpRequest();
var links = document.querySelectorAll(".lien");

for (let i = 0; i < links.length; i++) {
  var link = links[i];
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("result").innerHTML = "Chargement..."

    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === 4) {
        document.getElementById("result").innerHTML = httpRequest.responseText;
      }
    };

    httpRequest.open("GET", this.getAttribute("href"), true);
    httpRequest.send();
  });
}
