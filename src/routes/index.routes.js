/* ------ ------ IMPORTACIONES ------ ------ */
import Componentes from "../controllers/inicio.controlador";


/* ------ ------ referencia html ------ ------ */
let root = document.getElementById('root');

const router = (route) => {
    root.innerHTML = '';
    switch (route) {
        case '': {
            return root.appendChild(Componentes());
        }
        case '#/': {
            return root.appendChild(Componentes());
        }
        case '#/inicio':{
            return root.appendChild(Componentes());
        }
        case '#/ejemplo1':{
            return root.appendChild(Ejemplo1());
        }
        case '#/ejemplo2':{
            return root.appendChild(ejemplo2());
        }
        default:
            return console.log('404!!!!');
    }
}

export {
    router
}