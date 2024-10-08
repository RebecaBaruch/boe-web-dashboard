import React from 'react';
import {
  SideWrapper,
  Wrapper,
} from '../components/login-template/index.component';
import InputBox from '../../../components/input/input.component';
import { TextField } from '@telefonica/mistica';

export default function Login() {
  return (
    <Wrapper>
      <SideWrapper>
        <InputBox
          title="Teste"
          input={<TextField name="teste" label="Teste" />}
        />
      </SideWrapper>
      <SideWrapper>World</SideWrapper>
    </Wrapper>
  );
}
