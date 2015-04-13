ez.c('ProjectsLink', function() {
  ez.hide('about');
  ez.hide('resume');
  ez.hide('blog');
  ez.show('projects');
  ez.unboldLinks('linksbutton');
  this.style.fontWeight = 'bold';
});

ez.get_ele('projectsText').innerHTML = '<h2>This part of the site is under construction!</h2>';
