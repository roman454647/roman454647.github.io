//CHAR DO NOT EXIST!!!
-int ,boolean,null,string,undefined,обєктиб
-Операнд – то, к чему применяется оператор.
-Унарным называется оператор,
-Бинарным называется оператор
-Унарный, то есть применённый к одному значению, плюс + ничего не делает с числами.
Но если операнд не число, унарный плюс преобразует его в число.

AND(и) ( & )
OR(или) ( | )
XOR(побитовое исключающее или) ( ^ )
NOT(не) ( ~ )
LEFT SHIFT(левый сдвиг) ( << )
RIGHT SHIFT(правый сдвиг) ( >> )
ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )

При использовании математических операторов и других операторов сравнения < > <= >=
Значения null/undefined преобразуются к числам: null становится 0, а undefined – NaN.

let i = 0; // мы уже имеем объявленную i с присвоенным значением

for (; i < 3; i++) { // нет необходимости в "начале"
  alert( i ); // 0, 1, 2
}

let i = 0;

for (; i < 3;) {
  alert( i++ );
}

for (;;) {
  // будет выполняться вечно
}

(i > 5) ? alert(i) : continue; // continue здесь приведёт к ошибке

Пример использования switch
Если break нет, то выполнение пойдёт ниже по следующим case,
при этом остальные проверки игнорируются.




Но для 3, результат выполнения prompt будет строка "3",
которая не соответствует строгому равенству === с числом 3.




У функции есть доступ к внешним переменным, например:




Внешняя переменная используется только если внутри функции нет такой локальной.





Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю.
 Например, в коде ниже функция использует локальную переменную userName.
  Внешняя будет проигнорирована:




  Основное отличие между ними: функции, объявленные как Function Declaration,
  создаются интерпретатором до выполнения кода.




  В примере выше название свойств name и age совпадают с названиями переменных,
  которые мы подставляем в качестве значений этих свойств.
  Такой подход настолько распространен, что существуют специальные короткие
свойства для упрощения этой записи.



  Вместо name:name мы можем написать просто name:




  Два объекта равны только в том случае, если это один и тот же объект.

Object.assign.

arr.indexOf(item, from) ищет item, начиная с индекса from,
 и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.
arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
arr.includes(item, from) – ищет item, начиная с индекса from,
 и возвращает true, если поиск успешен.

 Доступ к ним осуществляется через «псевдо-массив» arguments.

 Он содержит список аргументов по номерам: arguments[0], arguments[1]…,
 а также свойство length.
 Далее мы будем использовать window, полагая, что наша среда – браузер.
 Если скрипт может выполняться и в другом окружении, лучше будет globalThis.



 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//// ДЕСКРИПТОРИ ///ГЕТТЕРИ ////СЕТТЕРИ
Object.defineProperty(user, "name", {
 value: "Вася",
 writable: false, // запретить присвоение "user.name="
 configurable: false // запретить удаление "delete user.name"
});

Свойства, чьи ключи – символы, не перебираются циклом for..in
