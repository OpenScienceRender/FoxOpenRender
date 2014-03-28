exports.getCorrespondingRawURL=function(pagePath) {
  // Convert
  // https://github.com/swcarpentry/2012-11-scripps/blob/master/python/testing-with-nose.ipynb
  //to:
  // https://raw.githubusercontent.com/swcarpentry/2012-11-scripps/master/python/testing-with-nose.ipynb
  return "raw.githubusercontent.com"+pagePath.replace("/blob","")
}

exports.getOpenScienceRenderURL=function(type,raw) {
  if (type=="bbc") {
    return "https://bbc.co.uk/sport"
  } else {
    return "https://opensciencerender.com/"+type+"/"+raw
  }
}
