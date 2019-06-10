import { GameActionsUnion, GameActionTypes } from './game.actions';
import { clone } from 'src/auxiliary/clone';

export class GameStore {
    isPaused: boolean;
    isStoped: boolean;
}

export const gameReducer = (store: GameStore, action: GameActionsUnion): GameStore => {
    switch (action.type) {
        case GameActionTypes.Start: {
            return start(store);
        }
        case GameActionTypes.Pause: {
            return pause(store);
        }
        case GameActionTypes.Restart: {
            return restart(store);
        }
        default: {
            return store;
        }
    }
}

function start(store: GameStore): GameStore {
    const updatedStore = clone<GameStore>(store, new GameStore());

    updatedStore.isPaused = false;
    updatedStore.isStoped = false;

    return updatedStore;
}

function pause(store: GameStore): GameStore {
    const updatedStore = clone<GameStore>(store, new GameStore());

    updatedStore.isPaused = true;
    updatedStore.isStoped = false;

    return updatedStore;
}

function restart(store: GameStore): GameStore {
    const updatedStore = clone<GameStore>(store, new GameStore());

    updatedStore.isPaused = false;
    updatedStore.isStoped = true;

    return updatedStore;
}