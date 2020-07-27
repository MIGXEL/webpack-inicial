import  inicio from '../views/inicio.html';
import '../css/componentes.css';


export default () => {

    const div = document.createElement('div');
    div.innerHTML = inicio;

    return div;
}
