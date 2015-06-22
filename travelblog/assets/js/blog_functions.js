var blog = {
  /*
  * @param: blog_entries[]
  *
  * blog_entries[]: Array with all string-styled blog entries.
  *
  */
  load: function(blog_entries) {
    if (blog_entries.length > 0) {
      var blog = [];
      /*
      * Latest blog entry should be at the end of the array, so we
      * load the array backwards so newer content is at the beginning.
      */
      for (var i = blog_entries.length - 1; i >= 0; i--) {
        var blog_pos = blog_entries - i;
        /*
        * Each blog entry is a new div so we have the freedom to add headers
        * and pictures.
        */
        blog[blog_pos] = id.create("div");

        /*
        * Add content to current empty object div.
        * Add class
        */
        blog[blog_pos].innerHTML = blog_entries[i];
        blog[blog_pos].className = "blog_entry";

        /*
        * Start loading content to website so that users can always view the
        * latest content first.
        */
        id.append("blog",blog[blog_pos]);
      }

      return blog;
    }
  },
  /*
  * @param: target_ID, side, src, size[2]
  *
  * target_ID: ID of the target you wish to add the picture to.
  *
  * side: Sets where the picture should be. Either 'left', 'right', or default.
  *       The default side would simply cause the picture to use the whole row
  *       and to be centered with text only being below or above.
  *
  * src: The location of the image.
  *
  * size[2]: String size of the image with the format of
  *          size[2] = {width,height}.
  *
  * Example usage: blog.addPic("blog", "left", "C:/folder", {"100px","50%"});
  */
  addPic: function(target_ID, side, src, size) {
    var img = document.createElement("img");
    img.src = src;
    img.setAttribute("width", size[0]);
    img.setAttribute("height", size[1]);

    switch (side) {
      case "left":
        img.setAttribute("style", "float:left");
        break;
      case "right":
        img.setAttribute("style", "float:right");
        break;
      default:
        img.setAttribute("style","position:static;margin-left:auto;margin-right:auto");
        break;
    }
    id.append(target_ID, img);
  },
  addEntry: function(entry) {
    blog_entry[blog_entry.length] = entry;
  }
}
