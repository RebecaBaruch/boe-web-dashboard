// function to get the color of the risk based on the value
export const getRiskColor = (risk: number): string => {
  if (risk >= 90) {
    return '#FF5454';
  } else if (risk >= 50) {
    return '#FFEB36';
  } else {
    return '#3BD640';
  }
};

// function to get the color of the result based on the value
export const getResultColor = (result: string): string => {
  switch (result) {
    case 'Berne':
      return '#4A65CF';
    case 'Dermatite':
      return '#00DAB6';
    case 'Dermatofitose':
      return '#FF12CB';
    default:
      return '#ffffff';
  }
};
