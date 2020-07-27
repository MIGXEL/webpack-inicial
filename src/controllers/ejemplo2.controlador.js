import  ejemplo2 from '../views/ejemplo2.html';


export default () => {

    const div = document.createElement('div');
    div.classList = 'container mt-5';
    div.innerHTML = ejemplo2;

    return div;
}