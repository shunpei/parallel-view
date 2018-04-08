import { ACCEPTED } from '../actions/file';

const initialState = {
  datas: [null, null],
  totalTimes: []
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case ACCEPTED: {
      if (action.datas.length > 1) {
        return {
          ...state,
          datas: [action.datas[0], action.datas[1]]
        };
      }
      const newDatas = [...state.datas];
      newDatas[action.index] = action.datas[0];
      return {
        ...state,
        datas: newDatas
      };
    }
    default:
      return state;
  }
}
