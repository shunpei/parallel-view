import { ACCEPTED } from '../actions/file';

const initialState = {
  datas: [],
  totalTimes: []
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case ACCEPTED:
      return {
        ...state,
        datas: [...state.datas, ...action.datas]
      };

    default:
      return state;
  }
}
