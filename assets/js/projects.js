ez.c('ProjectsLink', function() {
  ez.hide('about');
  ez.hide('resume');
  ez.hide('blog');
  ez.show('projects');
  ez.unboldLinks('linksbutton');
  this.style.fontWeight = 'bold';
});

ez.get_ele('projectsText').innerHTML = '<h2>The projects part of the site is under construction!</h2>\
<br>TODO: Learn the ins and outs of the GitHub API.\
<br>Upload all projects onto GitHub that aren\'t already there.\
<br>Create a nice way to list all projects in this webpage with adequate details and thumbnails.\
<br>Link the above projects to their respective GitHub repos. Possibly allow for automatic updating. Possibly done by reading description from the GitHub repo\'s respective README.ME files.\
<br> \
';
