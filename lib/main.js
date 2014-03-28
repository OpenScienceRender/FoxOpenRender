var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;
var tools= require("./tools")
var request=require("sdk/request")
const {Cu,Ci} = require("chrome");
Cu.import("resource://gre/modules/XPCOMUtils.jsm");
var listeners={};

replaceContent=function(url,type){

}

register_openrender= function(type,regex){

  var locationListener = {
      QueryInterface: XPCOMUtils.generateQI(["nsIWebProgressListener",
                                             "nsISupportsWeakReference"]),

      onLocationChange: function(aProgress, aRequest, aURI) {
        var originalurl=window.content.location.href;
        var original=window.content.location.pathname;
        var raw=tools.getCorrespondingRawURL(original);
        var url=tools.getOpenScienceRenderURL(type,raw)
        if (regex.test(originalurl)){
          window.alert("Scheduling replacement")
          window.gBrowser.addEventListener("load", function(e)
          {
          window.alert("Firing replacement")
          var raw=tools.getCorrespondingRawURL(original);
          var url=tools.getOpenScienceRenderURL(type,raw)
          worker.port.emit("replaceContent", url);
        }, false);
      }
    },

  }

  var window = require("sdk/window/utils").getMostRecentBrowserWindow();
  window.alert("Binding listener");
  window.gBrowser.addProgressListener(locationListener);
  listeners[type]=locationListener;

  pageMod.PageMod({
    include: /.*github\.com.*/,
    contentScriptFile:
      data.url("open_render.js"),
  })
}



register_openrender("bbc",regex=/.*github\.com\/.*\.ipynb/);
