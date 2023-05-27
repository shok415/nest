"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_1 = require("../../shemas/user");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
        console.log('userService run');
    }
    async getAllUsers() {
        return this.userModel.find();
    }
    async getUserById(id) {
        return this.userModel.findById(id);
    }
    async sendUser(data) {
        const userData = new this.userModel(data);
        return userData.save();
    }
    async updateUsers(id, body) {
        return this.userModel.findByIdAndUpdate(id, body);
    }
    async deleteUsers() {
        return this.userModel.deleteMany();
    }
    async deleteUserById(id) {
        return this.userModel.findByIdAndRemove(id);
    }
    async checkAuthUser(login, password) {
        const usersArr = await this.userModel.find({ login: login, password: password });
        return usersArr.length === 0 ? null : usersArr;
    }
    async checkRegUser(login) {
        return this.userModel.find({ login: login });
    }
    async login(user) {
        const payload = { login: user.login, password: user.password };
        const userFromDb = await this.userModel.find({ login: user.login });
        return {
            id: userFromDb[0]._id,
            access_token: this.jwtService.sign(payload)
        };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map