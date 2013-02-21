$(document).ready(function() {
 var id=377441435687702;
 
 window.fbAsyncInit = function (){
	 	FB.init({
			appID: id,
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
 
 ///////UPLOAD PICTURE TO PROFILE///////////////
 
 <?php
 $code = $_REQUEST['code'];
 //obtain acess token
 if(empty($code)){
	 $dialog_url='http://facebook.com/dialog/oauth?'
	 	."client_id=" . id,
		."&redirect_url=" . urlencode ($post_login_url),
		."&scope=publish_stream";
		echo('<script>top.location.href="'  $dialog_url  '"<script>');
		
		 }
		 else{
			 $token_url="https://graph.facebook.com/oauth/access_token?"
			 "client_id=" . id,
				."&redirect_url=" . urlencode ($post_login_url)
				."&code=" . code;
				$response = file_get_contents($token_url);
				$params = null;
				parse_str($response, $params);
				$access_token = $params['access_token'];
				
				$graph_url= 'https://graph.facebook.com/me/photos?'
				.'access_token=' .$acces_token;
				
				echo '<html><body>';
				echo '<form enctype="multipart/form-data" action"'
				.$graph_url.'method="POST">';
				echo 'Please choose a photo: ';
				echo '<input name="source" type="file"><br/><br/>';
				echo '<input type="submit" value="Upload"/><br/>';
				echo '</form>';
				echo '</body></html>';
			 }
	?>
 
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


		
///DELETE POST//////
<?php

	$facebook->api($post_url, 'DELETE', array('method'=> 'delete'));
	$this->fb_post_id=$postResult['id'];
	
?>
 
});