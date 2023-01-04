let y = 0;
let easing = 0.05;
let amplitude = 20;
let period = 7000;

function preload() {
  // Load the images
  image01 = loadImage('image01.png');
  image02 = loadImage('image02.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Display image01 as the background image
  image(image01, 0, 0, width, height);

  // Calculate the target y position for image02 based on the current time
  let targetY = height/2 - image02.height/4 + amplitude * sin(TWO_PI * millis() / period);

  // Slowly move image02 towards the target y position with easing
  y += (targetY - y) * easing;

  // Display image02 as a box that "floats" on top of the background
  image(image02, width/2 - image02.width/4, y, image02.width/2, image02.height/2);
}

function windowResized() {
  // Adjust the size of the canvas whenever the size of the window changes
  resizeCanvas(windowWidth, windowHeight);
}