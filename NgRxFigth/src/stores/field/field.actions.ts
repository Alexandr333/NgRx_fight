import { Action } from '@ngrx/store';

export enum FieldActionTypes {
    Init = "[ Field ] Init"
}

export class InitAction implements Action {
    public type: string;

    constructor () {
        this.type = FieldActionTypes.Init;
    }
}

export type FieldActionsUnion = InitAction;