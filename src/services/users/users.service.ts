/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {Delete, Get, Injectable, Param, Post, Put} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User, UserDocument} from "../../shemas/user";
import {UserDto} from "../../dto/user-dto";
import { JwtService } from '@nestjs/jwt';
 
@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
            private jwtService: JwtService) {
        console.log('userService run')
    }
 
 
    async getAllUsers(): Promise<User[]> {
        return this.userModel.find();
    }
 
    async getUserById(id): Promise<User> {
        return this.userModel.findById(id);
    }
 
    async sendUser(data): Promise<User> {
        const userData = new this.userModel(data);
        return userData.save();
    }
 
    async updateUsers(id: string, body): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, body);
    }
 
    async deleteUsers(): Promise<any> {
        return this.userModel.deleteMany()
    }
 
    async  deleteUserById(id: string): Promise<User> {
        return this.userModel.findByIdAndRemove(id);
    }
 
    async checkAuthUser(login: string, password: string): Promise<User[]> {
        const usersArr = await this.userModel.find({login:login, password:password})
        return usersArr.length === 0 ? null : usersArr;
    }
 
    async checkRegUser(login: string): Promise<User[]> {
        return this.userModel.find({login: login});
    }
 
    async login(user: UserDto){
        const payload = {login: user.login, password: user.password};
        const userFromDb = await this.userModel.find({login:user.login});
        return{
            id: userFromDb[0]._id,
            access_token: this.jwtService.sign(payload)
        }
    }
}
