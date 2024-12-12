import React from 'react';
import Image from 'next/image';
import FormContainer from '../../components/form-container/index.component';
import { Box, ButtonLayout, Stack, Text1, Text5 } from '@telefonica/mistica';
import LinkComponent from '../../../../components/link-component/link.component';
import InputBox from '../../../../components/input-box/input-box.component';
import Input from '../../../../components/input/input.component';
import { FarmFormWrapper, MidTitle } from './styled';
import ButtonPrimary from '../../../../components/button-primary/button-primary.component';
import ButtonSecondary from '../../../../components/button-secondary/button-secondary.component';
import { Viewport } from '../../../../components/viewport/styled';
import { Row } from '../../../../components/row/styled';
import { FarmRegisterProps } from '../types';

export default function UserRegister({
  propertyName,
  propertyPhone,
  taxId,
  zipCode,
  state,
  city,
  address,
  onRegister,
}: FarmRegisterProps) {
  const BoeLogo02: string = '/assets/boe-logo02.svg';
  return (
    <Viewport>
      <Box paddingBottom={24}>
        <Image src={BoeLogo02} alt="boe-logo" width={60} height={60} />
      </Box>
      <FormContainer
        formHeader={
          <Box width={'100%'} paddingBottom={16}>
            <Stack space={8}>
              <Text5>
                <MidTitle>Dados da fazenda</MidTitle>
              </Text5>
              <Text1 regular>
                <Row space={0.7}>
                  <Text1 regular>Já possui uma conta?</Text1>
                  <LinkComponent onChange={() => {}} text={'Log in'} />
                </Row>
              </Text1>
            </Stack>
          </Box>
        }
        form={
          <FarmFormWrapper>
            <InputBox
              title="Nome da propriedade"
              input={
                <Input
                  value={propertyName}
                  name="property-name"
                  type={''}
                  placeholder="Insira o nome da fazenda"
                  onChange={() => {}}
                />
              }
            />
            <Row>
              <InputBox
                title="Telefone (fazenda)"
                size={1}
                input={
                  <Input
                    value={propertyPhone}
                    name="property-phone"
                    type={''}
                    placeholder="(00) 00000-0000"
                    onChange={() => {}}
                  />
                }
              />

              <InputBox
                title="CNPJ"
                size={2}
                input={
                  <Input
                    value={taxId}
                    name="cnpj"
                    type={''}
                    placeholder="0.000.000/0000-00"
                    onChange={() => {}}
                  />
                }
              />
            </Row>

            <Row>
              <InputBox
                title="CEP"
                size={3}
                input={
                  <Input
                    value={zipCode}
                    name="postal-code"
                    type={''}
                    placeholder="00000-000"
                    onChange={() => {}}
                  />
                }
              />

              <InputBox
                title="Estado"
                size={1}
                input={
                  <Input
                    value={state}
                    name="uf-state"
                    type={''}
                    placeholder="UF"
                    onChange={() => {}}
                  />
                }
              />
            </Row>

            <Row>
              <InputBox
                title="Cidade"
                size="1"
                input={
                  <Input
                    value={city}
                    name="city"
                    type={''}
                    placeholder="Localidade"
                    onChange={() => {}}
                  />
                }
              />

              <InputBox
                title="Endereço"
                size="3"
                input={
                  <Input
                    value={address}
                    name="street-address"
                    type={''}
                    placeholder="Bairro, Rua, nº"
                    onChange={() => {}}
                  />
                }
              />
            </Row>

            <Box width="100%">
              <ButtonLayout
                primaryButton={
                  <ButtonPrimary
                    content="Concluir registro"
                    onClick={onRegister}
                  />
                }
                secondaryButton={
                  <ButtonSecondary content="Voltar" onClick={() => {}} />
                }
              />
            </Box>
          </FarmFormWrapper>
        }
      />
    </Viewport>
  );
}
