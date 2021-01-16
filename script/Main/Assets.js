/*
	Because the testing was done on local PC without access to FTP and HTTP this is the solution that was used.
	In this case it is more effective, because the CSS, that is being rendered, doesn't take up much space.
	
	
	Tā kā testēšana tika veikta uz vietējā datora bez piekļuves FTP un HTTP, tika izmantots šis risinājums.
	Šajā gadījumā tas ir efektīvāks, jo renderētais CSS neaizņem daudz vietas.
*/
function windowRenderCssElements()
{
	var styleSheet = document.createElement("style");
	document.head.appendChild(styleSheet);
	styleSheet.sheet.insertRule("body{overflow: hidden;margin: 0;height: 100%;width: 100%;background-color: lightblue;font-size: " + 18 * displayOfset + "px;}");
	styleSheet.sheet.insertRule("#user{margin-left: " + 20 * displayOfset + "px;margin-top: " + 30 * displayOfset + "px;height: " + 40 * displayOfset + "px;width: " + 150 * displayOfset + "px;border-style: solid;border-color: blue;border-width: " + 5 * displayOfset + "px;color: darkblue;position: absolute;font-size: " + 30 * displayOfset + "px;text-align: center;vertical-align: middle;background-color: lightsteelblue;z-index: 101;}");
	styleSheet.sheet.insertRule("#user{margin-left: " + 20 * displayOfset + "px; margin-top: " + 30 * displayOfset + "px; height: " + 40 * displayOfset + "px; width: " + 150 * displayOfset + "px; border-style: solid; border-color: blue; border-width: " + 5 * displayOfset + "px; color: darkblue; position: absolute; font-size: " + 30 * displayOfset + "px; text-align: center; vertical-align: middle; background-color: lightsteelblue; z-index: 101;}");
	styleSheet.sheet.insertRule("#loginScreen{position: absolute;background-color: darkgrey;outline: solid darkgreen " + 3 * displayOfset + "px;font-weight: bold;padding: " + 10 * displayOfset + "px " + 25 * displayOfset + "px;font-size: " + 22 * displayOfset + "px;color: white;}");
}
windowRenderCssElements();
