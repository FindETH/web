import { getBlockie } from './blockies';

describe('getBlockie', () => {
  it('returns a base64 encoded blockie', () => {
    expect(getBlockie('0xDFDD854DaAD30E6E077AEf1c653169968c102E34')).toMatchInlineSnapshot(
      `"data:image/png;base64,00"`
    );
  });
});
