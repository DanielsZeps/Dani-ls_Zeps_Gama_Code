<?php
	session_start();
	function checkPassword()
	{
		$users = fopen("users/users.txt", "r") or die("Nevar piereģistrēties!");
		$eMail = $_POST["eMail"];
		$password = $_POST["password"];
		$login = $eMail.",".$password;
		$loginInfo = "Nepareizs e-pasts un/vai parole.";
		$Lietotajs = "";
		if ($login != "" && $eMale != null)
		{
			while(!feof($users))
			{
				$userInfo = chop(fgets($users));
				if ($userInfo == $login)
				{
					$loginInfo = "Pereizi ievadīts.";
					break;
				} else
				{
					$loginInfo = "Nepareiza parole.";
				}
			}
		}
		fclose($users);
		$filePath = "users/UserProgres/".$_POST["eMail"];
		if (!file_exists($filePath))
		{
			mkdir($filePath);
		}
		$_SESSION["eMail"] = $_POST["eMail"];
		$_SESSION["password"] = $_POST["password"];
		if ($eMail == "Freeplay")
		{
			$_SESSION["eMail"] = "Freeplay";
		}
	}
	checkPassword();
	require "index.php";
?>
