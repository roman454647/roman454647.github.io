var arr =[];

var fruits =["apple","melon","smth"];
//pop
var fruits = ["Яблоко", "Апельсин", "Груша"];

alert( fruits.pop() ); // удалили "Груша"

alert( fruits );
//push
var fruits = ["Яблоко", "Апельсин"];

fruits.push("Груша");

alert( fruits );

var arr = ["Яблоко", "Апельсин", "Груша"];

for (var i = 0; i < arr.length; i++) {
  alert( arr[i] );
}
//вивід мамсиву з дирами
var a = [];
a[0] = 0;
a[5] = 5;

alert( a );

//нюанси length

var arr = [1, 2, 3, 4, 5];

arr.length = 2; // укоротить до 2 элементов
alert( arr ); // [1, 2]

arr.length = 5; // вернуть length обратно, как было
alert( arr[3] );

var arr = new Array("Яблоко", "Груша", "и т.п.");
