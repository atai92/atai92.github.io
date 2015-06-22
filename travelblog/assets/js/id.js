var id = {
  get: function(target_ID) {
    return document.getElementById(target_ID);
  },
  hide: function(target_ID) {
    id.get(target_ID).style.display = "none";
  },
  show: function(target_ID) {
    id.get(target_ID).style.display = "block";
  },
  append: function (parent_ID, target_OBJECT) {
    var parent = id.get(parent_ID);
    parent.appendChild(target_OBJECT);
  },
  create: function(target_TYPE) {
    return document.createElement(target_TYPE);
  },
  click: function(target_ID, click_function) {
    id.get(target_ID).addEventListener("click",click_function);
  },
  rclick: function(target_ID, click_function) {
    id.get(target_ID).removeEventListener("click", click_function);
  }
}
