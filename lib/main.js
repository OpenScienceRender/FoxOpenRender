var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;
var tools= require("./tools")
var request=require("sdk/request")

pageMod.PageMod({
  include: /.*github\.com\/.*\.ipynb/, // Match e.g.
  // https://github.com/UCL/ucl_software_carpentry/blob/
  // master/python/01_variables_and_types/exercises.ipynb
  contentScriptFile:
    data.url("open_render.js"),
  onAttach: function(worker) {
    var raw=tools.rawURL();
    console.log(raw);
    request.Request({
      url: "http://nbviewer.ipython.org/urls/"+raw,
      onComplete: function (response) {
        worker.port.emit("replaceContent", response.text);
      }
    }).get();
  }
});
