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
    var window = require("sdk/window/utils").getMostRecentBrowserWindow();
    var original=window.content.location.pathname;
    var raw=tools.getCorrespondingRawURL(original);
    var host="http://nbviewer.ipython.org";
    var url="https://bbc.co.uk/news/"
    worker.port.emit("replaceContent", url);
  }
});
