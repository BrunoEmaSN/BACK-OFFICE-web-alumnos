import { IMySQLRepository } from "../../Repositories/IMySQLRepository";
import { IClasesByCriteriaSearcher } from "./IClasesByCriteriaSearcher";
import query from "./SearchClasesQuery";

export class ClasesByCriteriaSearcher implements IClasesByCriteriaSearcher {
    private readonly _mysqlRepository: IMySQLRepository;
    constructor(MySQLRepository: IMySQLRepository){
        this._mysqlRepository = MySQLRepository;
    }


    public async SearchQuantityAsignatureByDay(day: string){
        return await this._mysqlRepository.getOne(day, query.QuantityAsignaturasByDay);
    }

    public async SearchQuantityDocentesByDay(day: string){
        return await this._mysqlRepository.getOne(day, query.QuantityDocentesByDay);
    }

}