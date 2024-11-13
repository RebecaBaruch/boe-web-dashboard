export const getRiskText = (risk: number): string => {
  if (risk >= 70) {
    return 'Alto';
  } else if (risk >= 30) {
    return 'Moderado';
  } else {
    return 'Saudável';
  }
};

export const getRiskDescription = (riskLevel: string): string => {
  switch (riskLevel) {
    case 'Saudável':
      return 'Sem risco significativo de complicações, condição estável';
    case 'Moderado':
      return 'Chance de infecção com baixa complicação, monitoramento sugerido';
    case 'Alto':
      return 'Alto risco de infecção com possíveis complicações graves';
    default:
      return 'Nível de risco desconhecido';
  }
};
