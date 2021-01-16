/*
	Functions are used to render elements on title screen
	
	Funkcijas tiek izmantoti lai ģenerētu elementus sākuma ekrānā
*/
function windowElements()
{
	var permenentElements = document.createElement("div");
	permenentElements.id = "permenentElements";
	document.body.appendChild(permenentElements);
	document.body.className = "Loding_Screen";
}
function windowBorders()
{
	var border, borderInfo, borderHolder, borderArray;
	window.scrollTo(0,0);
	/*
	borderInfo[0] = Width
	borderInfo[1] = Height
	borderInfo[2] = Left margin
	borderInfo[3] = Top margin
	borderInfo[4] = Id
	
	borderInfo[0] = Platums
	borderInfo[1] = Garums
	borderInfo[2] = Attālums no labās malas
	borderInfo[3] = Attālums no augšas
	borderInfo[4] = Id
	*/
	borderArray = [[20, 578, 0, 0, "Mala_1"], [1280, 20, 0, 0, "Mala_2"], [window.innerWidth * 5, window.innerHeight * 5, -10, 558, "Mala_3"], [window.innerWidth * 5, window.innerHeight * 5, 960, 0, "Mala_4"]];
	borderHolder = document.createElement("div");
	borderHolder.id = "borderHolder";
	for (var x = 0; x < borderArray.length; x++)
	{
		borderInfo = borderArray[x];
		border = document.createElement("border");
		border.style.width = borderInfo[0] * displayOfset;
		border.style.height = borderInfo[1] * displayOfset;
		border.style.marginLeft = borderInfo[2] * displayOfset;
		border.style.marginTop = borderInfo[3] * displayOfset;
		border.id = borderInfo[4];
		border.className = "borderElement";
		borderHolder.appendChild(border);
	}
	document.getElementById("permenentElements").appendChild(borderHolder);
}
function windowUsername()
{
	var user = document.createElement("span");
	user.id = "user";
	user.style.marginLeft = 65 * displayOfset;
	var text = document.createTextNode("Lietotājs");
	user.appendChild(text);
	document.getElementById("Mala_4").appendChild(user);
}
function windowLogin()
{
	var loginScreen = document.getElementById("loginScreen");
	loginScreen.style.marginLeft = 480 * displayOfset - (loginScreen.getBoundingClientRect().width / 2);
	loginScreen.style.marginTop = 279 * displayOfset - (loginScreen.getBoundingClientRect().height / 2);
}
