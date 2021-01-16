/*
	The function is used to find the difference between the screen of the device that was used in development and the user is a device.
	
	Funkcija tiek izmantota, lai atrastu atšķirību starp ierīces ekrānu, kas tika izmantots izstrādē un lietotāja izmantoto ekrānu.
*/
function windowDisplayOfset()
{
	var screenWidth, screenHeight, defaultScreenOfset;
	defaultScreenOfset = 2.2;
	screenWidth = window.innerWidth;
	screenHeight = window.innerHeight;
	defaultScreenOfset = screenHeight * defaultScreenOfset;
	if (defaultScreenOfset > screenWidth)
	{
		displayOfset = screenWidth/1280;
	} else if (defaultScreenOfset < screenWidth)
	{
		displayOfset = screenHeight/578;
	} else
	{
		displayOfset = screenHeight/578;
	}
}
windowDisplayOfset();
