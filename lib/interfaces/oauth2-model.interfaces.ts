import { Type } from '@nestjs/common';
import {
    PasswordModel,
    ExtensionModel,
    RefreshTokenModel,
    AuthorizationCodeModel,
    ClientCredentialsModel,
    RequestAuthenticationModel,
} from '@node-oauth/oauth2-server';
export interface IOAuth2Model {
    useFactory: (
        ...args: any[]
    ) =>
        | PasswordModel
        | ExtensionModel
        | RefreshTokenModel
        | AuthorizationCodeModel
        | ClientCredentialsModel
        | RequestAuthenticationModel;
    inject?: any[];
    imports?: any[];
}
