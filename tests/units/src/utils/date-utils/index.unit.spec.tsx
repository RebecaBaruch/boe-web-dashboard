import {
  getCurrentDayOfWeek,
  getCurrentDate,
  getCurrentTime,
  getGreeting,
} from '../../../../../src/utils/date-utils';

const mockDate = (
  year: number,
  month: number,
  day: number,
  hours: number = 0,
  minutes: number = 0,
) => {
  const mockedDate = new Date(year, month - 1, day, hours, minutes);
  jest
    .spyOn(global, 'Date')
    .mockImplementation(() => mockedDate as unknown as Date);
};

describe('Date and Time Utility Functions', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('getCurrentDayOfWeek', () => {
    it('should return the correct day of the week in Portuguese', () => {
      mockDate(2024, 10, 31); // October 31, 2024 (Thursday)
      expect(getCurrentDayOfWeek()).toBe('Quinta-feira');
    });
  });

  describe('getCurrentDate', () => {
    it('should return the current date in the format "31 Oct, 2024"', () => {
      mockDate(2024, 10, 31); // October 31, 2024
      expect(getCurrentDate()).toBe('31 Oct, 2024');
    });
  });

  describe('getCurrentTime', () => {
    it('should return the current time in the format "18h30"', () => {
      mockDate(2024, 10, 31, 18, 30); // October 31, 2024 at 18:30
      expect(getCurrentTime()).toBe('18h30');
    });
  });

  describe('getGreeting', () => {
    it('should return "Bom dia" if the time is between 5:00 and 11:59', () => {
      mockDate(2024, 10, 31, 8, 0); // October 31, 2024 at 08:00
      expect(getGreeting()).toBe('Bom dia');
    });

    it('should return "Boa tarde" if the time is between 12:00 and 17:59', () => {
      mockDate(2024, 10, 31, 15, 0); // October 31, 2024 at 15:00
      expect(getGreeting()).toBe('Boa tarde');
    });

    it('should return "Boa noite" if the time is between 18:00 and 4:59', () => {
      mockDate(2024, 10, 31, 20, 0); // October 31, 2024 at 20:00
      expect(getGreeting()).toBe('Boa noite');
    });
  });
});
