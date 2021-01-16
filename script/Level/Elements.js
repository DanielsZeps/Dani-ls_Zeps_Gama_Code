function updateBackground()
{
	var scean = document.getElementById("scean");
	var layer_1 = document.getElementById("layerHolder_1");
	var layer_2 = document.getElementById("layerHolder_2");
	var layer_3 = document.getElementById("layerHolder_3");
	var background = document.getElementById("background");
	
	
	var positionDiferenceLeft = (scean.hiddenLeft - background.hiddenLeft) / 4;
	var positionDiferenceTop = (scean.hiddenTop - background.hiddenTop) / 4;
	
	layer_1.style.marginLeft = (positionDiferenceLeft / 0.5) * displayOfset;
	layer_2.style.marginLeft = (positionDiferenceLeft / 1) * displayOfset;
	layer_3.style.marginLeft = (positionDiferenceLeft / 1.5) * displayOfset;
	
	layer_1.style.marginTop = (positionDiferenceTop / 0.5) * displayOfset;
	layer_2.style.marginTop = (positionDiferenceTop / 1) * displayOfset;
	layer_3.style.marginTop = (positionDiferenceTop / 1.5) * displayOfset;
}
function renderBackground()
{
	var backgroundHolder, layer_Holder, layer;
	backgroundHolder = document.createElement("div");
	backgroundHolder.id = "background"
	backgroundHolder.style.position = "absolute";
	
	backgroundHolder.hiddenLeft = document.getElementById("scean").hiddenLeft;
	backgroundHolder.hiddenTop = document.getElementById("scean").hiddenTop;
	
	for (var x = 1; x < 4; x++)
	{
		layer_Holder = document.createElement("div");
		layer_Holder.style.position = "absolute";
		layer_Holder.id = "layerHolder_"+x;
		layer = document.createElement("span");
		layer.id = "backgroundLayer_" + x;
		layer_Holder.appendChild(layer);
		backgroundHolder.appendChild(layer_Holder);
	}
	
	document.body.appendChild(backgroundHolder);
	backgroundHolder.style.marginLeft = (document.getElementById("scean").hiddenLeft + 200) * displayOfset;
	backgroundHolder.style.marginTop = (document.getElementById("scean").hiddenTop + 100) * displayOfset;
}
/*
	The function does not contain predefined variables, because all of them are global
	
	Funkcijā nav iepriekš definētu mainīgo, jo tie visi ir globāli
*/
function renderElements()
{
	heldKeyList = [];
	gameTick = 25;

	playerLocation = null;

	backgrounfPlatforms_1 = [[-500, 475, 375, 1475, "fake"], [975, 305, 545, 1300, "fake"], [2250, 165, 685, 150, "fake"], [2400, 110, 740, 4150, "fake"], [6700, -150, 1000, 1500, "fake"]];
	backgrounfPlatforms_2 = [[-200, 850, 2200, 7000, "fake"], [6800, 1800, 1250, 400, "fake"]];
	backgrounfPlatforms_3 = [[6400, 550, 2500, 4600, "fake"], [11000, 1350, 2500, 1500, "fake"]];

	platforms_01 = [[-500, 450, 25, 1450], [200, 200, 250, 25, null, null, "none"],[600, 200, 0, 0, "fake", "teachMovement"]];
	platforms_02 = [[950, 300, 25, 300], [1300, 290, 25, 100], [1450, 280, 25, 100], [1600, 290, 25, 100], [1750, 300, 25, 100], [2100, 290, 25, 100], [2250, 160, 25, 100], [2400, 100, 25, 50], [2450, 100, 25, 300, null, "variableSignOne"], [2750, 100, 25, 50]];
	platforms_03 = [[950, 300, 175, 25]];
	platforms_04 = [];
	for (var x = 0; x < 10; x++)
	{
		var platform = [2850 + (75 * (x)), 100, 25, 70, "fake", "variableStage_1_" + x];
		platforms_04.push(platform);
	}
	for (var x = 0; x < 10; null)
	{
		var truePlatform = Math.floor( Math.random() * 3) + 1;
		x += truePlatform;
		if (x >= 10)
		{
			break;
		}
		platforms_04[x-1][4] = null;
	}
	platforms_05 = [[3600, 100, 25, 400]];
	platforms_06 = [];
	for (var x = 0; x < 22; x++)
	{
		var platform = [4020 + (105 * x), 100, 25, 90, "fake", "variableStage_2_" + x];
		platforms_06.push(platform);
	}
	for (var x = 0; x < 22; null)
	{
		var truePlatform = Math.floor( Math.random() * 3) + 1;
		x += truePlatform;
		if (x >= 22)
		{
			break;
		}
		platforms_06[x-1][4] = null;
	}
	platforms_07 = [[6300, 100, 25, 250]];
	platforms_08 = [[6700, -150, 1000, 25], [6525, 100, 800, 25]];
	platforms_09 = [];
	for (var x = 0; x < 9; x++)
	{
		platforms_09.push([6550, 200 + (10 * x), 10, 150, "fake", "opacityPlatform_1_"+x]);
	}
	platforms_09.push([6550, 290, 560, 150, "fake", "opacityPlatform_1_9"]);
	platforms_09.push([6550, 500, 200, 150, null, "opacityTeleport_1", "none"]);
	platformsDeath_1 = [[-250, 600, 25, 2950, null, "levelPart_1_1", "none", "red"], [2700, 600, 25, 1110, null, "levelPart_1_2", "none", "orange"], [3810, 600, 25, 2715, null, "levelPart_1_3", "none", "yellow"]];

	
	platformPartTwoBlack_1 = [[200, -2650, 450, 500, "fake"]];
	for (var x = 0; x < 10; x++)
	{
		platformPartTwoBlack_1.push([200, -2200 + (10 * x), 10, 500, "fake"]);
	}
	platformPartTwo_1 = [[-1800, -2650, 550, 2000], [700, -2650, 550, 200], [-500, -1800, 25, 1500], [1000, -2300, 350, 25, null, "temepWall"], [300, -2600, 800, 25, null, null, "none"], [1000, -1950, 175, 25], [1025, -1950, 25, 275, null, "variableValueText_1"], [1300, -1950, 25, 100, null, "variableValue_1", null, "yellow"], [1400, -1950, 25, 200], [1480, -2550, 300, 115]];
	platformPartTwo_2 = [[1600, -1950, 25, 300, null, "variableValueCloseDoor_1"], [1900, -1950, 25, 100, null, "variableValue_2", null, "yellow"], [2000, -1950, 25, 200], [2080, -2550, 300, 115]];
	platformPartTwo_3 = [[2200, -1950, 25, 300, null, "variableValueCloseDoor_2"], [2500, -1950, 25, 100, null, "variableValue_3", null, "yellow"], [2600, -1950, 25, 200], [2680, -2550, 300, 620]];
	platformPartTwo_4 = [[2800, -1950, 25, 500], [3300, -1950, 25, 200, null, "toCave", null, "red"], [3500, -1950, 25, 1500], [3050, -2850, 700, 2000]];
	platformPartTwoBlack_2 = [];
	for (var x = 0; x < 10; x++)
	{
		platformPartTwoBlack_2.push([3150 + (10 * x), -2150, 225, 10, "fake"]);
	}
	platformPartTwoBlack_2.push([3250, -2150, 225, 1500, "fake"]);
	
	textboxPartTwo_1 = [];
	partTwoDoorCode = [];
	for (var x = 1; x < 4; x++)
	{
		if (x != 1)
		{
			var y = 10 + (Math.floor(Math.random() * 20) - 10);
		} else
		{
			y = 10;
		}
		partTwoDoorCode.push(y);
		textboxPartTwo_1.push([-50, -200, 200, [y + ""], null, "variableValue_"+x]);
	}


	platforms_10 = [];
	platforms_10.push([500, 850, 360, 350, "fake", "opacityPlatform_2_0"]);
	for (var x = 1; x < 10; x++)
	{
		platforms_10.push([500, 1200 + (10 * x), 10, 350, "fake", "opacityPlatform_2_"+x]);
	}
	platforms_11 = [[400, 1600, 25, 550], [475, 850, 500, 25], [850, 850, 500, 25], [1150, 850, 575, 400]];
	platforms_12 = [[925, 1625, 25, 525, null, null, null, "url(\"images/Forground/Stone_Tile.png\")"], [1400, 1625, 25, 300, null, "Close_Door", null, "url(\"images/Forground/Steel_Tile.png\")"]];
	platforms_13 = [[1750, 1650, 25, 330, "fake", "print_1_Platform_1"], [2180, 1675, 25, 330], [2610, 1650, 25, 330, "fake", "print_1_Platform_2"], [3040, 1625, 25, 330], [3470, 1650, 25, 430, "fake", "print_1_Platform_3"]];
	functionPlatform_1 = [["print_1_Platform_1", "1"], ["print_1_Platform_2", "2"], ["print_1_Platform_3", "3"]];
	platforms_14 = [[4000, 1675, 25, 500, null, "printPart2"]];
	
	platforms_15 = [[4650, 1600, 25, 150, "fake", "print_2_Platform_1"], [4950, 1600, 25, 150, "fake", "print_2_Platform_2"], [5140, 1600, 25, 400, null, "print_2_Platform_3"], [5650, 1650, 25, 250, null, "print_2_Platform_4"], [6050, 1750, 25, 300, null, "print_2_Platform_5"]];
	functionPlatform_2 = [["print_2_Platform_1", "Test_1"], ["print_2_Platform_2", "Test_2"], ["print_2_Platform_4", "Test_4"]];
	for (var x = 0; x < functionPlatform_2.length; null)
	{
		var number = Math.floor(Math.random() * 999990) + 10;
		for (var y = 0; y < functionPlatform_2.length; y++)
		{
			if (functionPlatform_2[y][1] == number)
			{
				break;
			}
		}
		if (y == functionPlatform_2.length)
		{
			functionPlatform_2[x][1] = number;
			x++;
		}
	}
	platforms_16 = [[6600, 1000, 500, 600], [6000, 800, 500, 600], [6500, 1800, 25, 350, null, "Door_Open_2"]];
	platforms_17 = [[6850, 1800, 25, 500, null, "Door_Close_2"], [7500, 1820, 25, 400], [8050, 1835, 25, 300], [8500, 1850, 25, 1500]];
	printFunction_1 = [[7750, 1420, 400, 60, null, "enemySnake_1"], [8200, 1435, 400, 60, null, "enemySnake_2"], [8900, 1450, 400, 60, null, "enemySnake_3"]];
	platforms_18 = [];
	for (var x = 0; x < 5; x++)
	{
		platforms_18.push([10000 + (100 * x), 1850 - (100 * x), 25, 100, null, "Preperation_Platform_"+x]);
	}
	for (var x = 0; x < 5; x++)
	{
		platforms_18.push([10100 + (100 * x), 1850 - (100 * (x + 1)), 125, 25]);
	}
	
	
	
	platforms_19 = [[10500, 1350, 25, 500, null, "ChamberBeforePlatform"], [10875, 500, 600, 200], [12000, 1350, 25, 500], [11925, 500, 600, 200]];
	platforms_20 = [[11000, 1350, 25, 1000, null, "Chambar_State1", null, "darkgreen"]];
	
	platformsDeath_2 = [[0, 1700, 25, 550, null, "levelPart_2_1", "none", "red"], [1600, 1800, 25, 2650, null, "levelPart_2_2", "none", "orange"], [4050, 1800, 25, 1900, null, "levelPart_2_3", "none", "yellow"], [5550, 2150, 25, 1800, null, "levelPart_2_4", "none", "lime"], [3500, 2600, 25, 2300, null, "levelPart_2_5", "none", "green"], [6700, 2000, 25, 4500, null, "levelPart_2_6", "none", "cyan"]];
	platforms_doors = [[1400, 1425, 200, 50, null, "door_1"], [6800, 1500, 300, 50, null, "door_2"], [1500, -2250, 300, 75, null, "door_3"], [2100, -2250, 300, 75, null, "door_4"], [2700, -2250, 300, 75, null, "door_5"]];
	finalPlatform = [[12450, 1300, 25, 350, null, "gameFinal"]];
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function ()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			thisResponse = this.responseText;
			thisResponse = thisResponse.split(/\r\n|\n|\r/);
			playerScores = [];
			for (var x = 0; x < 15; x++)
			{
				playerScores.push(thisResponse[x].split(","));
			}
		}
	}
	xmlhttp.open("POST", "../users/GlobalScore.txt", true);
	xmlhttp.send();
}