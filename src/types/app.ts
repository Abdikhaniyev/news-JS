import { AppViewInterface, ControllerInterface } from '.';

export interface AppInterface {
    controller: ControllerInterface;
    view: AppViewInterface;
    start: () => void;
}
