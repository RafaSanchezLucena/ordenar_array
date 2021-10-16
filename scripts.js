// Ejercicio de ordenacion de array sin utilizar métidos nativos.

const array = [8, 15, 23, 52, 35, 38, 40, 64, 18, 28];

console.log(`Array sin ordenar: ${array}`);

for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
        if (array[j] < array[j + 1]) {
            valorTemporal = array[j];  
            array[j] = array[j + 1];
            array[j + 1] = valorTemporal;
        };
    };
};

console.log(`Array ordenado: ${array}`);