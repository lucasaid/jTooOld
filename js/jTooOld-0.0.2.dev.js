// JavaScript Document
(function($) {
	$.extend({
		jTooOld: function (options) {

			//Check if cookie exists
			var nameEQ = "jTooOld=";
			var ca = document.cookie.split(';');
			var cookie = false;
			for(var i=0;i < ca.length;i++) {
					var c = ca[i];
					while (c.charAt(0)==' ') c = c.substring(1,c.length);
					if (c.indexOf(nameEQ) == 0) cookie = true;
			}
			//If cookie does not exist run code
			if(!cookie){			
				//Default Text
				// h = Header, t = Paragraph text, s = solved text
				var v = {
					'h':'Your Browser is too dam old',
					't':'It has been detected that you are using an ancient browser...or just IE....shame on you. To continue you can answer this simple maths equation. Or download one of the following "better" browsers.',
					's':'Enjoy your horrible experience brainiac!',
				};
				
				//Set default option for asking equations
				var eqon = true;

				//Set default option for showing which browser to download
				var brows = true;

				var debug = false;

				//Get passed variables
				var o = $.extend({}, $.jTooOld.defaults, options);
				//Replace option for asking equations
				if(o.browsers != undefined){
					brows = o.browsers;
				}
				//Replace option for asking equations
				if(o.equations != undefined){
					eqon = o.equations;
				}
				//Replace option for debugging
				if(o.debug != undefined){
					debug = o.debug;
				}
				//Replace default header text
				if(o.header != undefined){
					v.h = o.header;
				}
				//Replace default paragraph text
				if(o.text != undefined){
					v.t = o.text;
				}
				//Replace default paragraph text
				if(o.solved != undefined){
					v.s = o.solved;
				}

				//If browser is IE and less than or equal to version 8, or debug is on, display popup
				if(($.browser.msie == true && parseInt($.browser.version, 10) <= 8) || debug){
					var b = $('<div>').attr('id','tooOldPopup');
					var h = $('<div>').attr('id','tooOldHeader');

					//print header text
					h.html(v.h);
					var t = $('<div>').attr('id','tooOldText');

					//print paragraph text
					t.html(v.t);
					var i = $('<div>').attr('id','tooOldImage');

					//add image, header and paragraph text to popup div
					b.append(i,h,t);

					// If equation is on pick a random equation to ask.
					if(eqon){
						var eq = Array(
						{
							'eq':"1/2x +1/2(1/2x + 1/2(1/2x +1/2(1/2x + ... = y....Find x",
							'ans':'y'
						},
						{
							'eq':"y = log x....Find x",
							'ans':'1'
						},
						{
							'eq':"2(40x-10)+45-15=3(25x+15)-5....Find x",
							'ans':'5'
						},
						{
							'eq':"0x + 7 + 5x = 2x + 30 + 40...Find x",
							'ans':'21'
						});					
						var r = Math.floor((Math.random()*eq.length));
						var eqt = $('<div>').attr('id','tooOldEquation');
						var ans = $('<input>').attr({'id':'tooOldInput', 'value':''});
						eqt.html('<br /><b>Question</b>: '+eq[r].eq+'<br /><b>Answer:</b> ');
						eqt.append(ans);
						b.append(eqt);

						//Check if equation is correct on enter press, if it is, set cookie so pop up doesn't show anymore and change text and hide popup
						$('#tooOldInput').live('keypress',function(e){
							var code = (e.keyCode ? e.keyCode : e.which);
							if(code == 13) {
								if($(this).val() == eq[r].ans){
									var date = new Date();
									date.setTime(date.getTime()+(7*24*60*60*1000));
									var expires = "; expires="+date.toGMTString();

									document.cookie = "jTooOld=true"+expires+"; ; path=/";
									
									$('#tooOldText').html(v.s);
									$('#tooOldEquation').remove();	
									$('#tooOldInput').remove();	
									setTimeout('$("#tooOldPopup").remove();$("#tooOldOverlay").remove();',2000);
								}
							}
						});
						
					}

					//If browser is set, display icons and links to better browsers
					if(brows){
						var bro = $('<div>').attr('id','tooOldBrowser');

						var chr = $('<a>').attr({'class':'chrome','href':'http://www.google.com/chrome/','target':'_blank'});
						var fire = $('<a>').attr({'class':'firefox','href':'http://www.mozilla.org/en-US/firefox/new/','target':'_blank'});
						var opera = $('<a>').attr({'class':'opera','href':'http://www.opera.com/download/','target':'_blank'});						
						bro.append(chr,fire,opera);
						b.append(bro);
					}
					
					var c = $('<div>').attr('id','tooOldOverlay');
					$('body').append(b,c);
				}				
			}
			
		}
	});
})(jQuery);