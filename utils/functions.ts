import { Steps } from '../types';

export const sortData = (data: Steps) => {
  const sort = data.slice().sort((item: { step: number }, item1: { step: number }) => {
    return item.step - item1.step;
  });

  return sort;
};
