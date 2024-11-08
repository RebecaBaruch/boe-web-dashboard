// function to get the color of the risk based on the value
export const getRiskColor = (risk: number): string => {
  if (risk >= 80) {
    return '#FF5454';
  } else if (risk >= 40) {
    return '#FFEB36';
  } else {
    return '#3BD640';
  }
};

export const getRiskTextColor = (risk: number): string => {
    if (risk >= 40 && risk < 80) {
      return '#474000';
    } else {
      return '#FFFFFF';
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
