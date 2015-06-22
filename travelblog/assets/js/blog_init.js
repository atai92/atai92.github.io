/*
* Load all blog entries.
*/
var blog = blog.load(blog_entries);
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

function sidebar_on() {
  id.show("sidebar");
  id.rclick("circle_icon", sidebar_on);
  id.click("circle_icon", sidebar_off);
}

function sidebar_off() {
  id.hide("sidebar");
  id.rclick("circle_icon", sidebar_off);
  id.click("circle_icon", sidebar_on);
}
id.click("circle_icon", sidebar_on);
