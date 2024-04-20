const obj = {
    'name': 'John',
    'age': 25,
    'socials': {    // Nested object
        'facebook': 'John Doe',
        'instagram': 'john_doe'
    }
}

// Shallow copy 
const obj2 = Object.assign({}, obj);
const obj3 = {...obj};

obj2.socials.facebook = 'Doe John';
console.log(obj.socials.facebook); // Doe John  reference copy

//if we use spread operator or object.assign to create a copy only a shallow copy is created and nested objects are passed by reference.    
// To create a deep copy, we can use JSON.parse(JSON.stringify(obj)) method.

const obj4 = JSON.parse(JSON.stringify(obj));

obj4.socials.facebook = 'John Doe';

console.log(obj.socials.facebook); // Doe John  reference copy  
console.log(obj4.socials.facebook); // John Doe  deep copy

// we can also create a function to deep copy an object:

function deepCopy(obj) {
    if(obj === null || typeof obj !== 'object') {
        return obj;
    }
    const newobj = Array.isArray(obj) ? [] : {};
    const copiedVal = Object.keys(obj);
     for(let i= 0 ; i< copiedVal.length; i++) {
        newobj[copiedVal[i]] = deepCopy(obj[copiedVal[i]]);
}
return newobj;
}


const newObject = deepCopy(obj); // deep copy of obj
newObject.socials.facebook = 'Doremon';
console.log(obj.socials.facebook); // Doe John  reference copy  
console.log(newObject.socials.facebook); // Doremon  deep copy