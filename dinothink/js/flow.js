ez.init();

/* Dennis main animation */
miscAnimation[4].preload();
miscAnimation[4].display();
miscAnimation[4].animate();

/* Bubble overlay animation */
miscAnimation[1].preload();
miscAnimation[1].display();
miscAnimation[1].animate();

ez.c('new_project', function(event) {
  ez.show('create_project');
});

ez.c('project_name_exit', function(event) {
  ez.hide('create_project');
});

ez.c('b_step_start_timer', function(event) {
  Timer.start(function(){
    //changeInstr();
    var popuptext = "<strong>Time's up!</strong><br><br>Let's move on!";
    changePopupText(popuptext);
    ez.show("bubble-overlay");
    showPhotoCapture();
  });
  ez.hide('b_step_start_timer');
});
// click start for a new project
ez.c('overlay_start', function(event) {
  project_name = ez.get_ele("project_name_form").elements[0].value;
  file.createDir('DesignThinking/' + project_name);
  project_path = 'DesignThinking/' + project_name;
  ez.hide('startup');
  currStep = 'e_start';
  nextStep();
  stepName = 'empathy';
  counterColorStep(currStepNum);
  		toolbox.populate_tools();
		hideAllTools();
  changeInstr();
  ez.hide('create_project');
  ez.show('topbar');
  ez.show('step_one_page');
  ez.show('step_instr');
  ez.show('step-bar-container');
});

ez.c('open_project_exit', function(event) {
  ez.hide('project_selection');
});

ez.c('op_OK', function(event) {
  if (selectedproject > '') {
    ez.hide('project_selection');
    ez.hide('startup');
    ez.show('summary');
    file.getFiles(selectedproject);
    var deselect = document.getElementsByClassName('projectdiv');
    for (var v=0; v < deselect.length; v++) {
      deselect[v].style.backgroundColor = 'white';
      deselect[v].style.color = 'black';
    }
  }
});

function hideClass(myClass){
	var toHide = document.getElementsByClassName(myClass);
    for (var v=0; v < toHide.length; v++) {
        toHide[v].style.display = 'none';
    }
}

function showClass(myClass){
	var toShow = document.getElementsByClassName(myClass);
    for (var v=0; v < toShow.length; v++) {
        toShow[v].style.display = 'block';
    }
}

function hideAllTools(){
	hideClass('empathy-tool');
	hideClass('define-tool');
	hideClass('ideate-tool');
	hideClass('prototype-tool');
	hideClass('test-tool');
}
function changeClass(myElement, myClass){
	ez.get_ele(myElement).className = myClass;
}


// change color of step counter
function circleColor(one, two, three, four, five){
	if (one){
		ez.get_ele("circle-one").style.backgroundColor = scc1;
	}
  if (two){
		ez.get_ele("bar-one").style.borderColor = scc1;
		ez.get_ele("circle-two").style.backgroundColor = scc2;
	}

	if (three){
		ez.get_ele("bar-two").style.borderColor = scc2;
		ez.get_ele("circle-three").style.backgroundColor = scc3;
	}

	if (four){
		ez.get_ele("bar-three").style.borderColor = scc3;
		ez.get_ele("circle-four").style.backgroundColor = scc4;
	}

	if (five){
		ez.get_ele("bar-four").style.borderColor = scc4;
		ez.get_ele("circle-five").style.backgroundColor = scc5;
	}
}

function counterColorStep(stepNum){
	switch (stepNum){
		case 0:
			circleColor(0,0,0,0,0);
		break;
		case 1:
			circleColor(1,0,0,0,0);
		break;
		case 2:
			circleColor(1,1,0,0,0);
		break;
		case 3:
			circleColor(1,1,1,0,0);
		break;
		case 4:
			circleColor(1,1,1,1,0);
		break;
		case 5:
			circleColor(1,1,1,1,1);
		break;
		default:
			circleColor(0,0,0,0,0);

	}
}

function hideButtons(){
	// instruction buttons
	ez.hide("b_step_instr");
	ez.hide("b_step_vid_voice_rec");
	ez.hide("b_step_int_questions");
	ez.hide("b_step_take_pic");
	ez.hide("b_step_toolbox");
	ez.hide("b_step_end");

	// vid/voice rec buttons
	ez.hide("b_step_int_questions_2");
	ez.hide("b_step_time_up");
	ez.hide("b_step_vid_rec");
	ez.hide("b_step_voice_rec");

	// toolbox buttons
	ez.hide("b_toolbox_done");

	// photo capture buttons
	// ez.hide("b_take_pic");
	// ez.hide("b_pic_next");

	// timer buttons
	ez.hide("b_timer_done");
}




