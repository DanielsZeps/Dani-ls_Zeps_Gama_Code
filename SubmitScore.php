<?php
	session_start();
	if ($_SESSION["eMail"] != "Freeplay")
	{
		$userTime = fopen("users/UserProgres/".$_SESSION["eMail"]."/time", "r");
		$userTimer = chop(fgets($userTime));
		fclose($userTime);
		if ($userTime == null)
		{
			$userTimer = 999999999999999999;
		}
		$userFails = fopen("users/UserProgres/".$_SESSION["eMail"]."/fails", "r");
		$userFailsCount = chop(fgets($$userFails));
		fclose($userFails);
		if ($userFails == null)
		{
			$userFailsCount = 999999999999999999;
		}

		if ($userTimer > $_COOKIE["timer"])
		{
			$userTime = fopen("users/UserProgres/".$_SESSION["eMail"]."/time", "w+");
			fwrite($userTime, $_COOKIE["timer"]);
			fclose($userTime);
		}
		if ($userFailsCount > $_COOKIE["failCounter"])
		{
			$userFails = fopen("users/UserProgres/".$_SESSION["eMail"]."/fails", "w+");
			fwrite($userFails, $_COOKIE["failCounter"]);
			fclose($userFails);
		}
	}
	$userScoreAdded = true;
	$file = fopen("users/GlobalScore.txt", "r");
	$scorList = [];

	while (!feof($file))
	{
		$fileText = fgets($file);
		array_push($scorList, explode(",", chop($fileText)));
	}
	fclose($file);
	$file = fopen("users/GlobalScore.txt", "w+");

	for($x = 0; $x < count($scorList)-1; $x += 1)
	{
		if ($scorList[$x][2] - 1 >= $_COOKIE["timer"] - 1 && $userScoreAdded)
		{
			fwrite($file, $_SESSION["eMail"].",".$_COOKIE["failCounter"].",".$_COOKIE["timer"]."\n");
			$userScoreAdded = false;
		}
		fwrite($file, $scorList[$x][0].",".$scorList[$x][1].",".$scorList[$x][2]."\n");
	}
	fwrite($file, $scorList[count($scorList)-1][0].",".$scorList[count($scorList)-1][1].",".$scorList[count($scorList)-1][2]);
	fclose($file);
?>
