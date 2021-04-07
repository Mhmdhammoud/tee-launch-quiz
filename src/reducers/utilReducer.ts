import { UtilActions } from '../models/UtilTypes';

export interface IUtil {
  theme: 'light' | 'dark';
  image: string;
}
const initState: IUtil = {
  theme: 'light',
  image: '',
};
const utilReducer = (state = initState, action: UtilActions) => {
  switch (action.type) {
    case 'UPLOAD_IMAGE':
      return {
        ...state,
        image: action.image,
      };
    default:
      return state;
  }
};
export default utilReducer;
