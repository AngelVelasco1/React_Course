const name = "Angel";
const courses = ["React", "Angular", "Vue"];
const sayHello = () => {
    return `Hello ${name}`;
}
const profile = {
    name,
    age: 18,
    courses,
}

//? Return an method
export const Component1 = () => {
    return ( 
        <h1>{ sayHello() }</h1>
     );
}
//? Return an array
export const Component2 = () => {
    return ( 
        <h1>{ courses }</h1>
     );
}

//? Return an object
export const Component3 = () => {
    return ( 
        <h1>{ JSON.stringify(profile) }</h1>
     );
}
