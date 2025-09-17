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
	
	function buttonStyles() {
		custom_styles = "";
		$( 'a.button' ).each( function() {
			var margin_top = $(this).attr('data-mtop'),
			margin_bottom = $(this).attr('data-mbottom');

			if( typeof margin_top != 'undefined' ) {
				var id = $(this).attr('id'),
				$custom_style = '#' + id + '.button { margin-top: ' + margin_top + 'px; margin-bottom: ' + margin_bottom + 'px; } ';
				custom_styles += $custom_style;
			}
		});
		$('head').append('<style data-styles="unique-theme-button-css" type="text/css">' + custom_styles  + '</style>');
	}

	buttonStyles();

	$(this).ajaxComplete(function() {
		$('style[data-styles="unique-theme-button-css"]').remove().detach();
		buttonStyles();
	});
});


}
/*
     FILE ARCHIVED ON 14:10:46 Jan 19, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:26:28 Sep 16, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.595
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.01
  cdx.remote: 23.491
  LoadShardBlock: 407.954 (3)
  PetaboxLoader3.resolve: 336.64 (4)
  PetaboxLoader3.datanode: 175.983 (4)
  load_resource: 158.196
*/