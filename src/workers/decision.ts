import store from '../store/';
const log = console.log;

export function isPlayerCanBeSelectable(allplayers: any, player: any) {
  // const maxRoles = {
  //   bowler: 4,
  //   batsman: 6,
  //   keeper: 4,
  //   all_rounder: 6,
  // };
  const maxRoles = {
    bowler: 4,
    batsman: 6,
    keeper: 4,
    all_rounder: 4,
  };

  const teamState = store.getState().team;

  //   console.log('TeamState', teamState);
  try {
    // is user have enough credits
    if (teamState.credits_left < player.credits) {
      throw 'Not Enough Credits';
    }
    // is player team have a slot
    if (teamState.team_count[player['nationality_short_code']].length > 7) {
      throw 'Maximum 7 members per team only';
    }
    // is player role have a slot
    const occupaid_role_slots = teamState.players.filter(
      (item: any) => item.seasonal_role === player.seasonal_role,
    );
    if (occupaid_role_slots.length > maxRoles[player.seasonal_role]) {
      throw `${player.seasonal_role} can't higher than ${
        maxRoles[player.seasonal_role]
      }`;
    } else {
      return true;
    }
  } catch (err) {
    return {
      result: false,
      message: typeof err === 'string' ? err : 'failed',
    };
  }
}