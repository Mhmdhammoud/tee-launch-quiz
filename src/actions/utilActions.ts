import {AppState} from '../reducers/index'
import {Dispatch} from 'redux'
import {AppActions} from '../models'
export const CreatePost = (image:string): AppActions => ({
	type: 'UPLOAD_IMAGE',
	image
});
export const startUploadImage = (e: Number) => {
	return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
	
	};
};