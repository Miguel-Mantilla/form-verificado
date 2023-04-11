const cardEstudiante = document.querySelector("#cardsEstudiantes");
const cardProfesor = document.querySelector("#cardsProfesores");

const form = document.getElementById("fmContact");

const addStudent=(name,lastName, mail, select, tele, msn) =>{
    let person ={
        pname: name,
        plastName : lastName,
        pmail: mail,
        pselect: select,
        ptele:tele,
        pmsn: msn
    };
    let text = `¿Esta seguro ${person.pname} ${person.plastName} de enviar la peticion como Estudiante?`;

    modalAlert(text, "aceptar", person);
}
const addProfesor=(name,lastName, mail, select, tele, msn) =>{
    let person ={
        pname: name,
        plastName : lastName,
        pmail: mail,
        pselect: select,
        ptele:tele,
        pmsn: msn
    };
let text = `¿Esta seguro ${person.pname} ${person.plastName} de enviar la peticion como Profesor?`;

    modalAlert(text, "aceptar", person);
}


function modalAlert(cad, tipo, persona){
    //El div es para crear el alert
    const alerta= document.createElement('div');
    const texto = document.createElement("p");
    const btnCerrar = document.createElement("input");
    alerta.setAttribute("id", "alerta" );
    alerta.setAttribute("class", "alerta" );
    texto.setAttribute("class", "textAlerta");
    //Strong me muestra los datos en la alerta
    texto.innerHTML= `<strong>${cad}</strong>`;
    btnCerrar.setAttribute("type", "button");
    btnCerrar.setAttribute("class", "btnAlerta");
    btnCerrar.setAttribute("value", "cerrar");
    alerta.appendChild(texto);
    alerta.appendChild(btnCerrar);

    if(tipo==="aceptar"){       
        const btnEnviar = document.createElement("input");
        btnEnviar.setAttribute("type", "button");
        btnEnviar.setAttribute("class", "btnAlerta");
        btnEnviar.setAttribute("value", "Enviar");
        alerta.appendChild(btnEnviar);
        document.body.appendChild(alerta);
        btnEnviar.onclick = function(){
            paintCard(persona, "");
            document.getElementById("alerta").remove();          
        }
    }else{
        document.body.appendChild(alerta);
    }

    btnCerrar.onclick=function(){

        document.getElementById("alerta").remove();
    }

}
const paintCard = (datos, tipo) =>{

    const select = document.getElementById("select").value;
    tipo = select.toUpperCase();
    const fragmento = document.createDocumentFragment();
    const tempEstudiante = document.getElementById("templateEstudiante").content;
    const tempProfesor = document.getElementById("templateProfesor").content;   
    
    if(tipo === "ESTUDIANTE"){
        let tempTemplate = tempEstudiante.cloneNode(true);
        tempTemplate.querySelector('.title-card').innerHTML = 'DATOS DEL PQR ESTUDIANTE <hr>';
        tempTemplate.querySelector('.data-card').innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}`;
        tempTemplate.querySelector('.text-mail').innerHTML = `CORREO ELECTRONICO: ${datos.pmail} `;
        tempTemplate.querySelector('.text-select').innerHTML = `CARGO: ${datos.pselect} `;
        tempTemplate.querySelector('.text-telefono').innerHTML = `TELEFONO: ${datos.ptele} `;
        tempTemplate.querySelector('.text-msn').innerHTML = `MENSAJE: ${datos.pmsn} `; 
        
        fragmento.appendChild(tempTemplate);
        cardEstudiante.appendChild(fragmento);

    }else if(tipo === "PROFESOR"){
        let tempTemplateT = tempProfesor.cloneNode(true);
        tempTemplateT.querySelector('.title-card').innerHTML = 'DATOS DEL PQR PROFESOR <hr>';
        tempTemplateT.querySelector('.data-card').innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}`;
        tempTemplateT.querySelector('.text-mail').innerHTML = `CORREO ELECTRONICO: ${datos.pmail} `;
        tempTemplateT.querySelector('.text-select').innerHTML = `CARGO: ${datos.pselect} `;
        tempTemplateT.querySelector('.text-telefono').innerHTML = `TELEFONO: ${datos.ptele} `;
        tempTemplateT.querySelector('.text-msn').innerHTML = `MENSAJE: ${datos.pmsn} `;

        fragmento.appendChild(tempTemplateT);
        cardProfesor.appendChild(fragmento);
    }    
    form.reset();
}

export {addStudent, modalAlert, addProfesor};
   

