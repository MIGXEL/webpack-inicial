import  ejemplo1 from '../views/ejemplo1.html';


export default () => {

    const div = document.createElement('div');
    div.classList = 'container mt-5';
    div.innerHTML = ejemplo1;

    return div;
}