// function to easily show/hide the main buttons
function dispStepButton(nextStep){
	ez.get_ele("b_step_instr").style.display = nextStep;
}
function dispRec(rec){
	ez.get_ele("b_step_vid_voice_rec").style.display = 'inline-block'; //rec;
}
function dispQuest(quest){
	ez.get_ele("b_step_int_questions").style.display = 'inline-block'; //quest;
}
function dispQuest2(quest2){
	ez.get_ele("b_step_int_questions_2").style.display = 'inline-block'; //quest2;
}
function dispPic(pic){
	ez.get_ele("b_step_take_pic").style.display = 'inline-block'; //pic;
}
function dispTool(tool){
	ez.get_ele("b_step_toolbox").style.display = 'inline-block'; //tool;
}
function dispTimeUp(timeUp){
	ez.get_ele("b_step_time_up").style.display = timeUp;
}
function dispVid(vid){
	ez.get_ele("b_step_vid_rec").style.display = 'inline-block'; //vid;
}
function dispVoice(voice){
	ez.get_ele("b_step_voice_rec").style.display = 'inline-block'; //voice;
}
function dispToolDone(toolDone){
	ez.get_ele("b_toolbox_done").style.display = toolDone;
}
function dispTakePic(take){
	ez.get_ele("b_take_pic").style.display = 'inline-block'; //take;
}
function dispPicNextStep(next){
	ez.get_ele("b_pic_next").style.display = next;
}
function dispTimerDone(timeUp){
	ez.get_ele("b_timer_done").style.display = timeUp;
}
function dispEnd(allDone){
	ez.get_ele("b_step_end").style.display = allDone;
}



// step headers

function changeTimeLimitHeader(myTitle){
	ez.get_ele("step_time_limit").textContent = myTitle;
}
function toggleTimerOn(){
	//ez.get_ele("time-icon").src = "img/hourglass.png";
	ez.get_ele("time-icon").src = "img/main/timer-active.png";
}
function toggleTimerOff(){
	//ez.get_ele("time-icon").src = "img/hourglassG.png";
	ez.get_ele("time-icon").src = "img/main/timer-inactive.png";
}

function changeTitle(myTitle){
	ez.get_ele("step_title").innerHTML = myTitle;
	ez.get_ele("photo_capture_title").innerHTML = myTitle;
}
function changeText(myText){
	ez.get_ele("step_text").innerHTML = myText;
}
function changeButtonText(myButtonText){
	ez.get_ele("b_step_instr").innerHTML = "<h2>"+myButtonText+"</h2>";
}
function changePic(myPic){
	ez.get_ele("step_pic").src = myPic;
}

function changePopupText(text) {
  ez.get_ele("bubble-text").innerHTML = text;
}

// click buttons for instruction page
ez.c("next-button", function(event){
	changeInstr();
});
ez.c("b_step_vid_voice_rec", function(event){
	showRec();
});
ez.c("b_step_take_pic", function(event){
	showPhotoCapture();
});
ez.c("b_step_end", function(event){
	restartHome();
});

//button for viewing Design Thinking questions
function viewQuestions(event) {
  showQuestions();
	var textFile = "questions.txt";

	jQuery.get(textFile, function (textFileData) {
            var EachLineInTextFile = textFileData.responseText.split("\n");
            for (var i = 0, len = EachLineInTextFile.length; i < len; i++) {
                textStorage = EachLineInTextFile[i];
                //STORE_TO_REPLACE: I would have to the entire format of your file to do this.
            }

            textPrint = document.getElementById("questions_container").innerHTML =
            	textStorage;

        });
}

ez.c("b_step_int_questions",viewQuestions);
ez.c("b_step_int_questions_2",viewQuestions);

//button for closing Design Thinking questions
ez.c("questions_exit_button", function(event){
	hideQuestions();
});



