damage = null;
function renderBoss()
{
	renderPlatforms([[11100, 900, 100, 100, "fake", "mainBoss"]] ,"bossState1" ,"boss");
	var boss = document.getElementById("mainBoss");
	boss.state = 1;
	boss.horizontalDirection = "right";
	boss.horizontalState = 0;
	boss.verticalDirection = "up";
	boss.verticalState = 4;
	function verticalMoving()
	{
		var boss = document.getElementById("mainBoss");
		if (boss.verticalDirection == "up")
		{
			boss.verticalState += 1;
			boss.hiddenTop += 2;
			boss.style.marginTop = boss.hiddenTop * displayOfset;
			if (boss.verticalState == 10)
			{
				boss.verticalDirection = "down";
			}
		} else if (boss.verticalDirection == "down")
		{
			boss.verticalState -= 1;
			boss.hiddenTop -= 2;
			boss.style.marginTop = boss.hiddenTop * displayOfset;
			if (boss.verticalState == 0)
			{
				boss.verticalDirection = "up";
			}
		}
	}
	function horizontalMoving()
	{
		var boss = document.getElementById("mainBoss");
		if (boss.horizontalDirection == "right")
		{
			boss.horizontalState += 1;
			boss.hiddenLeft += 10;
			boss.style.marginLeft = (boss.hiddenLeft) * displayOfset;
			if (boss.horizontalState == 70)
			{
				boss.horizontalDirection = "left";
			}
		} else if (boss.horizontalDirection == "left")
		{
			boss.horizontalState -= 1;
			boss.hiddenLeft -= 10;
			boss.style.marginLeft = boss.hiddenLeft * displayOfset;
			if (boss.horizontalState == 0)
			{
				boss.horizontalDirection = "right";
			}
		}
	}
	mainAudio.pause();
	
	bossAudio.onended = function ()
	{
		bossHorizontal = setInterval(horizontalMoving, 30);
		bossVertical = setInterval(verticalMoving, 40);
		setTimeout(function(){mainAudio.play(); bossAttack()}, 100);
	}
	
	setTimeout(function(){bossAudio.play()}, 200);
}
function attackPattern_1(_value, _stage)
{
	function Demolish_Platform(incorrectPlatform, _value, _stage)
	{
		var platforms = document.getElementById("temeparyPlatform");
		platforms = platforms.getElementsByTagName("platform");
		platforms[incorrectPlatform].hiddenState = "fake";
		function checkGroundTouch()
		{
			try
			{
				if (playerPlatform.id == "Chambar_State2" || playerPlatform.id == "incorrect")
				{
					document.getElementById("temeparyPlatform").value = true;
				}
				if (playerPlatform.id == "correct")
				{
					document.getElementById("temeparyPlatform").value = false;
				}
			} catch {}
		}
		touchGround = setInterval(checkGroundTouch, 1);
		setTimeout(result, 600, _value, _stage);
	}
	function result(_value, _stage)
	{
		platform = document.getElementById("temeparyPlatform");
		if (!platform._value)
		{
			if (_stage == 1)
			{
				round_one.splice(_value, 1);
			}
		} else
		{
			document.getElementById("player").faileCounter += 1;
		}
		platform.remove();
		clearInterval(touchGround);
		setTimeout(bossAttack, 2000);
	}	
	
	var correct = ["platforma", "_platforma", "platforma1", "_platforma1", "pl4tf0rma"];
	var incorrect = ["#platforma1", "#1.platforma", "plat|forma"];
	
	renderPlatforms([[11150, 1220, 25, 150],[11700, 1220, 25, 150]], "platformWhite", "temeparyPlatform");
	
	var platforms = document.getElementById("temeparyPlatform");
	platforms = platforms.getElementsByTagName("platform");
	var incorrectPlatform = Math.floor( Math.random() * 2);
	if (incorrectPlatform == 0)
	{
		platforms[1].innerHTML = correct[Math.floor( Math.random() * correct.length )];
		platforms[1].id = "correct";
		platforms[0].innerHTML = incorrect[Math.floor( Math.random() * incorrect.length )];
		platforms[0].id = "incorrect";
	} else if (incorrectPlatform == 1)
	{
		platforms[0].innerHTML = correct[Math.floor( Math.random() * correct.length )];
		platforms[0].id = "correct";
		platforms[1].innerHTML = incorrect[Math.floor( Math.random() * incorrect.length )];
		platforms[1].id = "incorrect";
	}
	setTimeout(Demolish_Platform, 2000, incorrectPlatform, _value, _stage);
}
function attackPattern_2(_value, _stage)
{
	function result(_value, _stage)
	{
		if (document.getElementById("temeparyPlatform").value)
		{
			if (_stage == 1)
			{
				round_one.splice(_value, 1);
			}
		} else
		{
			document.getElementById("player").faileCounter += 1;
		}
		temeparyVariable = "POP";
		document.getElementById("temeparyPlatform").remove()
		setTimeout(bossAttack, 2000);
	}
	renderPlatforms([[11100, 1220, 25, 800]], "platformWhite", "temeparyPlatform");
	
	temeparyVariable = Math.floor(Math.random() * 99990) + 10 + "";
	document.getElementById("temeparyPlatform").getElementsByTagName("platform")[0].innerHTML = temeparyVariable;
	
	setTimeout(result, 10000, _value, _stage);
}
function bossAttack()
{
	try
	{
		document.getElementById("tempText_2").remove();
	} catch {}	
	var boss = document.getElementById("mainBoss");
	if (boss.state == 1)
	{
		try
		{
			if (round_one.length == 0)
			{
			}
		} catch
		{
			round_one = [1, 2];
		}
		attackType = Math.floor(Math.random() * round_one.length);
		var stage = round_one[attackType];
		if (stage == 1)
		{
			attackPattern_1(attackType, 1);
			renderPlatforms([[11200, 1400, 40, 600, "fake"]], "platformDarkgrey", "tempText_2");
			document.getElementById("tempText_2_0").innerHTML = "Uzlec uz pareizi uzrakstītā mainīgā";
		} else if (stage == 2)
		{
			attackPattern_2(attackType, 1);
			renderPlatforms([[11200, 1400, 40, 600, "fake"]], "platformDarkgrey", "tempText_2");
			document.getElementById("tempText_2_0").innerHTML = "Uzraksti skaitli uz platformas izmantojot print()";
		} else
		{
			attackLast();
			round_one = [1, 2];
			renderPlatforms([[11200, 1400, 40, 600, "fake"]], "platformDarkgrey", "tempText_2");
			document.getElementById("tempText_2_0").innerHTML = "Izsauc funkciju";
		}
	} else if ( boss.state == "Compleat")
	{
		clearInterval(bossHorizontal);
		clearInterval(bossVertical);
		document.getElementById("mainBoss").remove();
		document.getElementById("bossDoors").remove();
	}
}
function attackLast()
{
	var boss = document.getElementById("mainBoss");
	
	damage = "Uzvara()";
	
	renderPlatforms([[11400, 1050, 40, 200, "fake"]], "platformDarkgrey", "tempDamageText");
	document.getElementById("tempDamageText_0").innerHTML = damage;
}