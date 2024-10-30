import React from 'react';
import Image from 'next/image';
import './styles.module.css';
import { Box, Stack, Text1, Text5 } from '@telefonica/mistica';
import ButtonSecondary from '../button-secondary/button-secondary.component';
import { TopFormBoxProps } from './types';
import TextDivider from '../text-divider/index.component';
import { Row } from 'components/row/styled';

export default function TopFormBox({
  title,
  description,
  dividerText,
  buttonText,
  onClickButton,
}: TopFormBoxProps) {
  const GoogleImg: string = '/assets/google-logo.svg';
  return (
    <Box width={'100%'}>
      <Stack space={32}>
        <Stack space={8}>
          <Text5>
            <div className="title">{title}</div>
          </Text5>
          <Text1 regular>{description}</Text1>
        </Stack>

        <ButtonSecondary
          content={
            <Row align='center'>
              <Image src={GoogleImg} alt="google-logo" width={20} height={20} />
              {buttonText}
            </Row>
          }
          onClick={onClickButton}
          height="3rem"
          gray
        />

        <TextDivider text={dividerText} />
      </Stack>
    </Box>
  );
}
