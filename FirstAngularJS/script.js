// Code goes here
var work = function() {
  console.log("Angular JS")
}

var dowork = function(f) {
//f is my parameter as a function type
console.log("started");
try {
  f();
} catch (ex) {
  console.log(ex);
}
console.log("ended");
}

dowork(work);