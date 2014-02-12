
var t = new jake.TestTask('07GeddyProblem', function () {
  this.testFiles.include('test/*.js');
  this.testFiles.include('test/**/*.js');
});

desc('Attempting to recreate a simple problem.');
task('seed', function(){

	geddy.model.log = console.log;
	geddy.model.Test.all(function(err, tests){
		if(err){
			throw err;
		}else{
			console.log("No problems here!");
		}
	});

});
