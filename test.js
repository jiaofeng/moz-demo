/* name */

var {classes: Cc, interfaces: Ci, utils: Cu, results: Cr} = Components; 
["LOG", "WARN", "ERROR"].forEach(function(aName) {
  if(this[aName])
    return;
  this.__defineGetter__(aName, function() {
    Cu.import("resource://gre/modules/AddonLogging.jsm");

    LogManager.getLogger("test", this);
    return this[aName];
  });
}, this);

/*       -- test code --      */
Components.utils.import("resource://gre/modules/Services.jsm");

var file = Services.dirsvc.get("XCurProcD", Ci.nsIFile);
file.append("components/addonManager.js"); 
LOG(file.path);