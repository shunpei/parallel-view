export const SETCURRENTVIDEO = 'SETCURRENTVIDEO';

const initialState = {
  left: null,
  right: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SETCURRENTVIDEO: {
      return {
        ...state,
        [action.mode]: action.path
      };
    }
    default:
      return state;
  }
}

export function setCurrentFile(path, mode) {
  return {
    type: SETCURRENTVIDEO,
    path,
    mode
  };
}
