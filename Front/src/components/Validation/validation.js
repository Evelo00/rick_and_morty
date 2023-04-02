// function validate(type, value) {
//     const errors = {};


//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!value) {
//         return false;
//     }
//     if (type === "email") {
//         if (value.length > 35) {
//             return false;
//         }

//         if (!emailRegex.test(value)) {
//             return false;
//         }
//     }
//     else {
//         if (!/\d/.test(value) || value.length < 6 || value.length > 10) {
//             return false;
//         }
//     }
//     return true;
// }

// export default validate;



const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function validate(initialUserData){
    const errors = {}
    if (!initialUserData.email) errors.email = "El correo elecrónico no debe estar vacío"
    else if (initialUserData.email.length < 35) {
        console.log()
        if (!regexEmail.test(initialUserData.email)) errors.email = "Debe ser un correo electrónico valido"
    } 
    else errors.email = "Se requiere un mensaje menor a 35 caracteres"
    if (initialUserData.password.length > 5 && initialUserData.password.length <=10 ) {
        const regexPass = /(\d+)/g
        const pass = initialUserData.password.match(regexPass)
        if(!pass) errors.password = "Debe contener al menos un número"    
    }
        else errors.password = "Debe contener entre 6 y 10 caracteres"
    return errors
  }