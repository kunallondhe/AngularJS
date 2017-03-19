var creatework = function() {

  var task1 = function() {
    console.log("job1");
  };

  var task2 = function() {
    console.log("job2");
  }

  return {
    job1: task1,
    job2: task2
  };
};

var myworkobj = creatework();

myworkobj.job1();
myworkobj.job2();