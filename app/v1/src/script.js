console.log("First project with first commit");

// in this we will create a bouncing ball pipe game and will try to use the pure concept rather than using the framework or module will try to understand how things works. this will be the moded version of the game with crazy ass movements. with maybe more than 2-3 types
// 1. Base one with one pipe and wall bouncing game, in this the ball can bounce from the wall.
// 2. We can add more pipe, like in the left and right and try to see how it works. in this ball will not bounce from the wall.
// 3. Challenging one, where the wall pipe can be disappear and reappear at some certain amount of time for sure but it will be cool to built.

// Print the current slider value of the pixels.
var slider = document.getElementById("pixelRange");
var sliderValue = document.getElementById("pixelRangeNumber");
var pixel = document.getElementById("pixelLine");

slider.oninput = function () {
  if (this.value <= 100) {
    sliderValue.value = this.value;
    pixel.style.fontSize = this.value + "px";}
};

sliderValue.oninput = function () {
  if (this.value <= 100) {
    slider.value = this.value;
    pixel.style.fontSize = this.value + "px";
  } else if (this.value > 100) {
    sliderValue.value = "100";
    pixel.style.fontSize = "100" + "px";
  }
};