ez.c("b_toolbox_done", function(event){
	showPhotoCapture();
});
ez.c("b_step_voice_rec", function(event){
	showVoiceRec();
});
ez.c("start_voice_rec", function(event){
	if (!recording_voice & allow_voice_rec)
		startVoiceRec();
});
ez.c("b_step_vid_rec", function(event){
	showVidRec();
});
ez.c("start_vid_rec", function(event){
	if (allow_vid_rec)
		startVidRec();
});
ez.c("b_step_time_up", function(event){
	ez.hide("vid_voice_rec");
	ez.hide("vid_rec");
	ez.hide("voice_rec");
	ez.show("step_instr");
    ez.show('step_pic');

	// reset voice page parameters
	recording_voice = false;
	allow_voice_rec = true;
	allow_vid_rec = true;
	ez.get_ele("start_voice_rec").style.backgroundColor = "#ea4e4e";
	ez.get_ele("start_vid_rec").style.backgroundColor = "#ea4e4e";
	ez.get_ele("start_voice_rec_word").innerHTML = "<h3>Record</h3>";
	ez.get_ele("voice_rec_timer_pic").src = "img/empathy/interview-animation/1.png";

	changeInstr();
});
ez.c("b_step_toolbox", function(event){
	showToolbox();
});
ez.c("b_toolbox_done", function(event){
	showPhotoCapture();
});

// photo capture buttons
ez.c("b_take_pic", function(event){
	capturePhoto();
});
ez.c("b_pic_next", function(event){
	ez.hide("photo_capture");
	ez.show("step_instr");
  ez.show('step_pic');

	changeInstr();
});
ez.c("start_timer", function(event){
	if (!timer_on & allow_timer)
		startTimer();
});

ez.c("b_timer_done", function(event){
	timer_on = false;
	allow_timer = true;
	ez.get_ele("start_timer").style.backgroundColor = "#ea4e4e";
	ez.get_ele("start_timer_word").innerHTML = "<h3>Start Timer</h3>";
	ez.hide("timer");
	ez.show("step_pic_div");
	ez.get_ele("timer_pic").src = "img/ideate/timer/1.png";

	changeTimeLimitHeader(" ");
	toggleTimerOff();

	var text = "Now, take pictures of any notes or sketches you made for this step. ";
	changeText(text);
	dispPic("block");
});



