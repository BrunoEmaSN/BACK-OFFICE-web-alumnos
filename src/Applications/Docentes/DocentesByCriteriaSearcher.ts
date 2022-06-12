import { IMySQLRepository } from "../../Repositories/IMySQLRepository";
import { IDocentesByCriteriaSearcher } from "./IDocentesByCriteriaSearcher";
import query from "./SearchDocentesQuery";

export class DocentesByCriteriaSearcher implements IDocentesByCriteriaSearcher {
    private readonly _mysqlRepository: IMySQLRepository;
    constructor(MySQLRepository: IMySQLRepository){
        this._mysqlRepository = MySQLRepository;
    }

    public async SearchGetAllDocentes(): Promise<any> {
        return await this._mysqlRepository.getAll(query.GetAllDocentes);
    }
    
    public async SearchQuantityDocentesActive(): Promise<any> {
        return await this._mysqlRepository.getAll(query.QuantityDocentesActive)
    }

    public async SearchQuantityDocentesWithdrawn(): Promise<any> {
        return await this._mysqlRepository.getAll(query.QuantityDocentesWithdrawn)
    }

    public async SearchHoursAsignamentWeekByDocente(docenteId: string): Promise<any> {
        return await this._mysqlRepository.getOne(docenteId, query.HoursAsignamentWeekByDocente);
    }
}