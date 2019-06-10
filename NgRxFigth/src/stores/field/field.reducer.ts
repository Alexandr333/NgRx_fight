import { FieldActionsUnion, FieldActionTypes } from './field.actions';
import { clone } from 'src/auxiliary/clone';

export class FieldStore {
    backgroundImageURL: string;
    backgroundColor: string;
    width: number;
    height: number;
    x: number;
    y: number;
}

export const fieldReducer = (store: FieldStore = new FieldStore(), action: FieldActionsUnion): FieldStore => {
    switch(action.type) {
        case FieldActionTypes.Init : {
            return initField(store);
        }
        default: {
            return store;
        }
    }
}

function initField(store: FieldStore): FieldStore {
    const updatedStore = clone<FieldStore>(store, new FieldStore());
    
    updatedStore.backgroundColor = '#313131';
    updatedStore.height = 1000;
    updatedStore.width = 1000;
    updatedStore.x = 0;
    updatedStore.y = 0;

    return updatedStore;
}