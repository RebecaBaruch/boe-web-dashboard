import React from 'react';
import './styles.module.css';
import { Box, Stack } from '@telefonica/mistica';
import { SideWrapper } from '../login-template/index.component';
import bgFrame from '../../../../assets/bg-frame.png';
import boeLogo from '../../../../assets/boe-logo.svg';

export default function RightSideFrame() {
  return (
    <SideWrapper bgImage={bgFrame} align="start" justify="start">
      <Box paddingLeft={48} paddingTop={48} width={'70%'}>
        <Stack space={32}>
          <img src={boeLogo} alt="boe-logo" width={70} />

          <Stack space={8}>
            <h2>O melhor para a saúde do seu gado</h2>
            <p>
              Registre as análises da saúde dermatológica do seu gado e monitore
              todos os processos através do dashboard web.
            </p>
          </Stack>
        </Stack>
      </Box>
    </SideWrapper>
  );
}
