// Replace div.file_code with something
window.alert("Page matches ruleset");


self.port.on("replaceContent", function(content) {

  document.querySelector("div.file").innerHTML=
  content;
});
