var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;
var tools= require("./tools")
var request=require("sdk/request")

register_openrender= function(type,regex){
  pageMod.PageMod({
    include: regex, // Match e.g.
    // https://github.com/UCL/ucl_software_carpentry/blob/
    // master/python/01_variables_and_types/exercises.ipynb
    contentScriptFile:
      data.url("open_render.js"),
    onAttach: function(worker) {
      var window = require("sdk/window/utils").getMostRecentBrowserWindow();
      var original=window.content.location.pathname;
      var raw=tools.getCorrespondingRawURL(original);
      var url=tools.getOpenScienceRenderURL(type,raw)
      worker.port.emit("replaceContent", url);
    }
  });
}

register_openrender("bbc",regex=/.*github\.com\/.*\.ipynb/);
