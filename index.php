<html>
	<head>
		<title>ZPD_Daniels_Zeps</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="style/style.css"></link>
		<script src="script/Main/Functions.js"></script>
		<script src="script/Main/Assets.js"></script>
		<script src="script/Main/Panel.js"></script>

		<?php
			if ($_SESSION["eMail"] != null)
			{
				echo "<link rel=\"stylesheet\" href=\"style/GameAssets.css\"></link>";
				echo "<link rel=\"stylesheet\" href=\"style/Platforms.css\"></link>";
				echo "<script src=\"script/Level/Assets.js\"></script>";
				
				echo "<script src=\"script/Game_Engine/RenderElements.js\"></script>";
				echo "<script src=\"script/Game_Engine/Controls.js\"></script>";
				
				echo "<script src=\"script/Level/Audio.js\"></script>";
				echo "<script src=\"script/Level/Elements.js\"></script>";
				echo "<script src=\"script/Level/End.js\"></script>";
				echo "<script src=\"script/Level/Functions.js\"></script>";
				echo "<script src=\"script/Level/Input.js\"></script>";
				echo "<script src=\"script/Level/LastTask.js\"></script>";
				echo "<script src=\"script/Level/Position.js\"></script>";
				echo "<script src=\"script/Level/Start.js\"></script>";
			}
		?>
		<!--<link rel="stylesheet" href="style/GameAssets.css"></link>
		<link rel="stylesheet" href="style/Platforms.css"></link>
		<script src="script/Level/Assets.js"></script>
				
		<script src="script/Game_Engine/RenderElements.js"></script>
		<script src="script/Game_Engine/Controls.js"></script>
				
		<script src="script/Level/Audio.js"></script>
		<script src="script/Level/Elements.js"></script>
		<script src="script/Level/End.js"></script>
		<script src="script/Level/Functions.js"></script>
		<script src="script/Level/Input.js"></script>
		<script src="script/Level/LastTask.js"></script>
		<script src="script/Level/Position.js"></script>
		<script src="script/Level/Start.js"></script> -->
	</head>
	<body>
		<?php
			if ($_SESSION["eMail"] != null)
			{
				echo "<script>start()</script>";
			} else
			{
				echo "<div id=\"loginScreen\">";
				echo "<form action=\"CheckPassword.php\" method=\"post\">";
				echo "<p>Lietotājs: <input id=\"username\" name=\"eMail\" value=\"\"></p>";
				echo "<p>Parole: <input type=\"password\" name=\"password\" id=\"password\" value=\"\"></p>";
				echo "<p><input type=\"submit\" value=\"Pieslēgties\"><input onclick='document.getElementById(\"username\").value=\"FreePlay\"; document.getElementById(\"password\").value = \"FreePlay\"' type=\"submit\" value=\"Versija bez reģistrācijas\"></p>";
				echo "</form>";
				echo "</div>";

				echo "<script>";
				echo "windowElements();";
				echo "windowBorders();";
				echo "windowUsername();";
				echo "windowLogin();";
				echo "</script>";
			}
		?>
	</body>
	<script>start()</script>
</html>
