import {validateString, validateTelefono, Validate} from "./validate.js";
import {addStudent,modalAlert, addProfesor} from "./paint.js";

const btnEnviar = document.getElementById('btnEnviar');
const form = document.getElementById('fmContact');


let validator = new Validate();


const objectValid={
    nameObject: false,
    lastNameObject: false,
    mailObject: false,
    teleObject: false,
    selectObject: true,
    msnObject: false
    
}

form.addEventListener('change', function (event){

    const inputId = event.target.id;
    console.log(inputId);
    const inputValue = event.target.value;
    console.log(inputValue);
    const inputClass = event.target.classList;
    console.log(inputClass);

    const validClass = ()=>{
        inputClass.add("is-valid");
        inputClass.remove("is-invalid");
    }

    const invalidClass = ()=>{
        inputClass.add("is-invalid");
        inputClass.remove("is-valid");
    }

    switch(inputId){
        case "name": 
            objectValid.nameObject = validator.validNames(inputValue);
            objectValid.nameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;
        case "lastName":    
            objectValid.lastNameObject = validator.validNames(inputValue);
            objectValid.lastNameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;

        case "mail":    
            objectValid.mailObject = validator.validMail(inputValue);
            objectValid.mailObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;

        case "telephone":    
            objectValid.teleObject = validator.validTel(inputValue);
            objectValid.teleObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
        break;

        case "msn":    
            objectValid.msnObject = validator.validText(inputValue);
            objectValid.msnObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
        break;
        case "select":    
            objectValid.selectObject = validator.validSelect(inputValue);
            objectValid.selectObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
        break;

    }
});

btnEnviar.addEventListener('click', (e) =>{
    e.preventDefault();

    const nombre = document.getElementById("name").value;
    const apellido = document.getElementById("lastName").value;
    const correo = document.getElementById("mail").value;
    const select = document.getElementById("select").value;
    const telefono = document.getElementById("telephone").value;
    const mensaje = document.getElementById("msn").value;
    

    if(validator.validform(objectValid) === -1){
        if(select==="Estudiante"){
            addStudent(nombre, apellido, correo, select, telefono, mensaje); 
                console.log("Enviando Formulario:"); 
        }else if(select==="Profesor"){
            addProfesor(nombre, apellido, correo, select, telefono, mensaje);
        }
    }else{
        modalAlert("ERROR, REVISE LOS CAMPOS Y VUELVA A INTENTAR.");  
        }  
});