// JavaScript Document
//bouton play/pause

/*function test(){
	playPause('audio','playPause');
}*/
function init(){
	//alert("init");
	var btn1 = document.getElementById("playPause");
	var btn2 = document.getElementById("next");
	var btn3 = document.getElementById("previous");
	var slider = document.getElementById("volume_slider");
	var btn4 = document.getElementById("mute");
	if(btn1.addEventListener){/*alert("ok");*/}
	else{alert("not ok");}
	btn1.addEventListener('click',playPause,true);
	btn2.addEventListener('click',next,true);
	btn3.addEventListener('click',previous,true);
	slider.addEventListener('change',vol_change,true);
	btn4.addEventListener('click',mute,true);
	//alert('init2');
}
function mute(){
	var player = document.getElementById('audio');
	var btn_mute = document.getElementById('mute');
	if(player.volume!=0){
		player.volume = 0;
		btn_mute.removeAttribute('class');
		btn_mute.setAttribute('class','navButton small_muted');
	}
	else{
		btn_mute.removeAttribute('class');
		btn_mute.setAttribute('class','navButton small');
		var cursor = document.getElementById('volume_slider');
		player.volume = cursor.value/100;
	}
}
function vol_change(){
	var player = document.getElementById('audio');
	var cursor = document.getElementById('volume_slider');
	var btn_mute = document.getElementById('mute');
	player.volume = cursor.value/100;
	btn_mute.removeAttribute('class');
	btn_mute.setAttribute('class','navButton small');
}
function playPause(playerID,buttonID){
	var player = document.getElementById('audio');
	var button = document.getElementById('playPause');
	if(player.paused)
	{
		player.play();
	}
	else
	{
		player.pause();
	}
}
//bouton next
function next(){
	var selected = document.getElementsByClassName('selected');
	var oldIndex = selected[0].rowIndex;
	var tableau = document.getElementById('playlist');
	var adresseMorceau = tableau.rows[oldIndex+1].children[1].textContent;
	var intituleMorceau =tableau.rows[oldIndex+1].children[0].textContent;
	clickPlaylist(tableau.rows[oldIndex+1],adresseMorceau,intituleMorceau);
}
//bouton previous
function previous(){
	var selected = document.getElementsByClassName('selected');
	var oldIndex = selected[0].rowIndex;
	var tableau = document.getElementById('playlist');
	if(oldIndex!=0){
		var adresseMorceau = tableau.rows[oldIndex-1].children[1].textContent;
		var intituleMorceau =tableau.rows[oldIndex-1].children[0].textContent;
		clickPlaylist(tableau.rows[oldIndex-1],adresseMorceau,intituleMorceau);
	}
}
//click playlist
function clickPlaylist(sender,senderID,title){
	var player = document.getElementById('audio');
	player.pause();
	player.load();
	player.src = senderID;
	player.play();
	var display = document.getElementById('display');
	display.setAttribute('value',title);
	var supp = document.getElementsByClassName('selected');
	if(supp[0])
	{
		supp[0].removeAttribute('class');
	}
	sender.setAttribute('class','selected');
}