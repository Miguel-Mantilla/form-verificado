const cardEstudiante = document.querySelector("#cardsEstudiantes");
const cardProfesor = document.querySelector("#cardsProfesores");
const form = document.getElementById("fmContact");
var global = true;

const addStudent = (name, lastName, mail, tele, msn) => {
    //creamos un objeto
    let person = {
        pname: name,
        plastName: lastName,
        pmail: mail,
        ptele: tele,
        pmsn: msn
    };
    //crear el modal
    let text = `¿Esta seguro ${person.pname} ${person.plastName} de enviar la peticion?`;
    modalAlert(text, "aceptar", person);
}
function modalAlert(cadena, tipo, persona) {
    //crear elementos
    const alerta = document.createElement('div');
    const texto = document.createElement("p");
    const btnCerrar = document.createElement("input");

    //generar atributos
    alerta.setAttribute("id", "alerta")
    alerta.setAttribute("class", "alerta")
    texto.setAttribute("class", "textAlerta");
    texto.innerHTML = `<strong>${cadena}</strong>;`

    //atributos del boton
    btnCerrar.setAttribute("type", "button");
    btnCerrar.setAttribute("class", "btnAlerta");
    btnCerrar.setAttribute("value", "cerrar");

    //agregar el boton y el texto para la alerta
    alerta.appendChild(texto);
    alerta.appendChild(btnCerrar);

    if (tipo === "aceptar") {

        const btnEnviar = document.createElement("input");

        //atributos del boton
        btnEnviar.setAttribute("type", "button");
        btnEnviar.setAttribute("class", "btnAlerta");
        btnEnviar.setAttribute("value", "Enviar");
        alerta.appendChild(btnEnviar);
        //poner el alert dentro del html
        document
            .body
            .appendChild(alerta);
        //evento del btnenviar
        btnEnviar.onclick = function () {
            paintCard(persona, "");
            //quitar para cuando ya halla aceptado
            document
                .getElementById("alerta")
                .remove();
        }
    } else {
        //poner el alert dentro del body
        document
            .body
            .appendChild(alerta);
    }
    //remover el alerta
    btnCerrar.onclick = function () {
        document
            .getElementById("alerta")
            .remove();
    }
}
//paint Card estudiante o profesor
const paintCard = (datos, tipo) => {

    const select = document
        .getElementById("select")
        .value;

    tipo = select.toUpperCase(); //para ponerlo en mayusculas

    //crear un fragmento (miniDom)
    const fragmento = document.createDocumentFragment();
    //solo necesitamos el contenido del template no todo lo de la etiqueta
    const tempEstudiante = document
        .getElementById("templateEstudiante")
        .content;

    const tempProfesor = document
        .getElementById("templateProfesor")
        .content;
    if (tipo === "ESTUDIANTE") {
        //se clonara tempEstudiante
        let tempTemplate = tempEstudiante.cloneNode(true);
        tempTemplate
            .querySelector('.title-card')
            .innerHTML = 'Datos Del Interesado <hr>';
        tempTemplate
            .querySelector('.data-card')
            .innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}`;
        tempTemplate
            .querySelector('.text-mail')
            .innerHTML = `CORREO ELECTRONICO: ${datos.pmail} `;
        tempTemplate
            .querySelector('.text-telefono')
            .innerHTML = `TELEFONO: ${datos.ptele} `;
        tempTemplate
            .querySelector('.text-msn')
            .innerHTML = `MENSAJE: ${datos.pmsn} `;
        //agregar el tempTemplate al fragmento
        fragmento.appendChild(tempTemplate);
        //ahora pondremos visible el template
        cardEstudiante.appendChild(fragmento);
    } else if (tipo === "PROFESOR") {
        let tempTemplateP = tempProfesor.cloneNode(true);
        tempTemplateP
            .querySelector('.title-card')
            .innerHTML = 'Datos Del Cliente <hr>';
        tempTemplateP
            .querySelector('.data-card')
            .innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}`;
        tempTemplateP
            .querySelector('.text-mail')
            .innerHTML = `CORREO ELECTRONICO: ${datos.pmail} `;
        tempTemplateP
            .querySelector('.text-telefono')
            .innerHTML = `TELEFONO: ${datos.ptele} `;
        tempTemplateP
            .querySelector('.text-msn')
            .innerHTML = `MENSAJE: ${datos.pmsn} `;
        fragmento.appendChild(tempTemplateP);
        cardProfesor.appendChild(fragmento);
    }
    //reset al formulario
    form.reset();
}
export {
    addStudent,
    modalAlert
};