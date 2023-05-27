"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToursModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const tours_controller_1 = require("./tours.controller");
const mongoose_1 = require("@nestjs/mongoose");
const constants_1 = require("../../static/private/constants");
const tour_1 = require("../../shemas/tour");
const tours_service_1 = require("../../services/tours/tours.service");
let ToursModule = class ToursModule {
};
ToursModule = __decorate([
    (0, common_1.Module)({
        controllers: [tours_controller_1.ToursController],
        imports: [mongoose_1.MongooseModule.forFeature([{ name: tour_1.Tour.name, schema: tour_1.TourSchema }]),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret
            })],
        providers: [tours_service_1.ToursService]
    })
], ToursModule);
exports.ToursModule = ToursModule;
//# sourceMappingURL=tours.module.js.map