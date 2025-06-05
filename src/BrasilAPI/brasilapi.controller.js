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
exports.BrasilApiController = void 0;
const common_1 = require("@nestjs/common");
const brasilapi_service_1 = require("./brasilapi.service");
let BrasilApiController = class BrasilApiController {
    brasilApiService;
    constructor(brasilApiService) {
        this.brasilApiService = brasilApiService;
    }
    async buscarCep(cep) {
        return this.brasilApiService.buscarCep(cep);
    }
};
exports.BrasilApiController = BrasilApiController;
__decorate([
    (0, common_1.Get)(':cep'),
    __param(0, (0, common_1.Param)('cep')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrasilApiController.prototype, "buscarCep", null);
exports.BrasilApiController = BrasilApiController = __decorate([
    (0, common_1.Controller)('brasilapi'),
    __metadata("design:paramtypes", [brasilapi_service_1.BrasilApiService])
], BrasilApiController);
//# sourceMappingURL=brasilapi.controller.js.map