// change content of instruction page
function changeInstr(){
	var title;
	var text;
	var pic;
	var buttonText;

	switch(currStep){
		case 'e_start':
      ez.show("bubble-overlay");
			stepName = 'empathy';

      ez.show("next-button");
      ez.show("next-button-bottomflap");
			toggleTimerOff();
			dispStepButton("block");
			title = "Interview";
			text = 	"In this initial step, you will get to understand the user by asking <p id='oequestions' style='display:inline-block;position:static;color:#35b7e5;font-weight:bold;line-size:5vw;margin:0;padding:0;'><strong>open-ended questions</strong></p>.";
			pic = "img/empathy/interview/1.png";
			changeTitle(title);
			changeText(text);
      ez.c('oequestions',function() {
        //This should popup the dinosaur with the chat bubble
        //explaining what "open-ended questions" are.
        var popuptext = "An <strong>open-ended question</strong> doesn't have just one answer, like a <b>Yes</b> or a <b>No</b>.<br><br><strong>Open-ended questions</strong> start with words like <b>What? Why?</b> or <b>Why not?</b>";
        changePopupText(popuptext);
        ez.show("bubble-overlay");
      });
			changePic(pic);
      record_time_limit = time_for_step["interview"];
      Timer.reset();
			toggleTimerOn();

			hideButtons();
			dispQuest("block");


			currStep='e_int2';
		break;
		case 'e_int2':
      ez.hide('next-button');
			title = "Interview";
			text = "<strong><font size='4vw'>GOAL: </font></strong> Get your partner to tell you as many stories as they can within the time limit!";
			pic = "img/empathy/interview/2.png";
			changeTitle(title);
			changeText(text);
      record_time_limit = time_for_step["interview"];
      Timer.reset();
			toggleTimerOn();

			hideButtons();
			dispQuest("block");
			dispRec("block");

			currStep='d_start';
		break;
		case 'e_tool1':
			title = "";
			text = 	"Now that you've got all this info, it's time to put it all into perspective. " +
				"You've got several tools at your disposal. Select each to learn about them " +
				"and touch ready when you've chosen one you like!";
			pic = "img/empathy/tool/1.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
      record_time_limit = 180;
      Timer.reset();
			toggleTimerOn();

			hideButtons();
			hideAllTools();
			showClass('empathy-tool');
			dispTool("block");

			currStep='d_start';
		break;
		case 'd_start':
      ez.show("next-button");
      ez.show("bubble-overlay");
      var popuptext = "<strong>Well done!</strong> <br><br>You've finished the first step and have gotten to know your partner better. Let's continue our journey and move on to the <strong>define</strong> stage!"
      changePopupText(popuptext);
			nextStep();
			stepName = 'define';
			counterColorStep(currStepNum);
			e_complete = true;

			title = "Define";
			text = 	"In this second step you will use what you've learned in the previous step to <strong>define a problem</strong>. You should work closely with your partner in this stage to make sure you define the correct problem.";
			pic = "img/define.png";
			changeTitle(title);

			changeText(text);
			changePic(pic);
			changeTimeLimitHeader("");
			toggleTimerOff();

			hideButtons();

			currStep='d_goal';
		break;
    case 'd_goal':
      text = "<strong><font size='4vw'>GOAL: </font></strong> Create a statement that <strong>clearly</strong> states your partner's problem. Make sure to get to the <strong>root of the problem</strong> and not just scratch the surface.";
      changeText(text);
      hideButtons();
      ez.hide("next-button");
      ez.show("b_step_start_timer");
      record_time_limit = time_for_step["define"];
      Timer.reset();
      ez.show("b_step_start_timer");
      ez.hide("next-button");
      toggleTimerOn();
      currStep='d_fillin1';
      break;
		case 'd_fillin1':

      ez.show("next-button");
			title = "Identify";
			text = 	"Identify your partner's problem. Keep it short and sweet. Then fill it in below:";
			pic = "img/define/identify/1.png";
			buttonText = "Submit";
			ez.show("define_form");
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeButtonText(buttonText);
			changeTimeLimitHeader(" ");
			toggleTimerOff();

			hideButtons();

			currStep='d_fillin2';
		break;
		case 'd_fillin2':
			var client_name = ez.get_ele("name").elements[0].value;
			var client_problem = ez.get_ele("need").elements[0].value;
			var client_reason = ez.get_ele("insight").elements[0].value;
			ez.hide("define_form");
      ez.show("next-button");
			title = "Problem Identified";
			text = 	"Here's what you came up with: ";
			pic = "img/define/identify-animation/1.png";

			changeTitle(title);
			changeText(text);
			changePic(pic);

      var define_statement_text = client_name + " needs a way to " + client_problem + " because " + client_reason;
			define_statement.textContent = define_statement_text;
			define_statement.style.fontSize = "7.5vw";
			define_statement.style.textAlign = "center";
			document.getElementById("step_text").appendChild(define_statement);
      var d = getDateFormat();
      file.createFile('DesignThinking/' + project_name + '/' + d + 'define' + '.txt',define_statement_text);

			hideButtons();

			currStep='i_start';
		break;
		case 'i_start':
			nextStep();
      ez.show("bubble-overlay");
      var popuptext = "<strong>Nice!</strong><br><br>Only three steps left! Our next destination is the <strong>ideate</strong> step.<br><br>Come on, let's go!";
      changePopupText(popuptext);
			stepName = 'ideate';
			counterColorStep(currStepNum);
			d_complete = true;

			title = "Ideate";
			text = 	"Now that you have defined the problem, it's time to come up with some solutions! ";
			pic = "img/ideate.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeTimeLimitHeader(" ");
			toggleTimerOff();

			hideButtons();

			currStep='i_tool1';
		break;
		case 'i_tool1':
			title = "Solutions";
			text = 	"<strong><font size='4vw'>GOAL: </font></strong>Come up with <strong>as many solutions as possible</strong> to the problem you defined in the define step!";
			pic = "img/ideate/sketch-animation/1.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
      record_time_limit = time_for_step["ideate_solutions"];

      ez.show("b_step_start_timer");
      ez.hide("next-button");
      Timer.reset();

      toggleTimerOn();

			hideButtons();
			hideAllTools();

			currStep='i_feedback';
		break;
		case 'i_feedback':
			title = "Feedback";
			text = 	"<strong><font size='4vw'>GOAL: </font></strong>Show your partner your solutions and see which solutions work. Make sure to know why your solutions don't work so you can <strong>improve</strong> them!";
			pic = "img/ideate/feedback/1.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
      record_time_limit = time_for_step["ideate_feedback"];
      Timer.reset();
      ez.show("b_step_start_timer");
      ez.hide("next-button");
      toggleTimerOn();

			hideButtons();

			currStep='i_revise';
		break;
		case 'i_revise':
			title = "Revise";
			text = 	"No one can get it right the first time!<br><br><strong><font size='4vw'>GOAL: </font></strong>Use the feedback from before to come up with an even more <strong>awesome</strong> idea!";
			pic = "img/ideate/feedback-animation/1.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
      record_time_limit = time_for_step["ideate_revise"];
      Timer.reset();
      ez.show("b_step_start_timer");
      ez.hide("next-button");
      toggleTimerOn();

			hideButtons();

			currStep='p_start';
		break;
		case 'i_complete':
			title = "Ideate Done";
			text = 	"You have now come up with a great solution! Let's see what's next...";
			pic = "img/ideate.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeTimeLimitHeader(" ");
			toggleTimerOff();

			hideButtons();
			changeClass("b_step_instr", "next_step_button_div");

			currStep='p_start';
		break;
		case 'p_start':
      var popuptext = "Have you come up with some <strong>super awesome</strong> ideas? We will see!<br><br>Don't give up now! There are only two steps left. Our next destination will be the <strong>prototype</strong> step.<br><br>Let's go!";
      ez.show("bubble-overlay");
      changePopupText(popuptext);
			nextStep();
			stepName = 'prototype';
			counterColorStep(currStepNum);
			i_complete = true;

			title = "Prototype";
			text = 	"The only way to do it is to do it! So let's grab some materials and do something <strong>amazing</strong>! Any materials are fine.";
			pic = "img/prototype.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeTimeLimitHeader(" ");
			toggleTimerOff();
      ez.show("next-button");

			hideButtons();
			changeClass("b_step_instr", "page_content_button_div");

			currStep='p_tool1';
		break;
		case 'p_tool1':
			title = "Build";
			text = 	"<br><br><strong><font size='4vw'>GOAL: </font></strong>Create a <strong>prototype</strong>! Don't worry if you don't have many tools. The prototype can be a <strong>symbol</strong> or even a <strong>drawing</strong> of your idea.";
			pic = "img/prototype/build/1.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
      record_time_limit = time_for_step["prototype_build"];
      Timer.reset();
      ez.show("b_step_start_timer");
      ez.hide("next-button");
			toggleTimerOn();

			hideButtons();
			hideAllTools();
			showClass('prototype-tool');

			currStep='t_start';
		break;
		case 'p_complete':
			title = "Prototype Done";
			text = 	"Congrats on building your prototype! Only one step left, so let's move on!";
			pic = "img/prototype/build-animation/1.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeTimeLimitHeader(" ");
			toggleTimerOff();

			hideButtons();
			changeClass("b_step_instr", "next_step_button_div");

			currStep='t_start';
		break;
		case 't_start':
      ez.show("bubble-overlay");
      var popuptext = "Yay!<br>You just finished building your <strong>prototype!</strong><br><br> There's only one more step. Let's not waste time and move on to the last step; the <strong>test</strong> step!";
      changePopupText(popuptext);
			nextStep();
			stepName = 'test';
			counterColorStep(currStepNum);
			p_complete = true;

			title = "Test";
			text = 	"Give your user the full experience! " +
					"You will have to show and demonstrate your prototype to your partner in this step.";
			pic = "img/test.png";
			buttonText = "Start!";
			changeButtonText(buttonText);
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeTimeLimitHeader(" ");
			toggleTimerOff();


      ez.show("next-button");
			hideButtons();
			changeClass("b_step_instr", "page_content_button_div");

			currStep='t_tool1';
		break;
		case 't_tool1':
			title = "Test";
			text = 	"<strong><font size='4vw'>GOAL: </font></strong>Make sure your partner <strong>completely</strong> understands you and how your prototype works!";
			pic = "img/test/solution-animation/1.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
      record_time_limit = time_for_step["test"];
      Timer.reset();
      ez.show("b_step_start_timer");
      ez.hide("next-button");
			toggleTimerOn();

			hideButtons();
			hideAllTools();
			showClass('test-tool');

			currStep='end';
		break;
		case 't_complete':
			title = "Test Done";
			text = 	"You're now finished testing your product!";
			pic = "img/test.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeTimeLimitHeader(" ");
			toggleTimerOff();

			hideButtons();

			currStep='end';
		break;
		case 'end':
			t_complete = true;

			title = "Congratulations!";
			text = 	"Hope you came up with some great solutions! "+
					"You will be able to review your process from the \'Open Project\' menu button at the main menu.";
			pic = "img/main/dennis.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
      nextStep();
      ez.hide("next-button");
      changeTimeLimitHeader(" ");
      toggleTimerOff();
			hideButtons();
			dispEnd("block");

			currStep='start';
		break;
		default:
      break;
	}

}

