// --------------Strings Externalization STARTS here-------------

const _pathVarInRestApi = "path";
const _reportServiceURIForJsonData =
  "/moeb/service/com.ibm.rational.test.lt.core.moeb.services.reports.IUnifiedReportService/?action=unifiedreport&path=";
const _reportServiceURIForSnapshotData =
  "/moeb/service/com.ibm.rational.test.lt.core.moeb.services.reports.IUnifiedReportService/?action=unifiedreportsnapshot&path=";
const _testnameDispStr = "TestName:";
const _generatedOnDispStr = "Generated on: ";
const _passStrInJson = "pass";
const _failStrInJson = "fail";
const _passedDispStr = "PASSED";
const _failedDispStr = "FAILED";
const _passedDispStr1 = "Passed";
const _failedDispStr1 = "Failed";
const _SNoDispStr1 = "S No.";
const _passDispStr = "Pass";
const _failDispStr = "Fail";
const _passColorGreen = "#79D732"; //"green";
const _failColorRed = "#E0182D"; //"red";
const _counterTestsInJson = "tests";
const _counterTotalInJson = "total";
const _totalDispStr = "Total";
const _counterBrowserWiseTestInJson = "browserWiseTest";
const _envKeyAut = "aut";
const _envAutDispStr = "Application(s) Under Test";
const _envAutDispStr1 = "AUT";
const _envKeyPlatform = "platform";
const _envPlatformDispStr = "Platform";
const _envHostDispStr = "Host";
const _envKeyConfiguration = "configuration";
const _envConfigurationDispStr = "Configuration";
const _summTabVersionDispStr = "Version";
const _summTabStartTimeDispStr = "Start Time";
const _summTabEndTimeDispStr = "End Time";
const _summTabExecutionTimeDispStr = "Execution Time";
const _summTabTestOnBrowsersDispStr = "Test On Browsers";
const _testTypeSingle = "singleTest";
const _testTypeCompound = "CompoundTest";
const _pathVar = "path";
const _imageName = "imagename";
const _ampersand = "&";
const _equals = "=";
const _totalStepsDispStr = "Total Steps";
const _passedStepsDispStr = "Passed Steps";
const _failedStepsDispStr = "Failed Steps";
const _runOnDispStr = "Run on";
const _tooltipPreviousStep = "Select Previous Step";
const _tooltipNextStep = "Select Next Step";
const _snapShotDialogWidth = "78vw";
const _reportTitle = "Unified Report";
const _colon = ":";
const _space = " ";
const _loadingDispStr = "Loading...";
const _browserChromeInJson = "Chrome";
const _browserChromeDispStr = "Google Chrome";
const _browserFirefoxInJson = "Firefox";
const _browserFirefoxDispStr = "Mozilla Firefox";
const _browserEdgeInJson = "Microsoft Edge";
const _browserEdgeDispStr = "Microsoft Edge";
const _browserieInJson = "Internet Explorer";
const _browserieDispStr = "Internet Explorer";
const _win10DispStr = "Windows 10";
const _win7DispStr = "Windows 7";
const _macOsXDispStr = "Mac OS X";
const _browserSafariInJson = "Safari";
const _browserSafariDispStr = "Safari";
const _totalTestOnDispStr = "Total tests on";
const _descriptionDispStr = "Description";
const _netEndToEndRespTimeDispStr = "Net End-to-End response time";
const _screenshotCarouselDispStr = "Screenshots Carousel";
const _durationDispStr = "Duration";
const _msDispStr = "ms";
const _thinkTimeInJson = "thinktime";
const _thinkTimeDispStr = "Think Time";
const _verificationInJson = "verification";
const _verificationDispStr = "Verification";
const _pauseOnHoverMsg = "Hover on the Dialog to pause";

// The tokens starting like __VENDOR_NAME__ get replaced with right string as part of build
// __VENDOR_NAME__=HCL
// __VENDOR_NAME__=IBM
const vendorName = "__VENDOR_NAME__";
// __FT_PRODUCT_NAME__=HCL OneTest UI
// __FT_PRODUCT_NAME__=IBM Rational Functional Tester
const productName = "__FT_PRODUCT_NAME__";

