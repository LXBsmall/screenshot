import 'src/styles/index.scss';
import { create as createCanvas, loadPage, setStyle } from './canvas';

let wrapper: HTMLDivElement | null = null;

const create = () => {
  wrapper = document.createElement('div');
  wrapper.classList.add(__PREFIX__ + 'wrapper');
  const canvas = createCanvas();
  wrapper.appendChild(canvas);
  return wrapper;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const setOptions = (opt: Option) => {};

export const start = () => {
  const el = wrapper || create();
  const { clientHeight: h, clientWidth: w } = document.documentElement;
  console.log({ h, w });

  setStyle(w, h);
  loadPage(w, h);
  document.body.appendChild(el);
};

export const close = () => {
  document.body.removeChild(wrapper as HTMLElement);
};