// after clicking on the vid/voice record button from instruction page
function showRec(){
	ez.show("step_instr");
  text = "You can choose to use either <strong>video recording</strong> or <strong>voice recording</strong> to record your interview process.";
  changeText(text);
	ez.show("vid_voice_rec");

	hideButtons();
	dispVid("block");
	dispVoice("block");
	dispQuest2("block");
}
// after clicking on the voice record button on vid/voice page
function showVoiceRec(){
  miscAnimation[0].preload();
  miscAnimation[0].display();
  ez.hide('step_instr');
  ez.hide('step_pic');
	ez.show("voice_rec");
	hideButtons();
	dispQuest2("block");
}
// after clicking on start voice record button
function startVoiceRec(){
  Timer.start(function(){});
	recording_voice = true;
	allow_voice_rec = false;
	ez.get_ele("start_voice_rec").style.backgroundColor = "gray";
	ez.get_ele("start_voice_rec_word").innerHTML = "<h3>" + record_time_limit + " secs</h3>";

	// after time is up, go to next instruction
	hideButtons();
  ez.show("b_step_int_questions_2");
	recordAudio();
}

// after clicking on the vid record button on vid/voice page
function showVidRec(){
  ez.hide('step_instr');
  ez.hide('step_pic');
  ez.show("vid_rec");
  hideButtons();
  dispQuest2("block");
}
// after clicking on start voice record button
function startVidRec(){
	//recording_voice = true;
	allow_vid_rec = false;
	ez.get_ele("start_vid_rec").style.backgroundColor = "gray";

	// after time is up, go to next instruction
	hideButtons();
	captureVideo();
	dispTimeUp("block");
}

