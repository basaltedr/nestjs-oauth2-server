import {
    Client,
    Falsey,
    RefreshToken,
    RefreshTokenModel,
    Token,
    User,
} from '@node-oauth/oauth2-server';

export class Model implements RefreshTokenModel {
    generateRefreshToken?(
        client: Client,
        user: User,
        scope: string[],
    ): Promise<string> {
        throw new Error('Method not implemented.');
    }
    getRefreshToken(
        refreshToken: string,
    ): Promise<RefreshToken | Falsey> {
        throw new Error('Method not implemented.');
    }
    revokeToken(token: RefreshToken): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    generateAccessToken?(
        client: Client,
        user: User,
        scope: string[],
    ): Promise<string> {
        throw new Error('Method not implemented.');
    }
    getClient(
        clientId: string,
        clientSecret: string,
    ): Promise<Client | Falsey> {
        throw new Error('Method not implemented.');
    }
    saveToken(
        token: Token,
        client: Client,
        user: User,
    ): Promise<Token | Falsey> {
        throw new Error('Method not implemented.');
    }
    getAccessToken(accessToken: string): Promise<Token | Falsey> {
        throw new Error('Method not implemented.');
    }
    verifyScope?(token: Token, scope: string[]): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}
