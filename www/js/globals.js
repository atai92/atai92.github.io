//Strings
var project_name = '';
var selectedproject = '';
var file_contents = '';
var project_path = '';

//Summary
var summary_files = [];
var summary_index = 0;
var done_reading = false;
var currstep = '';
var prevstep = '';

var file_num = 0;

//Objects
var stepcount = document.createElement("h2");
var define_statement = document.createElement("p");

// Controls
var currStep = 'start';
var currStepNum = 0;
var stepName = 'empathy';
var e_complete = false;
var d_complete = false;
var i_complete = false;
var p_complete = false;
var t_complete = false;
var recording_voice = false;
var allow_voice_rec = true;
var allow_vid_rec = true;
var timer_on = false;
var allow_timer = true;
var record_time_limit = 1;	// seconds
var time_for_step = {
	interview:1, //default: 300 seconds
	define:2, //default: 300 seconds
	ideate_solutions:3, //default: 300 seconds
	ideate_feedback:4, //default: 180 seconds
	ideate_revise:5,//default: 120 seconds
	prototype_build:6, //default: 600 seconds
	test:7 //default: 300 seconds
};

// Animation
var reset = false;

// Step Counter Colors
var scc0 = "rgb(239,239,239)";
var scc1 = "rgb(91,192,216)";
var scc2 = "rgb(70,181,104)";
var scc3 = "rgb(237,201,58)";
var scc4 = "rgb(225,145,90)";
var scc5 = "rgb(181,70,70)";

var original_toolbox_content = "Empathy Map\n" +													// 1
						"Get to know your user!\n" + "empathy-tool\n" +
						"Needs/Insights\n" +														// 2
						"Discover what your user really wants.\n" + "define-tool\n" +				
						"Free Draw\n" +																// 3
						"Draw out at least five solutions.\n" + "ideate-tool\n" +
						"Build Tips\n" +															// 4
						"See if you can use these materials to build.\n" + "prototype-tool\n" +
						"Feedback Grid\n" +															// 5
						"Think like an anthropologist, not a salesperson.\n" + "test-tool\n" +
						"Design The Box\n" +
						"A neat way to help build and present your prototype!\n" + "prototype-tool";  // 6

var original_toolbox_desc = "What does your user go through every day?\n\n"+						// 1
							"Write down notes on what they see, think, feel, and hear.\n"+
							"Be sure to identify their pain points, such as their fears or obstacles.\n"+
							"Identifying their gain points, such as wants or needs can help, too.\n@"+
							
							"Use your findings to come up with a concise problem statement.\n@"+	// 2
							
							"Come up with solutions for your user's problem.\n"+					// 3
							"Your ideas can range from simple to farfetched. You can use magic or madness. "+
							"The idea is to make sure that all ideas are welcome.\n @"+
							
							"Take a look at all of the materials you can use to build your prototype.\n"+	// 4
							"Go nuts! You can even use nuts! Or candy!\n @"+
							
							"Explain your idea to your user. Ask them for any constructive criticisms, questions, "+   // 5
							"or other ideas. Also be sure to ask them what they liked!\n@" +

							"Package your idea into a box.\n\n"+   // 6
							"What is the name of that box? Who are its customers or end users? What are its features, functions, and details?\n\n"+
							"Draw and make the box that holds your idea. What are it features? How is it used? What makes it stand out?\n";
