export const SETPLAYER = 'SETPLAYER';

const initialState = {
  left: null,
  right: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SETPLAYER: {
      return {
        ...state,
        [action.mode]: action.player
      };
    }
    default:
      return state;
  }
}

export function setPlayer(player, mode) {
  return {
    type: SETPLAYER,
    player,
    mode
  };
}