const _summarySecColorsForDoughnut = [
  _passColorGreen,
  _failColorRed,
  "#FFCE56"
];
// --------------Strings Externalization ENDS here-------------

// --------------Functions START from here----------
function convertTimeStampToDateStr(timestampStr) {
  var time = new Date(parseInt(timestampStr, 10));
  // return time.toLocaleString();
  return time.toDateString() + ", " + time.toLocaleTimeString();
}

// function diff(diff) {
//   // var sec = diff / 1000;
//   // var min = diff / 1000 / 60;
//   var sec = Math.round(parseInt(diff, 10) / 1000).toFixed(0);
//   var min = Math.trunc(parseInt(diff, 10) / 1000 / 60).toFixed(0);
//   var retStr = "";
//   if (min !== "0") retStr = retStr + min + " minutes";
//   else retStr = retStr + sec + " seconds";
//   return retStr;
// }

function getDuration(time) {
  time = time / 1000;
  // Hours, minutes and seconds
  var hrs = ~~(time / 3600);
  var mins = ~~((time % 3600) / 60);
  var secs = ~~time % 60;
  var ret = "";
  if (hrs > 0) {
    ret += "" + hrs + "hour " + (mins < 10 ? "0" : "");
  }
  if (mins > 0) {
    ret += "" + mins + " min " + (secs < 10 ? "0" : "");
  }
  ret += "" + secs + " sec";
  return ret;
}
// --------------Functions END here------------

// ----------- Exports STARTS here----------------

export {
  _pathVarInRestApi,
  _reportServiceURIForJsonData,
  _reportServiceURIForSnapshotData,
  _testnameDispStr,
  _generatedOnDispStr,
  _passStrInJson,
  _failStrInJson,
  _passDispStr,
  _failDispStr,
  _passColorGreen,
  _failColorRed,
  _passedDispStr,
  _failedDispStr,
  _summarySecColorsForDoughnut,
  _counterTestsInJson,
  _counterTotalInJson,
  _counterBrowserWiseTestInJson,
  _envKeyAut,
  _envAutDispStr,
  _envAutDispStr1,
  _envKeyPlatform,
  _envPlatformDispStr,
  _envKeyConfiguration,
  _envConfigurationDispStr,
  _summTabVersionDispStr,
  _summTabStartTimeDispStr,
  _summTabEndTimeDispStr,
  _summTabExecutionTimeDispStr,
  _summTabTestOnBrowsersDispStr,
  _testTypeSingle,
  _testTypeCompound,
  _pathVar,
  _imageName,
  _ampersand,
  _equals,
  _totalStepsDispStr,
  _passedStepsDispStr,
  _failedStepsDispStr,
  _runOnDispStr,
  _tooltipPreviousStep,
  _tooltipNextStep,
  _failedDispStr1,
  _SNoDispStr1,
  _snapShotDialogWidth,
  _reportTitle,
  _colon,
  _space,
  _loadingDispStr,
  _browserChromeInJson,
  _browserChromeDispStr,
  _browserFirefoxInJson,
  _browserFirefoxDispStr,
  _browserEdgeInJson,
  _browserEdgeDispStr,
  _browserieInJson,
  _browserieDispStr,
  _win10DispStr,
  _win7DispStr,
  _macOsXDispStr,
  _browserSafariInJson,
  _browserSafariDispStr,
  _totalTestOnDispStr,
  _envHostDispStr,
  _descriptionDispStr,
  _netEndToEndRespTimeDispStr,
  _screenshotCarouselDispStr,
  _passedDispStr1,
  _totalDispStr,
  _durationDispStr,
  _msDispStr,
  _thinkTimeInJson,
  _thinkTimeDispStr,
  _verificationInJson,
  _verificationDispStr,
  _pauseOnHoverMsg,
  //function exports
  convertTimeStampToDateStr,
  vendorName,
  productName,
  getDuration
};

// ----------- Exports ENDS here----------------
