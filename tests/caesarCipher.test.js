import caesarCipher from '../code/caesarCipher';

test('defend the east wall of the castle IS efgfoe uif fbtu xbmm pg uif dbtumf with shift of 1', () => {
  expect(caesarCipher('defend the east wall of the castle')).toBe(
    'efgfoe uif fbtu xbmm pg uif dbtumf',
  );
});

test('Hello world! IS Vszzc kcfzr! with shift of 90,000', () => {
  expect(caesarCipher('Hello world!')).toBe('Vszzc kcfzr!');
});

test('LoOk MoM I cAn WrItE Js. IS YbBx ZbZ V pNa JeVgR Wf. with shift of 90,000', () => {
  expect(caesarCipher('LoOk MoM I cAn WrItE Js.')).toBe(
    'YbBx ZbZ V pNa JeVgR Wf.',
  );
});
