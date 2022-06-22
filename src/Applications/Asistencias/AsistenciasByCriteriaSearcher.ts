import { IMySQLRepository } from "../../Repositories/IMySQLRepository";
import { IAsistenciasByCriteriaSearcher } from "./IAsistenciasByCriteriaSearcher";
import query from "./SearchAsistenciasQuery";

export class AsistenciasByCriteriaSearcher implements IAsistenciasByCriteriaSearcher {
    private readonly _mysqlRepository: IMySQLRepository;
    constructor(MySQLRepository: IMySQLRepository){
        this._mysqlRepository = MySQLRepository;
    }

    public async SearchQuantityAsistenciasByCurso(cursoId: string){
        return await this._mysqlRepository.getOne(cursoId, query.QuantityAsistenciasByCurso);
    }

    public async SearchQuantityAsistenciasByAsignatura(asignaturaId: string){
        return await this._mysqlRepository.getOne(asignaturaId, query.QuantityAsistenciasByAsignatura);
    }

    public async SearchQuantityAsistenciasByDay(day: string){
        return await this._mysqlRepository.getOne(day, query.QuantityAsistenciasByDay);
    }

    public async SearchQuantityInasistenciasByCurso(cursoId: string){
        return await this._mysqlRepository.getOne(cursoId, query.QuantityInasistenciasByCurso);
    }

    public async SearchQuantityInasistenciasByAsignatura(asignaturaId: string){
        return await this._mysqlRepository.getOne(asignaturaId, query.QuantityInasistenciasByAsignatura);
    }

    public async SearchQuantityInasistenciasByDay(day: string){
        return await this._mysqlRepository.getOne(day, query.QuantityInasistenciasByDay);
    }

    public async SearchQuantityRetrasosByCurso(cursoId: string){
        return await this._mysqlRepository.getOne(cursoId, query.QuantityRetrasosByCurso);
    }

    public async SearchQuantityRetrasosByAsignatura(asignaturaId: string){
        return await this._mysqlRepository.getOne(asignaturaId, query.QuantityRetrasosByAsignatura);
    }

    public async SearchQuantityRetrasosByDay(day: string){
        return await this._mysqlRepository.getOne(day, query.QuantityRetrasosByDay);
    }

}