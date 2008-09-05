

describe('Integration with Scriptaculous testrunner',{
	before_each: function() {
		window.Test = { Unit: { Runner: {} } };
	}
	,
	after_each: function() {
		window.Test = null;
	}
	,
	'Should know when Scriptaculous is not in environment': function() {
		window.Test = null;
		value_of(jack.env.isScriptaculous()).should_be_false();
	}
	,
	'Should know when Scriptaculous is in environment': function() {
		value_of(jack.env.isScriptaculous()).should_be_true();
	}
	,
	'Should report to fail() function from provided TestCase': function() {
		window.globalFunction = function() {};
		var actualFailureMessage = null;
		var mockTestCase = {
			fail: function(message) { actualFailureMessage = message; }
		}
		
		jack(mockTestCase, function(){
			jack.expect("globalFunction").once();
		});
		
		value_of(actualFailureMessage).should_be("Expectation failed: globalFunction() was expected exactly 1 time(s), but was called 0 time(s)");
		window.globalFunction = null;
	}
});