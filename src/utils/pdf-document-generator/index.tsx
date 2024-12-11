import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';
import { TableDiagnosisData } from '../../components/data-table/types';
import {
  getResultColor,
  getResultTextColor,
  getRiskColor,
  getStatusColor,
  getStatusTextColor,
} from 'utils/color-utils';
import { getRiskDescription, getRiskText } from 'utils/risk-text-utils';

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily: 'Helvetica',
    padding: 30,
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
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 7,
    overflow: 'hidden',
    backgroundColor: '#00000013',
  },
  animalInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  analysisContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottom: '0.5 solid #00000013',
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
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 20,
    padding: '10px',
    borderRadius: 10,
    border: '0.5 solid #00000018',
  },
  resultDescriptionRow: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    gap: '20px',
  },
  analysisDescriptionContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    gap: '20px',
  },
  descriptionBox: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '100%',
    gap: 5,
  },
  analysisImg: {
    display: 'flex',
    justifyContent: 'center' as const,
    alignContent: 'center',
    width: 70,
    height: 60,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#00000013',
  },
  badge: {
    padding: '4px 4px 4px 4px',
    borderRadius: 8,
    fontSize: 10,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 4,
  },
  authorContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 'auto',
    padding: '4px 15px 4px 4px',
    borderRadius: 10,
    backgroundColor: '#f2f2f5',
  },
  authorPhoto: {
    display: 'flex',
    justifyContent: 'center' as const,
    alignContent: 'center',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginRight: 8,
  },
  authorName: {
    fontSize: 10,
  },
});

export interface PDFDocumentProps {
  record: TableDiagnosisData;
}

export const PDFDocumentGenerator: React.FC<PDFDocumentProps> = ({
  record,
}) => {
  const defaultAnimalImg = '/assets/animal-img.png';
  const defaultAnimalPic = '/assets/pic-image.png';
  const defaultAuthorPic = '/assets/profile-pic.svg';
  const boeLogo = '/assets/boe-logo02.png';
  const noTreatment = '-- Sem tratamento';

  const resultBadgeStyle = {
    backgroundColor: getResultColor(record.result),
    color: getResultTextColor(record.result),
  };

  const statusBadgeStyle = {
    backgroundColor: getStatusColor(record.status || noTreatment),
    color: getStatusTextColor(record.status || noTreatment),
  };

  const riskBadgeStyle = {
    padding: '4px 4px 4px 4px',
    borderRadius: 8,
    fontSize: 10,
    marginBottom: 4,
    backgroundColor: getRiskColor(record.risk),
  };

  const riskBallStyle = {
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: `5px solid ${getRiskColor(record.risk)}`,
  };

  const riskBadgeText = getRiskText(record.risk);

  const riskText = {
    title: riskBadgeText,
    description: getRiskDescription(riskBadgeText),
  };

  return (
    <Document>
      <Page style={styles.page}>
        <View
          style={{
            display: 'flex',
            gap: '30px',
            fontFamily: 'Helvetica',
            padding: 30,
          }}
        >
          <View style={styles.header}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '171A21' }}>
              Pré-diagnóstico
            </Text>
            <View
              style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}
            >
              <Text
                style={{ fontSize: 10, fontWeight: 'bold', color: '#171A21' }}
              >
                Data de registro
              </Text>
              <Text style={{ color: '#3d4046' }}>{record.date}</Text>
            </View>
          </View>

          <View style={styles.analysisContainer}>
            <View style={styles.animalInfoContainer}>
              <Image
                src={record.animalPhoto || defaultAnimalImg}
                style={styles.animalPhoto}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                  {record.animalId}
                </Text>
                <Text style={{ fontSize: 12 }}>{record.animalName}</Text>
              </View>
            </View>
            <View style={styles.authorContainer}>
              <Image
                src={record.authorPhoto || defaultAuthorPic}
                style={styles.authorPhoto}
              />
              <Text style={styles.authorName}>{record.authorName}</Text>
            </View>
          </View>

          <View style={styles.resultContainer}>
            <View style={styles.resultBox}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                Resultado
              </Text>
              <View style={[styles.badge, resultBadgeStyle]}>
                <Text style={{ textAlign: 'center' }}>{record.result}</Text>
              </View>
            </View>
            <View style={styles.resultBox}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                Status de tratamento
              </Text>
              <View style={[styles.badge, statusBadgeStyle]}>
                <Text style={{ textAlign: 'center' }}>
                  {record.status || noTreatment}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <View style={styles.resultDescriptionRow}>
              <View style={riskBallStyle}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}
                >
                  {record.risk}%
                </Text>
              </View>
              <View style={styles.resultBox}>
                <View style={riskBadgeStyle}>
                  <Text style={{ textAlign: 'center', fontSize: 10 }}>
                    {riskText.title}
                  </Text>
                </View>
                <Text style={{ fontSize: 10 }}>{riskText.description}</Text>
              </View>
            </View>
            <View style={styles.analysisDescriptionContainer}>
              <Image
                src={record.analysisImg || defaultAnimalPic}
                style={styles.analysisImg}
              />
              <View style={styles.descriptionBox}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                  Descrição da análise
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: 'light',
                    maxWidth: '100%',
                  }}
                >
                  Probabilidade baixa, significa que as lesões ou sintomas
                  observados não correspondem aos sinais típicos da doença.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image src={boeLogo} style={{ width: 50 }} />
        </View>
      </Page>
    </Document>
  );
};
