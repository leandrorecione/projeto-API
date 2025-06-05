import { BrasilApiService } from './brasilapi.service';
export declare class BrasilApiController {
    private readonly brasilApiService;
    constructor(brasilApiService: BrasilApiService);
    buscarCep(cep: string): Promise<any>;
}
