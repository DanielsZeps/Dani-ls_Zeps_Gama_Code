/*
	Because the testing was done on local PC without access to FTP and HTTP this is the solution that was used.
	In this case it is more effective, because the CSS, that is being rendered, doesn't take up much space.
	
	
	Tā kā testēšana tika veikta uz vietējā datora bez piekļuves FTP un HTTP, tika izmantots šis risinājums.
	Šajā gadījumā tas ir efektīvāks, jo renderētais CSS neaizņem daudz vietas.
*/
function gameRenderCssElements()
{
	var styleSheet = document.createElement("style");
	document.head.appendChild(styleSheet);
	styleSheet.sheet.insertRule("#miniCommandPromt{position: absolute;z-index: 101;height: " + 30 * displayOfset + "px;width: " + 280 * displayOfset + "px;font-size: " + 25 * displayOfset + "px;}");
	styleSheet.sheet.insertRule("#temporaryText{position: fixed; width: 100%; height: 100%; z-index: 30}");
	styleSheet.sheet.insertRule(".miniCommandPromt{position: absolute;z-index: 101;font-size: " + 25 * displayOfset + "px; overflow: visible;margin-left: " + 10 * displayOfset +"px;margin-top: " + 500 * displayOfset + "px;}");
	styleSheet.sheet.insertRule(".textBoxTip{width: " + 300 * displayOfset + "px;height: " + 50 * displayOfset + "px;margin-left: " + 40 * displayOfset + "px;margin-top: " + 40 * displayOfset + "px;background-color: lightgrey;outline: solid black " + 5 * displayOfset + "px;text-align: center;position: fixed;font-size: " + 20 * displayOfset + "px;padding: " + 10 * displayOfset + "px;}");
	styleSheet.sheet.insertRule(".bossState1{width: " + 90 * displayOfset + "px;height: " + 90 * displayOfset + "px;position: absolute;background-image: url(\"../images/Forground/Boss_State_1.png\");text-align: center;color: white;font-size: " + 30 * displayOfset + "px;z-index: 50;background-size: contain;}");
	styleSheet.sheet.insertRule(".platformDarkgrey{background-color: grey;position: absolute;text-align: center;font-size: " + 20 * displayOfset + "px;color: white;z-index: 12;}");
	styleSheet.sheet.insertRule(".signOneStyle {background-image: url(\"../images/Forground/Sign_Style_One.png\");padding: " + 20 * displayOfset + "px;text-align: center;color: white;background-size: cover;font-size: " + 25 * displayOfset + "px;width: " + 260 * displayOfset + "px;height: " + 85 * displayOfset + "px;margin-left: " + 30 * displayOfset + "px;margin-top: " + 30 * displayOfset + "px; position: fixed; z-index: 15}");
	styleSheet.sheet.insertRule(".platformVariable_1{background-image: url(\"../images/Forground/Grass_Tile.png\");text-align: center;outline: black " + 1 * displayOfset + "px solid;color: white;font-size: " + 18 * displayOfset + "px;position: absolute;z-index: 11;}");
	styleSheet.sheet.insertRule("#backgroundLayer_1{background-image: url(\"../images/Background/Background_Layer1.png\");background-repeat: repeat-x;margin-left: " + -600 * displayOfset + ";margin-top: " + 350 * displayOfset + "px;position: absolute;height: " + 700 * displayOfset + "px;width: " + 3000 * displayOfset + "px;z-index: 5; overflow: visible}");
	styleSheet.sheet.insertRule("#backgroundLayer_2{background-image: url(\"../images/Background/Background_Layer2.png\");background-repeat: repeat-x;margin-top: " + 250 * displayOfset + "px;margin-left: " + -600 * displayOfset + ";position: absolute;height: " + 700 * displayOfset + "px;width: " + 3000 * displayOfset + "px;z-index: 4; overflow: visible}");
	styleSheet.sheet.insertRule("#backgroundLayer_3{background-image: url(\"../images/Background/Background_Layer3.png\");margin-left: " + -600 * displayOfset + ";background-repeat: repeat-x;position: absolute;height: " + 700 * displayOfset + "px;width: " + 3000 * displayOfset + "px;z-index: 3; overflow: visible}");
	styleSheet.sheet.insertRule(".miniSnake{background-image: url(\"../images/Forground/Python_2.png\");background-size: cover;position: absolute;margin-left: " + (-30 * displayOfset) + "px;margin-top: " + (-40 * displayOfset) + "px;z-index: 20;height: " + 40 * displayOfset + "px;width: " + 20 * displayOfset + "px;}");
	styleSheet.sheet.insertRule(".textbox_1{background-image: url(\"../images/Forground/Sign_Style_One.png\");position: absolute;padding: " + 5 * displayOfset + "px;color: white;font-size: " + 16 * displayOfset + "px;}");
	styleSheet.sheet.insertRule(".textbox_1{background-image: url(\"../images/Forground/Sign_Style_One.png\");position: absolute;padding: " + 5 * displayOfset + "px;color: white;font-size: " + 16 * displayOfset + "px;}");
	styleSheet.sheet.insertRule("#chronometer{margin-top: " + 22 * displayOfset + "px;position: fixed;font-size: " + 20 * displayOfset + "px;z-index: 40;background-color: lightgrey;padding: " + 5 * displayOfset + "px " + 15 * displayOfset + "px;outline: solid black " + 2 * displayOfset + "px;}");
	styleSheet.sheet.insertRule("#resultFinal{background-color: grey;color: white;font-size: " + 25 * displayOfset + "px;margin-top: " + 150 * displayOfset + "px; position: absolute; padding: " + 30 * displayOfset + "; outline: solid black " + 5 * displayOfset + "px}");
	styleSheet.sheet.insertRule(".platformDarkgrey{background-color: grey;position: absolute;text-align: center;font-size: 20px;color: white;z-index: 12;}");
	styleSheet.sheet.insertRule("#result{background-color: brown;color: white;font-size: 35px;margin-top: 200px;}");
	styleSheet.sheet.insertRule("#mainGameButton{background-color: darkgrey;outline: solid darkgreen " + 5 * displayOfset + "px;padding: " + 5 * displayOfset + "px " + 20 * displayOfset + "px;margin-top: " + 250 * displayOfset + "px;font-size: " + 40 * displayOfset + "px;position: absolute;letter-spacing: " + 0.7 * displayOfset + "px;font-weight: bold;}");
	styleSheet.sheet.insertRule("#Player_Scores tr td{border: solid black " + 1 * displayOfset + "px;font-size: " + 12 * displayOfset + "px;padding: 0px;}");
	styleSheet.sheet.insertRule("#backgroundLayer_2{background-image: url(\"../images/Background/Background_Layer2.png\");background-repeat: repeat-x;margin-top: " + 250 * displayOfset + "px;position: absolute;height: " + 300 * displayOfset + "px;width: " + 300 * displayOfset + "px;z-index: 4;}");
	styleSheet.sheet.insertRule("#backgroundLayer_3{background-image: url(\"../images/Background/Background_Layer3.png\");background-repeat: repeat-x;position: absolute;height: " + 300 * displayOfset + "px;width: " + 30 * displayOfset + "px;z-index: 3;}");
	styleSheet.sheet.insertRule("#gameStart{background-color: darkgrey;outline: solid darkgreen " + 5 * displayOfset + "px;padding: " + 5 * displayOfset + "px " + 20 * displayOfset + "px;margin-top: " + 250 * displayOfset + "px;font-size: " + 40 * displayOfset + "px;position: absolute;letter-spacing: " + 0.7 * displayOfset + "px;font-weight: bold;}");
	styleSheet.sheet.insertRule("#Player_Scores{border: solid black " + 2 * displayOfset + "px;background-color: black;margin-left: " + 20 * displayOfset + "px;color: white;}");
	styleSheet.sheet.insertRule("#Player_Scores tr td{border: solid black " + 1 * displayOfset + "px;font-size: " + 12 * displayOfset + "px;padding: " + 2 * displayOfset + "px " + 10 * displayOfset + "px;}");
	styleSheet.sheet.insertRule("#result{background-color: brown;color: white;font-size: " + 35 * displayOfset + "px;margin-top: " + 200 * displayOfset + "px;}");
}
gameRenderCssElements();
