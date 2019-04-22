(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.button1 = function() {
	this.initialize(img.button1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,49);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,50);


(lib.ScreenShot20190419at20450PMpngcopy = function() {
	this.initialize(img.ScreenShot20190419at20450PMpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,42);


(lib.ScreenShot20190422at74532AMpngcopy = function() {
	this.initialize(img.ScreenShot20190422at74532AMpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,643,761);


(lib.ScreenShot20190422at75123AM = function() {
	this.initialize(img.ScreenShot20190422at75123AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,642,760);


(lib.ScreenShot20190422at75413AM = function() {
	this.initialize(img.ScreenShot20190422at75413AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,41);


(lib.ScreenShot20190422at75450AM = function() {
	this.initialize(img.ScreenShot20190422at75450AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,45);


(lib.ScreenShot20190422at75854AM = function() {
	this.initialize(img.ScreenShot20190422at75854AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,759);


(lib.ScreenShot20190422at80722AM = function() {
	this.initialize(img.ScreenShot20190422at80722AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,762);


(lib.ScreenShot20190422at80838AM = function() {
	this.initialize(img.ScreenShot20190422at80838AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,41);


(lib.ScreenShot20190422at81131AM = function() {
	this.initialize(img.ScreenShot20190422at81131AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,646,762);


(lib.ScreenShot20190422at81151AM = function() {
	this.initialize(img.ScreenShot20190422at81151AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,33);


(lib.ScreenShot20190422at81402AM = function() {
	this.initialize(img.ScreenShot20190422at81402AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,642,761);


(lib.ScreenShot20190422at81415AM = function() {
	this.initialize(img.ScreenShot20190422at81415AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,17);


(lib.ScreenShot20190422at81645AM = function() {
	this.initialize(img.ScreenShot20190422at81645AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,19);


(lib.ScreenShot20190422at81814AM = function() {
	this.initialize(img.ScreenShot20190422at81814AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,643,760);


(lib.ScreenShot20190422at81823AM = function() {
	this.initialize(img.ScreenShot20190422at81823AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,36);


(lib.ScreenShot20190422at82200AM = function() {
	this.initialize(img.ScreenShot20190422at82200AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,657,759);


(lib.ScreenShot20190422at83613AMpngcopy = function() {
	this.initialize(img.ScreenShot20190422at83613AMpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,644,761);


(lib.Scroll = function() {
	this.initialize(img.Scroll);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,50);


(lib.TherapyOrder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190422at81645AM();
	this.instance.parent = this;
	this.instance.setTransform(-75,-12);

	this.instance_1 = new lib.ScreenShot20190422at81415AM();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-12,207,19);


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Selectform = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190422at81151AM();
	this.instance.parent = this;
	this.instance.setTransform(-80,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-16,181,33);


(lib.ScrollDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(-96,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-26,190,50);


(lib.Scroll_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Scroll();
	this.instance.parent = this;
	this.instance.setTransform(-94,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-26,190,50);


(lib.Return = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.button1();
	this.instance.parent = this;
	this.instance.setTransform(-65,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-26,130,49);


(lib.Retrive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190419at20450PMpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-46,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-22,84,42);


(lib.OtherForms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190422at80838AM();
	this.instance.parent = this;
	this.instance.setTransform(-57,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-22,114,41);


(lib.HP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190422at75413AM();
	this.instance.parent = this;
	this.instance.setTransform(-60,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-21,110,41);


(lib.Confirm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190422at81823AM();
	this.instance.parent = this;
	this.instance.setTransform(-45,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-19,93,36);


// stage content:
(lib.TestPatientForeverB1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{patientrecord:1,Agency:2,"H&P":3,patientrecord2:4,otherforms:5,TO:6,TherapyOrder:7,TO3:8,Scheduling:9});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.retrieve1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop('patientrecord');
		}
		this.retrieve1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop('patientrecord');
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		/* Click to Display a TextField
		Clicking on the specified symbol instance creates and displays a TextField at the x-coordinate and y-coordinate you specify.
		
		Instructions:
		1. Replace the value 200 with the x-coordinate where you want to position the TextField.
		2. Replace the value 100 with the y-coordinate where you want to position the TextField.
		3. Replace the string value "Lorem ipsum dolor sit amet" with the text you want to display in the TextField that appears. Keep the quotation marks.
		*/
		
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.Scrolldown1.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop('Agency');
		}
	}
	this.frame_2 = function() {
		this.stop();
		
		this.HandP.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop('H&P');
		}
	}
	this.frame_3 = function() {
		this.stop();
		
		this.Return1.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop('patientrecord2');
		}
	}
	this.frame_4 = function() {
		this.stop();
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Scrolly.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay('otherforms');
		}
	}
	this.frame_5 = function() {
		this.stop();
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.otherformbutton1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay('TO');
		}
	}
	this.frame_6 = function() {
		this.stop();
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Selectform.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay('TherapyOrder');
		}
	}
	this.frame_7 = function() {
		this.stop();
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.TO.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay('TO3');
		}
	}
	this.frame_8 = function() {
		this.stop();
		
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Confirm1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_8.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_8()
		{
			this.gotoAndPlay('Scheduling');
		}
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(2));

	// actions
	this.text = new cjs.Text("Click Retrive to open the patient record", "24px 'Times'", "#6633CC");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 300;
	this.text.parent = this;
	this.text.setTransform(477.5,106);

	this.instance = new lib.ScreenShot20190422at83613AMpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,1);

	this.Scrolldown1 = new lib.ScrollDown();
	this.Scrolldown1.name = "Scrolldown1";
	this.Scrolldown1.parent = this;
	this.Scrolldown1.setTransform(536.5,726.1);
	new cjs.ButtonHelper(this.Scrolldown1, 0, 1, 1);

	this.instance_1 = new lib.ScreenShot20190422at74532AMpngcopy();
	this.instance_1.parent = this;

	this.HandP = new lib.HP();
	this.HandP.name = "HandP";
	this.HandP.parent = this;
	this.HandP.setTransform(81,224.45);
	new cjs.ButtonHelper(this.HandP, 0, 1, 1);

	this.instance_2 = new lib.Retrive();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,-251.9);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.instance_3 = new lib.ScreenShot20190422at75450AM();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,203);

	this.instance_4 = new lib.ScreenShot20190422at75123AM();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1,1);

	this.Return1 = new lib.Return();
	this.Return1.name = "Return1";
	this.Return1.parent = this;
	this.Return1.setTransform(73,87.45);
	new cjs.ButtonHelper(this.Return1, 0, 1, 1);

	this.instance_5 = new lib.ScreenShot20190422at75854AM();
	this.instance_5.parent = this;

	this.Scrolly = new lib.Scroll_1();
	this.Scrolly.name = "Scrolly";
	this.Scrolly.parent = this;
	this.Scrolly.setTransform(535,729.9);
	new cjs.ButtonHelper(this.Scrolly, 0, 1, 1);

	this.instance_6 = new lib.HP("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(81,224.45);

	this.otherformbutton1 = new lib.OtherForms();
	this.otherformbutton1.name = "otherformbutton1";
	this.otherformbutton1.parent = this;
	this.otherformbutton1.setTransform(207.95,581.3);
	new cjs.ButtonHelper(this.otherformbutton1, 0, 1, 1);

	this.instance_7 = new lib.ScreenShot20190422at80722AM();
	this.instance_7.parent = this;

	this.Selectform = new lib.Selectform();
	this.Selectform.name = "Selectform";
	this.Selectform.parent = this;
	this.Selectform.setTransform(301.95,375.4);
	new cjs.ButtonHelper(this.Selectform, 0, 1, 1);

	this.instance_8 = new lib.ScreenShot20190422at81131AM();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,-1);

	this.TO = new lib.TherapyOrder();
	this.TO.name = "TO";
	this.TO.parent = this;
	this.TO.setTransform(285.4,428.35);
	new cjs.ButtonHelper(this.TO, 0, 1, 2, false, new lib.TherapyOrder(), 3);

	this.instance_9 = new lib.ScreenShot20190422at81402AM();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1,0);

	this.Confirm1 = new lib.Confirm();
	this.Confirm1.name = "Confirm1";
	this.Confirm1.parent = this;
	this.Confirm1.setTransform(273.5,434);
	new cjs.ButtonHelper(this.Confirm1, 0, 1, 1);

	this.instance_10 = new lib.ScreenShot20190422at81814AM();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1,2);

	this.SchedulingTOText = new lib.an_TextInput({'id': 'SchedulingTOText', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.SchedulingTOText.setTransform(313,475.9,6,3,0,0,0,50,11);

	this.instance_11 = new lib.ScreenShot20190422at82200AM();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-7,2,0.9787,1);

	this.SchedulingTO = new cjs.Text("", "24px 'Times'");
	this.SchedulingTO.name = "SchedulingTO";
	this.SchedulingTO.textAlign = "center";
	this.SchedulingTO.lineHeight = 26;
	this.SchedulingTO.lineWidth = 612;
	this.SchedulingTO.parent = this;
	this.SchedulingTO.setTransform(314,441.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:477.5,y:106,text:"Click Retrive to open the patient record",lineWidth:300}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:169,y:410.95,text:"Here you will see the patient's contact information",lineWidth:313}},{t:this.Scrolldown1}]},1).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.text,p:{x:366.5,y:180.05,text:"Click the Uploaded Documents to review the H&P!",lineWidth:300}},{t:this.instance_2},{t:this.HandP}]},1).to({state:[{t:this.instance_5},{t:this.text,p:{x:389.85,y:369.85,text:"This is where you'll find alternative contact info and medical history",lineWidth:436}},{t:this.Return1}]},1).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_6},{t:this.text,p:{x:414.85,y:157.95,text:"Now lets put in the scheduling therapy order!",lineWidth:406}},{t:this.Scrolly}]},1).to({state:[{t:this.instance_7},{t:this.otherformbutton1},{t:this.text,p:{x:380.9,y:571.8,text:"Choose Other Forms ",lineWidth:228}}]},1).to({state:[{t:this.instance_8},{t:this.text,p:{x:399.85,y:233.95,text:"Click on 'Select Form Type' to bring up the options.",lineWidth:372}},{t:this.Selectform}]},1).to({state:[{t:this.instance_9},{t:this.text,p:{x:437.85,y:263.9,text:"Select Therapy Order",lineWidth:280}},{t:this.TO}]},1).to({state:[{t:this.instance_10},{t:this.text,p:{x:437,y:280.05,text:"Finally, choose Confirm",lineWidth:340}},{t:this.Confirm1}]},1).to({state:[{t:this.instance_11},{t:this.text,p:{x:309,y:565.9,text:"The Scheduling Therapy Order should be formatted as:\n\n'spoke with (relationship) (name) to schedule (discipline) Evaluation for (date). (reason why family may have delayed Eval, if applicable).' ",lineWidth:582}},{t:this.SchedulingTOText}]},1).to({state:[{t:this.instance_11},{t:this.SchedulingTO},{t:this.text,p:{x:309,y:565.9,text:"The Scheduling Therapy Order should be formatted as:\n\n'spoke with (relationship) (name) to schedule (discipline) Evaluation for (date). (reason why family may have delayed Eval, if applicable).' ",lineWidth:582}}]},1).wait(1));

	// Layer_1
	this.retrieve1 = new lib.Retrive();
	this.retrieve1.name = "retrieve1";
	this.retrieve1.parent = this;
	this.retrieve1.setTransform(591.5,168);
	new cjs.ButtonHelper(this.retrieve1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.retrieve1).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,106.6,372,655.4);
// library properties:
lib.properties = {
	id: '487F8A3198D2463A89B71690A7CD923D',
	width: 643,
	height: 761,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/button1.png?1555968189359", id:"button1"},
		{src:"images/button.png?1555968189359", id:"button"},
		{src:"images/ScreenShot20190419at20450PMpngcopy.png?1555968189359", id:"ScreenShot20190419at20450PMpngcopy"},
		{src:"images/ScreenShot20190422at74532AMpngcopy.png?1555968189359", id:"ScreenShot20190422at74532AMpngcopy"},
		{src:"images/ScreenShot20190422at75123AM.png?1555968189359", id:"ScreenShot20190422at75123AM"},
		{src:"images/ScreenShot20190422at75413AM.png?1555968189359", id:"ScreenShot20190422at75413AM"},
		{src:"images/ScreenShot20190422at75450AM.png?1555968189359", id:"ScreenShot20190422at75450AM"},
		{src:"images/ScreenShot20190422at75854AM.png?1555968189359", id:"ScreenShot20190422at75854AM"},
		{src:"images/ScreenShot20190422at80722AM.png?1555968189359", id:"ScreenShot20190422at80722AM"},
		{src:"images/ScreenShot20190422at80838AM.png?1555968189359", id:"ScreenShot20190422at80838AM"},
		{src:"images/ScreenShot20190422at81131AM.png?1555968189359", id:"ScreenShot20190422at81131AM"},
		{src:"images/ScreenShot20190422at81151AM.png?1555968189359", id:"ScreenShot20190422at81151AM"},
		{src:"images/ScreenShot20190422at81402AM.png?1555968189359", id:"ScreenShot20190422at81402AM"},
		{src:"images/ScreenShot20190422at81415AM.png?1555968189359", id:"ScreenShot20190422at81415AM"},
		{src:"images/ScreenShot20190422at81645AM.png?1555968189359", id:"ScreenShot20190422at81645AM"},
		{src:"images/ScreenShot20190422at81814AM.png?1555968189359", id:"ScreenShot20190422at81814AM"},
		{src:"images/ScreenShot20190422at81823AM.png?1555968189359", id:"ScreenShot20190422at81823AM"},
		{src:"images/ScreenShot20190422at82200AM.png?1555968189359", id:"ScreenShot20190422at82200AM"},
		{src:"images/ScreenShot20190422at83613AMpngcopy.png?1555968189359", id:"ScreenShot20190422at83613AMpngcopy"},
		{src:"images/Scroll.png?1555968189359", id:"Scroll"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1555968189359", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1555968189359", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1555968189359", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['487F8A3198D2463A89B71690A7CD923D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;