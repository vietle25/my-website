"javascript: if($('div.g-recaptcha').length)" +
"{" +
"var sitekey = $('div.g-recaptcha').attr('data-sitekey');" + // getting the site-key from existing recaptcha element
"$('body > *').remove(); " + // deleting all content of the page
"$('body').append('<div id=\"captcha\"></div>'); " + // a div to draw new recaptcha
"grecaptcha.render('captcha', {\n" + // render the new recaptcha element in 'captcha' div
"    'sitekey' : sitekey,\n" +
"    'callback' : function(response){console.log('captchatoken:'+response)},\n" + // log the token on callback
"});" +
"$('body').css('background-color','transparent');" + // for aesthetic purposes
"}"