import React from 'react';
import {
  Box,
  Divider,
  Stack,
  Text3,
  Title2,
  Title3,
} from '@telefonica/mistica';
import ButtonSecondary from '../../../../../components/button-secondary/button-secondary.component';
import { Container } from '../../../../../components/container/container.component';
import InputBox from '../../../../../components/input-box/input-box.component';
import Input from '../../../../../components/input/input.component';
import { Row } from '../../../../../components/row/styled';
import { ChangePasswordProps } from '../types';
import ButtonPrimary from '../../../../../components/button-primary/button-primary.component';

export default function ChangePassword({
  currentPassword,
  confirmCurrentPassword,
  newPassword,
  confirmNewPassword,
  isPasswordValid,
  isEditMode,
  onEdit,
  readOnly,
  onUpdate,
  setUpdateInfo,
}: ChangePasswordProps) {
  const renderButtons = () => {
    if (isEditMode) {
      return (
        <Box paddingTop={24} width="100%">
          <Row space={40} align="space-between">
            <ButtonSecondary
              blue
              content="Cancelar"
              onClick={onEdit}
              disabled={isPasswordValid}
            />
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
          <Stack space={12}>
            <Title3>
              <b>Alterar senha</b>
            </Title3>
            <Text3 regular>
              A senha deve ter 8 caracteres, contendo letras maiúsculas,
              minúsculas e pelo menos 1 caractere especial
            </Text3>
          </Stack>
        </Row>

        <Box>
          <Stack space={16}>
            <Stack space={12}>
              <Title2>
                <b>Verifique a senha atual</b>
              </Title2>
              <Row space={5}>
                <InputBox
                  title="Senha atual"
                  input={
                    <Input
                      value={currentPassword}
                      placeholder={currentPassword}
                      name="currentPassword"
                      disabled={true}
                      type="password"
                      onChange={() => {}}
                    />
                  }
                />

                <InputBox
                  title="Confirme a senha atual"
                  input={
                    <Input
                      value={confirmCurrentPassword}
                      placeholder="Digite a senha atual"
                      name="confirmCurrentPassword"
                      disabled={false}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUpdateInfo.setConfirmCurrentPassword(e.target.value)
                      }
                    />
                  }
                />
              </Row>
            </Stack>
            <Divider />

            <Stack space={12}>
              <Title2>
                <b>Alterar senha</b>
              </Title2>
              <Row space={5}>
                <InputBox
                  title="Nova senha"
                  input={
                    <Input
                      value={newPassword}
                      placeholder="Digite a nova senha"
                      name="newPassword"
                      disabled={readOnly}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUpdateInfo.setNewPassword(e.target.value)
                      }
                    />
                  }
                />
                <InputBox
                  title="Confirme a nova senha"
                  input={
                    <Input
                      value={confirmNewPassword}
                      placeholder="Confirme a nova senha"
                      name="confirmNewPassword"
                      disabled={readOnly}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUpdateInfo.setConfirmNewPassword(e.target.value)
                      }
                    />
                  }
                />
              </Row>
            </Stack>

            {renderButtons()}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
