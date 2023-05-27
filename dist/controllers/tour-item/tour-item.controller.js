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
var TourItemController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourItemController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const tours_service_1 = require("../../services/tours/tours.service");
const common_2 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
let TourItemController = TourItemController_1 = class TourItemController {
    constructor(toursService) {
        this.toursService = toursService;
    }
    initTours(body) {
        body.img = TourItemController_1.imgName;
        this.toursService.uploadTour(body);
    }
    getFile(id) {
        const file = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd(), '/public/' + id));
        return new common_2.StreamableFile(file);
    }
    getUserById(name) {
        return this.toursService.getToursByName(name);
    }
    getToursList() {
        return this.toursService.getAllTours();
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('img', {
        storage: (0, multer_1.diskStorage)({
            destination: './public/',
            filename: (req, file, cb) => {
                const imgType = file.mimetype.split('/');
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                const imgName = file.fieldname + '-' + uniqueSuffix + '.' + imgType[1];
                cb(null, imgName);
                TourItemController_1.imgName = imgName;
            }
        })
    })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TourItemController.prototype, "initTours", null);
__decorate([
    (0, common_1.Get)("/img/:id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", common_2.StreamableFile)
], TourItemController.prototype, "getFile", null);
__decorate([
    (0, common_1.Get)(":name"),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TourItemController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TourItemController.prototype, "getToursList", null);
TourItemController = TourItemController_1 = __decorate([
    (0, common_1.Controller)('tour-item'),
    __metadata("design:paramtypes", [tours_service_1.ToursService])
], TourItemController);
exports.TourItemController = TourItemController;
//# sourceMappingURL=tour-item.controller.js.map