import {
  TableAnimalsData,
  TableDiagnosisData,
} from 'components/data-table/types';

export const diagnosisMockData: TableDiagnosisData[] = Array.from(
  { length: 20 },
  (_, index) => ({
    id: `AU${String(1000 + index).padStart(4, '0')}`, // Altere para 'id' ao invés de 'animalId'
    riskLabel: ['Alto', 'Médio', 'Baixo'][Math.floor(Math.random() * 3)],
    animalId: `AU${String(1000 + index).padStart(4, '0')}`, // Deixe o 'animalId' também para manter consistência
    animalPhoto: `https://placekitten.com/50/50?image=${index}`,
    authorName: ['Nelson Oliveira', 'Fabrício Neves'][index % 2],
    authorPhoto: `https://randomuser.me/api/portraits/men/${index}.jpg`,
    date: new Date(2024, 8, 17 + (index % 7)).toLocaleDateString('pt-BR'),
    diagnosisDate: new Date(2024, 8, 17 + (index % 7)).toLocaleDateString('pt-BR'),
    result: ['Berne', 'Dermatite', 'Dermatofitose', 'Dermatofilose'][
      Math.floor(Math.random() * 4)
    ],
    risk: Math.floor(Math.random() * 101),
  }),
);

export const animalsMockData: TableAnimalsData[] = Array.from(
  { length: 10 },
  (_, index) => ({
    id: `AU${String(1000 + index).padStart(4, '0')}`, // Altere para 'id' ao invés de 'animalId'
    riskLabel: ['Alto', 'Médio', 'Baixo'][Math.floor(Math.random() * 3)],
    animalId: `AU${String(1000 + index).padStart(4, '0')}`, // Deixe o 'animalId' também para manter consistência
    animalPhoto: `https://placekitten.com/50/50?image=${index}`,
    date: new Date(2024, 8, 17 + (index % 7)).toLocaleDateString('pt-BR'),
    result: ['Berne', 'Dermatite', 'Dermatofitose', 'Dermatofilose'][
      Math.floor(Math.random() * 4)
    ],
    risk: Math.floor(Math.random() * 101),
    status: ['Em andamento', 'Concluído', 'Sem tratamento'][
      Math.floor(Math.random() * 3)
    ],
  }),
);
