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

jQuery(document).ready(function ($) {
	var custom_styles = "";
	
	function columnStyles() {
		custom_styles = "";
		$( '.fw-col-inner' ).each( function() {
			var paddings = $(this).attr('data-paddings');

			if( typeof paddings != 'undefined' || paddings != '0px 0px 0px 0px' ) {
				var id = $(this).attr('id'),
				$custom_style = '#' + id + '{ padding: ' + paddings + '; } ';
				custom_styles += $custom_style;
			}
		});
		$('head').append('<style data-styles="unique-theme-columns-css" type="text/css">' + custom_styles  + '</style>');
	}

	columnStyles();

	$(this).ajaxComplete(function() {
		$('style[data-styles="unique-theme-columns-css"]').remove().detach();
		columnStyles();
	});
});


}
/*
     FILE ARCHIVED ON 14:10:44 Jan 19, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:26:29 Sep 16, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.845
  exclusion.robots: 0.034
  exclusion.robots.policy: 0.021
  esindex: 0.014
  cdx.remote: 15.285
  LoadShardBlock: 331.217 (3)
  PetaboxLoader3.datanode: 609.157 (4)
  load_resource: 597.554
  PetaboxLoader3.resolve: 235.756
*/