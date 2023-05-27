/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HydratedDocument } from 'mongoose';
import { ITour } from "../interfaces/Tour";
export type TourDocument = HydratedDocument<Tour>;
export declare class Tour implements ITour {
    name: string;
    description: string;
    tourOperator: string;
    price: string;
    img: string;
    id: string;
    type: string;
    date: string;
}
export declare const TourSchema: import("mongoose").Schema<Tour, import("mongoose").Model<Tour, any, any, any, import("mongoose").Document<unknown, any, Tour> & Omit<Tour & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Tour, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Tour>> & Omit<import("mongoose").FlatRecord<Tour> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
