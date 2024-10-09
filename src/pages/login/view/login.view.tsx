import React from 'react';
import {
  SideWrapper,
  Wrapper,
} from '../components/login-template/index.component';
import InputBox from '../../../components/input-box/input-box.component';
import { Box, Stack } from '@telefonica/mistica';
import Input from 'src/components/input/input.component';
import { LoginProps } from '../types';
import RightSideFrame from '../components/right-side-frame/index.component';

export default function Login({ email }: LoginProps) {
  return (
    <Wrapper>
      <SideWrapper>
        <Box width={'55%'}>
          <Stack space={32}>
            <InputBox
              title="E-mail"
              input={
                <Input
                  placeholder="Insira seu e-mail"
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
                <Input
                  placeholder="Digite a sua senha"
                  name="myInput"
                  type="text"
                  value={email}
                  onChange={() => console.log('oi')}
                />
              }
            />
          </Stack>
        </Box>
      </SideWrapper>
      <RightSideFrame />
    </Wrapper>
  );
}
