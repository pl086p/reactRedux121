export const SAVE_LOG  = 'SAVE_LOG';
export const CLONE_LOG = 'CLONE_LOG';

export const saveLog = ({width, height}) => ({
  type: SAVE_LOG,
  width,
  height,
  myEdit: '==SAVE_LOG=='
});

export const cloneLog = ({x, y}) => ({
  type: CLONE_LOG,
  x,
  y,
  myEdit: '==CLONE_LOG=='
});

