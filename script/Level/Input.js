function playerInput(){
	try {
		var keyCode = event.keyCode;
	} catch {/*Usedt to provent glitches on file loading*/}
	var commandPromt = document.getElementById("miniCommandPromt");
	var input = commandPromt.value;
	if (keyCode==13)
	{
		var printCheck, inputCheckOne, inputCheckThree;
		commandPromt.value = null;
		printCheck = input.slice(0, 6) == "print(" && input.slice(-1, input.length) == ")";
		quoteChheck = ((input.slice(6, 7) == "\"" && input.slice(-2, -1) == "\"") || (input.slice(6, 7) == "\'" && input.slice(-2, -1) == "\'"));
		
		if (input == "durvjuId = " + partTwoDoorCode[0] && playerPlatform.id == "variableValue_1")
		{
			timerActivate = true;
			playerPlatform.id = null;
			gameDoor(20, "Up", "door_3");
		} else if (input == "durvjuId = " + partTwoDoorCode[1] && playerPlatform.id == "variableValue_2")
		{
			playerPlatform.id = null;
			gameDoor(20, "Up", "door_4");
		} else if (input == "durvjuId = " + partTwoDoorCode[2] && playerPlatform.id == "variableValue_3")
		{
			playerPlatform.id = null;
			gameDoor(20, "Up", "door_5");
		} else if (playerLocation == "printStage")
		{
			if (enemySnakesInfo[0][0] + "()" == input && enemySnakesInfo[0][0] != null)
			{
				document.getElementById(enemySnakesInfo[0][1]).remove();
				snakeHiss.play();
				enemySnakesInfo[0][0] == null;
				timerActivate = true;
			} else if (enemySnakesInfo[1][0] + "()" == input && enemySnakesInfo[1][0] != null)
			{
				document.getElementById(enemySnakesInfo[1][1]).remove();
				snakeHiss.play();
				enemySnakesInfo[1][0] == null;
			} else if (enemySnakesInfo[2][0] + "()" == input && enemySnakesInfo[2][0] != null)
			{
				document.getElementById(enemySnakesInfo[2][1]).remove();
				snakeHiss.play();
				enemySnakesInfo[2][0] == null;
			}
		} else if (playerLocation == "Chambar_State2")
		{
			var boss = document.getElementById("mainBoss");
			boss.damage = false;
			if (((printCheck && quoteChheck && input.slice(7, -2)) == temeparyVariable || (printCheck && input.slice(6, -1) == temeparyVariable)) && temeparyVariable != "POP")
			{
				document.getElementById("temeparyPlatform").value = true;
			} else if (boss.state == 1  && input == damage)
			{
				boss.damage = true;
			}
			if (boss.damage)
			{
				boss.state = "Compleat";
			}
			document.getElementById("tempDamageText").remove();
			setTimeout(bossAttack, 1000);
		} else if (playerLocation == "print_1")
		{
			if (printCheck && quoteChheck)
			{
				platformState(input.slice(7, -2), functionPlatform_1);
			} else if (printCheck)
			{
				platformState(input.slice(6, -1), functionPlatform_1);
			}
		} else if (playerLocation == "print_2")
		{
			if (printCheck && quoteChheck)
			{
				platformState(input.slice(7, -2), functionPlatform_2);
			} else if (printCheck)
			{
				platformState(input.slice(6, -1), functionPlatform_2);
			}
		}
		
		if (input.slice(-1, input.length) == ")" && input.slice(0, 6) == "debug(")
		{
			if (input.slice(6, -1) == "stage_1_1")
			{
				updateUserPosition(0, 0);
			} else if (input.slice(6, -1) == "stage_1_2")
			{
				updateUserPosition(-2210, 250);
			} else if (input.slice(6, -1) == "stage_1_3")
			{
				updateUserPosition(-3350, 290);
			} else if (input.slice(6, -1) == "stage_2_1")
			{
				updateUserPosition(0, 2200);
			} else if (input.slice(6, -1) == "stage_3_1")
			{
				updateUserPosition(-180, -1150);
			} else if (input.slice(6, -1) == "stage_3_2")
			{
				updateUserPosition(-1100, -1250);
				playerLocation = "print_1";
			} else if (input.slice(6, -1) == "stage_3_3")
			{
				updateUserPosition(-3750, -1250);
				playerLocation = "print_2";
			} else if (input.slice(6, -1) == "stage_3_4")
			{
				updateUserPosition(-6650, -1380);
			} else if (input.slice(6, -1) == "final")
			{
				updateUserPosition(-9500, -1380);
			}
			 else if (input.slice(6, -1) == "finish")
			{
				try
				{
					document.getElementById("background").remove();
				} catch {}
				try
				{
					clearInterval(backgroundInterval_1);
				} catch {}
				updateUserPosition(-12000, -400);
			}
		}
	} else
	{
		if (input.length > 20)
		{
			input = input.slice(0, 20);
			commandPromt.value = input;
		}
	}
}
