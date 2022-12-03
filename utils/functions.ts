import { Steps } from '../types';

export const sortData = (data: Steps) => {
  const sort = data.slice().sort((item: { step: number }, item1: { step: number }) => {
    return item.step - item1.step;
  });

  return sort;
};

export const nextStep = (position: number, steps: { path: string }[], router) => {
  if (position + 1 !== steps.length) {
    router.push(`/vender/${steps[position + 1].path}`);
  } else {
    console.log('ultimo paso');
  }
};

export const setLocalStorage = data => {
  const getLocalStorage = JSON.parse(localStorage.getItem('keysSteps'));
  localStorage.setItem('keysSteps', JSON.stringify({ ...getLocalStorage, ...data }));
};
