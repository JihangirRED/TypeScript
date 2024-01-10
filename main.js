/*
Typescrip это строго типизированный язык прогг фактически это альторнативный синтаксис JS или обьертка на дним а это значит в основе лижит обычный JS. для кождой перемнной константы, для каждого оргумента фуекции и результата этой функции для каждого класса свойтсва метода можно задать тип. Если задать типизатцию для всех элементов, еще на стадии написания кода можно легко отследить где конкоетно произошла ошибка
*/
// let thisBoolean: boolean = true;
// thisBoolean = false;
// данный тип нужен для опр отсутсвуюших типов. Как мы видим в функции нету returна , значит она возрощает какое то значение, следовательно результат выполнения функции это отсутствующий тип, который мы указали
// var num: void;
// function abc(a, b, c) {
//   a + b + c;
// }
// abc(1, 2, 3);
// any
var num2;
// let user: TypeUser;
// let user: TypeUser = {
//   name: "jhon",
//   age: 23,
//   address: "bishkek",
// };
var user = {
    name: "jhon",
    age: 23,
};
var address = {
    city: "Almata",
    country: "Kazakstan",
};
// let common ={
//     ...user,
//     ...address,
// }
// let common: TypeUser & TypeAddress;
// common = {
//   ...address,
//   ...user,
// };
// типизация массивов
var arr;
// let arr2:Array<string> // старый способ
arr = ["3232", "bdb"];
// массив который можно прочитывать нелья изменить
var arr2 = [1, 2, 3, 4];
arr2[0];
var arr3 = [1, "2", null];
function getName(name) {
    return { name: name };
}
// тиризатция стрелочной функции
var getName2 = function (name) {
    return { name: name };
};
var getName3 = function (name) {
    return { name: name };
};
console.log("hello");
function creatAnimal(name, sound) {
    return {
        name: name,
        makeSound: function () {
            console.log(sound);
        },
    };
}
var dog = creatAnimal("dogy", "Woof!");
dog.makeSound();
