// record audio
    function recordAudio() {
		var d = getDateFormat();
		var src = project_path + "/" + d + stepName + ".wav";

        var mediaRec = new Media(src, onSuccess, onError);

		var entry = mediaRec.fullPath;
        // Record audio
        mediaRec.startRecord();

        // Stop recording after 10 sec
        var recTime = 0;
        var recInterval = setInterval(function() {
            recTime = recTime + 1;
			picAnimationDino1(recTime, "voice_rec_timer_pic");
			setAudioPosition(recTime + " sec");
			
            if (recTime >= record_time_limit) {
                clearInterval(recInterval);
				onStopVoiceRec();
                mediaRec.stopRecord();
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
}
	