// after clicking on the toolbox button from instruction page
function showToolbox(){
	ez.hide("step_instr");
	ez.show("tool_box");

	hideButtons();
	// after tool is done being used, take a picture
	dispToolDone("block");
}

//after clicking on the questions button
function showQuestions(){
	ez.show("questions_selection");

}

function hideQuestions(){
	ez.hide("questions_selection");
}

// show the photo capture div
function showPhotoCapture(){
	ez.hide("step_instr");
	ez.hide("tool_box");
	ez.show("photo_capture");
	ez.show("pic_page");

	hideButtons();
	changeTimeLimitHeader(" ");
	toggleTimerOff();
	dispTakePic("block");
	// change to instructions page
	dispPicNextStep("block");
}

// after clicking on the timer button
function startTimer(){
	timer_on = true;
	allow_timer = false;
	ez.get_ele("start_timer").style.backgroundColor = "gray";
	ez.get_ele("start_timer_word").innerHTML = "<h3>" + record_time_limit + " secs</h3>";
	// after time is up
	hideButtons();
	startTimerCount(record_time_limit);
}

// shows explanation of the application
ez.c('whatis_button', function(event) {
  ez.show('overlay_whatis_container');
});
ez.c('whatis_button_close', function(event) {
  ez.hide('overlay_whatis_container');
});

// what to do at the end of everything
function restartHome(){
	currStep = 0;
	counterColorStep(currStep);
	hideButtons();
	ez.hide("step_one_page");
	ez.hide("step_instr");
  ez.hide('topbar');
  ez.hide('header_bar_TEST');
	ez.show("startup");
  ez.get_ele('circle-one').style.backgroundColor = '#848484';
  ez.get_ele('bar-one').style.borderColor = 'white';
  ez.get_ele('circle-two').style.backgroundColor = '#848484';
  ez.get_ele('bar-two').style.borderColor = 'white';
  ez.get_ele('circle-three').style.backgroundColor = '#848484';
  ez.get_ele('bar-three').style.borderColor = 'white';
  ez.get_ele('circle-four').style.backgroundColor = '#848484';
  ez.get_ele('bar-four').style.borderColor = 'white';
  ez.get_ele('circle-five').style.backgroundColor = '#848484';
  var popuptext = "Welcome to <strong>Dino Think!</strong> <br><br> There are <strong>5</strong> steps total. Each step is <strong>timed</strong> and the time for each step will be shown at the bottom. If you are unsure what <strong>colored</strong> terms are then try clicking them for an explanation!<br><br>Now we're ready so grab a partner and let's start our journey with <strong>Empathy</strong> first!";
  changePopupText(popuptext);
  resetTopBar();
}
