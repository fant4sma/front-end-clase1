var bot
function download (){
  saveCanvas ("Dibujop5","jpg")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(0,255), random(0,255), random(0,255));
    bot = createButton('Descargar creación');
  bot.position(900, 700);
  bot.mousePressed(download)
  frameRate (100)
 
}

function draw() {
  fill(random(0,255),random(0,255),random(0,255))
  square(mouseX, mouseY, 30);

}
