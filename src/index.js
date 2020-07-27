import { router } from './routes/index.routes';
import './style.css';

router(window.location.hash);

window.addEventListener('hashchange', ()  =>{
    router(window.location.hash);
});
