import {
    Token,
    Client,
    RefreshToken,
    AuthorizationCode,
    RefreshTokenModel,
    AuthorizationCodeModel,
    RequestAuthenticationModel,
    Falsey,
    User,
} from '@node-oauth/oauth2-server';
import moment = require('moment');
import { Inject, Injectable, Optional } from '@nestjs/common';

import {
    CLIENT,
    ACCESS_TOKEN,
    REFRESH_TOKEN,
    AUTHORIZATION_CODE,
} from './data';
import { RESPONSES } from './test.constants';
import { ITestExpectedResponses } from './test.interfaces';

export class TestModelService
    implements
        RequestAuthenticationModel,
        AuthorizationCodeModel,
        RefreshTokenModel {
    constructor(
        @Optional()
        @Inject(RESPONSES)
        readonly testResponses: ITestExpectedResponses,
    ) {}

    async getAccessToken(): Promise<Token | false> {
        return this.testResponses &&
            this.testResponses.accessToken !== undefined
            ? this.testResponses.accessToken
            : ACCESS_TOKEN;
    }

    async getClient(): Promise<Client> {
        return CLIENT;
    }

    async getUser() {
        return {};
    }

    async saveToken(
        token: Token,
        client: any,
        user: any,
    ): Promise<Token | false> {
        return this.testResponses &&
            this.testResponses.accessToken !== undefined
            ? this.testResponses.accessToken
            : {
                  ...token,
                  accessTokenExpiresAt: moment().add(1, 'd').toDate(),
                  client,
                  user,
              };
    }

    async verifyScope(): Promise<boolean> {
        return true;
    }

    async getAuthorizationCode(): Promise<AuthorizationCode | false> {
        return this.testResponses &&
            this.testResponses.authorizationCode !== undefined
            ? this.testResponses.authorizationCode
            : AUTHORIZATION_CODE;
    }

    async saveAuthorizationCode(): Promise<
        AuthorizationCode | false
    > {
        return this.testResponses &&
            this.testResponses.authorizationCode !== undefined
            ? this.testResponses.authorizationCode
            : AUTHORIZATION_CODE;
    }

    async revokeAuthorizationCode(): Promise<boolean> {
        return true;
    }

    async getRefreshToken(): Promise<RefreshToken | false> {
        return this.testResponses &&
            this.testResponses.refreshToken !== undefined
            ? this.testResponses.refreshToken
            : REFRESH_TOKEN;
    }

    async revokeToken(): Promise<boolean> {
        return false;
    }
}
export class TestModelService2
    implements
    RequestAuthenticationModel,
    AuthorizationCodeModel,
    RefreshTokenModel{
    getRefreshToken(refreshToken: string): Promise<RefreshToken | Falsey> {
        throw new Error('Method not implemented.');
    }
    revokeToken(token: RefreshToken): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    generateRefreshToken?(client: Client, user: User, scope: string[]): Promise<string> {
        throw new Error('Method not implemented.');
    }
    generateAuthorizationCode?(client: Client, user: User, scope: string[]): Promise<string> {
        throw new Error('Method not implemented.');
    }
    getAuthorizationCode(authorizationCode: string): Promise<AuthorizationCode | Falsey> {
        throw new Error('Method not implemented.');
    }
    saveAuthorizationCode(code: Pick<AuthorizationCode, 'authorizationCode' | 'expiresAt' | 'redirectUri' | 'scope' | 'codeChallenge' | 'codeChallengeMethod'>, client: Client, user: User): Promise<AuthorizationCode | Falsey> {
        throw new Error('Method not implemented.');
    }
    revokeAuthorizationCode(code: AuthorizationCode): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    validateScope?(user: User, client: Client, scope?: string[]): Promise<string[] | Falsey> {
        throw new Error('Method not implemented.');
    }
    validateRedirectUri?(redirect_uri: string, client: Client): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    generateAccessToken?(client: Client, user: User, scope: string[]): Promise<string> {
        throw new Error('Method not implemented.');
    }
    getClient(clientId: string, clientSecret: string): Promise<Client | Falsey> {
        throw new Error('Method not implemented.');
    }
    saveToken(token: Token, client: Client, user: User): Promise<Token | Falsey> {
        throw new Error('Method not implemented.');
    }
    getAccessToken(accessToken: string): Promise<Token | Falsey> {
        throw new Error('Method not implemented.');
    }
    verifyScope?(token: Token, scope: string[]): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}
