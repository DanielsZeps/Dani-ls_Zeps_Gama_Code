function gameDoor(_doorState, _direction, _doorId)
{
	var door = document.getElementById(_doorId);
	if (door.openState == null)
	{
		door.openState = 0;
	}
	if ((door.openState == null || door.openState < _doorState) && _direction == "Up")
	{
		door.openState += 1;
		door.hiddenTop -= 10;
		door.style.marginTop = door.hiddenTop * displayOfset;
		if (!door.breal)
		{
			setTimeout(gameDoor, 20, _doorState, _direction, _doorId);
		}
	} else if ((door.openState == null || door.openState > _doorState) && _direction == "Down")
	{
		door.breal = true;
		door.openState -= 1;
		door.hiddenTop += 10;
		door.style.marginTop = door.hiddenTop * displayOfset;
		setTimeout(gameDoor, 20, _doorState, _direction, _doorId);
	}
}
function platformState(_platformText, _platformHolder)
{
	for (var x = 0; x < _platformHolder.length; x++)
	{
		if (_platformHolder[x][1] == _platformText)
		{
			var platform = document.getElementById(_platformHolder[x][0]);
			platform.hiddenState = null;
			platform.innerHTML = null;
			platform.style.outline = "green solid 2.5px";
		}
	}
}
