import React from 'react';
import './styles.modules.css';
import { Box, Stack, Text1, Text5 } from '@telefonica/mistica';
import boeLogo02 from '../../../../assets/boe-logo02.svg';
import ButtonSecondary from 'src/components/button-secondary/button-secondary.component';
import { TopLoginBoxProps } from './types';
import GoogleImg from '../../../../assets/google-logo.svg';
import TextDivider from '../text-divider/index.component';

export default function TopLoginBox({ onClickButton }: TopLoginBoxProps) {
  return (
    <Box width={'100%'}>
      <Stack space={32}>
        <img src={boeLogo02} alt="boe-logo" width={60} />

        <Stack space={8}>
          <Text5>
            <div className="title">Log in</div>
          </Text5>
          <Text1 regular>
            Bem vindo de volta! Monitore da melhor forma a saúde do seu gado!
          </Text1>
        </Stack>

        <ButtonSecondary
          content={
            <div className="button-content">
              <img src={GoogleImg} alt="google-logo" width="20px" />
              Entre com Google
            </div>
          }
          onClick={onClickButton}
          height="3rem"
        />

        <TextDivider text="Ou entre com o e-mail" />
      </Stack>
    </Box>
  );
}
