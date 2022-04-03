import { Box, boxFrom, boxOf } from '..';

describe('Testing Box specification', () => {
  test('Box of', () => {
    expect(Box.of('Chocolates')).toStrictEqual(Box.of('Chocolates'));
  });

  test('Box from', () => {
    const box = Box.of('Chocolates');

    expect(Box.from(box)).toStrictEqual(Box.of('Chocolates'));
  });

  test('Box map', () => {
    // const box = Box.of(12);
    const expected = Box.of(12).map(val => val * 2 + 1);
    expect(expected).toStrictEqual(Box.of(12 * 2 + 1));
  });

  test('Box ap', () => {
    const box = Box.of(12);
    expect(box.ap(Box.of(val => val * 2 + 1))).toStrictEqual(
      Box.of(12 * 2 + 1)
    );
  });

  test('Box chain', () => {
    const box = Box.of(12);
    expect(box.chain(val => val * 1 + 0)).toBe(12);
  });

  test('Box unbox', () => {
    const box = Box.of('Chocolates');
    expect(box.unbox()).toBe('Chocolates');
  });
  test('Box `box` property', () => {
    const box = Box.of('Chocolates');
    expect(box.box).toEqual(box);
  });
  test('Box `value` property', () => {
    const box = Box.of('Chocolates');
    expect(box.value).toBe('Chocolates');
  });
});

describe('Testing boxFrom helper factory', () => {
  test('boxFrom', () => {
    const box = Box.of('Chocolates');
    const expected = boxFrom(box);
    expect(expected).toEqual({ boxedValue: 'Chocolates' });
  });
});

describe('Testing boxOf helper factory', () => {
  test('boxOf', () => {
    const expected = boxOf('Chocolates');
    expect(expected).toEqual({ boxedValue: 'Chocolates' });
  });
});
