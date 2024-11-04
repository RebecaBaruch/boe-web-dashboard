import React from 'react';
import Image from 'next/image';
import FormContainer from '../../components/form-container/index.component';
import TopFormBox from '../../../../components/top-form-box/index.component';
import { Box, ButtonLayout, Inline, Text1 } from '@telefonica/mistica';
import LinkComponent from '../../../../components/link-component/link.component';
import InputBox from '../../../../components/input-box/input-box.component';
import Input from '../../../../components/input/input.component';
import { UserFormWrapper } from './styled';
import ButtonPrimary from '../../../../components/button-primary/button-primary.component';
import ButtonSecondary from '../../../../components/button-secondary/button-secondary.component';
import { Viewport } from '../../../../components/viewport/styled';
import { Row } from '../../../../components/row/styled';

export default function UserRegister() {
  const BoeLogo02: string = '/assets/boe-logo02.svg';
  return (
    <Viewport>
      <Box paddingBottom={48}>
        <Image src={BoeLogo02} alt="boe-logo" width={60} height={60} />
      </Box>
      <FormContainer
        formHeader={
          <TopFormBox
            title="Crie a sua conta"
            description={
              <Inline space={8} alignItems="center">
                <Text1 regular>Já possui uma conta?</Text1>
                <LinkComponent to={''} text="Log in" />
              </Inline>
            }
            buttonText="Criar com Google"
            dividerText="Ou crie com o e-mail"
            onClickButton={() => {}}
          />
        }
        form={
          <UserFormWrapper>
            <InputBox
              title="Nome"
              input={
                <Input
                  value={''}
                  name="name"
                  type={''}
                  placeholder="Insira seu nome"
                  onChange={() => {}}
                />
              }
            />
            <Box width="100%">
              <Row>
                <InputBox
                  title="E-mail"
                  input={
                    <Input
                      value={''}
                      name="email"
                      type={''}
                      placeholder="seu.email@email.com"
                      onChange={() => {}}
                    />
                  }
                />

                <InputBox
                  title="Telefone"
                  input={
                    <Input
                      value={''}
                      name="phone"
                      type={''}
                      placeholder="(00) 00000-0000"
                      onChange={() => {}}
                    />
                  }
                />
              </Row>
            </Box>

            <InputBox
              title="Senha"
              input={
                <Input
                  value={''}
                  name="password"
                  type={''}
                  placeholder="Crie a sua senha"
                  onChange={() => {}}
                />
              }
            />

            <Box width="100%">
              <ButtonLayout
                primaryButton={
                  <ButtonPrimary content="Continuar" onClick={() => {}} />
                }
                secondaryButton={
                  <ButtonSecondary content="Cancelar" onClick={() => {}} />
                }
              />
            </Box>
          </UserFormWrapper>
        }
      />
    </Viewport>
  );
}
