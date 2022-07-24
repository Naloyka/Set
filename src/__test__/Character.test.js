import Character from '../js/Character';

test('create new class', () => {
  const result = new Character('Bow', 'Swordsman');
  const sample = {
    name: 'Bow',
    type: 'Swordsman',
    health: 100,
    level: 100,
    attack: 0,
    defence: 0,
  };
  expect(result).toEqual(sample);
});

test('catsh the Error with name', () => {
  const result = () => new Character('B', 'Swordsman');
  expect(result).toThrow('Некорректное имя');
});

test('catsh the Error with type', () => {
  const result = () => new Character('Bow', 'Sword');
  expect(result).toThrow('Некорректный тип');
});
