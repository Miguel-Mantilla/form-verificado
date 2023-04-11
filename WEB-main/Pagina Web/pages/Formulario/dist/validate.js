//validacion de las cadenas
class Validate {
    validNames(values) {
        //patron que deben validar los inputs
        const nombre = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25}){1,3}$/g;
        //aqui comparamos los valores y los inputs
        const respuesta = values.match(nombre)
            ? true
            : false;
        //devuelve (true) o (false)
        return respuesta;
    }

    validMail(values) {
        const correo = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3}){1,2}$/g;
        const respuesta = values.match(correo)
            ? true
            : false;
        return respuesta;
    }

    validTel(values) {
        const celular = /^(\(?(\+57)\)?)?(3)(0|1|2|5)(\d{1})[-]?(\d{3})[-]?(\d{4})$/g;
        const respuesta = values.match(celular)
            ? true
            : false;
        return respuesta;
    }
    validText(values) {
        const text = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,250}+\s)$/g;
        const respuesta = values.match(text)
            ? true
            : false;
        return respuesta;
    }
    validform = (objeto) => {
        //tomar los valores del objeto, se convierte en un arreglo
        const valores = Object.values(objeto);
        // si no encuentra un false devuelve -1 ysi lo encuentra devuleve la posicion
        // del elemento
        let resp = valores.findIndex(e => e === false);
        return resp;
    }
}
export {
    Validate
};