let contentForNav = {
	overview:'Prior to starting the program I received advice from [redacted until permission received] to learn about DevOps on my own time. <br><br>In addition I am enhancing my education at BCIT by framing all my endevors as part of my journey into DevOps.',
	fall19:'Level 1<br>',
	winterBreak:'',
	winter20:'',
	summerBreak:'',
	}
	
let navContent = document.getElementById('navContent');

$(document).ready(function() {
	$("h1").connections({ to: "div:first", class: "first" });
	$("div.overview").connections({to: "div.fall19", class: "first"});
	$("div.overview").connections({to: "div.more"});
	
	$("div.fall19").connections({to: "div.fall19prj"});
	$("div.fall19").connections({to: "div.winterBreak"});
	
	$("div.winterBreak").connections({to: "div.winterBreakprj"});
	
	$("div.winterBreak").connections({to: "div.winter20"});
	$("div.winter20").connections({to: "div.winter20prj"});
	
	$("div.winter20").connections({to: "div.summerBreak"});
	
	$("connection:odd").addClass("odd");


	var connections = $("connection, inner");
	setInterval(function() {
	  connections.connections("update");
	}, 100);
});


function openNav(reference) {
  document.getElementById("contentSideNav").style.width = "90vw";
  navContent.innerHTML = contentForNav[reference];
}


function closeNav() {
  document.getElementById("contentSideNav").style.width = "0vw";
}