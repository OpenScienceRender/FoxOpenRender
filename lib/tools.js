exports.getCorrespondingRawURL=function(pagePath) {
  // Convert
  // https://github.com/swcarpentry/2012-11-scripps/blob/master/python/testing-with-nose.ipynb
  //to:
  // https://raw.githubusercontent.com/swcarpentry/2012-11-scripps/master/python/testing-with-nose.ipynb
  return "raw.githubusercontent.com"+pagePath.replace("/blob","")
}
