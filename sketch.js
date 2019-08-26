let x;
let y;

let xspeed;
let yspeed;

let face;
let bg;

let cnv;

let title;
let txt;

let middleX;
let middleY;

let letter;
let imgnumber = 0;


let plusOrMinus = Math.random() < 0.5 ? -1 : 1;

function preload() {
  face = loadImage("betty1.png");
  bg = loadImage("BG.png");
}

function setup() {

  background(255, 204, 102);
  middleX = width/2;
  middleY = height/2;
  cnv = createCanvas(windowWidth,windowHeight);

  cnv.id('canvas');
  x = random(10,width-180);
  y = random(10,height-180);
  xspeed = 3 * plusOrMinus;
  yspeed = 2 * plusOrMinus;



  title = select('h1');

  textAlign(CENTER);

  // txt = createDiv('<span class="break"><span id="BB">B</span><span id="uu">U</span><span id="ss">S</span></span><span class="break"><span id="bb">B</span><span id="oo">O</span><span id="yy">Y</span></span>');
  // // txt.position(300, 300);
  // txt.class('mainTitle');

  BB = select('#BB');
  uu = select('#uu');
  ss = select('#ss');
  bb = select('#bb');
  oo = select('#oo');
  yy = select('#yy');





}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 204, 102);
  // rect(x,y,80,60);



  image(face, x, y,180,180);

  let xMap = map(mouseX, 0, 300, 300+8, 300);
  let yMap = map(mouseY, 0, 200, 200+8, 200);

  // txt.position(xMap, yMap);

  x = x + xspeed;
  y = y + yspeed;
  
  if(x + 180 >= width || x <= 0) {
    xspeed = -xspeed;
    // title.style('-webkit-text-stroke-color: red');
    

    // background(bg);
  }


  
  if(y + 180 >= height || y <= 0) {
    yspeed = -yspeed;
     // background(bg);
   
  }

  BB.mouseOver(changeImage);
  uu.mouseOver(changeImage);
  ss.mouseOver(changeImage);
  bb.mouseOver(changeImage);
  oo.mouseOver(changeImage);
  yy.mouseOver(changeImage);

  BB.mouseOut(hideImage);
  uu.mouseOut(hideImage);
  ss.mouseOut(hideImage);
  bb.mouseOut(hideImage);
  oo.mouseOut(hideImage);
  yy.mouseOut(hideImage);

}


function changeImage() {
  
    var randomFromRight = ((Math.random() * 30) );
    var randomFromBottom = ((Math.random() * 30) );

    $("#popupImage").attr("src","gifs1/" + imgnumber + ".gif");
    $("#pop-up").css("right",randomFromRight + "%");
    $("#pop-up").css("bottom",randomFromBottom + "%");
    $("#pop-up").show();
}

function hideImage(){

  $("#pop-up").hide();

  if (imgnumber <= 30) {
      imgnumber++;
    } else {
      imgnumber = 0;
    }


}


