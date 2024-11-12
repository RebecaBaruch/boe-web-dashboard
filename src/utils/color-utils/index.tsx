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
    case 'Dermatofilose':
      return '#8515E8';
    default:
      return '#ffffff';
  }
};

export const getResultTextColor = (result: string): string => {
  switch (result) {
    case 'Dermatite':
      return '#001F3C';
    case null:
      return '#717171';
    default:
      return '#ffffff';
  }
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Em andamento':
      return '#FFAD0F';
    case 'Concluído':
      return '#45A6FF';
    default:
      return '#F2F2F5';
  }
};

export const getStatusTextColor = (status: string): string => {
  switch (status) {
    case 'Em andamento':
      return '#4C3200';
    case 'Concluído':
      return '#FFFFFF';
    default:
      return '#717171';
  }
};
