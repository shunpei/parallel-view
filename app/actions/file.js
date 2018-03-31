export const ACCEPTED = 'ACCEPTED';
export const REJECTED = 'REJECTED';

export const accepted = datas => ({
  type: ACCEPTED,
  datas
});

export function rejected() {
  return {
    type: REJECTED
  };
}
