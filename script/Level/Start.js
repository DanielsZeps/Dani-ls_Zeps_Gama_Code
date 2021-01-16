function gameStart()
{
	var temporaryText, directionFlag, arroeStyle, arrow, tip, directionElements, snake_1, snake_2, snake_3, clock;
	timer = 0;
  
	function _updateVariableText(element)
	{
		var correct = ["var", "_var", "var1", "_var1", "v4r"];
		var incorrect = ["#var1", "#1.var", "1var"];
		for (var x = 0; x < element.length; x++)
		{
			if (element[x][4] != "fake")
			{
				document.getElementById(element[x][5]).innerHTML = correct[ Math.floor(Math.random() * correct.length)]
			} else {
				document.getElementById(element[x][5]).innerHTML = incorrect[ Math.floor(Math.random() * incorrect.length)]
			}
		}
	}

	gameScean();
	temporaryText = document.createElement("span");
	temporaryText.id = "temporaryText";
	document.body.appendChild(temporaryText);
	
	renderElements();

	gameCharacter();
	document.addEventListener("keydown", controlsJumpCheck);
	document.addEventListener("keydown", gameKeyLogDown);
	document.addEventListener("keyup", gameKeyLogUp);

	renderPlatforms(backgrounfPlatforms_1, "backgroundGroundTile", "backgrounfPlatforms_1");
	renderPlatforms(backgrounfPlatforms_2, "backgroundStoneTile", "backgrounfPlatforms_2");
	renderPlatforms(backgrounfPlatforms_3, "backgroundBirchTile", "backgrounfPlatforms_3");

	renderPlatforms(platforms_01, "platformGrassTile", "platforms01");
	renderPlatforms(platforms_02, "platformGrassTile", "platforms02");
	renderPlatforms(platforms_03, "platformGrassTile", "platforms03");
	renderPlatforms(platforms_04, "platformVariable_1", "platforms04");
	_updateVariableText(platforms_04);
	renderPlatforms(platforms_05, "platformGrassTile", "platforms05");
	renderPlatforms(platforms_06, "platformVariable_1", "platforms06");
	_updateVariableText(platforms_06);
	renderPlatforms(platforms_07, "platformGrassTile", "platforms07");
	renderPlatforms(platforms_08, "platformGrassTile", "platforms08");
	renderPlatforms(platforms_09, "platformBlack", "platforms09");
	renderPlatforms(platformsDeath_1, "platformGrassTile", "platformsDeath_1");
	
	renderPlatforms(platformPartTwoBlack_1, "platformBlack", "platformPartTwoBlack_1");
	for (var x = 1; x < 11; x++)
	{
		document.getElementById("platformPartTwoBlack_1_" + x).style.opacity = 1 - (0.1 * (x + 1));
	}
	renderPlatforms(platformPartTwo_1, "platformGrassTile", "platformPartTwo_1");
	renderPlatforms(platformPartTwo_2, "platformGrassTile", "platformPartTwo_2");
	renderPlatforms(platformPartTwo_3, "platformGrassTile", "platformPartTwo_3");
	renderPlatforms(platformPartTwo_4, "platformGrassTile", "platformPartTwo_4");
	renderPlatforms(platformPartTwoBlack_2, "platformBlack", "platformPartTwoBlack_2");
	for (var x = 0; x < 10; x++)
	{
		document.getElementById("platformPartTwoBlack_2_" + x).style.opacity = 0.1 * (x + 1);
	}
	renderTextbox(textboxPartTwo_1, "tipText", "textboxPartTwo_1");
	
	renderPlatforms(platforms_10, "platformBlack", "platforms10");
	renderPlatforms(platforms_11, "platformStoneTile", "platforms11");
	renderPlatforms(platforms_12, "platformGrassTile", "platforms12");
	renderPlatforms(platforms_13, "platformSteelTileOpenable", "platforms13");
	renderPlatforms(platforms_14, "platformGroundTile", "platforms14");
	renderPlatforms(platforms_15, "platformSteelTileOpenable", "platforms15");
	renderPlatforms(platforms_16, "platformGroundTile", "platforms16");
	renderPlatforms(platforms_17, "platformBirchTile", "platforms17");
	renderPlatforms(platforms_18, "platformBirchTile", "platforms18");
	renderPlatforms(platforms_19, "platformBirchTile", "platforms19");
	renderPlatforms(platforms_20, "platformDarkgrey", "platforms20");
	
	renderPlatforms(printFunction_1, "enemySnake", "printFunction_1");
	enemySnakesInfo = [null, null, null]
	snake_1 = ["prom", "nost", "palaid"];
	snake_2 = ["prom_1", "nost_1", "palaid_1"];
	snake_3 = ["_prom", "_nost", "_palaid"];
	enemySnakesInfo[0] = snake_1[Math.floor(Math.random() * snake_1.length)];
	enemySnakesInfo[1] = snake_2[Math.floor(Math.random() * snake_1.length)];
	enemySnakesInfo[2] = snake_3[Math.floor(Math.random() * snake_1.length)];
	for (var x = 0; x < printFunction_1.length; x++)
	{
		renderText(["CLASS_textbox_1", "ID_" + printFunction_1[x][5] + (x + 1), enemySnakesInfo[x] + ""], printFunction_1[x][5]);
		document.getElementById(printFunction_1[x][5] + (x + 1)).style.marginTop = 300 * displayOfset;
		var y = document.getElementById(printFunction_1[x][5] + (x + 1)).getBoundingClientRect();
		document.getElementById(printFunction_1[x][5] + (x + 1)).style.marginLeft = (y.width - (40 * displayOfset)) * (-1) / 2;
		document.getElementById(printFunction_1[x][5] + (x + 1)).style.textAlign = "center";
		enemySnakesInfo[x] = [enemySnakesInfo[x] + "", printFunction_1[x][5]];
	}
	
	renderPlatforms(platforms_doors, "platformDoor","platformsDoors");
	renderPlatforms(platformsDeath_2, "platformsDeath_2", "platformsDeath_2");
	renderPlatforms(finalPlatform, "platformFinal", "finalPlatform")

	tip = document.getElementById("teachMovement");
	arroeStyle = [[-25, 50, 50, null], [-80, 50, 50, "rotate(-90deg)"], [30, 50, 50, "rotate(90deg)"]];
	for (var x = 0; x < arroeStyle.length; x++)
	{
		arrow = document.createElement("span");
		arrow.className = "arrowKey";
		arrow.style.marginLeft = arroeStyle[x][0] * displayOfset;
		arrow.style.height = arroeStyle[x][1] * displayOfset;
		arrow.style.width = arroeStyle[x][2] * displayOfset;
		arrow.style.transform = arroeStyle[x][3];
		tip.appendChild(arrow);
	}
	renderTextbox([[-100, 55, 200, ["Izmanto bultiņu taustiņus, lai pārvietotos"]]], "tipText", "teachMovement");
	for (var x = 0; x < platforms_04.length; x++)
	{
		if (platforms_04[x][4] != "fake")
		{
			var snake = document.createElement("span");
			snake.className = "miniSnake";
			document.getElementById(platforms_04[x][5]).appendChild(snake);
		}
	}
	for (var x = 0; x < 10; x++)
	{
		document.getElementById(platforms_09[x][5]).style.opacity = 0.1 * (x+1);
	}
	for (var x = 0; x < 10; x++)
	{
		document.getElementById(platforms_10[x][5]).style.opacity = (10 - x)/10;
	}
	for (var x = 0; x < functionPlatform_1.length; x++)
	{
		document.getElementById(functionPlatform_1[x][0]).innerHTML = functionPlatform_1[x][1];
		document.getElementById(functionPlatform_1[x][0]).style.outline = "red solid 2.5px";
		
	}
	for (var x = 0; x < functionPlatform_2.length; x++)
	{
		document.getElementById(functionPlatform_2[x][0]).innerHTML = functionPlatform_2[x][1];
		document.getElementById(functionPlatform_2[x][0]).style.outline = "red solid " + 2.5 * displayOfset + "px";
	}
	
	directionElements = [["platforms03_0", 30, 50, -30, 50, null], ["platforms02_7", 30, 50, 30, -40, "rotate(90deg)"], ["platforms08_1", 30, 50, 25, 20, "rotate(-180deg)"], ["platforms11_0", 30, 50, 25, -40, "rotate(90deg)"], ["printPart2", 30, 50, 25, -40, "rotate(90deg)"]];
	for (var x = 0; x < directionElements.length; x++)
	{
		var directionFlag = document.createElement("div");
		directionFlag.className = "directionFlag";
		directionFlag.style.width = directionElements[x][1] * displayOfset;
		directionFlag.style.height = directionElements[x][2] * displayOfset;
		directionFlag.style.marginLeft = directionElements[x][3] * displayOfset;
		directionFlag.style.marginTop = directionElements[x][4] * displayOfset;
		directionFlag.style.transform = directionElements[x][5];
		document.getElementById(directionElements[x][0]).appendChild(directionFlag);
	}
	
	/*
		Variables are cleared to reduce amount of global variables
		
		Mainīgie tiek notīrīti, lai samazinātu globālo mainīgo aizņemto vietu
	*/
	backgrounfPlatforms_1 = null;
	backgrounfPlatforms_2 = null;
	backgrounfPlatforms_3 = null;
	platforms_01 = null;
	platforms_02 = null;
	platforms_03 = null;
	platforms_04 = null;
	platforms_05 = null;
	platforms_06 = null;
	platforms_07 = null;
	platforms_08 = null;
	platforms_09 = null;
	platforms_10 = null;
	platforms_11 = null;
	platforms_12 = null;
	platforms_13 = null;
	platforms_14 = null;
	platforms_15 = null;
	platforms_16 = null;
	platforms_17 = null;
	platforms_18 = null;
	platforms_19 = null;
	platforms_20 = null;
	finalPlatform = null;
	platforms_doors = null;
	platformsDeath_2 = null;

	function game()
	{
		controlsGravity();
		controlsMoving();
		position();
	}
	gameMainInterval = setInterval(game, 25);
	renderBackground();
	backgroundInterval_1 = setInterval(updateBackground, 25);

	clock = document.createElement("span");
	clock.id = "chronometer";
	document.body.appendChild(clock);
	mainAudio.play();
}
function start()
{
	windowElements();
	windowBorders();
	windowUsername();
	gameButton();
	gameAudio();
	setInterval(gameChronometer, 100);
}
