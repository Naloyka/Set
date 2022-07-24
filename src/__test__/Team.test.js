import Team from '../js/Team';
import Character from '../js/Character';

const player1 = new Character('player-1', 'Swordsman');
const player2 = new Character('player-2', 'Swordsman');

test('test add ', () => {
  const newTeam = new Team();
  newTeam.add(player1);
  const iterator = newTeam.members.values();
  expect(iterator.next().value).toEqual({
    attack: 0,
    defence: 0,
    health: 100,
    level: 100,
    name: 'player-1',
    type: 'Swordsman',
  });
});

test('test Error ', () => {
  const newTeam = new Team();
  newTeam.add(player1);
  const result = () => newTeam.add(player1);
  expect(result).toThrow('Игрок с таким именем уже существует');
});

test('test addAll ', () => {
  const newTeam = new Team();
  newTeam.addAll(player1, player2, player2);
  expect(newTeam.members.size).toBe(2);
});

test('test toArray ', () => {
  const newTeam = new Team();
  newTeam.addAll(player1, player2, player2);
  newTeam.toArray();
  const result = [...newTeam.members];

  expect(result).toEqual([{
    attack: 0,
    defence: 0,
    health: 100,
    level: 100,
    name: 'player-1',
    type: 'Swordsman',
  },
  {
    attack: 0,
    defence: 0,
    health: 100,
    level: 100,
    name: 'player-2',
    type: 'Swordsman',
  },
  ]);
});
