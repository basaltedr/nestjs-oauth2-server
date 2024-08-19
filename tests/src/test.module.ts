import { Module, DynamicModule } from '@nestjs/common';

import { ExistingModule } from './existing.module';
import { IOAuth2ServerModuleOptions } from '../../lib';
import { TestConfigService } from './test-config.service';
import { OAuth2ServerModule } from '../../lib/oauth2-server.module';
import { TestModelService, TestModelService2 } from './test-model.service';
import { IOAuth2Model } from '../../lib/interfaces/oauth2-model.interfaces';
import { RESPONSES } from './test.constants';
import { DataProviderModule } from './data-provider.module';

@Module({})
export class TestModule {
    static withForRoot(): DynamicModule {
        return {
            module: TestModule,
            imports: [
                OAuth2ServerModule.forRoot({
                    allowEmptyState: true,
                },
                TestModelService2
            ),
            ],
        };
    }

    static withUseFactoryForRootAsync(): DynamicModule {
        return {
            module: TestModule,
            imports: [
                DataProviderModule.register({} as any),
                OAuth2ServerModule.forRootAsync({
                    useFactory: (): IOAuth2ServerModuleOptions => ({})
                },
                {
                    useFactory: (option) => new TestModelService(option),
                    inject: [RESPONSES],
                    imports: [DataProviderModule.register({} as any)]
                }),
            ],
        };
    }

    static withUseClassForRootAsync(): DynamicModule {
        return {
            module: TestModule,
            imports: [
                DataProviderModule.register({} as any),
                OAuth2ServerModule.forRootAsync({
                    useClass: TestConfigService,
                },
                {
                    useFactory: (option) => new TestModelService(option),
                    inject: [RESPONSES],
                    imports: [DataProviderModule.register({} as any)]
                }),
            ],
        };
    }

    static withUseExistingForRootAsync(): DynamicModule {
        return {
            module: TestModule,
            imports: [
                OAuth2ServerModule.forRootAsync({
                    useExisting: TestConfigService,
                    imports: [DataProviderModule.register({} as any), ExistingModule],
                },  {
                    useFactory: (option) => new TestModelService(option),
                    inject: [RESPONSES],
                    imports: [DataProviderModule.register({} as any)]
                }),
            ],
        };
    }
}
