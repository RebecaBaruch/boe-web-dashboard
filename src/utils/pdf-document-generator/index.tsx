import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';
import { TableDiagnosisData } from 'components/data-table/types';
import {
  getResultColor,
  getResultTextColor,
  getStatusColor,
  getStatusTextColor,
} from 'utils/color-utils';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    padding: 20,
  },
  header: {
    fontSize: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  animalPhoto: {
    width: 40,
    height: 40,
    borderRadius: 7,
  },
  animalInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  analysisContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottom: '1 solid #00000034',
  },
  resultContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
  },
  resultBox: {
    flexDirection: 'column',
    gap: 5,
  },
  descriptionContainer: {
    flexDirection: 'row',
    gap: 20,
    borderRadius: 10,
    border: '1 solid #00000034',
  },
  descriptionBox: {
    flexDirection: 'column',
    gap: 5,
  },
  analysisImg: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 32,
    width: 81,
    height: 81,
    borderRadius: 10,
    overflow: 'hidden',
  },
  badge: {
    padding: 4,
    borderRadius: 8,
    fontSize: 12,
    display: 'flex',
    marginBottom: 4,
  },
  authorContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 50,
    padding: '4px 15px',
    borderRadius: 10,
    backgroundColor: '#f2f2f5',
  },
  authorPhoto: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    marginRight: 8,
  },
  authorName: {
    fontSize: 12,
  },
});

interface PDFDocumentProps {
  record: TableDiagnosisData;
}

export const PDFDocumentGenerator: React.FC<PDFDocumentProps> = ({
  record,
}) => {
  const defaultAnimalImg = '../../../public/assets/animal-img.png';
  const defaultAnimalPic = '/public/assets/pic-image.png';

  const resultBadgeStyle = {
    backgroundColor: getResultColor(record.result),
    color: getResultTextColor(record.result),
  };

  const statusBadgeStyle = {
    backgroundColor: getStatusColor(record.status || 'Sem tratamento'),
    color: getStatusTextColor(record.status || 'Sem tratamento'),
  };

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Text>
            <b>Pré-diagnóstico</b>
          </Text>
          <Text>
            <b>Data de registro</b> {record.date}
          </Text>
        </View>

        <View style={styles.analysisContainer}>
          <View style={styles.animalInfoContainer}>
            <Image
              src={record.animalPhoto || defaultAnimalImg}
              style={styles.animalPhoto}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                {record.animalId}
              </Text>
              <Text style={{ fontSize: 12 }}>{record.animalName}</Text>
            </View>
          </View>
          <View style={styles.authorContainer}>
            {record.authorPhoto ? (
              <Image src={record.authorPhoto} style={styles.authorPhoto} />
            ) : (
              <View style={styles.authorPhoto} />
            )}
            <Text style={styles.authorName}>{record.authorName}</Text>
          </View>
        </View>

        <View style={styles.resultContainer}>
          <View style={styles.resultBox}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Resultado</Text>
            <View style={[styles.badge, resultBadgeStyle]}>
              <Text>{record.result}</Text>
            </View>
          </View>
          <View style={styles.resultBox}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
              Status de tratamento
            </Text>
            <View style={[styles.badge, statusBadgeStyle]}>
              <Text>{record.status || 'Sem tratamento'}</Text>
            </View>
          </View>
        </View>

        <View style={styles.analysisContainer}>
          <Image
            src={record.analysisImg || defaultAnimalPic}
            style={styles.analysisImg}
          />
          <View style={styles.descriptionBox}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
              Descrição da análise
            </Text>
            <Text style={{ fontSize: 10, fontWeight: 'light' }}>
              Probabilidade baixa, significa que as lesões ou sintomas
              observados não correspondem aos sinais típicos da doença.
            </Text>
          </View>
        </View>

        <Text style={{ fontSize: 10, color: '#666', marginTop: 30 }}>Böe</Text>
      </Page>
    </Document>
  );
};
