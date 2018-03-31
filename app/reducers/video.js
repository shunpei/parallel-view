import { ADDVIDEOEVENTS, UPDATEVIDEO } from '../actions/video';

const initialState = {
  singlePlayers: [],
  events: [],
  totalTimes: [0]
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case ADDVIDEOEVENTS: {
      const tmpState = { ...state };
      tmpState.events[action.index] = action.events;
      return {
        ...state,
        ...tmpState,
      };
    }
    case UPDATEVIDEO: {
      const tmpState = { ...state };
      tmpState.singlePlayers[action.index] = action.player;
      return {
        ...state,
        ...tmpState,
      };
    }
    default:
      return state;
  }
}
