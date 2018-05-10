export const ADDVIDEOEVENTS = 'ADDVIDEOEVENTS';
export const UPDATEVIDEO = 'UPDATEVIDEO';

export const addVideoEvents = (index, events) => ({
  type: ADDVIDEOEVENTS,
  index,
  events
});

export const updateVideo = (index, player) => ({
  type: UPDATEVIDEO,
  index,
  player
});
