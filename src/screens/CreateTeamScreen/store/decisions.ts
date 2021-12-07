import {exportDefaultSpecifier} from '@babel/types';
import {initialState as state} from './reducer';
const log = console.log;

export function isPlayerCanBeSelectable(player_key: string) {
  // console.log(state);
}

export function isPlayerSelected(player_key: string) {
  const player = state.players.find(item => item.key === player_key);
  if (player) {
    return true;
  } else {
    return false;
  }
}

export function prepareToUpdatePlayer(playerData: any) {
  try {
    const isExists = state.players.find(item => item.key == playerData.key);
    if (isExists) {
      // remove that user
    } else {
      // add that user
      let newPlayerState = [...state.players];
      newPlayerState.push(playerData);
      return newPlayerState;
    }
  } catch (err) {
    log(err);
    return [];
  }
}
