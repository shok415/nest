import { UsersService } from "../../services/users/users.service";
import { User } from "../../shemas/user";
import { UserDto } from "../../dto/user-dto";
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getAllUsers(): Promise<User[]>;
    getUserById(id: any): Promise<User>;
    sendUser(data: UserDto): Promise<User>;
    authUser(data: UserDto, login: any): any;
    updateUsers(id: any, data: any): Promise<User>;
    deleteUsers(): Promise<User>;
    deleteUserById(id: any): Promise<User>;
}
