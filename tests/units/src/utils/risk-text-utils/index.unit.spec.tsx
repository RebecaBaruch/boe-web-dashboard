import {
  getRiskText,
  getRiskDescription,
} from '../../../../../src/utils/risk-text-utils';

describe('getRiskText', () => {
  it('should return "Alto" for risk >= 70', () => {
    expect(getRiskText(70)).toBe('Alto');
    expect(getRiskText(100)).toBe('Alto');
  });

  it('should return "Moderado" for risk >= 30 and < 70', () => {
    expect(getRiskText(30)).toBe('Moderado');
    expect(getRiskText(50)).toBe('Moderado');
    expect(getRiskText(69)).toBe('Moderado');
  });

  it('should return "Saudável" for risk < 30', () => {
    expect(getRiskText(0)).toBe('Saudável');
    expect(getRiskText(29)).toBe('Saudável');
  });
});

describe('getRiskDescription', () => {
  it('should return correct description for "Saudável" risk level', () => {
    expect(getRiskDescription('Saudável')).toBe(
      'Sem risco significativo de complicações, condição estável',
    );
  });

  it('should return correct description for "Moderado" risk level', () => {
    expect(getRiskDescription('Moderado')).toBe(
      'Chance de infecção com baixa complicação, monitoramento sugerido',
    );
  });

  it('should return correct description for "Alto" risk level', () => {
    expect(getRiskDescription('Alto')).toBe(
      'Alto risco de infecção com possíveis complicações graves',
    );
  });

  it('should return "Nível de risco desconhecido" for unknown risk level', () => {
    expect(getRiskDescription('Desconhecido')).toBe(
      'Nível de risco desconhecido',
    );
    expect(getRiskDescription('')).toBe('Nível de risco desconhecido');
  });
});
