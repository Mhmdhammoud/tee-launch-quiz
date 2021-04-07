import { AppState } from '../reducers/index';
import { Dispatch } from 'redux';
import { AppActions } from '../models';
export const uploadImage = (image: string): AppActions => ({
  type: 'UPLOAD_IMAGE',
  image,
});
export const startUploadImage = (image: string) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    let img = new Image();
    img.src = image;
    img.onload = function () {
      const text: string = 'Hello World';
      const canvas: HTMLCanvasElement = document.getElementById(
        'canvas'
      ) as HTMLCanvasElement;
      const myContext = canvas.getContext('2d');
      const myImage = document.getElementById('my-image') as HTMLImageElement;
      canvas.width = 600;
      canvas.height = 600;
      myContext!.drawImage(myImage, 0, 0);
      myContext!.font = '38px verdana';
      myContext!.globalAlpha = 0.5;
      myContext!.fillStyle = 'red';
      myContext!.fillText(text, 200, 300);
      myContext!.fillStyle = 'green';
      myContext!.fillText(text, 200, 300);
    };
    dispatch(uploadImage(image));
  };
};
