import { Action } from '@ngrx/store';

export enum GameActionTypes {
    Start = '[ Game ] Start',
    Pause = '[ Game ] Pause',
    Restart = '[ Game ] Restart'
}

export class StartAction implements Action {
    public type: string;

    constructor() {
        this.type = GameActionTypes.Start;
    }
}

export class PauseAction implements Action {
    public type: string;

    constructor() {
        this.type = GameActionTypes.Pause;
    }
}

export class RestartAction implements Action {
    public type: string;

    constructor() {
        this.type = GameActionTypes.Restart;
    }
}

export type GameActionsUnion = StartAction | PauseAction | RestartAction;