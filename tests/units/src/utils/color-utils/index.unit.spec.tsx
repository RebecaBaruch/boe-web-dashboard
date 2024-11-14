import {
  getRiskColor,
  getRiskTextColor,
  getResultColor,
  getResultTextColor,
  getStatusColor,
  getStatusTextColor,
} from '../../../../../src/utils/color-utils';

describe('getRiskColor', () => {
  it('should return #FF5454 for risk >= 70', () => {
    expect(getRiskColor(70)).toBe('#FF5454');
    expect(getRiskColor(100)).toBe('#FF5454');
  });

  it('should return #FFEB36 for risk >= 30 and < 70', () => {
    expect(getRiskColor(30)).toBe('#FFEB36');
    expect(getRiskColor(50)).toBe('#FFEB36');
    expect(getRiskColor(69)).toBe('#FFEB36');
  });

  it('should return #3BD640 for risk < 30', () => {
    expect(getRiskColor(0)).toBe('#3BD640');
    expect(getRiskColor(29)).toBe('#3BD640');
  });
});

describe('getRiskTextColor', () => {
  it('should return #474000 for risk >= 30 and < 70', () => {
    expect(getRiskTextColor(30)).toBe('#474000');
    expect(getRiskTextColor(50)).toBe('#474000');
    expect(getRiskTextColor(69)).toBe('#474000');
  });

  it('should return #FFFFFF for risk < 30 or >= 70', () => {
    expect(getRiskTextColor(29)).toBe('#FFFFFF');
    expect(getRiskTextColor(70)).toBe('#FFFFFF');
    expect(getRiskTextColor(100)).toBe('#FFFFFF');
  });
});

describe('getResultColor', () => {
  it('should return #4A65CF for result "Berne"', () => {
    expect(getResultColor('Berne')).toBe('#4A65CF');
  });

  it('should return #00DAB6 for result "Dermatite"', () => {
    expect(getResultColor('Dermatite')).toBe('#00DAB6');
  });

  it('should return #FF12CB for result "Dermatofitose"', () => {
    expect(getResultColor('Dermatofitose')).toBe('#FF12CB');
  });

  it('should return #8515E8 for result "Dermatofilose"', () => {
    expect(getResultColor('Dermatofilose')).toBe('#8515E8');
  });

  it('should return #ffffff for unknown result', () => {
    expect(getResultColor('Unknown')).toBe('#ffffff');
  });
});

describe('getResultTextColor', () => {
  it('should return #001F3C for result "Dermatite"', () => {
    expect(getResultTextColor('Dermatite')).toBe('#001F3C');
  });

  it('should return #717171 for result null', () => {
    expect(getResultTextColor(null)).toBe('#717171');
  });

  it('should return #ffffff for any other result', () => {
    expect(getResultTextColor('Unknown')).toBe('#ffffff');
    expect(getResultTextColor('Berne')).toBe('#ffffff');
  });
});

describe('getStatusColor', () => {
  it('should return #FFAD0F for status "Em andamento"', () => {
    expect(getStatusColor('Em andamento')).toBe('#FFAD0F');
  });

  it('should return #45A6FF for status "Concluído"', () => {
    expect(getStatusColor('Concluído')).toBe('#45A6FF');
  });

  it('should return #F2F2F5 for any other status', () => {
    expect(getStatusColor('Unknown')).toBe('#F2F2F5');
  });
});

describe('getStatusTextColor', () => {
  it('should return #4C3200 for status "Em andamento"', () => {
    expect(getStatusTextColor('Em andamento')).toBe('#4C3200');
  });

  it('should return #FFFFFF for status "Concluído"', () => {
    expect(getStatusTextColor('Concluído')).toBe('#FFFFFF');
  });

  it('should return #717171 for any other status', () => {
    expect(getStatusTextColor('Unknown')).toBe('#717171');
  });
});
