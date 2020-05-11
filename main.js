//2d массивы
//Дан массив
//let arr = [
//[16,-37,54,-4,72],
//[-56,47,4,-16,25],
//[-63,4,-54,76,-4],
//[12,-35,4,47]
//];
//1. Найти сумму и количество положительных элементов.
//2. Найти минимальный элемент массива и его порядковый номер.
//3. Найти максимальный элемент массива и его порядковый номер.
//4. Определить количество отрицательных элементов.
//5. Найти количество нечетных положительных элементов.
//6. Найти количество четных положительных элементов.
//7. Найти произведение положительных элементов.
//Для каждого задания создать функцию, которая будет принимать двумерный массив
//как параметр и выполнять расчеты и возвращать результат.

let arr1 = [

    [16, -37, 54, -4, 72],

    [-56, 47, 4, -16, 25],

    [-63, 4, -54, 76, -4],

    [12, -35, 4, 47]

];

function firstTask(arr1) {
    let sumOfPositive = 0;
    let quantOfPositive = 0;

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] >= 0) {
                sumOfPositive = sumOfPositive + arr1[i][j];
                quantOfPositive++;
            }
        }
    }
    return [sumOfPositive, quantOfPositive];
}
console.log('Найти сумму и количество положительных элементов ', firstTask(arr1))

function secondTask(arr1) {

    let minElement = arr1[0][0];
    let indexOfMin = [0, 0];
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] < minElement) {
                minElement = arr1[i][j];
                indexOfMin[0] = i;
                indexOfMin[1] = j;
            }
        }
    }
    return [minElement, indexOfMin];
}
console.log('Найти минимальный элемент массива и его порядковый номер ', secondTask(arr1))

function thirdTask(arr1) {

    let indexOfMax = [0, 0];
    let maxElement = arr1[0][0];
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] > maxElement) {
                maxElement = arr1[i][j];
                indexOfMax[0] = i;
                indexOfMax[1] = j;
            }
        }
    }
    return [maxElement, indexOfMax];
}
console.log('Найти максимальный элемент массива и его порядковый номер ', thirdTask(arr1))

function forthTask(arr1) {
    let quantOfnegative = 0;

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] < 0) {
                quantOfnegative++;
            }
        }
    }
    return quantOfnegative;
}
console.log('Определить количество отрицательных элементов', forthTask(arr1))

function fifthTask(arr1) {
    let quantOfOddPositive = 0;

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] >= 0 && arr1[i][j] % 2 != 0) {
                quantOfOddPositive++;
            }
        }
    }
    return quantOfOddPositive;
}
console.log('Найти количество нечетных положительных элементов ', fifthTask(arr1))

function sixthTask(arr1) {
    let quantOfEvenPositive = 0;

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] >= 0 && arr1[i][j] % 2 == 0) {
                quantOfEvenPositive++;
            }
        }
    }
    return quantOfEvenPositive;
}
console.log('Найти количество четных положительных элементов ', sixthTask(arr1))

function seventhTask(arr1) {
    let productOfElements = 1;

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] >= 0) {
                productOfElements = productOfElements * arr1[i][j];
            }
        }
    }
    return productOfElements;
}
console.log('Найти произведение положительных элементов ', seventhTask(arr1))