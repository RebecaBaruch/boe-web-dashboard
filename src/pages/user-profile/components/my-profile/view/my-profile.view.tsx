import React from 'react';
import { Box, Divider, Stack, Text3, Title3 } from '@telefonica/mistica';
import { Container } from 'components/container/container.component';
import { Row } from 'components/row/styled';
import ButtonSecondary from 'components/button-secondary/button-secondary.component';
import { Edit } from 'react-feather';
import InputBox from 'components/input-box/input-box.component';
import Input from 'components/input/input.component';
import { MyProfileProps } from '../types';
import { Column } from 'components/column/styled';
import ButtonPrimary from 'components/button-primary/button-primary.component';

export default function MyProfile({
  firstName,
  lastName,
  email,
  phone,
  location,
  readOnly,
  isEditMode,
  onEdit,
  onUpdate,
  updateInfo,
  setUpdateInfo,
}: MyProfileProps) {
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
          <b>Meu Perfil</b>
        </Row>

        <Row>
          <Box width="100%">
            <Stack space={32}>
              <Stack space={8}>
                <Title3>
                  <b>
                    {firstName} {lastName}
                  </b>
                </Title3>
                <Text3 regular>Administrador do Sistema</Text3>
                <Text3 regular>{location}</Text3>
              </Stack>

              <Divider />
            </Stack>
          </Box>
        </Row>

        <Box>
          <Stack space={16}>
            <Row align="space-between">
              <b>Informações Pessoais</b>
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

            <Column>
              <Row space={5}>
                <InputBox
                  title="Primeiro nome"
                  input={
                    <Input
                      value={updateInfo.firstName}
                      placeholder={firstName}
                      name="firstName"
                      disabled={readOnly}
                      onChange={(e) =>
                        setUpdateInfo((prev) => ({
                          ...prev,
                          firstName: e.target.value,
                        }))
                      }
                    />
                  }
                />
                <InputBox
                  title="Último nome"
                  input={
                    <Input
                      value={updateInfo.lastName}
                      name={lastName}
                      disabled={readOnly}
                      onChange={(e) =>
                        setUpdateInfo((prev) => ({
                          ...prev,
                          lastName: e.target.value,
                        }))
                      }
                    />
                  }
                />
              </Row>

              <Row space={5}>
                <InputBox
                  title="E-mail"
                  input={
                    <Input
                      value={updateInfo.email}
                      name={email}
                      disabled={readOnly}
                      type="email"
                      onChange={(e) =>
                        setUpdateInfo((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  }
                />
                <InputBox
                  title="Telefone"
                  input={
                    <Input
                      value={updateInfo.phone}
                      name={phone}
                      disabled={readOnly}
                      type="phone"
                      onChange={(e) =>
                        setUpdateInfo((prev) => ({
                          ...prev,
                          phone: e.target.value,
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
