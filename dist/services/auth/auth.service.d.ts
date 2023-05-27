import { Strategy } from 'passport-local';
import { UsersService } from '../users/users.service';
declare const AuthService_base: new (...args: any[]) => Strategy;
export declare class AuthService extends AuthService_base {
    private userService;
    constructor(userService: UsersService);
    validate(login: string, password: string): Promise<any>;
}
export {};
