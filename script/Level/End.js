function gameFinish()
{
	timerActivate = false;
	var result, table, tr, td, caption, chronometer, hronometer, time, file, button;
	
	function errorCheckEventExists()
	{
	if (!document.getElementById("mainGameButton").exists)
		{
			document.getElementById("mainGameButton").exists = true;
			document.getElementById("mainGameButton").addEventListener("click", function(){document.getElementById("resultFinal").remove();gameStart()});
		}
	}
	
	clearInterval(gameMainInterval);
	var player = document.getElementById("player");

	document.removeEventListener("keydown", controlsJumpCheck);
	document.removeEventListener("keydown", gameKeyLogDown);
	document.removeEventListener("keyup", gameKeyLogUp);
	document.getElementById("miniCommandPromt").remove();
	if (document.getElementById("scean"))
	{
		X = document.getElementById("scean");
		X.remove()
	}
	
	player.style.display = "none";
	player.faileCounter = document.getElementById("player").faileCounter;
	player.timer = timer;
	document.cookie = "timer="+player.timer;
	document.cookie = "failCounter="+player.faileCounter;
	
	result = document.createElement("span");
	result.id = "resultFinal";
	table = document.createElement("table");
	tr = document.createElement("tr");
	
	td = document.createElement("td");
	td.style.fontSize = 30 * displayOfset;
	chronometer = document.createElement("div");
	time = (Math.floor(player.timer / 10 / 60 / 60) % 60) + ":" + (Math.floor(player.timer / 10 / 60) % 60) + ":" + (Math.floor(player.timer / 10) % 60) + ":" + (player.timer % 10) + "0";
	chronometer.appendChild(document.createTextNode("Spēles ilgums: " + time));
	file = document.createElement("div");
	file.appendChild(document.createTextNode( "Tu kļūdījies (reizi/-es): " + player.faileCounter))
	
	td.appendChild(chronometer);
	td.appendChild(file);
	tr.appendChild(td);
	table.appendChild(tr);
	
	button = document.createElement("button");
	button.id = "mainGameButton"
	button.appendChild(document.createTextNode("Spēlēt atkal"));
	button.style.marginLeft = 30 * displayOfset;
	button.style.marginTop = 15 * displayOfset;
	button.style.position = "static";
	td.appendChild(button);

	result.appendChild(table);
	
	td = document.createElement("td");
	tr.appendChild(td);
	table = document.createElement("table");
	table.id = "Player_Scores";
	caption = document.createElement("caption");
	text = document.createTextNode("Rezultāts");
	caption.appendChild(text);
	table.appendChild(caption);
	tr = document.createElement("tr");
	var columnTitle = ["Vieta", "Vārds", "Kļūdas", "Laiks"];
	for (var x = 0; x < columnTitle.length; x++)
	{
		var cell = document.createElement("td");
		var text = document.createTextNode("Vieta");
		cell.appendChild(text);
		tr.appendChild(cell);
	}
	table.appendChild(tr);

	for (var x = 0; x < playerScores.length; x++)
	{
		tr = document.createElement("tr");
		cell = document.createElement("td");
		text = document.createTextNode((x+1) + ".");
		cell.appendChild(text);
		tr.appendChild(cell);
		for (var y = 0; y < 3; y++)
		{
			cell = document.createElement("td");
			text = document.createTextNode(playerScores[x][y]);
			cell.appendChild(text);
			tr.appendChild(cell);
		}
		table.appendChild(tr);
	}
	td.appendChild(table);

	document.body.appendChild(result);
	setTimeout(errorCheckEventExists, 1000);
	setTimeout(errorCheckEventExists, 5000);
	setTimeout(errorCheckEventExists, 10000);

	document.getElementById("resultFinal").style.marginLeft = 450 * displayOfset - (document.getElementById("resultFinal").getBoundingClientRect().width / 2);
	document.getElementById("resultFinal").style.marginTop = 289 * displayOfset - (document.getElementById("resultFinal").getBoundingClientRect().height / 2);
	try
	{
		document.getElementById("chronometer").remove();
		document.getElementById("temporaryText").remove();
		document.getElementById("player").remove()
	} catch {}

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function ()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			document.body.innerHTML += this.responseText;
		}
	}
	xmlhttp.open("POST", "../Submit_Score.php", true);
	xmlhttp.send();
}
