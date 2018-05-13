export const ADDVIDEO = 'ADDVIDEO';

const initialState = {
  left: [],
  right: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDVIDEO: {
      return {
        ...state,
        [action.mode]: [...state[action.mode], action.datas[0]]
      };
    }
    default:
      return state;
  }
}

export function addVideo(datas, mode) {
  return {
    type: ADDVIDEO,
    datas,
    mode
  };
}
