var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function() {
  var banner = document.getElementById("bitnami-banner");
  var closeButton = document.getElementById("bitnami-close-banner-button");

  var toggleCloseButton = function toggleCloseButton(open) {
   if (closeButton){
      if(open && banner && banner.style.display != "none") {
        closeButton.style.display="block";
      } else {
        closeButton.style.display="none";
      }
   }
    return false;
  };
  var setCookie = function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  };

  var closeBanner = function closeBanner(open) {
    if (banner) {
      var suffix = banner.getAttribute('data-banner-id') || 'global';
      banner.style.display = "none";
      setCookie('_bitnami_closed_banner_' + suffix, "1", 30);
    }
    return false;
  }; 


  banner.onmouseover = function() { return toggleCloseButton(1); };
  banner.onmouseout = function() { return toggleCloseButton(0); }; 
  closeButton.onclick = closeBanner;
}());


}
/*
     FILE ARCHIVED ON 14:10:58 Jan 19, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:26:30 Sep 16, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.504
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 24.912
  LoadShardBlock: 355.668 (3)
  PetaboxLoader3.datanode: 389.213 (4)
  load_resource: 845.403
  PetaboxLoader3.resolve: 709.697
*/