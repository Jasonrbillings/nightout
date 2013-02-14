$(document).ready(function() {
 
 window.fbAsyncInit = function (){
	 	FB.init({
			appID: '377441435687702',
			channelURL: 'www.webcom.net/channel.html',
			status: true,
			cookie: true,
			xfbml: true
			});
	 
	 };
	 
	 (function(d,debug){
		 var js, id='facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		 if (d.getElementById(id)) {return;}
		 js = d.createElement('script'); 
		 js.id=id;
		 js.async=true;
		 js.src='content.facebook.net/en_US/all' + (debug ? '/debug' : "") + '.js';
		 ref.parentNode.insertBefore(js, ref);
	 } (document, /*debug*/ false));
	 
	 <?php
	 $cache_expire = 60*60*24*365;
	 header('Pragma: public');
	 header('Cache-Control: max-age=".$cache_expire') . 'EST');
	 
	 ?>
	// src='//connect.facebook.net/en_US/all.js'
 
 
 //////LOG IN//////
 
 FB.getLoginStatus(function(response){
	 if(response.status === 'connected') {
		 
		 //not authorized
		 login();
		 
		 }else if (response.status ==='not_authorized'){
			 function login(){
				 FB.login(function(response) {
					 if (response.authResponse) {
						 //connected
					 }else {
						 //cancelled
						 }
				 	});
				 };
				 
		 } else {
		 	}
 });
 
 //GRAPH API//
 
 FB.api('/me' , function(response) {
	 alert('Welcome ' + response.name);
 });
 
 
 /////////////Dialog///////////////
 
 FB.ui(
 	{
		method: 'feed',
		name: ' Night Out',
		caption: 'No need to party alone',
		description: ('An app for sharing with your friends where you are at and what kind of entertainment you are looking for')},
	function(response) {
		if (response && response.post_id) {
			alert('Post was published.');
		} else {
			alert('Post Was Not Published.');
		}});
		
		
	
	
 
});