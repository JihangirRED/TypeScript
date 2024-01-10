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
// var num2;

// ! типизатция обьектов

// type TypeUser = {
//   name: string;
//   age: number;
// };
// let user: TypeUser;
// let user: TypeUser = {
//   name: "jhon",
//   age: 23,
//   address: "bishkek",
// };

// var user: TypeUser = {
//   name: "jhon",
//   age: 23,
// };

// type TypeAddress = {
//   city: string;
//   country: string;
// };
// var address: TypeAddress = {
//   city: "Almata",
//   country: "Kazakstan",
// };
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

// let arr: string[];
// let arr2:Array<string> // старый способ
// arr = ["3232", "bdb"];

// массив который можно прочитывать нелья изменить
// const arr2: ReadonlyArray<number> = [1, 2, 3, 4];
// arr2[0];

// кортежы нужны тогда когда мы четка знаем сколько элементов в массиве у нас будет лежать

// type TypeArr = [number, string, null];
// const arr3: TypeArr = [1, "2", null];

// getName("jhon")
// type TypeGetNameReturn = {
//   name: string;
// };
// function getName(name: string): TypeGetNameReturn {
//   return { name };
// }
// // тиризатция стрелочной функции
// const getName2 = (name: string): TypeGetNameReturn => {
//   return { name };
// };

// type TypeGetNameFunction = (name: string) => TypeGetNameReturn;
// const getName3: TypeGetNameFunction = (name) => {
//   return { name };
// };
// console.log("hello");

// type Animal = {
//   name: string;
//   makeSound: () => void;
// };
// function creatAnimal(name: string, sound: string): Animal {
//   return {
//     name,
//     makeSound() {
//       console.log(sound);
//     },
//   };
// }
// const dog: Animal = creatAnimal("dogy", "Woof!");
// dog.makeSound();

// type User = {
//   name: string;
//   age: number;
//   email: string;
//   makeUsers: () => void;
// };
// function creatUsers(name: string, age: number, email: string): User {
//   return {
//     name,
//     age,
//     email,
//     makeUsers() {
//       console.log(name, age, email);
//     },
//   };
// }
// const men: User = creatUsers("Jhon", 25, "namnmanmann@mail.ru");
// men.makeUsers();

// const arr: ReadonlyArray<number> = [1, 2, 3, 4];
// arr2[0];

// type arr = string[];
// function array(users: arr): void {
//   users.forEach((elem) => {
//     console.log(elem);
//   });
// }
// const aray: arr = ["Asuu", "Legenda"];
// array(aray);

// type TypePalidromReturn = {
//   str: boolean;
// };
// // type TypeGetNameFunction = (name: string) => TypeGetNameReturn;
// type TypeFunctionPalidrom = (str: string) => TypePalidromReturn;

// function isPalidrom(str: string): boolean {
//   const formStr = str.split("").reverse().join("");
//   if (str == formStr) {
//     return str;
//   } else {
//     return str;
//   }
//   str === formStr;
// }
// console.log(isPalidrom("Hello"));

// const isPalidrom2: TypeFunctionPalidrom = (str) => {
//   const formStr = str.split("").reverse().join("");
//   return { str: str == formStr };
// };
// console.log(isPalidrom2("Hello"));

// type NumberInfo = {
//   min: number;
//   max: number;
// };

// function findMinMax(arr: number[]): TypeNumber {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   return { min, max };
// }
// console.log(findMinMax([1, 2, 3, 4, 5, 6, 7]));

// type arr = string[];
// function array(users: arr): void {
//   users.forEach((elem) => {
//     console.log(elem);
//   });
// }
// const aray: arr = ["Asuu", "Legenda"];
// array(aray);

//! =======vajno диклорейшн функция=======
// type NumberInfo = {
//   min: number;
//   max: number;
// };
// type FunctionMaxMin = (arr: number[]) => NumberInfo;
// function findMinMax(arr: number[]) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   return { min, max };
// }
// console.log(findMinMax([1, 2, 3, 4, 5, 6, 7, 52]));
//! =======vajno=======
//
//! =======vajno стрелочное функция=======
// type NumberInfo = {
//   min: number;
//   max: number;
// };
// type FunctionMaxMin = (arr: number[]) => NumberInfo;
// // =================
// const findMinMax2: FunctionMaxMin = (arr) => {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   return { min, max };
// };
// console.log(findMinMax2([1, 3, 23, 21, 4, 214]));
//! =======vajno=======
// ========стрелочное=======
// type Numbers = {
//   sum: number;
//   average: number;
// };
// type FunctionNumbers = (arr: number[]) => Numbers;
// const func2: FunctionNumbers = (arr) => {
//   const sum = arr.reduce((acc, curr) => acc + curr, 0);
//   const average = sum / arr.length;
//   return { sum, average };
// };
// console.log(func2([1, 3, 4, 5]));
// !========task start=======
// 1,2=====задание====
type Peremens = {
  num: number;
  str: string;
  bool: boolean;
};
type Num = number;
type FunctionDensity = (weight: number, size: number) => Num;

const result: FunctionDensity = (weight, size) => {
  let density = weight / size;
  return density;
};
console.log(result(23, 25));
// 3 ====задание===
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  colors: string[];
};
const products: Product[] = [
  {
    id: 1,
    title: "Ноутбук",
    description: "Мощный ноутбук для профессиональных задач",
    price: 1200,
    colors: ["серый", "черный", "серебристый"],
  },
  {
    id: 2,
    title: "Смартфон",
    description: "Современный смартфон с высококачественной камерой",
    price: 1800,
    colors: ["черный", "белый", "голубой"],
  },
];
products.forEach((product) => {
  console.log(
    `ID: ${product.id}, Название: ${product.title}, Цена: ${
      product.price
    }, Описание: ${product.description}, Доступные цвета: ${product.colors.join(
      ", "
    )}`
  );
});
// !========task end=======
