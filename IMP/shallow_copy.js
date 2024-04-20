const obj = {
    'name': 'John',
    'age': 25
}

const obj2 = obj;



obj2.name = 'Dreoe';


console.log(obj.name); // Dreoe  reference copy
console.log(obj2.name); // Dreoe  reference copy


// Shallow copy

const obj3 = Object.assign({}, obj);
obj3.name = 'Doe';
console.log(obj3.name); // Doe


const obj4 = {...obj};
obj4.name = 'Doreme';
console.log(obj4.name); // Doreme