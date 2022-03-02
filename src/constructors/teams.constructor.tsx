/**
 * teams utils
 */

// perform a transformations for get match players api, for ease of use

export const normalizeGetPlayersAPI = (payload: any) => {
  try {
    const keeper = payload.filter(
      (item: any) => item.seasonal_role === 'keeper',
    );

    const batsman = payload.filter(
      (item: any) => item.seasonal_role === 'batsman',
    );
    const all_rounder = payload.filter(
      (item: any) => item.seasonal_role === 'all_rounder',
    );
    const bowler = payload.filter(
      (item: any) => item.seasonal_role === 'bowler',
    );

    return [{keeper, batsman, all_rounder, bowler}];
  } catch (err) {
    console.log('normalizeGetPlayersAPI -->', err);
    return false;
  }
};

export const creditsLeftCalculator = (
  keepers: Array<any>,
  batsman: Array<any>,
  all_rounder: Array<any>,
  bowler: Array<any>,
) => {
  try {
    const keepersCredits = keepers.reduce((pre: any, payload: any) => {
      return pre + payload.credits;
    }, 0);
    const batsmanCredits = batsman.reduce((pre: any, payload: any) => {
      return pre + payload.credits;
    }, 0);
    const allRounderCredits = all_rounder.reduce((pre: any, payload: any) => {
      return pre + payload.credits;
    }, 0);
    const bowlerCredits = bowler.reduce((pre: any, payload: any) => {
      return pre + payload.credits;
    }, 0);
    const sum =
      keepersCredits + batsmanCredits + allRounderCredits + bowlerCredits;
    return 100 - sum;
  } catch (err) {
    console.log(err);
    return 0;
  }
};
