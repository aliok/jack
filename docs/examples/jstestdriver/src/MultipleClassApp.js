var myApp = {};

myApp.AppView =  function () {

    this.updateScoreView = function(value){
        //not implemented since this is not a real app

    };

    this.updateRemainingQuestionsView = function(value){
        //not implemented since this is not a real app
    };

};



myApp.AppController =  function (appView) {

    var score = 0;
    var remainingQuestions = 10;


    this.answerQuestion = function(isCorrect){
        if(isCorrect)
            score++;
        else
            score--;

        remainingQuestions--;

        appView.updateScoreView(score);
        appView.updateRemainingQuestionsView(remainingQuestions);
    };

};
