var timer = 0;
timerActivate = false;
function gameButton()
{
	var startGame = document.createElement("button");
	var text = document.createTextNode("Sākt spēli");
	startGame.appendChild(text);
	startGame.id = "mainGameButton";
	startGame.addEventListener("click", function(){this.remove(); gameStart()})
	document.body.appendChild(startGame);
	var gameStartInfo = startGame.getBoundingClientRect();
	startGame.style.marginLeft = 480 * displayOfset - (gameStartInfo.width / 2)
}
function gameChronometer()
{
	if (timerActivate)
	{
		timer += 1;
	}
	{
		try
		{
			time = document.getElementById("chronometer");
			time.style.marginLeft = 958 * displayOfset - time.getBoundingClientRect().width;
			
			var hronometer = (Math.floor(timer / 10 / 60 / 60) % 60) + ":" + (Math.floor(timer / 10 / 60) % 60) + ":" + (Math.floor(timer / 10) % 60) + ":" + (timer % 10) + "0";
			
			time.innerHTML = hronometer;
		} catch {}
	}
}
function gameCharacter()
{
	var player = document.createElement("player");
	player.id = "player";
	player.style.marginLeft = (910 / 2 + 25) * displayOfset;
	player.style.marginTop = (558 / 2 - (20 ) / 2) * displayOfset;
	player.style.width = 25 * displayOfset;
	player.style.height = 60 * displayOfset;
	
	
	player.faileCounter = 0;
	player.timer = 0;
	player.hiddenLeft = 480;
	player.hiddenTop = 269;
	player.hiddenHeight = 60;
	player.hiddenWidth = 25;
	player.direction = "Down";
	player.jumpForce = 0;
	player.fallingSpeed = 0;
	player.deathCounter = 0;
	
	document.body.appendChild(player);
}
function gameScean()
{
	var platformHolder = document.createElement("div");
	platformHolder.id = "platforms";
	var scean = document.createElement("div");
	scean.appendChild(platformHolder);
	scean.id = "scean";
	scean.style.marginLeft = 0 * displayOfset;
	scean.hiddenLeft = 0;
	scean.hiddenTop = 0 * displayOfset;
	scean.style.position = "absolute";
	document.body.appendChild(scean);
}
/*
	All functions use arrays to create an element using CSS.
	Array index value stored information is explained in function.
	
	Visas funkcijas izmanto masīvus, lai izveidotu elementu, izmantojot CSS.
	Masīva indeksa vērtības saglabātā informācija ir izskaidrota funkcijā.
*/
function renderPlatforms(_platformsArray, _plaformsClass, _platformSetId)
{
	/*
		platformInfo[0] = MarginLeft;
		platformInfo[1] = MarginTop;
		platformInfo[2] = Height;
		platformInfo[3] = Width;
		platformInfo[4] = Platform state;
		platformInfo[5] = Elements id;
		platformInfo[6] = Display;
		platformInfo[7] = Color;
		
		platformInfo[0] = labās malas nobīde;
		platformInfo[1] = augšas nobīde;
		platformInfo[2] = augstums;
		platformInfo[3] = platums;
		platformInfo[4] = platformas stāvoklis;
		platformInfo[5] = elementa id;
		platformInfo[6] = redzamība;
		platformInfo[7] = krāsa;
	*/
	var platformSet;
	var platformSetExists = true;
	try {
		document.getElementById(_platformSetId).innerHTML;
		platformSetExists = false;
	} catch {}
	if ( _plaformsClass == null )
	{
		var removePlatformSet = document.getElementById(_platformSetId);
		removePlatformSet.innerHTML = null;
		removePlatformSet.remove();
	} else
	{
		if (platformSetExists)
		{
			platformSet = document.createElement("div");
			platformSet.id = _platformSetId;
		}
		for (var x = 0; x < _platformsArray.length; x++)
		{
			var platform, platformInfo;
			platformInfo = _platformsArray[x];
			platform = document.createElement("platform");
			platform.id = _platformSetId+"_"+x;
			platform.style.marginLeft = platformInfo[0] * displayOfset;
			platform.style.marginTop = platformInfo[1] * displayOfset;
			platform.style.height  = platformInfo[2] * displayOfset;
			platform.style.width  = platformInfo[3] * displayOfset;
			
			platform.hiddenLeft = platformInfo[0];
			platform.hiddenTop = platformInfo[1];
			platform.hiddenHeight  = platformInfo[2];
			platform.hiddenWidth  = platformInfo[3];
			if (platformInfo[4]!=null)
			{
				platform.hiddenState = platformInfo[4];
			}
			if (platformInfo[5]!=null)
			{
				platform.id = platformInfo[5];
			}
			if (platformInfo[6]!=null)
			{
				platform.style.display = platformInfo[6];
			}
			if (platformInfo[7]!=null)
			{
				if (platformInfo[7].slice(0, 3) == "url")
				{
					platform.style.backgroundImage = platformInfo[7];
				} else
				{
					platform.style.backgroundColor = platformInfo[7];
					platform.style.backgroundImage = "none";
				}
			}
			platform.className = _plaformsClass;
			if (platformSetExists)
			{
				platformSet.appendChild(platform);
			} else
			{
				document.getElementById(_platformSetId).appendChild(platform);
			}
		}
		if (platformSetExists)
		{
			document.getElementById("platforms").appendChild(platformSet);
		}
	}
}
/*
	Text rendering functions are used to reduce the amount of documents.create() functions needed and to save time.
	As an indicator ar "TAG_", "ID_" and "CLASS_".
	textExample = [["TAG_span", "CLASS_sampleClass", "ID_sampleId", "Sample text", "TAG_/span"]];
	
	
	
	Teksta ģenerēšanas funkcijas tiek izmantotas, lai samazinātu document.create () nepieciešamo funkciju skaitu un lai ietaupītu laiku.
	Kā indikators tiek izmantoti "TAG_", "ID_" un "CLASS_".
	textExample = [["TAG_span", "CLASS_classPiemers", "ID_idPiemers", "Piemērs", "TAG_/span"]]
*/
function renderText(_textInfo, _elementId)
{
	var npcInfo, textString, text, renderedTag;
	
	/*
		Local _renderText() function is used instead of renderText() to provent function call overload, which occures if _renderText() is replaced with renderText()
	
		Lokālā _renderText() funkcija tiek izmantota, lai izvairītos no daudzlīmeņu funkcijas izsaukšanas, kas roda, ja _renderText() tiek aizstāts ar renderText()
	*/
	function _renderText(_textInfo)
	{
		var npcInfo, textInfo, text, renderedTag;
		textInfo = _textInfo[x];
		renderedTag = document.createElement(textInfo.slice(4, textInfo.length));
		x++;
		while (true)
		{
			textString = _textInfo[x];
			if (textString.slice(0, 4) == "TAG_")
			{
				if (textString.slice(4, 5)=="/")
				{
					break;
				}
				text = _renderText(_textInfo);
				renderedTag.appendChild(text);
			} else if (textString.slice(0, 3) == "ID_")
			{
				renderedTag.id = textString.slice(3,textString.length);
			} else if (textString.slice(0, 6) == "CLASS_")
			{
				renderedTag.className = textString.slice(6,textString.length);
			} else {
				text = document.createTextNode(textString);
				renderedTag.appendChild(text);
			}
			x++;
		}
		return renderedTag;
	}
	
	renderedTag = document.createElement("span");
	
	for (x = 0; x < _textInfo.length; x++)
	{
		textString = _textInfo[x];
		if (textString.slice(0, 4) == "TAG_")
		{
			text = _renderText(_textInfo);
			renderedTag.appendChild(text);
		} else if (textString.slice(0, 6) == "CLASS_")
		{
			renderedTag.className = textString.slice(6,textString.length);
		} else if (textString.slice(0, 3) == "ID_")
		{
			renderedTag.id = textString.slice(3,textString.length);
		} else
		{
			text = document.createTextNode(textString);
			renderedTag.appendChild(text);
		}
	}
	if (_elementId==null)
	{
		return renderedTag;
	} else if (_elementId!=null)
	{
		document.getElementById(_elementId).appendChild(renderedTag);
	}

	x = null;
}
function renderTextbox(_textboxArray, _textboxClass, _textboxHolderId)
{
	var textboxInfo, textboxHolder, textbox, text;
	/*
		textboxInfo[0] = Left;
		textboxInfo[1] = Top;
		textboxInfo[2] = Width;
		textboxInfo[3] = Text;
		textboxInfo[4] = ID;
		textboxInfo[5] = Parent ID;
		
		
		textboxInfo[0] = Labās malas nobīde;
		textboxInfo[1] = Nobīde no augšas;
		textboxInfo[2] = Platums;
		textboxInfo[3] = Teksta masīvs;
		textboxInfo[4] = id;
		textboxInfo[5] = Objekta kuram tiks pievienots id;
	*/
	try {
		if (_textboxHolderId!=null)
		{
			document.getElementById(_textboxHolderId).innerHTML;
			var textboxHolderExists = true;
		}
	} catch {}
	if (_textboxHolderId!=null)
	{
		textboxHolder = document.createElement("div");
		textboxHolder.id = _textboxHolderId;
		var textboxId = null;
	} else
	{
		var textboxId = _textboxHolderId+"_";
	}
	for (var x = 0; x < _textboxArray.length; x++)
	{
		textboxInfo = _textboxArray[x];
		if (typeof textboxInfo[3] == "object")
		{
			text = renderText(textboxInfo[3]);
		} else
		{
			text = document.createTextNode(textboxInfo[3]);
		}
		textbox = document.createElement("span");
		textbox.appendChild(text);
		textbox.className = _textboxClass;
		textbox.id = textboxId+"Textbox_"+(x+1);
		textbox.style.marginLeft = textboxInfo[0] * displayOfset;
		textbox.style.marginTop = textboxInfo[1] * displayOfset;
		textbox.style.width = textboxInfo[2] * displayOfset;
		textbox.style.textAlign = "center";
		if (textboxInfo[4]!=null)
		{
			textbox.id = textboxInfo[4];
		}
		if (textboxInfo[5]!=null)
		{
			if (typeof textboxInfo[5] == "object")
			{
				for (var y = 0; y < textboxInfo[5].length; y++)
				{
					document.getElementById(textboxInfo[5][y]).appendChild(textbox);
				}
			} else
			{
				document.getElementById(textboxInfo[5]).appendChild(textbox);
			}
		} else if (textboxHolderExists)
		{
			document.getElementById(_textboxHolderId).appendChild(textbox);
		} else
		{
			textboxHolder.appendChild(textbox);
		}
	}
	if (_textboxHolderId!=null)
	{
		document.getElementById("scean").appendChild(textboxHolder);
	}
}
function gameCommandPromt()
{
	try {
		var x = document.getElementById("commandPromt").innerHTML;
	} catch
	{
		function updatePosition()
		{
			commandPromt = document.getElementById("miniCommandPromt");
			if (commandPromt.state <= 0)
			{
				clearInterval(updatePositionInterval);
				commandPromt.style.outline = null;
				commandPromt.style.marginLeft = null;
				commandPromt.style.marginTop = null;
				commandPromt.style.height = 30 * displayOfset;
				commandPromt.style.width = 280 * displayOfset;
			} else if (commandPromt.state > 100)
			{
				commandPromt.state -= 1;
			} else
			{
				commandPromt.style.outline = (15 * displayOfset * (commandPromt.state / 100)) + "px solid black";
				commandPromt.style.marginLeft = (-920 * displayOfset * (commandPromt.state / 100));
				commandPromt.style.marginTop = (-320 * displayOfset * (commandPromt.state / 100));
				commandPromt.style.height = (30 + (9 * displayOfset * (commandPromt.state / 100))) * displayOfset;
				commandPromt.style.width = (280 + (90 * displayOfset * (commandPromt.state / 100))) * displayOfset;
				commandPromt.state -= 1;
			}
		}
		var holder, commandPromt;
		holder = document.createElement("div");
		holder.className = "miniCommandPromt";
		holder.id = "commandPromt";
		commandPromt = document.createElement("input");
		commandPromt.style.outline = 15 * displayOfset + "px solid black";
		commandPromt.style.marginLeft = -920 * displayOfset;
		commandPromt.style.marginTop = -320 * displayOfset;
		commandPromt.style.height = 39 * displayOfset;
		commandPromt.style.width = 370 * displayOfset;
		commandPromt.state = 149;
		commandPromt.id = "miniCommandPromt";
		holder.appendChild(commandPromt);
		document.getElementById("Mala_4").appendChild(holder);
		
		document.getElementById("miniCommandPromt").addEventListener("keydown", playerInput);
		updatePositionInterval = setInterval(updatePosition, 25);
	}
	setTimeout(function(){document.getElementById("temepWall").remove()}, 5000)
}

