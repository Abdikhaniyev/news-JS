import { AppLoaderInterface } from '../../types';
import Loader from './loader';

class AppLoader extends Loader implements AppLoaderInterface {
    public constructor() {
        super(process.env.API_URL, {
            apiKey: process.env.API_KEY,
        });
    }
}

export default AppLoader;
