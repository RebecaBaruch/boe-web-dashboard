import React from 'react';
import styles from './styles.module.css';
import { Box, Stack } from '@telefonica/mistica';
import { SideWrapper } from '../login-template/index.component';
import bgFrame from '../../../../../public/assets/bg-frame.svg';
import boeLogo from '../../../../../public/assets/boe-logo.svg';

export default function RightSideFrame() {
  return (
    <SideWrapper bgImage={bgFrame.src} align="start" justify="start">
      <Box paddingLeft={48} paddingTop={48} width={'70%'}>
        <Stack space={32}>
          <img src={boeLogo.src} alt="boe-logo" width={70} />

          <Stack space={8}>
            <h2 className={styles.title}>O melhor para a saúde do seu gado</h2>
            <p className={styles.text}>
              Registre as análises da saúde dermatológica do seu gado e monitore
              todos os processos através do dashboard web.
            </p>
          </Stack>
        </Stack>
      </Box>
    </SideWrapper>
  );
}
