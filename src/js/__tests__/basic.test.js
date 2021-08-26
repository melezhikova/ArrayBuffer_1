import Character from '../basic';

test('should create new Character', () => {
  const received = new Character('Eva', 'Daemon');

  const expected = {
    name: 'Eva',
    type: 'Daemon',
    health: 100,
    level: 1,
  };
  expect(received).toEqual(expected);
});

test('should get error when create new Character_name', () => {
  function create() {
    return new Character('Evaaaaaaaaa', 'Daemon');
  }

  expect(create).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('should get error when create new Character_type', () => {
  function create() {
    return new Character('Eva', 'Zombie');
  }

  expect(create).toThrowError('Такого персонажа не существует');
});