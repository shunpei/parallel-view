export const ACCEPTED = 'ACCEPTED';
export const REJECTED = 'REJECTED';

export const accepted = (datas, index) => ({
  type: ACCEPTED,
  datas,
  index
});

export function rejected() {
  return {
    type: REJECTED
  };
}
