import {Validate} from "./validate.js";
import {addStudent, modalAlert} from "./paint.js";

const btnEnviar = document.getElementById("btnEnviar");
const form = document.getElementById("fmContact");

//instanciar objeto de la clase validate
let validator = new Validate();

//objeto para la validacion
const objectValid = {
    nameObject: false,
    lastNameObject: false,
    mailObject: false,
    teleObject: false,
    msnObject: false
}

// evento para que cada vez que los hijos tengan un cambio se genera la
// validacion
form.addEventListener("change", (event) => {
    const inputId = event.target.id;
    console.log(inputId);
    //capturar el valor en vez del contenido
    const inputValue = event.target.value;
    console.log(inputValue);
    //capturar clase
    const inputClass = event.target.classList;
    console.log(inputClass);

    const validClass = () => {
        inputClass.add("is-valid");
        inputClass.remove("is-invalid");
    }
    //poner si es valido o invalido
    const invalidClass = () => {
        inputClass.add("is-invalid");
        inputClass.remove("is-valid");
    }
    //segun el input hacer la validacion con los patrones
    switch (inputId) {
        case 'name':
            //usamos el objeto instanciado nos da un un true/false y lo asigna al objeto
            objectValid.nameObject = validator.validNames(inputValue);
            //si es ("true") validClass  si es ("falso") invalidClass
            objectValid.nameObject
                ? validClass()
                : invalidClass(); //ternario (es como un if)
            console.log(Object.values(objectValid));
            break;
        case 'lastName':
            objectValid.lastNameObject = validator.validNames(inputValue);
            objectValid.lastNameObject
                ? validClass()
                : invalidClass();
            console.log(Object.values(objectValid));
            break;
        case 'mail':
            objectValid.mailObject = validator.validMail(inputValue);
            objectValid.mailObject
                ? validClass()
                : invalidClass();
            console.log(Object.values(objectValid));
            break;
        case 'telephone':
            objectValid.teleObject = validator.validTel(inputValue);
            objectValid.teleObject
                ? validClass()
                : invalidClass();
            console.log(Object.values(objectValid));
            break;
        case 'fm_contact':
            objectValid.msnObject = validator.validText(inputValue);
            objectValid.msnObject
                ? validClass()
                : invalidClass();
            console.log(Object.values(objectValid));
            break;
    }
});
//asociar el evento al boton
btnEnviar.addEventListener("click", (e) => {
    //evitar que la pagina se recarge cada vez que se le da click
    e.preventDefault();
    //seleccionar los datos del form
    const Nombre = document
        .getElementById("name")
        .value;
    const Apellido = document
        .getElementById("lastName")
        .value;
    const Correo = document
        .getElementById("mail")
        .value;
    const Telefono = document
        .getElementById("telephone")
        .value;
    const mensaje = document
        .getElementById("fm_contact")
        .value;
    // si todos los valores son true devolvera un -1 y si no devolvera donde esta
    // ubicado el error
    if (validator.validform(objectValid) === -1) {
        addStudent(Nombre, Apellido, Correo, Telefono, mensaje)
        console.log("Eviando el Formulario:")
    } else {
        modalAlert("Error en los datos, Revise los campos.")
    }
});