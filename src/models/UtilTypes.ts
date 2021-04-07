export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export interface uploadImage {
	type: typeof UPLOAD_IMAGE;
	image: string;
}
export type UtilActions = uploadImage;
