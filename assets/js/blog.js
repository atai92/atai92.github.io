ez.c('BlogLink', function() {
  ez.hide('about');
  ez.hide('projects');
  ez.hide('resume');
  ez.show('blog');
  ez.unboldLinks('linksbutton');
  this.style.fontWeight = 'bold';
});

ez.get_ele('blogText').innerHTML = '<h2>The blog part of the site is under construction!</h2>';
