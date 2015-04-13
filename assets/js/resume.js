ez.c('ResumeLink', function() {
  ez.hide('about');
  ez.hide('projects');
  ez.hide('blog');
  ez.show('resume');
  ez.unboldLinks('linksbutton');
  this.style.fontWeight = 'bold';
});

ez.get_ele('resumeText').innerHTML = '<h2>This part of the site is under construction!</h2>';
