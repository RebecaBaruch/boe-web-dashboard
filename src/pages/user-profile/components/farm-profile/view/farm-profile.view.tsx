import { Box, Divider, Stack, Text3, Title3 } from '@telefonica/mistica';
import ButtonPrimary from '../../../../../components/button-primary/button-primary.component';
import ButtonSecondary from '../../../../../components/button-secondary/button-secondary.component';
import { Column } from '../../../../../components/column/styled';
import { Container } from '../../../../../components/container/container.component';
import InputBox from '../../../../../components/input-box/input-box.component';
import Input from '../../../../../components/input/input.component';
import { Row } from '../../../../../components/row/styled';
import React from 'react';
import { Edit } from 'react-feather';
import { FarmProfileProps } from '../types';

export default function FarmProfile({
  propertyName,
  farmPhone,
  cep,
  cnpj,
  location,
  address,
  onEdit,
  isEditMode,
  readOnly,
  onUpdate,
  updateInfo,
  setUpdateInfo,
}: FarmProfileProps) {
  const renderButtons = () => {
    if (isEditMode) {
      return (
        <Box paddingTop={24} width="100%">
          <Row space={40} align="space-between">
            <ButtonSecondary blue content="Cancelar" onClick={onEdit} />
            <ButtonPrimary content="Salvar alteração" onClick={onUpdate} />
          </Row>
        </Box>
      );
    }
  };
  return (
    <Container>
      <Stack space={64}>
        <Row>
          <b>Dados da fazenda</b>
        </Row>

        <Row>
          <Box width="100%">
            <Stack space={32}>
              <Row width="100%" align="space-between">
                <Stack space={8}>
                  <Title3>
                    <b>{propertyName}</b>
                  </Title3>
                  <Text3 regular>{location}</Text3>
                </Stack>

                <ButtonSecondary
                  width="fit-content"
                  gray
                  selected={isEditMode}
                  content={
                    <>
                      Editar
                      <Edit width={20} height={20} />
                    </>
                  }
                  onClick={onEdit}
                />
              </Row>

              <Divider />
            </Stack>
          </Box>
        </Row>

        <Box>
          <Stack space={16}>
            <Column>
              <Row space={5}>
                <InputBox
                  title="Nome da propriedade"
                  input={
                    <Input
                      value={updateInfo.propertyName}
                      placeholder={propertyName}
                      name="propertyName"
                      disabled={readOnly}
                      type="text"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUpdateInfo((prev) => ({
                          ...prev,
                          propertyName: e.target.value,
                        }))
                      }
                    />
                  }
                />
                <InputBox
                  title="Telefone"
                  input={
                    <Input
                      value={updateInfo.farmPhone}
                      name={farmPhone}
                      disabled={readOnly}
                      type="phone"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUpdateInfo((prev) => ({
                          ...prev,
                          farmPhone: e.target.value,
                        }))
                      }
                    />
                  }
                />
              </Row>

              <Row space={5}>
                <InputBox
                  title="CEP"
                  input={
                    <Input
                      value={updateInfo.cep}
                      name={cep}
                      disabled={readOnly}
                      type="cep"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUpdateInfo((prev) => ({
                          ...prev,
                          cep: e.target.value,
                        }))
                      }
                    />
                  }
                />
                <InputBox
                  title="Telefone"
                  input={
                    <Input
                      value={updateInfo.cnpj}
                      name={cnpj}
                      disabled={readOnly}
                      type="cnpj"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUpdateInfo((prev) => ({
                          ...prev,
                          cnpj: e.target.value,
                        }))
                      }
                    />
                  }
                />
              </Row>

              <Row space={5}>
                <InputBox
                  title="Cidade / Estado"
                  size={1}
                  input={
                    <Input
                      value={updateInfo.location}
                      name={location}
                      disabled={readOnly}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUpdateInfo((prev) => ({
                          ...prev,
                          location: e.target.value,
                        }))
                      }
                    />
                  }
                />
                <InputBox
                  title="Endereço"
                  size={2}
                  input={
                    <Input
                      value={updateInfo.address}
                      name={address}
                      disabled={readOnly}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUpdateInfo((prev) => ({
                          ...prev,
                          address: e.target.value,
                        }))
                      }
                    />
                  }
                />
              </Row>

              {renderButtons()}
            </Column>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
