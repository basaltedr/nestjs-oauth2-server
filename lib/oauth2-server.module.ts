import { Module, DynamicModule, Type } from '@nestjs/common';

import {
    IOAuth2ServerModuleOptions,
    IOAuth2ServerModuleAsyncOptions,
} from './interfaces';
import { OAuth2ServerCoreModule } from './oauth2-server-core.module';
import { IOAuth2Model } from './interfaces/oauth2-model.interfaces';
import {
    PasswordModel,
    ExtensionModel,
    RefreshTokenModel,
    AuthorizationCodeModel,
    ClientCredentialsModel,
    RequestAuthenticationModel,
} from '@node-oauth/oauth2-server';

@Module({
    imports: [OAuth2ServerCoreModule],
})
export class OAuth2ServerModule {
    static forRoot(
        options: IOAuth2ServerModuleOptions,
        modelService: Type<
            | PasswordModel
            | ExtensionModel
            | RefreshTokenModel
            | AuthorizationCodeModel
            | ClientCredentialsModel
            | RequestAuthenticationModel
        >,
    ): DynamicModule {
        return {
            module: OAuth2ServerModule,
            imports: [
                OAuth2ServerCoreModule.forRoot(options, modelService),
            ],
        };
    }

    static forRootAsync(
        options: IOAuth2ServerModuleAsyncOptions,
        modelServiceFactory: IOAuth2Model,
    ): DynamicModule {
        return {
            module: OAuth2ServerModule,
            imports: [
                OAuth2ServerCoreModule.forRootAsync(
                    options,
                    modelServiceFactory,
                ),
            ],
        };
    }
}
