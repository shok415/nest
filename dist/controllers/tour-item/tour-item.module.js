"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourItemModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const tour_1 = require("../../shemas/tour");
const tour_item_controller_1 = require("./tour-item.controller");
const tours_service_1 = require("../../services/tours/tours.service");
let TourItemModule = class TourItemModule {
};
TourItemModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: tour_1.Tour.name, schema: tour_1.TourSchema }])],
        controllers: [tour_item_controller_1.TourItemController],
        providers: [tours_service_1.ToursService]
    })
], TourItemModule);
exports.TourItemModule = TourItemModule;
//# sourceMappingURL=tour-item.module.js.map