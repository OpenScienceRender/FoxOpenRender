self.port.on("replaceContent", function(host,original,url) {

var content=[
  '<div class="render-wrapper">',
  '<div class="render-container is-render-pending js-render-target"',
    //'data-identity="6e703281-468e-45b9-8872-5c3f2784a99c"',
    'data-host="'+host+'"',
    'data-type="3d"',
    'data-local="false">',
    '<img alt="Octocat-spinner-128" class="octospinner" height="64" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-128.gif" width="64" />',
    '<div class="render-viewer-error">Sorry, something went wrong. <a href="'+original+'" id="render-refresh">Reload?</a></div>',
    '<div class="render-viewer-fatal">Sorry, we cannot display this file.</div>',
    '<iframe class="render-viewer" src="'+url+'" sandbox="allow-scripts allow-same-origin">Viewer requires iframe.</iframe>',
  '</div>',
'</div>'].join("\n");
  console.log(content);
  document.querySelector("div.file").innerHTML=content;
});
