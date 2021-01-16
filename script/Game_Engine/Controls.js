var playerPlatform;

/*
	All functions can be broken down into three parts.
	1. First part, which ends after the first for loop, defines all variables used in the function and finds all possible platforms the player can land on. (fake - platforms that cannot be landed on).
	2. Using if, else if and else statements the platform, that is closest to given side (controlsGravity - bottom, controlsJump - top, controlsMoving - left or right) is found.
	3. The movement is executed according to the position of closest platform.
	In order to minimize lag and variable transfer, the function uses indexes instead of HTML DOM elements.
	
	
	Visas funkcijas var sadalīt trīs daļās.
	1. Pirmā daļa, kas beidzas pēc pirmā for cikla, definē visus funkcijā izmantotos mainīgos un atrod visas iespējamās platformas, uz kurām spēlētājs var piezemēties. (fake - platformas, uz kurām nevar piezemēties).
	2. Izmantojot if, else if and else nosacījumus, tiek atrasta platforma, kas ir vistuvāk norādītajai pusei (controlsGravity - apakšā, controlsJump - augšā, controlsMoving - pa kreisi vai pa labi).
	3. Kustība tiek veikta atbilstoši tuvākās platformas stāvoklim.
	Lai samazinātu kavēšanos un mainīgu pārsūtīšanu., funkcija, HTML DOM elementu vietā, izmanto indeksus.
*/
function controlsGravity()
{
	var platforms, platformInfo, platformNumberList, scean, player, playerLeft, playerWidth, playerRight, playerTop, playerHeight, playerBottom, leftOfset, topOfset, platformLeft, platformRight, platformTop, fallingDistance, closestPlatform, gravityPull;
	platformNumberList = [];
	gravityPull = 1;
	player = document.getElementById("player");
	if ( player.direction == "Down" ){
		fallingSpeed = Number(player.fallingSpeed);
		playerLeft = player.hiddenLeft;
		playerWidth = player.hiddenWidth;
		playerRight = playerWidth + playerLeft;
		playerHeight = player.hiddenHeight;
		playerTop = player.hiddenTop;
		playerBottom = playerTop + playerHeight;
		platforms = document.getElementById("platforms");
		scean = document.getElementById("scean");
		leftOfset = scean.hiddenLeft;
		topOfset = scean.hiddenTop;
		platforms = platforms.getElementsByTagName("platform");
		
		var y = []
		for (var x = 0; x < platforms.length; x++)
		{
			if (platforms[x].hiddenState != "fake")
			{
				y.push(platforms[x]);
			}
		}
		platforms = y;

		for (var x = 0; x < platforms.length; x++)
		{
			platformInfo = platforms[x];
			platformLeft = platformInfo.hiddenLeft + leftOfset;
			platformRight = platformInfo.hiddenWidth;
			platformRight = platformRight + platformLeft;
			if (platformLeft < playerRight && platformRight > playerLeft){
				platformNumberList.push(x);
			}
		}
		var closestPlatform = null;
		for ( var x = 0 ; x < platformNumberList.length ; x++ ){
			platformInfo = platforms[platformNumberList[x]];
			platformTop = platformInfo.hiddenTop + topOfset;
			if ( playerBottom <= platformTop ){
				if ( closestPlatform == null ) {
					closestPlatform = platforms[platformNumberList[x]];
				}
				var platformTop_2;
				platformTop_2 = closestPlatform.hiddenTop + topOfset;
				if (platformTop_2>platformTop){
					closestPlatform = platforms[platformNumberList[x]];
				}
			}
		}
		
		if ( closestPlatform == null ){
			Ground_Under = "None";
		} else {displayOfset
			Ground_Under = "Solid";
		}
		if ( Ground_Under == "Solid" ){
			platformInfo = closestPlatform;
			platformTop = platformInfo.hiddenTop;
			platformTop += topOfset;
			if ( playerBottom < platformTop ){
				playerPlatform = null;
				fallingDistance = platformTop - playerBottom;
				if ( fallingDistance < (gravityPull * fallingSpeed) ){
					scean.hiddenTop = topOfset - (platformTop - playerBottom);
					scean.style.marginTop = scean.hiddenTop * displayOfset;
					player.jumpable = true;
					player.fallingSpeed = 0;
				} else {
					player.fallingSpeed = (fallingSpeed + 1);
					scean.hiddenTop = Number(topOfset) - (gravityPull * fallingSpeed);
					scean.style.marginTop = scean.hiddenTop * displayOfset;
					if (player.hiddenTop == platformTop ){
						player.fallingSpeed = 0;
					}
				}
			} else if ( playerBottom == platformTop ) {
				player.fallingSpeed = 0;
				playerPlatform = closestPlatform;
			}
		} else {
			player.fallingSpeed = (fallingSpeed + 1);
			scean.hiddenTop = topOfset - (gravityPull * fallingSpeed);
			scean.style.marginTop = scean.hiddenTop * displayOfset;
		}
	}
}
function controlsJump()
{
	var player, scean, jumpForce, platforms, platformInfo, platformIndexList, playerLeft, playerRight, playerTop, playerHeight, playerBottom, playerWidth, lowestPlatform, ofsetLeft, ofsetTop;
	platformIndexList = [];
	try
	{
		platforms = document.getElementById("platforms").getElementsByTagName("platform");
		player = document.getElementById("player");
		scean = document.getElementById("scean");
		
		ofsetLeft = scean.hiddenLeft;
		ofsetTop = scean.hiddenTop;
		
		playerLeft = player.hiddenLeft;
		playerWidth = player.hiddenWidth;
		playerRight = playerWidth + playerLeft;
		playerHeight = player.hiddenHeight;
		playerTop = player.hiddenTop;
		playerBottom = playerTop + playerHeight;
		
		jumpForce = player.jumpForce;
		if (jumpForce <= 0){
			player.jumpForce = 40;
			jumpForce = 40;
		}
		for (var x = 0; x < platforms.length; x++)
		{
			platformInfo = platforms[x];
			if (platformInfo.hiddenState!="fake")
			{
				platformLeft = platformInfo.hiddenLeft + ofsetLeft;
				platformRight = platformInfo.hiddenWidth + platformLeft;
				if (platformLeft < playerRight && platformRight > playerLeft)
				{
					platformIndexList.push(x);
				}
			}
		}
		var platformInfo1, platformInfo1Top, platformInfo1Height, platformInfo1Bottom, platformInfo2, platformInfo2Top, platformInfo2Height, platformInfo2Bottom;
		for (var x = 0; x < platformIndexList.length; x++)
		{
			platformInfo2 = platforms[platformIndexList[x]];
			platformInfo2Top = platformInfo2.hiddenTop + ofsetTop;
			platformInfo2Height = platformInfo2.hiddenHeight;
			platformInfo2Bottom = platformInfo2Top + platformInfo2Height;
			if ( lowestPlatform != null )
			{
				platformInfo1 = platforms[lowestPlatform];
				platformInfo1Top = platformInfo1.hiddenTop + ofsetTop;
				platformInfo1Height = platformInfo1.hiddenHeight;
				platformInfo1Bottom = platformInfo1Top + platformInfo1Height;
				if ((platformInfo2Bottom > platformInfo1Bottom) && ( platformInfo2Bottom < playerTop ))
				{
					lowestPlatform = platformIndexList[x];
				}
			} else if ((lowestPlatform == null) && (platformInfo2Bottom < playerTop))
			{
				lowestPlatform = platformIndexList[x];
			}
		}
		if ( lowestPlatform != null )
		{
			platformInfo1 = platforms[lowestPlatform];
			platformInfo1Top = platformInfo1.hiddenTop + ofsetTop;
			platformInfo1Height = platformInfo1.hiddenHeight;
			platformInfo1Bottom = platformInfo1Top + platformInfo1Height;
		}
		playerTop = player.hiddenTop;
		if (playerTop < (platformInfo1Bottom + jumpForce))
		{
			ofsetTop += (playerTop - platformInfo1Bottom);
			scean.hiddenTop = ofsetTop;
			scean.style.marginTop = scean.hiddenTop * displayOfset;
			jumpForce = 0;
			player.jumpForce = jumpForce;
		} else
		{
			ofsetTop += jumpForce;
			scean.hiddenTop = ofsetTop;
			scean.style.marginTop = scean.hiddenTop * displayOfset;
			jumpForce = Number(jumpForce) - 4;
			player.jumpForce = jumpForce;
		}
		if (jumpForce > 0)
		{
			player.direction = "Up";
			setTimeout(controlsJump, gameTick);
		} else
		{
			player.direction = "Down";
			player.jumpable = false;
		}
	} catch {}
}
function controlsJumpCheck()
{
	var keyCode, direction, fallingSpeed, player;
	player = document.getElementById("player");
	try {
		keyCode = event.keyCode;
	} catch {}
	if (keyCode == 38)
	{
		direction = player.direction;
		fallingSpeed = player.fallingSpeed;
		if (direction == "Down" && fallingSpeed == 0)
		{
			if (heldKeyList[38] == false)
			{
			} else
			{
				controlsJump();
			}
		}
	} else if (heldKeyList[32] && event.ctrlKey)
	{
		gameCommandPromt();
	}
}
function controlsMoving()
{
	var platformIndexList, player, scean, platforms, speed, moveable, Can_Move_2, ofsetLeft, ofsetTop, playerLeft, playerRight, playerTop, playerHeight, playerBottom, playerWidth, platformInfo;
	moveable = true;
	player = document.getElementById("player");
	scean = document.getElementById("scean");
	speed = 10;
	platforms = document.getElementById("platforms");
	platforms = platforms.getElementsByTagName("platform");
	
	ofsetLeft = scean.hiddenLeft;
	ofsetTop = scean.hiddenTop;
	platformIndexList = [];
	
	playerLeft = player.hiddenLeft;
	playerWidth = player.hiddenWidth;
	playerRight = playerWidth + playerLeft;
	playerHeight = player.hiddenHeight;
	playerTop = player.hiddenTop;
	playerBottom = playerTop + playerHeight;
	
	function movingSide(_side)
	{
		var platformInfo;
		playerBottom = playerTop + playerHeight;
		var platformTop, platformBottom;
		for (var x = 0; x < platforms.length; x++)
		{
			platformInfo = platforms[x];
			if (platformInfo.hiddenState != "fake")
			{
				platformTop = platformInfo.hiddenTop + ofsetTop;
				platformBottom = platformInfo.hiddenHeight + platformTop;
				if (platformTop < playerBottom && platformBottom > playerTop)
				{
					platformIndexList.push(x);
				}
			}
		}
		var platformLeft, platformWidth, platformRight;
		if (_side == "Left")
		{
			for (var x = 0; x < platformIndexList.length; x++)
			{
				platformInfo = platforms[platformIndexList[x]];
				platformLeft = platformInfo.hiddenLeft + ofsetLeft;
				platformWidth = platformInfo.hiddenWidth;
				platformRight = platformLeft + platformWidth;
				if (platformLeft < (playerRight + speed) && !(platformRight <= playerLeft))
				{
					moveable = false;
					platformMovingSide = platformLeft;
				}
			}
		} else if (_side == "Right")
		{
			for (var x = 0; x < platformIndexList.length; x++)
			{
				platformInfo = platforms[platformIndexList[x]];
				platformLeft = platformInfo.hiddenLeft + ofsetLeft;
				platformWidth = platformInfo.hiddenWidth;
				platformRight = platformLeft + platformWidth;
				if (platformRight > (playerLeft - speed) && !(platformLeft >= playerRight))
				{
					moveable = false;
					platformMovingSide = platformRight;
				}
			}
		}
	}
	player = document.getElementById("player");
	if (heldKeyList[37] == false)
	{
		movingSide("Right");
		if (moveable)
		{
			ofsetLeft += speed;
			scean.style.marginLeft = ofsetLeft * displayOfset;
			scean.hiddenLeft = ofsetLeft;
		} else
		{
			ofsetLeft += (playerLeft-platformMovingSide);
			scean.style.marginLeft = ofsetLeft * displayOfset;
			scean.hiddenLeft = ofsetLeft;
		}
	} else if (heldKeyList[39] == false)
	{
		movingSide("Left");
		if (moveable)
		{
			ofsetLeft -= speed;
			scean.style.marginLeft = ofsetLeft * displayOfset;
			scean.hiddenLeft = ofsetLeft;
		} else {
			ofsetLeft += (playerRight-platformMovingSide);
			scean.style.marginLeft = ofsetLeft * displayOfset;
			scean.hiddenLeft = ofsetLeft;
		}
	}
}
function gameKeyLogDown(){
	try {
		var keyCode = event.keyCode;
		heldKeyList[keyCode] = false;
	} catch {/*Usedt to provent glitches on file loading*/}
}
function gameKeyLogUp(){
	try {
		var keyCode = event.keyCode;
		heldKeyList[keyCode] = true;
	} catch {/*Usedt to provent glitches on file loading*/}
}
