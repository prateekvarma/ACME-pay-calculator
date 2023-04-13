const calculateAmount = require('./functions');

test('returns the correct amount for the given employee', () => {
  expect(calculateAmount('MO10:00-12:00,TH12:00-14:00,SU20:00-21:00')).toBe(85);
});

test('check if names can be extracted from the input', () => {
  const entry =
    'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00';
  const name = entry.split('=')[0];
  expect(name).toBe('RENE');
});

test('check if hour logs are correctly being extracted from the input', () => {
  const entry =
    'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00';
  const hoursLog = entry.split('=')[1];
  expect(hoursLog).toBe(
    'MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00'
  );
});

test('check if day is being extracted from the input correctly', () => {
  const dailyWork = 'MO10:00-12:00';
  const day = dailyWork.substring(0, 2);
  expect(day).toBe('MO');
});

describe('check if time is correctly being extracted', () => {
  const dailyWork = 'MO10:00-12:00';
  const hours = dailyWork.substring(2);
  test('check if hours are correctly extracted', () => {
    expect(hours).toBe('10:00-12:00');
  });
  test('check if starting hours are being correctly extracted', () => {
    const startingHour = parseInt(hours.substring(0, 2));
    expect(startingHour).toBe(10);
  });
  test('check if ending hours are being correctly extracted', () => {
    let endingHour = parseInt(hours.substring(6, 8));
    expect(endingHour).toBe(12);
  });
});
