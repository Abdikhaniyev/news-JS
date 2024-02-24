import App from './components/app/app';
import './global.css';
import { AppInterface } from './types';

const app: AppInterface = new App();
app.start();
