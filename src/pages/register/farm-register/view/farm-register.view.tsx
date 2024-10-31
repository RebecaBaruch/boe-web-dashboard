import React from 'react';
import FormContainer from '../../components/form-container/index.component';
import { Box, ButtonLayout, Stack, Text1, Text5 } from '@telefonica/mistica';
import LinkComponent from '../../../../components/link-component/link.component';
import InputBox from '../../../../components/input-box/input-box.component';
import Input from '../../../../components/input/input.component';
import { FarmFormWrapper, MidTitle } from './styled';
import ButtonPrimary from '../../../../components/button-primary/button-primary.component';
import ButtonSecondary from '../../../../components/button-secondary/button-secondary.component';
import { Viewport } from '../../../../components/viewport/styled';
import boeLogo02 from '../../../../../public/assets/boe-logo02.svg';
import { Row } from '../../../../components/row/styled';

export default function UserRegister() {
  return (
    <Viewport>
      <Box paddingBottom={48}>
        <img src={boeLogo02.src} alt="boe-logo" width={60} />
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
                  <LinkComponent to={''} text={'Log in'} />
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
                  value={''}
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
                size="1"
                input={
                  <Input
                    value={''}
                    name="property-phone"
                    type={''}
                    placeholder="(00) 00000-0000"
                    onChange={() => {}}
                  />
                }
              />

              <InputBox
                title="CNPJ"
                input={
                  <Input
                    value={''}
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
                size="3"
                input={
                  <Input
                    value={''}
                    name="postal-code"
                    type={''}
                    placeholder="00000-000"
                    onChange={() => {}}
                  />
                }
              />

              <InputBox
                title="Estado"
                size="1"
                input={
                  <Input
                    value={''}
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
                    value={''}
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
                    value={''}
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
                    onClick={() => {}}
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
