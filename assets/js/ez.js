var ez = {
  get_ele: function(id) {
    return document.getElementById(id);
  },
  hide: function(id) {
    ez.get_ele(id).style.display = "none";
  },
  show: function(id) {
    ez.get_ele(id).style.display = "block";
  },
  init: function(num_screens) {
    ez.get_ele("summary").style.height = screen.height;
    ez.get_ele("summary").style.width = screen.width;
    ez.hide('top_bar');
    ez.hide('project_selection');
    ez.hide('summary');
    ez.hide('create_project');
    for (var i = 1; i <= num_screens; i++) {
      ez.hide('s'+i);
    }
  },
  c: function(id, clickfunction) {
    ez.get_ele(id).addEventListener('click', clickfunction);
  },
  unboldLinks: function(classN) {
    var elements = document.getElementsByClassName(classN);
    var i = elements.length;
    while (i--) {
      elements[i].style.fontWeight = 'normal';
    }
  }
};
