import { createNumberMask } from 'react-native-mask-input';

export const MasksHelper = {
  ID_PHONE: [
    '(',
    '+',
    '6',
    '2',
    ') ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
  ID_CURRENCY: createNumberMask({
    prefix: ['Rp', ' '],
    delimiter: '.',
    separator: ',',
    precision: 2,
  }),
  US_CURRENCY: createNumberMask({
    prefix: ['$', ' '],
    delimiter: '.',
    separator: ',',
    precision: 2,
  }),
};
