import domToImg from 'dom-to-image';

let canvas: HTMLCanvasElement;
let path2D: CanvasRenderingContext2D | null = null;

export const loadPage = async (w: number, h: number) => {
  const scale = 2;
  const url = await domToImg.toSvg(document.documentElement, {
    width: w * scale,
    height: h * scale,
    bgcolor: 'transparent',
  });
  const img = new Image();
  img.src = url;
  document.body.appendChild(img);
  img.onload = () => {
    path2D?.drawImage(img, 0, 0);
  };
};
export const setStyle = (w: number, h: number) => {
  canvas.width = w;
  canvas.height = h;
};
export const create = () => {
  if (canvas) return canvas;
  canvas = document.createElement('canvas');
  path2D = canvas.getContext('2d');
  canvas.classList.add(__PREFIX__ + 'canvas');
  return canvas;
};
