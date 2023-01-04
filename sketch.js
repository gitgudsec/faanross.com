let y1 = 0; // y position of image01
let y2 = 0; // y position of image02
let easing = 0.05;
let amplitude = 20;
let period = 7000;
let img1;
let img2;
let fadeInDuration = 1000; // Fade in duration in milliseconds
let startTime; // Time at which fade in starts

function preload() {
  // Load the images
  img1 = loadImage('image01.jpg');
  img2 = loadImage('image02.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis(); // Set start time to current time
}

function draw() {
  // Display image01 as the background image
  image(img1, 0, y1, width, height);
  image(img1, 0, y1 + height, width, height);
  
  // Increment y1 to move image01 upwards
  y1 -= 0.1;
  
  // If image has moved completely off the screen, reset y1 to 0
  if (y1 <= -height) {
    y1 = 0;
  }
  
  // Calculate the current alpha value of image02 based on the fade in duration
  let alpha = map(millis() - startTime, 0, fadeInDuration, 0, 255);
  
  // Constrain the alpha value to be between 0 and 255
  alpha = constrain(alpha, 0, 255);
  
  // Set the fill color for image02 with the current alpha value
  fill(255, 255, 255, alpha);
  
  // Calculate the target y position for image02 based on the current time
  let targetY = height/2 - img2.height/4 + amplitude * sin(TWO_PI * millis() / period);
  
  // Slowly move image02 towards the target y position with easing
  y2 += (targetY - y2) * easing;
  
  // Display image02 as a box that "floats" on top of the background
  image(img2, width/2 - img2.width/4, y2, img2.width/2, img2.height/2);
}

function windowResized() {
  // Adjust the size of the canvas whenever the size of the window changes
  resizeCanvas(windowWidth, windowHeight);
}
