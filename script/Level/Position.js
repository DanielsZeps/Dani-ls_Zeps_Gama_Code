function updateUserPosition(horizontal, vertical)
{
	var scean = document.getElementById("scean");
	scean.hiddenLeft = horizontal;
	scean.hiddenTop = vertical;
	scean.style.marginLeft = horizontal * displayOfset;
	scean.style.marginTop = vertical * displayOfset;
}
function position()
{
	var tempId_2 = document.getElementById("tempId_2");
	
	try
	{
		var platformId = playerPlatform.id;
	} catch {}

	if (platformId == "ReturnToStart")
	{
		updateUserPosition(0, 0);
	} else if (platformId == "variableSignOne" && !playerPlatform.value)
	{
		playerPlatform.id = null;
		renderText(["CLASS_signOneStyle", "ID_tempText", "Mainīgie var saturēt:", "TAG_ul", "TAG_li", "butrus", "TAG_/li", "TAG_li", "zemsvītras", "TAG_/li", "TAG_li", "ciparus, ja tas nav pirmais", "TAG_/li", "TAG_/ul", "TAG_br", "TAG_/br", "Tas nevar saturēt simbolus"], "temporaryText");
		document.getElementById("tempText").style.fontSize = 13.5 * displayOfset;
	} else if (platformId == "platforms05_0")
	{
		playerPlatform.id = null;
		timerActivate = true;
	} else if (platformId == "opacityTeleport_1")
	{
		updateUserPosition(0, 2600);
		document.getElementById("temporaryText").innerHTML = null;
		try
		{
			clearInterval(backgroundInterval_1);
		} catch {}
		document.getElementById("layerHolder_1").innerHTML = null;
		document.getElementById("layerHolder_2").innerHTML = null;
		document.getElementById("layerHolder_3").innerHTML = null;
		document.getElementById("layerHolder_1").remove();
		document.getElementById("layerHolder_2").remove();
		document.getElementById("layerHolder_3").remove();
		playerPlatform = null;
		gameCommandPromt();
		renderText(["CLASS_signOneStyle", "ID_tempText", "Funkcijas un mainīgos var ievadīt \"vadības panelī\" uz tā nospiežot un rakstot (Labais, apakšējais stūris). To var iesniegt nospiežot \"Enter\"", "TAG_br", "TAG_/br", "Par funkcijām uzzināsiet tālāk"], "temporaryText");
		document.getElementById("tempText").style.fontSize = 18 * displayOfset;
		var x = function()
		{
			try {
				document.getElementById("variableValue_1").innerHTML;
				renderText(["CLASS_signOneStyle", "ID_tempId_2", "Vadības panelī ievadi durvjuId = 10"], "temporaryText");
				document.getElementById("tempId_2").style.fontSize = 16 * displayOfset;
				document.getElementById("tempId_2").style.marginLeft = 450 * displayOfset;
				document.getElementById("tempId_2").style.height = 40 * displayOfset;
			} catch {}
		}
		setTimeout(x, 15000);
		timerActivate = false;
	} else if (platformId == "toCave")
	{
		updateUserPosition(-180, -800);
		document.getElementById("temporaryText").innerHTML = null;
		try
		{
			clearInterval(backgroundInterval_1);
		} catch {}
		timerActivate = false;
		playerLocation = "door_1";
	} else if (platformId == "variableValueText_1")
	{
		playerPlatform.id = null;
		renderText(["CLASS_signOneStyle", "ID_tempId", "Piedēvē mainīgajam vērtību virs durvīm, kamēr stāvi uz dzeltenās platformas", "TAG_br", "TAG_/br", "TAG_br", "TAG_/br", "Piemēram: durvjuId = ", "TAG_u", "skaitlis", "TAG_/u"], "temporaryText");
		document.getElementById("tempId").style.fontSize = 18 * displayOfset;
	} else if (platformId == "variableValueCloseDoor_1")
	{
		playerPlatform.id = null;
		gameDoor(0, "Down", "door_3");
	} else if (platformId == "variableValueCloseDoor_2")
	{
		playerPlatform.id = null;
		gameDoor(0, "Down", "door_4");
	} else if (platformId == "Close_Door")
	{
		playerPlatform.id = null;
		gameDoor(0, "Down", "door_1");
		playerLocation = "print_1";
		document.getElementById("temporaryText").innerHTML = null;
		renderText(["CLASS_signOneStyle", "ID_tempText", "TAG_i", "TAG_u", "print ", "TAG_/u", "( ", "TAG_u", "vērtība", "TAG_/u", " )", "TAG_/i", "TAG_br", "TAG_/br", "vērtība - jebkurš teksts un skaitlis", "TAG_br", "TAG_/br", "TAG_br", "TAG_/br", "TAG_span", "ID_tempId", "Šajā gadījumā vērtība ir skaitlis uz platformas", "TAG_/span"], "temporaryText");
		document.getElementById("tempText").style.fontSize = 18 * displayOfset;
		document.getElementById("tempId").style.fontSize = 16 * displayOfset;
	} else if (platformId == "platforms12_0")
	{
		gameDoor(17, "Up", "door_1");
		playerPlatform.id = null;
	} else if (platformId == "printPart2")
	{
		timerActivate = true;
		playerLocation = "print_2";
	} else if (platformId == "Door_Open_2")
	{
		playerLocation = "print_2";
		document.getElementById("door_2").openable = true;
		if (!playerPlatform.value)
		{
		  playerPlatform.value = true;
		  gameDoor(27, "Up", "door_2");
		  document.getElementById("temporaryText").innerHTML = null;
		}
	} else if (platformId == "Door_Close_2")
	{
		playerPlatform.id = null;
		timerActivate = false;
		document.getElementById("door_2").openable = false;
		playerLocation = "printStage";
		gameDoor(0, "Down", "door_2");
		
		renderText(["CLASS_signOneStyle", "ID_tempId", "funkcija( ", "TAG_u", "TAG_i", "parametrs", "TAG_/i", "TAG_/u", " )", "TAG_br", "TAG_/br", "Funkcijas nosaukums = mainīgais", "TAG_br", "TAG_/br", "Funkciju var izsaukt tās nosaukumam pievienojot ()"], "temporaryText");
		document.getElementById("tempId").style.fontSize = 20 * displayOfset;
		document.getElementById("tempId").style.width = 320 * displayOfset;
		
		var x = function()
		{
			try
			{
				document.getElementById(enemySnakesInfo[0][1]).innerHTML;
				renderText(["CLASS_signOneStyle", "ID_tempId_2", "Ievadi tekstu (\"funkcijas nosaukumu\") uz čūskas, pievienojot tam ()", "TAG_br", "TAG_/br", "Piemēram, nost() vai prom_2()"], "temporaryText");
				document.getElementById("tempId_2").style.fontSize = 16 * displayOfset;
				document.getElementById("tempId_2").style.marginLeft = 450 * displayOfset;
				document.getElementById("tempId_2").style.height = 40 * displayOfset;
				
				document.getElementById(enemySnakesInfo[1][1]).value = true;
			} catch {}
		}
		setTimeout(x, 10000);
	} else if (platformId == "Chambar_State1")
	{
		try
		{
			document.getElementById("background").remove();
		} catch {}
		try
		{
			clearInterval(backgroundInterval_1);
		} catch {}
		setTimeout(renderBoss, 2000);
		playerPlatform.id = "Chambar_State2";
		renderPlatforms([[10950, 1100, 250, 50], [12000, 1100, 250, 50]] ,"platformDarkgrey" ,"bossDoors");
		playerLocation = "Chambar_State2";
	}  else if (platformId == "ChamberBeforePlatform")
	{
		try
		{
			document.getElementById("temporaryText").innerHTML = null;
		} catch {}
	}
	
	if (platformId != null)
	{
		if (platformId.slice(0, -1) == "Preperation_Platform_")
		{
			if (platformId == "Preperation_Platform_0" && !playerPlatform.elementValue)
			{
				document.getElementById("temporaryText").innerHTML = null;
				renderText(["CLASS_signOneStyle","Mainīais ir ID, kuru var izmantot, lai atrastu mainīgo"], "temporaryText");
			} else if (platformId == "Preperation_Platform_1" && !playerPlatform.elementValue)
			{
				document.getElementById("temporaryText").innerHTML = null;
				renderText(["CLASS_signOneStyle","Mainīgais var saturēt lielos un mazos burtus un zemsvītras"], "temporaryText");
			} else if (platformId == "Preperation_Platform_2" && !playerPlatform.elementValue)
			{
				document.getElementById("temporaryText").innerHTML = null;
				renderText(["CLASS_signOneStyle","Mainīgais var saturēt ciparus, ja tas nav pirmais"], "temporaryText");
			} else if (platformId == "Preperation_Platform_3" && !playerPlatform.elementValue)
			{
				document.getElementById("temporaryText").innerHTML = null;
				renderText(["CLASS_signOneStyle","print() var izmantot, lai izvadītu informāciju"], "temporaryText");
			} else if (platformId == "Preperation_Platform_4" && !playerPlatform.elementValue)
			{
				document.getElementById("temporaryText").innerHTML = null;
				renderText(["CLASS_signOneStyle","Teksts jāraksta starp \" \" vai \' \', skaitļi nav jāraksta pēdiņās"], "temporaryText");
			}
		}
	}
	if (platformId == "levelPart_1_1")
	{
		document.getElementById("player").faileCounter += 1;
		updateUserPosition(0, 0);
	} else if (platformId == "levelPart_1_2")
	{
		document.getElementById("player").faileCounter += 1;
		updateUserPosition(-2210, 250);
		try
		{
			document.getElementById("tempId_2").value;
		} catch
		{
			renderText(["CLASS_signOneStyle", "ID_tempId_2", "Lec uz platformām, kuru mainīgie nesākas ar ciparu vai nesatur simbolu (izņemot _ )"], "temporaryText");
			document.getElementById("tempId_2").style.fontSize = 20 * displayOfset;
			document.getElementById("tempId_2").style.marginLeft = 400 * displayOfset;
			document.getElementById("tempId_2").value = true;
		}
	} else if (platformId == "levelPart_1_3")
	{
		document.getElementById("player").faileCounter += 1;
		updateUserPosition(-3350, 290);
		document.getElementById("player").faileCounter += 1;
		try
		{
			document.getElementById("tempId_2").value;
		} catch
		{
			renderText(["CLASS_signOneStyle", "ID_tempId_2", "Lec uz platformām, kuru mainīgie nesākas ar ciparu vai nesatur simbolu (izņemot _ )"], "temporaryText");
			document.getElementById("tempId_2").style.fontSize = 20 * displayOfset;
			document.getElementById("tempId_2").style.marginLeft = 400 * displayOfset;
			document.getElementById("tempId_2").value = true;
		}
	} else if (platformId == "levelPart_2_1")
	{
		document.getElementById("player").faileCounter += 1;
		updateUserPosition(-180, -1150);
		playerLocation = "door_1";
	} else if (platformId == "levelPart_2_2")
	{
		document.getElementById("player").faileCounter += 1;
		updateUserPosition(-1100, -1250);
		if (!playerPlatform.value)
		{
			playerPlatform.value = true;
			renderText(["CLASS_signOneStyle", "ID_tempId_2", "TAG_span", "Lai aktivizētu platformas vadības panelī ievadi - ", "TAG_u", "print(1)", "TAG_/u", ", ", "TAG_u", "print(\'1\')", "TAG_/u", " vai ", "TAG_u", "print(\"1\")", "TAG_/u", "TAG_br", "TAG_/br", "Pievērs uzmanību platformas rāmim (zaļš = drošs)", "TAG_/span"], "temporaryText");
			document.getElementById("tempId_2").style.fontSize = 20 * displayOfset;
			document.getElementById("tempId_2").style.width = 450 * displayOfset;
			document.getElementById("tempId_2").style.marginLeft = 350 * displayOfset;
		}
	} else if (platformId == "levelPart_2_3" || platformId == "levelPart_2_4" || platformId == "levelPart_2_5")
	{
		document.getElementById("player").faileCounter += 1;
		updateUserPosition(-3750, -1250);
	} else if (platformId == "levelPart_2_6")
	{
		document.getElementById("player").faileCounter += 1;
		updateUserPosition(-6650, -1380);
	} else if (platformId == "gameFinal")
	{
		gameFinish();
	}
}
