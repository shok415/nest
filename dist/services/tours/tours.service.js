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
exports.ToursService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const tour_dto_1 = require("../../dto/tour-dto");
const tour_1 = require("../../shemas/tour");
let ToursService = class ToursService {
    constructor(tourModel) {
        this.tourModel = tourModel;
        this.toursCount = 10;
    }
    async generateTours() {
        for (let i = 0; i <= this.toursCount; i++) {
            const tour = new tour_dto_1.TourDto('test' + i, 'test desc', 'test operator', '288' + i, 'test img');
            const tourData = new this.tourModel(tour);
            await tourData.save();
        }
        return this.tourModel.find();
    }
    async deleteTours() {
        return this.tourModel.deleteMany({});
    }
    async getAllTours() {
        return this.tourModel.find();
    }
    async getTourById(id) {
        return this.tourModel.findById(id);
    }
    async uploadTour(body) {
        const tour = new tour_dto_1.TourDto(body.name, body.description, body.tourOperator, body.price, body.img);
        const tourData = new this.tourModel(tour);
        await tourData.save();
    }
    async getToursByName(name) {
        return this.tourModel.find({ name: { "$regex": name, "$options": "i" } });
    }
};
ToursService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tour_1.Tour.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ToursService);
exports.ToursService = ToursService;
//# sourceMappingURL=tours.service.js.map