import {
  HANDLE_ERROR,
  UPDATE_SELECTED_MATCH,
  UPDATE_JOINCONTEST_REQUEST,
  UPDATE_FULL_MATCH,
  UPDATE_DARK_MODE,
} from './actionTypes';

interface JoinContestRequestShape {
  contestKey: string;
  entryAmount: string;
  maxTeam: number;
  isFullMatch: boolean;
}

export const updateAppError = (payload: string) => ({
  type: HANDLE_ERROR,
  payload,
});

export const updateEnableDarkMode = (payload: boolean) => ({
  type: UPDATE_DARK_MODE,
  payload,
});

export const updateSelectedMatchAction = (payload: any) => ({
  type: UPDATE_SELECTED_MATCH,
  payload,
});

export const joinContestRequestAction = (payload: JoinContestRequestShape) => ({
  type: UPDATE_JOINCONTEST_REQUEST,
  payload,
});

// toggle between full match and second innings
export const updateFullMatchAction = (payload: boolean) => ({
  type: UPDATE_FULL_MATCH,
  payload,
});
