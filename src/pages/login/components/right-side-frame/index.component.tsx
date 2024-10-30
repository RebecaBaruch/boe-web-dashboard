import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import { Box, Stack } from '@telefonica/mistica';
import { SideWrapper } from '../login-template/index.component';

export default function RightSideFrame() {
  return (
    <SideWrapper bgImage="/assets/bg-frame.svg" align="start" justify="start">
      <Box paddingLeft={48} paddingTop={48} width={'70%'}>
        <Stack space={32}>
          <Image src="/assets/boe-logo.svg" alt="boe-logo" width={70} height={70}/>

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
