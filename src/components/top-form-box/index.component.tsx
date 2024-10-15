import React from 'react';
import './styles.module.css';
import { Box, Stack, Text1, Text5 } from '@telefonica/mistica';
import ButtonSecondary from '../button-secondary/button-secondary.component';
import { TopFormBoxProps } from './types';
import GoogleImg from '../../../public/assets/google-logo.svg';
import TextDivider from '../text-divider/index.component';

export default function TopFormBox({
  title,
  description,
  dividerText,
  buttonText,
  onClickButton,
}: TopFormBoxProps) {
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
            <div className="button-content">
              <img src={GoogleImg.src} alt="google-logo" width="20px" />
              {buttonText}
            </div>
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
