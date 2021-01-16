function gameAudio()
{
	snakeHiss = new Audio("sounds/Snake_Hiss_Garuda1982.wav")
	bossAudio = new Audio("sounds/8_Bit_Boss_Deathbygeko.wav");
	mainAudio = new Audio("sounds/8_Bit_Forest_joshuaempyre.wav");
	mainAudio.onended = function()
	{
		mainAudio.play();
	}
}
