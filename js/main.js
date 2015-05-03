Game = {};

Game.Launch = function() {
    Game.cps = 0;
    Game.cookies = 0;
    Game.cookiesd = 0;
    Game.fps = 60;
}

Game.click = function() {
    Game.cookies++;
}

Game.Logic = function() {
    Game.cookies += Game.cps/Game.fps;
    Game.cookiesd = Math.round(Game.cookies);
}

Game.Loop = function () {
    var meh = document.getElementById("leftpanel");
	meh.innerHTML = Game.cookiesd;

    Game.catchuplogic = 0;
    Game.Logic();

    setTimeout(Game.Loop, 1000/Game.fps);
}

Game.Launch();

window.onload = function() {
    Game.Loop();
    document.getElementById("leftpanel").addEventListener("click", Game.click, false);
}
