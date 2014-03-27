var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

pageMod.PageMod({
  include: /.*github\.com\/.*\.ipynb/, // Match e.g.
  // https://github.com/UCL/ucl_software_carpentry/blob/
  // master/python/01_variables_and_types/exercises.ipynb
  contentScriptFile: data.url("render_ipynb.js")
});
