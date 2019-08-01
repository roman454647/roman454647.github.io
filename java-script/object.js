var person ={};
person.name ='ВАСЯ';
person.age =25;

alert(person.name + ':' +person.age);

delete(person.age);

var menu = {
  width: 300,
  height: 200,
  title: "Menu"
};


//перебір властивостей в об'єкті
for (var key in menu) {


  alert( "Ключ: " + key + " значение: " + menu[key] );
}

//задачка 1
function isEmpty(obj) {
  for(var key in obj){
    return false;
  }
  return true;
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "wake_up";

alert( isEmpty(schedule) ); // false

//задачка 2
"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var totalSalaries =0;
for(var key in salaries){
  if(key != undefined){
  totalSalaries +=salaries[key]
}
}
