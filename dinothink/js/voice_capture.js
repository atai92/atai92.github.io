// record audio
    function recordAudio() {
		var d = getDateFormat();
		var src = project_path + "/" + d + stepName + ".wav";

        var mediaRec = new Media(src, onSuccess, onError);

		var entry = mediaRec.fullPath;
        // Record audio
        mediaRec.startRecord();

		if(reset){miscAnimation[5].stop();miscAnimation[0].display();}
		miscAnimation[0].preload();
		miscAnimation[0].display();
		miscAnimation[0].animate();

        // Stop recording after 10 sec
        var recTime = 0;
        var recInterval = setInterval(function() {
            recTime = recTime + 1;

			//picAnimationDino1(recTime, "voice_rec_timer_pic");
			setAudioPosition("<h3>" + (record_time_limit - recTime) + " secs</h3>");

            if (recTime >= record_time_limit) {
                clearInterval(recInterval);
				        onStopVoiceRec();
                mediaRec.stopRecord();
                ez.hide("b_step_int_questions_2");
                var popuptext = "<strong>Time's up</strong>!<br><br>Let's go on! You can take pictures of any notes you took on this page.";
                changePopupText(popuptext);
                ez.show("bubble-overlay");

                showPhotoCapture();
                ez.hide("vid_voice_rec");
                ez.hide("vid_rec");
                ez.hide("voice_rec");

                // reset voice page parameters
                recording_voice = false;
                allow_voice_rec = true;
                allow_vid_rec = true;
                ez.get_ele("start_voice_rec").style.backgroundColor = "#ea4e4e";
                ez.get_ele("start_vid_rec").style.backgroundColor = "#ea4e4e";
                ez.get_ele("start_voice_rec_word").innerHTML = "<h3>Record</h3>";
                ez.get_ele("voice_rec_timer_pic").src = "img/empathy/interview-animation/1.png";
            }

        }, 1000);

    }

    // device APIs are available
    //
    function onDeviceReady() {
        recordAudio();
    }

    // onSuccess Callback
    //
    function onSuccess() {
        alert("Voice Record Saved!");
    }

    // onError Callback
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
		recording_voice = false;
		allow_voice_rec = true;

    }

function setAudioPosition(position) {
    document.getElementById('start_voice_rec_word').innerHTML = position;
}

function onStopVoiceRec(){
	recording_voice = false;
	dispTimeUp("block");
	reset = true;
	miscAnimation[5].preload();
	miscAnimation[0].stop();
	miscAnimation[5].display();
	miscAnimation[5].animate();
}
