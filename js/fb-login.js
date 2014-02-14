Parse.initialize("xSiBgaOaMjITtQkGrxR2okOU79j3rO1LVTaD8JGF", "5FPajyGf1LJkkbBpuaQvH0rEEDv8eBombFtLZpFE");

var fbUser;
window.fbAsyncInit = function() {
    Parse.FacebookUtils.init({
        appId      : '454616474637590', // App ID
        // channelUrl : '//bootcamp.rocketu.com/channel.html', // Channel File
        status     : true, // check login status
        cookie     : true, // enable cookies to allow the server to access the session
        xfbml      : true  // parse XFBML
    });

    Parse.FacebookUtils.logIn(null,{
        success: function(user) {
            FB.api('/me', function(response) {
                console.log(user);
                console.log(response);
                var profImg = 'https://graph.facebook.com/'+response.username+'/picture?type=small'
                console.log(profImg);
                if (!response.error) {
                    if (!user.existed()) {    
                        user.set("fbId", response.id);
                        user.set("userName", response.username);
                        user.set("firstName", response.first_name);
                        user.set("lastName", response.last_name);
                        user.set("profImg", profImg);
                        user.set("userGender", response.gender);
                        user.save();
                        console.log('Good day, ' + response.name + '.');
                        fbUser = response;
                        localStorage.setItem('fbUser',JSON.stringify(fbUser));
                        loggedIn();
                    } else {
                        fbUser = response;
                        localStorage.setItem('fbUser',JSON.stringify(fbUser));
                        alert("user existed saved to local storage");
                        loggedIn();
                    }
                } else {
                    alert("need to check fb login");
                }
            });
        },
        error: function(user, error) {
            alert("User cancelled the Facebook login or did not fully authorize.");
        }
    });
};
    // Parse.FacebookUtils.logIn("email", {
    //   success: function(user) {
    //     // Handle successful login
    //   },
    //   error: function(user, error) {
    //     // Handle errors and cancellation
    //   }
    // });

    // if (!Parse.FacebookUtils.isLinked(user)) {
    //   Parse.FacebookUtils.link(user, null, {
    //     success: function(user) {
    //         alert("Woohoo, user logged in with Facebook!");
    //     },
    //     error: function(user, error) {
    //         alert("User cancelled the Facebook login or did not fully authorize.");
    //     }
    //   });
    // }

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

