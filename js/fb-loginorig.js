var fbUser;
window.fbAsyncInit = function() {
FB.init({
    appId      : '454616474637590', // App ID
    // channelUrl : '//bootcamp.rocketu.com/channel.html', // Channel File
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
});

    FB.Event.subscribe('auth.authResponseChange', function(response) {
        console.log(response);

        if (response.status === 'connected') {
                // USER IS LOGGED IN
                /*
                        # GET USER PROFILE INFORMATION
                        1. CHeck to see if I have that in localstorage
                        2. If not, grab it from facebook and save in localstorage

                        
                        # REDIRECT USER TO HOME IF THIS IS THE FIRST LOGIN
                        1. Check to see if the page is login
                        2. If yes, redirect user to Home page
                
                */
            if (localStorage.getItem('fbUser')) {
                fbUser = JSON.parse(localStorage.getItem('fbUser'));
                loggedIn();
            } else {
                FB.api('/me', function(response) {
                    console.log('Good day, ' + response.name + '.');
                    fbUser = response;
                    localStorage.setItem('fbUser',JSON.stringify(fbUser));
                    loggedIn();
                });
            }

        } else if (response.status === 'not_authorized') {
          FB.login();
        } else {
          FB.login();
        }
    });    
};

(function(d){
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));


function loggedIn() {
        console.log(window.location);
        if (window.location.href.search('login.html')!==-1) {
                window.location = 'index.html';

        }
}