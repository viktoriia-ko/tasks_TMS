//Найти последовательность Хэеса, для числа должно быть выдано сообщение, с самой последовательностью, количеством шагов, которое понадобилось для нахождения этой последовательности, и вершиной последовательности, это максимальное число из этой последовательности.

//Последовательность Хэеса считается так: если ввели число 9, то проверяем его, если оно чётное, делим на 2, если нечетное, умножаем на 3 и прибавляем 1, и так до тех пор пока число не будет равно 1.

/*
9\*3+1=28\
28/2=14  
14/2=7  
7\*3+1=22  
22/2=11  
11\*3+1=34  
34/2=17  
17\*3+1=52  
52/2=26  
26/2=13  
13\*3+1=40  
40/2=20  
20/2=10  
10/2=5  
5\*3+1=16  
16/2=8  
8/2=4  
4/2=2  
2/2=1

Результат:

Последовательность: 9 28 14 7 22 11 34 17 52 26 13 40 20 10 5 16 8 4 2 1  
Шагов 19  
Вершина 52*/

const arrayOfNumbers = [];
let x = +prompt("Введите число", "");
arrayOfNumbers.push(x);

while (x > 1) {
  if (x % 2 == 0) {
    x = forEvenNumbers(x);
    arrayOfNumbers.push(x);
  } else if (x % 2 == 1) {
    x = forOddNumbers(x);
    arrayOfNumbers.push(x);
  }
}

function forEvenNumbers(x) {
  return x / 2;
}

function forOddNumbers(x) {
  return x * 3 + 1;
}

let steps = arrayOfNumbers.length - 1;
let max = Math.max(...arrayOfNumbers);

console.log(
  "Последовательность:" +
    arrayOfNumbers +
    ". " +
    "Сделано шагов: " +
    steps +
    ". " +
    "Вершина: " +
    max
);
