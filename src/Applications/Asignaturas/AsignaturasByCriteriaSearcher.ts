import { IMySQLRepository } from "../../Repositories/IMySQLRepository";
import { IAsignaturasByCriteriaSearcher } from "./IAsignaturasByCriteriaSearcher";
import query from "./SearchAsignaturasQuery";

export class AsignaturasByCriteriaSearcher implements IAsignaturasByCriteriaSearcher {
    private readonly _mysqlRepository: IMySQLRepository;
    constructor(MySQLRepository: IMySQLRepository){
        this._mysqlRepository = MySQLRepository;
    }

    public async SearchAlumnosStatusFreeByAsignatura(asignaturaId: string){
        return await this._mysqlRepository.getOne(asignaturaId, query.QuantityFreeAlumnos);
    }

    public async SearchAlumnosStatusRegularByAsignatura(asignaturaId: string){
        return await this._mysqlRepository.getOne(asignaturaId, query.QuantityRegularAlumnos);
    }

    public async SearchAlumnosStatusPromotedByAsignatura(asignaturaId: string){
        return await this._mysqlRepository.getOne(asignaturaId, query.QuantityPromotedAlumnos);
    }
}