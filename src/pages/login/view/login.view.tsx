import React from 'react';
import {
  SideWrapper,
  Wrapper,
} from '../components/login-template/index.component';
import InputBox from '../../../components/input-box/input-box.component';
import { PasswordField, Stack } from '@telefonica/mistica';
import Input from 'src/components/input/input.component';
import { LoginProps } from '../types';

export default function Login({ email }: LoginProps) {
  return (
    <Wrapper>
      <SideWrapper>
        <Stack space={32}>
          <InputBox
            title="E-mail"
            input={
              <Input
                placeholder="Digite aqui..."
                name="myInput"
                type="text"
                value={email}
                onChange={() => console.log('oi')}
              />
            }
          />
          <InputBox
            title="Senha"
            input={
              <PasswordField
                name="password"
                label=""
                placeholder="Digite a sua senha"
              />
            }
          />
        </Stack>
      </SideWrapper>
      <SideWrapper>World</SideWrapper>
    </Wrapper>
  );
}
