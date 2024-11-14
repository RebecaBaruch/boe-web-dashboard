import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import {
  SideWrapper,
  Wrapper,
} from '../components/login-template/index.component';
import InputBox from '../../../components/input-box/input-box.component';
import { Box, Inline, Stack, Text1 } from '@telefonica/mistica';
import Input from '../../../components/input/input.component';
import { LoginProps } from '../types';
import RightSideFrame from '../components/right-side-frame/index.component';
import TopFormBox from '../../../components/top-form-box/index.component';
import ButtonPrimary from '../../../components/button-primary/button-primary.component';
import RememberLogin from '../components/remember-login/index.component';
import LinkComponent from '../../../components/link-component/link.component';

export default function Login({
  email,
  isButtonDisabled,
  onLogin,
}: LoginProps) {
  const BoeLogo02: string = '/assets/boe-logo02.svg';
  return (
    <Wrapper>
      <SideWrapper>
        <Box width={'56%'}>
          <Stack space={32}>
            <Image src={BoeLogo02} alt="boe-logo" width={60} height={60} />

            <TopFormBox
              title="Log in"
              description="Bem vindo de volta! Monitore da melhor forma a saúde do seu gado!"
              dividerText="Ou entre com o e-mail"
              buttonText="Entre com Google"
              onClickButton={() => {}}
            />

            <Stack space={16}>
              <InputBox
                title="E-mail"
                input={
                  <Input
                    placeholder="Insira seu e-mail"
                    name="myInput"
                    type="text"
                    value={email}
                    onChange={() => {}}
                  />
                }
              />

              <InputBox
                title="Senha"
                input={
                  <Stack space={4}>
                    <Input
                      placeholder="Digite a sua senha"
                      name="myInput"
                      type="text"
                      value={email}
                      onChange={() => {}}
                    />

                    <Inline space="between" alignItems="center">
                      <RememberLogin />
                      <LinkComponent to={''} text={'Esqueceu a senha?'} />
                    </Inline>
                  </Stack>
                }
              />
              <ButtonPrimary
                content={'Login'}
                disabled={isButtonDisabled}
                onClick={onLogin}
              />

              <Inline space={8} alignItems="center">
                <Text1 regular>Não tem conta?</Text1>
                <LinkComponent to={''} text={'Registre-se'} />
              </Inline>
            </Stack>
          </Stack>
        </Box>

        <span className={styles.allRights}>
          @2024 Böe Todos os direitos reservados
        </span>
      </SideWrapper>

      <RightSideFrame />
    </Wrapper>
  );
}
