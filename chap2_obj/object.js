var student = {
  name : "Jbaik",
  country : "United States",
  age : 30,
  skills : ["Ruby on Rails"],
  data : { year : 2018, month : 'Feb'},
  intro : function() {
    console.log("Hello world!")}

}

console.log(student.name);
console.log("--------------------------------");

var obj = new Object();
obj.name = "Jbaik"
obj.age = 30
delete obj.age;
console.log(obj["name"]);
console.log(obj.age);
console.log("--------------------------------");
