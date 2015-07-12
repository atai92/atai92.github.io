/*
* Preload images so they load faster.
* Want an array to contain the loaded previous image, current image, and next image
* The array should contain the objects with the element that has the loaded image.
* On next image, current and previous image's index increments by one.
*
*
* ('*' denotes newly loaded image)
* Next image model:
* [p][c][n] -> [n*][p][c] -> [c][n*][p]
*
* Previous image model:
* [p][c][n] -> [c][n][p*] -> [n][p*][c]
*
* Range: 0-2 (n, p, and c must fall into this range)
* Only need to keep track of 'c' because n and p are always c++ and c--.
*/

var preload_array = [];
preload_array[0] = id.get();
preload_array[1] = id.get();
preload_array[2] = id.get();
var current_img_index = 1;

/*
* @param: direction, src
* direction: Preload next or previous image.
* src: Image source to preload.
*
* This function only preloads the correct images in the correct position of the object array.
* Requires correct function in order to choose the correct image to display.
*/

function preload(direction, src) {
  switch (direction) {
    case 'next':
      current_img_index++;
      if (current_img_index > 2) current_img_index = 0;
      if (current_img_index + 1 > 2) var preload_index = 0;
      else var preload_index = current_img_index + 1;
      preload_array[preload_index].src = src;
      break;
    case 'previous':
      current_img_index--;
      if (current_img_index < 0) current_img_index = 2;
      if (current_img_index - 1 < 0) var preload_index = 2;
      else var preload_index = current_img_index - 1;
      preload_array[preload_index].src = src;
      break;
  }
}
