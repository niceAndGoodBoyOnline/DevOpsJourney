function flexThis(itemToFlex){
	
	let style = getComputedStyle(itemToFlex);
	let thisDesc = document.getElementById(itemToFlex.id + 'Desc');
	
	if (parseInt(style.flex.substring(0,2)) > 1){
		thisDesc.style.display = 'none';
		itemToFlex.style.flex = 1;
	}
	
	else{
		thisDesc.style.display = 'block';
		itemToFlex.style.flex = 13;
	}
}

let contentForNav = {
	
	overview:'<div class="textContent" onclick="closeNav()">Prior to starting the program I received advice from [redacted until permission received] to learn about DevOps on my own time.' 
	+'<br><br>In addition I am stearing my education at BCIT towards endevors that will improve my DevOps/SRE knowledge whenever possible.</div>',
	
	fall19:'Level 1:'
	
	+ '<div class="container">'
	
	+ '<div class="gallery-wrap">'
	
    + '<button class="item item-1" id="1420" onclick="flexThis(this)">	<span><h2>1420</h2>	</span>	<p id="1420Desc">An excellent primary with all topics relevent to my journey! It\'s not possible to cover every aspect of Systems Administration in 15 weeks, but every assignment and lecture contained key information. The instructor stressed that </p>	</button>'
	
    + '<button class="item item-2" id="1515" onclick="flexThis(this)">	<span><h2>1515</h2></span>	<p id="1515Desc">text</p></button>'
	
    + '<button class="item item-3" id="1630" onclick="flexThis(this)">	<span><h2>1630</h2></span>	<p id="1630Desc"></p></button>'
	
    + '<button class="item item-4" id="1620" onclick="flexThis(this)">	<span><h2>1620</h2><span>	<p id="1620Desc"></p></button>'
	
    + '<button class="item item-5" id="1310" onclick="flexThis(this)">	<span><h2>1310</h2></span>	<p id="1310Desc">The highlight of this course was the 90 minutes we spent discussing BigO notation! The rest of the material shed light on how computers operate on the metal and some fundamental algorithmic insights.</p></button>'
	
	+ '<button class="item item-6" id="1100" onclick="flexThis(this)">	<span><h2>1100</h2></span>	<p id="1100Desc">Somewhat difficult to parse the value of this course beyond additional experience working in teams. The majority of the material is aimed at business students who want to manage people. Did not align with DevOps or Agile principals which I regularly insistent were relavent and perhaps more important in the context of the CIT program as a whole.</p></button>'
	
    + '<button class="item item-7" id="1116" onclick="flexThis(this)">	<span><h2>1116</h2></span>	<p id="1116Desc"></p></button>' + 	'</div></div>',
	
	winterBreak:'Personal Projects Winter 2019:<br>'
	
	+ '<div class="container">'
	
	+ '<div class="gallery-wrap">'
	
    + '<button class="item item-1" id="doj" onclick="flexThis(this)">	<span><h2>DevOps Journal</h2></span>	<p id="dojDesc">Built this webpage to keep track of the process of becoming excellent at the things I do.</p>	</button>'
	
    + '<button class="item item-2" id="quikLabs" onclick="flexThis(this)">	<span><h2>QuikLabs DevOps</h2></span>	<p id="quikLabsDesc"></p></button>'
	
    + '<button class="item item-3" id="DogPetterPro" onclick="flexThis(this)">	<span><h2>DogPetterPro</h2></span>	<p id="DogPetterProDesc">Revisiting Dog Petter to force landscape, improve responsiveness, and optimize for web.</p></button>'
	
	+ '<button class="item item-4" id="dualBoot" onclick="flexThis(this)">	<span><h2>Dual Boot Hackintosh/Linux</h2></span>	<p id="dualBootDesc">text</p></button>',
	winter20:'Level 2',
	summerBreak:'Futre Event',
	}
	
let navContent = document.getElementById('navContent');

$(document).ready(function() {
	$("h1").connections({ to: "div:first", class: "first" });
	$("div.overview").connections({to: "div.fall19", class: "first"});
	$("div.overview").connections({to: "div.personal"});
	
	$("div.fall19").connections({to: "div.fall19prj"});
	$("div.fall19").connections({to: "div.winterBreak"});
	
	$("div.winterBreak").connections({to: "div.winterBreakprj"});
	
	$("div.winterBreak").connections({to: "div.winter20"});
	$("div.winter20").connections({to: "div.winter20prj"});
	
	$("div.winter20").connections({to: "div.summerBreak"});
	
	$("connection:odd").addClass("odd");


	let connections = $("connection, inner");
	setInterval(function() {
	  connections.connections("update");
	}, 100);
});

let lastReference = 'none';
function manageNav(reference) {
	
	if (lastReference != reference){
		document.getElementById("contentSideNav").style.width = "100vw";
		navContent.innerHTML = contentForNav[reference];
		lastReference = reference;
	}
	else{
		closeNav()
	}

	
}


function closeNav() {
	document.getElementById("contentSideNav").style.width = "0vw";
	lastReference = 'none';
}