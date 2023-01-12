let y1 = 0; // y position of image01
let y2 = 0; // y position of image02
let easing = 0.05;
let amplitude = 20;
let period = 7000;
let img1;
let img2;
let fadeInDuration = 1000; // Fade in duration in milliseconds
let startTime; // Time at which fade in starts

// the following are all the variables for the pterodactyl
let ptero = [];
let counter = 0; // counter variable to keep track of the current index
let timer = 0; // timer variable to control the amount of time each image is displayed
let xoff = 0;
let yoff = 0;

// --------------------------------------------------

function preload() {
  // Load the images
  img1 = loadImage('image01.jpg'); // wallpaper
  img2 = loadImage('image02.png'); // floating box
  // loads pterodactyl
  for (let i = 3; i >= 0; i--) {
    ptero[i] = loadImage(i + ".png");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis(); // Set start time to current time
}

function draw() {
  let img = ptero[counter];
  timer++; // increment the timer
  if (timer > 3) { // if the timer has reached 30 (30 * 1/frameRate() = 0.3 seconds)
    timer = 0; // reset the timer
    counter++; // increment the counter
    if (counter > 3) { // if the counter has reached 8 (the last index in the array)
      counter = 0; // reset the counter
    }
  }
  let x3 = width*noise(xoff);
  let y3 = height*noise(yoff);
 
  xoff += 0.0015;
  yoff += 0.0025;
 
  // Display image01 as the background image
  image(img1, 0, y1, width, height);
 
  image(img1, 0, y1 + height, width, height);
  
  // Increment y1 to move image01 upwards
  y1 -= random(-0.3, 0.7);
  
  // If image has moved completely off the screen, reset y1 to 0
  if (y1 <= -height) {
    y1 = 0;
  }
  
  // Calculate the target y position for image02 based on the current time
  let targetY = height/2 - img2.height/4 + amplitude * sin(TWO_PI * millis() / period);
  
  // Slowly move image02 towards the target y position with easing
  y2 += (targetY - y2) * easing;
  
  // Display image02 as a box that "floats" on top of the background
  image(img2, width/2 - img2.width/4, y2, img2.width/2, img2.height/2);
  image(img, x3, y3); // display the image at the current index
}

function windowResized() {
  // Adjust the size of the canvas whenever the size of the window changes
  resizeCanvas(windowWidth, windowHeight);
}
