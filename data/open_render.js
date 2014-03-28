window.alert("Payload inserted")
self.port.on("replaceContent", function(url) {
window.alert("Replacing with"+url)
var content=[
  '<div class="blob-wrapper">',
    '<iframe width="100%" height="1000px" src="'+url+'" sandbox="allow-scripts allow-same-origin">Viewer requires iframe.</iframe>',
'</div>'].join("\n");
  console.log(content);
  document.querySelector("div.file").innerHTML=content;
});
