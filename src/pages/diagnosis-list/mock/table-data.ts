import { TableDiagnosisData } from 'components/data-table/types';

export const diagnosisMockData: TableDiagnosisData[] = Array.from(
  { length: 20 },
  (_, index) => ({
    riskLabel: ['Alto', 'Médio', 'Baixo'][Math.floor(Math.random() * 3)],
    animalId: `AU${String(1000 + index).padStart(4, '0')}`,
    animalPhoto: `https://placekitten.com/50/50?image=${index}`,
    authorName: ['Nelson Oliveira', 'Fabrício Neves'][index % 2],
    authorPhoto: `https://randomuser.me/api/portraits/men/${index}.jpg`,
    date: new Date(2024, 8, 17 + (index % 7)).toLocaleDateString('pt-BR'),
    result: ['Berne', 'Dermatite', 'Dermatofitose'][
      Math.floor(Math.random() * 3)
    ],
    risk: Math.floor(Math.random() * 101),
  }),
);
