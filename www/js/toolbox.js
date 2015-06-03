var toolbox = {
    toolbox_files: function(filename) {
      window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
      function gotFS(fileSystem) {
          fileSystem.root.getFile(filename, null, gotFileEntry, fail);
      }

      function gotFileEntry(fileEntry) {
          fileEntry.file(gotFile, fail);
      }

      function gotFile(file){
          readAsText(file);
      }

      function readAsText(file) {
          var reader = new FileReader();
          reader.onloadend = function(evt) {
			ez.get_ele('toolbox_content').innerHTML = evt.target.result;

          };
          reader.readAsText(file);
		  
      }
	  
      function fail(error) {
        alert('error!');
          console.log(error.code);
      }
    },

	get_from_global: function(){
		ez.get_ele('toolbox_content').textContent = original_toolbox_content;
		ez.get_ele('toolbox_desc').textContent = original_toolbox_desc;
	},
	
	populate_tools: function(){
		var allTool = ez.get_ele("toolbox_content");
		var eachTool = allTool.textContent.split("\n");
		var eachDesc = ez.get_ele("toolbox_desc").textContent.split("@");

			var li = [];
			var titleDiv = [];
			var pDiv = [];
			var descDiv = [];
			var textDiv = [];
			var img = [];
			var imgDiv = [];
			var currIndex = 0;
			var num = 0;
            for (var i = 0; i < eachTool.length; i=i+3) {
				if (eachTool[i+2]){
					currIndex = i/3;
					num = currIndex + 1;
					
					if (document.getElementById('tool_number_' + num) ){
						
					} else {
					li[currIndex] = document.createElement("li");
					textDiv[currIndex] = document.createElement("div");
					imgDiv[currIndex] = document.createElement("div");
					titleDiv[currIndex] = document.createElement("h2");
					pDiv[currIndex] = document.createElement("p");
					descDiv[currIndex] = document.createElement("div");
					img[currIndex] = document.createElement("img");
					
					
					titleDiv[currIndex].textContent = eachTool[i];
					pDiv[currIndex].textContent = eachTool[i+1];
					descDiv[currIndex].textContent = eachDesc[currIndex];
					descDiv[currIndex].style.display = 'none';
					
					img[currIndex].src = 'img/tools/' + num + '.png';
					
					imgDiv[currIndex].appendChild(img[currIndex]);					
					textDiv[currIndex].appendChild(titleDiv[currIndex]);
					textDiv[currIndex].appendChild(pDiv[currIndex]);
					textDiv[currIndex].appendChild(descDiv[currIndex]);
					
					imgDiv[currIndex].className = 'toolbox_pic';
					textDiv[currIndex].className = 'toolbox_text_div';
					
					li[currIndex].appendChild(imgDiv[currIndex]);					
					li[currIndex].appendChild(textDiv[currIndex]);
					
					li[currIndex].className = 'toolbox_tool';
					li[currIndex].className += " " + eachTool[i+2];
					li[currIndex].id = 'tool_number_' + num;
					li[currIndex].addEventListener("click", function(){
						ez.get_ele('toolbox_title').textContent = this.childNodes[1].childNodes[0].textContent;
						ez.get_ele('toolbox_img').src = this.childNodes[0].childNodes[0].src;
						ez.get_ele('toolbox_text').textContent = this.childNodes[1].childNodes[2].textContent;
						ez.get_ele('toolbox_text').innerHTML = ez.get_ele('toolbox_text').innerHTML.replace(/\n\r?/g, '<br />');
						ez.show('toolbox_overlay');
					});
					
					ez.get_ele('toolbox-list').appendChild(li[currIndex]);
					}
				}
			}
	},

	change_tool: function(title, src, text){
		ez.get_ele('toolbox_title').textContent = title;
		ez.get_ele('toolbox_img').src = src;
		ez.get_ele('toolbox_text').textContent = text;
		ez.get_ele('toolbox_text').innerHTML = ez.get_ele('toolbox_text').innerHTML.replace(/\n\r?/g, '<br />');		
	}
	
}