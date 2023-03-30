

function saludar(){
    let userName = 'Pepe';

    function displayUserName(){
        return `Hola ${userName}`;
    }
    return displayUserName;
}

const g = saludar();
console.log(g);
console.log(g())