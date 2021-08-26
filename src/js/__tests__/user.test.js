import Daemon from '../daemon';
import Magician from '../magician';

test('should create new Daemon', () => {
  const received = new Daemon('Winter', 'Daemon');
  const expected = {
    name: 'Winter',
    type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(received).toEqual(expected);
});

test('should create new Magician', () => {
  const received = new Magician('Autumn', 'Magician');
  const expected = {
    name: 'Autumn',
    type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(received).toEqual(expected);
});

test('should check stoned', () => {
  const daemon = new Daemon('Eva', 'Daemon');
  daemon.stoned = true;

  expect(daemon.stoned).toBe(true);
});

test('should check attackPower_notStoned', () => {
  const daemon = new Daemon('Eva', 'Daemon');
  daemon.attackPower = 3;

  expect(daemon.attackPower).toBe(8);
});

test('should check attackPower_notStoned <0', () => {
  const daemon = new Daemon('Eva', 'Daemon');
  daemon.attackPower = 15;

  expect(daemon.attackPower).toBe(0);
});

test('should check attackPower_stoned', () => {
  const daemon = new Daemon('Eva', 'Daemon');
  daemon.stoned = true;
  daemon.attackPower = 3;

  expect(daemon.attackPower).toBe(1);
});

test('should check attackPower_stoned_<0', () => {
  const daemon = new Daemon('Eva', 'Daemon');
  daemon.stoned = true;
  daemon.attackPower = 8;

  expect(daemon.attackPower).toBe(0);
});
