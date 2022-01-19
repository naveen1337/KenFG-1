import {covertInputTimeStringToDate} from './../utils/comman';
import {splitRoleWisePlayersPayload} from './teams.formatter';

export const groupAllContestsAPIRmeote = (payload: any) => {
  try {
    const paid = payload.filter((item: any) => item.contest_type === 'public');
    const practice = payload.filter(
      (item: any) => item.contest_type === 'practice',
    );
    if (paid.length === 0 && practice.length === 0) {
      throw 'no contest found';
    }
    return [...paid, ...practice];
  } catch (err) {
    console.log('groupAllContestsAPIRmeote', err);
    return false;
  }
};

export const extractJoinedContestAPIResponse = (payload: any) => {
  try {
    const contestsdata = payload.slice(0, payload.length - 1);
    const teams = payload[payload.length - 1];

    if (contestsdata.length === 0) {
      throw 'no joined contests';
    }
    const contests = [];
    for (const item of contestsdata) {
      const contestMeta = {...item, contest_team: item.contest_team.split(',')};

      const joinedTeam = [];
      for (const team of contestMeta.contest_team) {
        const teamMeta = teams.find((item: any) => item.team_key == team);
        if (teamMeta) {
          const allPlayers = teamMeta.players.players;
          const players = splitRoleWisePlayersPayload(allPlayers);

          const t_cap = allPlayers.find(
            (item: any) => item.key === teamMeta.players.cap_key,
          );
          const t_vc = allPlayers.find(
            (item: any) => item.key === teamMeta.players.vc_key,
          );
          joinedTeam.push({
            teamCode: team,
            t_cap: t_cap,
            t_vc: t_vc,
            team_a: teamMeta.team_a,
            team_b: teamMeta.team_b,
            players,
          });
        }
      }
      contests.push({
        contestMeta,
        joinedTeam,
      });
    }

    return contests;
  } catch (err) {
    console.log('extractJoinedContestAPIResponse', err);
    return false;
  }
};

export const extractDataFromUpcommingMatchesAPI = (payload: any) => {
  try {
    const u_matches = payload.matches;
    const banners = payload.banners;
    const my_matches = payload.my_matches;

    const upcomming = [];
    const myMatches = [];
    for (const u_match of u_matches) {
      let obj = {...u_match};
      obj.start_at = covertInputTimeStringToDate(u_match.teams.start_at);
      // delete obj.teams.start_at;
      upcomming.push(obj);
    }
    // for (const myMatch of my_matches) {
    //   const matchInfo = u_matches.find(
    //     (item: any) => item.key === myMatch.match_key,
    //   );
    //   if (matchInfo) {
    //     let obj = {...matchInfo};
    //     obj.start_at = covertInputTimeStringToDate(matchInfo.teams.start_at);
    //     obj.team_count = myMatch.team_count;
    //     // delete obj.teams.start_at;
    //     myMatches.push(obj);
    //   }
    // }
    return {upcomming, banners, myMatches};
  } catch (err) {
    console.log('extractDataFromUpcommingMatchesAPI', err);

    return false;
  }
};

export const parseJoinedMatchesAPI = (payload: any) => {
  try {
    const matches = [];
    for (const match of payload) {
      const obj = {...match};
      obj.start_at = covertInputTimeStringToDate(match.teams.start_at);
      matches.push(obj);
    }
    return matches;
  } catch (err) {
    console.log('parseJoinedMatchesAPI', err);

    return false;
  }
};

export const TeamPreviewDataFromAPIPlayers = (payload: any) => {
  // need to implement
  try {
    console.log(payload);
  } catch (err) {
    return false;
  }
};
