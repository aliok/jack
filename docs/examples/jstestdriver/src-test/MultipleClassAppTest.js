MultipleClassAppTest = TestCase("MultipleClassAppTest");

MultipleClassAppTest.prototype.testCorrectAnswerShouldUpdateView = function() {
	jack(function(){

        var appView = jack.create('appView', ['updateScoreView', 'updateRemainingQuestionsView']);
        var appController = new myApp.AppController(appView);


        jack.expect("appView.updateScoreView")
            .exactly("1 time")
            .withArguments(1);

        jack.expect("appView.updateRemainingQuestionsView")
            .exactly("1 time")
            .withArguments(9);

		appController.answerQuestion(true);
	});
};

MultipleClassAppTest.prototype.testWrongAnswerShouldUpdateView = function() {
	jack(function(){

        var appView = jack.create('appView', ['updateScoreView', 'updateRemainingQuestionsView']);
        var appController = new myApp.AppController(appView);


        jack.expect("appView.updateScoreView")
            .exactly("1 time")
            .withArguments(-1);

        jack.expect("appView.updateRemainingQuestionsView")
            .exactly("1 time")
            .withArguments(9);

		appController.answerQuestion(false);
	});
};
