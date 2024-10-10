import React from 'react';
import FarmRegister from '../view/farm-register.view';
import { ThemeContextProvider } from '@telefonica/mistica';
import {theme} from '../../../../config/theme';

export default function FarmRegisterController() {
   
    return (
        <ThemeContextProvider theme={theme}>
            <FarmRegister />
        </ThemeContextProvider>
    );
}
