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
var current_img_index = 1;
preload_init();

/*
* @param: direction, src
* direction: Preload next or previous image.
* src: Image source to preload.
*
* This function only preloads the correct images in the correct position of the object array.
* Requires correct function in order to choose the correct image to display.
*/

function preload(direction) {
  switch (direction) {
    case 'next':
      preload_array[current_img_index].style.display = "none";
      current_img_index++;
      if (current_img_index > 2) current_img_index = 0;
      if (current_img_index + 1 > 2) var preload_index = 0;
      else var preload_index = current_img_index + 1;
      preload_array[current_img_index].style.display = "block";
      var month_entry = plog[date_pos];
      var month_entry_index = entry_pos + 1;
      if (month_entry_index >= month_entry.length) month_entry_index = 1;
      var entry = month_entry[month_entry_index];
      var img_src = entry[0];
      preload_array[preload_index].src = img_src;
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

function preload_init() {
  preload_array[0] = id.get("pic1");
  preload_array[1] = id.get("pic2");
  preload_array[2] = id.get("pic3");
  preload_array[0].style.display = "none";
  preload_array[1].style.display = "block";
  preload_array[2].style.display = "none";
  current_img_index = 1;

  var month_entry = plog[date_pos];
  var entry = month_entry[entry_pos];
  var img_src = entry[0];
  preload_array[1].src = img_src;

  var month_entry_index = month_entry.length - 1;
  if (month_entry_index < 0) month_entry_index = 1;
  entry = month_entry[month_entry_index];
  img_src = entry[0];
  preload_array[0].src = img_src;

  month_entry_index = entry_pos + 1;
  if (month_entry_index >= month_entry.length - 1) month_entry_index = 1;
  entry = month_entry[month_entry_index];
  img_src = entry[0];
  preload_array[2].src = img_src;

  id.hide("pic");
}
