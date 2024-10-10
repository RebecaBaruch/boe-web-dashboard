import React from 'react';
import UserRegister from '../view/user-register.view';
import { ThemeContextProvider } from '@telefonica/mistica';
import {theme} from '../../../../config/theme';

export default function UserRegisterController() {
   
    return (
        <ThemeContextProvider theme={theme}>
            <UserRegister />
        </ThemeContextProvider>
    );
}
