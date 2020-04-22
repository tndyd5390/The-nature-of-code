//Perlin noise는 smooth한 random 값을 생각하면 된다. 1-5 할 차례
// var xoff1 = 0;
// var xoff2 = 10000;
var inc = 0.01;
var start = 0;

function setup() {
   createCanvas(200, 200);
   pixelDensity(1);
}

function draw() {
   var yoff = 0;
   loadPixels();
   for(var y = 0; y< height; y++){
      var xoff = 0;
      for (var x = 0; x < width; x++){
         var index = (x + y * width) * 4;
         var r = noise(xoff, yoff) * 255;
         pixels[index + 0] = r;
         pixels[index + 1] = r;
         pixels[index + 2] = r;
         pixels[index + 3] = 255;
         xoff += inc;
      }
      yoff += inc;
   }
   updatePixels();
}