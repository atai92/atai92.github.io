ez.c('AboutLink', function() {
  ez.hide('resume');
  ez.hide('projects');
  ez.hide('blog');
  ez.show('about');
  ez.unboldLinks('linksbutton');
  this.style.fontWeight = 'bold';
});
