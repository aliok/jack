var jc;
var appView;
var appController;

MultipleClassAppTestWithContextPerTestCase = TestCase("MultipleClassAppTestWithContextPerTestCase");

MultipleClassAppTestWithContextPerTestCase.prototype.setUp = function(){
    // create a separate mock context for this test case, so we don't have to define the mock objects and normal objects on every test method

    //recreate the context, mocks and instances every time before a test method, so the expectations and other stuff is cleared

    //please see MultipleClassAppTest.js to have a better understanding of the problem

    jc = createJackContext();

    appView = jc.create('appView', ['updateScoreView', 'updateRemainingQuestionsView']);
    appController = new myApp.AppController(appView);

};

MultipleClassAppTestWithContextPerTestCase.prototype.testCorrectAnswerShouldUpdateView = function() {
	jc(function(){

        jc.expect("appView.updateScoreView")
            .exactly("1 time")
            .withArguments(1);

        jc.expect("appView.updateRemainingQuestionsView")
            .exactly("1 time")
            .withArguments(9);

		appController.answerQuestion(true);
	});
};

MultipleClassAppTestWithContextPerTestCase.prototype.testWrongAnswerShouldUpdateView = function() {
	jc(function(){

        jc.expect("appView.updateScoreView")
            .exactly("1 time")
            .withArguments(-1);

        jc.expect("appView.updateRemainingQuestionsView")
            .exactly("1 time")
            .withArguments(9);

		appController.answerQuestion(false);
	});
};
