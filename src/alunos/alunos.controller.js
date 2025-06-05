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
exports.AlunosController = void 0;
const common_1 = require("@nestjs/common");
const alunos_service_1 = require("./alunos.service");
const create_aluno_dto_1 = require("./Dto/create-aluno.dto");
const update_aluno_dto_1 = require("./Dto/update-aluno.dto");
const common_2 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let AlunosController = class AlunosController {
    alunoservice;
    constructor(alunoservice) {
        this.alunoservice = alunoservice;
    }
    criar(dto) {
        return this.alunoservice.criar(dto);
    }
    buscar() {
        return this.alunoservice.buscar();
    }
    buscarUm(id) {
        return this.alunoservice.buscarUm(Number(id));
    }
    atualizar(id, dto) {
        return this.alunoservice.atualizar(Number(id), dto);
    }
    deletar(id) {
        return this.alunoservice.deletar(Number(id));
    }
};
exports.AlunosController = AlunosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_aluno_dto_1.CreateAlunoDto]),
    __metadata("design:returntype", void 0)
], AlunosController.prototype, "criar", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlunosController.prototype, "buscar", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlunosController.prototype, "buscarUm", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_aluno_dto_1.UpdateAlunosDto]),
    __metadata("design:returntype", void 0)
], AlunosController.prototype, "atualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlunosController.prototype, "deletar", null);
exports.AlunosController = AlunosController = __decorate([
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('alunos'),
    __metadata("design:paramtypes", [alunos_service_1.AlunosService])
], AlunosController);
//# sourceMappingURL=alunos.controller.js.map