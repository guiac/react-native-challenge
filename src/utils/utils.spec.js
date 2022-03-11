import Utils from './utils'

describe('Utils', () => {


    it('Utils', () => {
    const num = 10;
    const size = 3;
    const response = Utils.pad(num, size);
    expect(response). toEqual('010')
    });
  });