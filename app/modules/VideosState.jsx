export const SETSTATE = 'SETSTATE';

const initialState = {
  left: null,
  right: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SETSTATE: {
      return {
        ...state,
        [action.mode]: action.videoState
      };
    }
    default:
      return state;
  }
}

export function setVideoState(videoState, mode) {
  return {
    type: SETSTATE,
    videoState,
    mode
  };
}
