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

    public async SearchQuantityAsistenciasByMonth(date: string){
        return await this._mysqlRepository.getOne(date, query.QuantityAsistenciasByMonth);
    }

    public async SearchQuantityAsistenciasByYear(date: string){
        return await this._mysqlRepository.getOne(date, query.QuantityAsistenciasByYear);
    }

    public async SearchQuantityAsistenciasByAsignaturaAndAlumno(asignaturaId: string, alumnoId: string){
        return await this._mysqlRepository.getAllByParams([asignaturaId,alumnoId], query.QuantityAsistenciasByAsignaturaAndAlumno);
    }

    public async SearchQuantityAsistenciasByMonthAndAlumno(date: string, alumnoId: string){
        return await this._mysqlRepository.getAllByParams([date,alumnoId], query.QuantityAsistenciasByMonthAndAlumno);
    }

    public async SearchQuantityAsistenciasByYearAndAlumno(date: string, alumnoId: string){
        return await this._mysqlRepository.getAllByParams([date,alumnoId], query.QuantityAsistenciasByYearAndAlumno);
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

    public async SearchQuantityInasistenciasByMonth(date: string){
        return await this._mysqlRepository.getOne(date, query.QuantityInasistenciasByMonth);
    }

    public async SearchQuantityInasistenciasByYear(date: string){
        return await this._mysqlRepository.getOne(date, query.QuantityInasistenciasByYear);
    }


    public async SearchQuantityInasistenciasByAsignaturaAndAlumno(asignaturaId: string, alumnoId: string){
        return await this._mysqlRepository.getAllByParams([asignaturaId,alumnoId], query.QuantityInasistenciasByAsignaturaAndAlumno);
    }

    public async SearchQuantityInasistenciasByMonthAndAlumno(date: string, alumnoId: string){
        return await this._mysqlRepository.getAllByParams([date,alumnoId], query.QuantityInasistenciasByMonthAndAlumno);
    }

    public async SearchQuantityInasistenciasByYearAndAlumno(date: string, alumnoId: string){
        return await this._mysqlRepository.getAllByParams([date,alumnoId], query.QuantityInasistenciasByYearAndAlumno);
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

    public async SearchQuantityRetrasosByMonth(date: string){
        return await this._mysqlRepository.getOne(date, query.QuantityRetrasosByMonth);
    }

    public async SearchQuantityRetrasosByYear(date: string){
        return await this._mysqlRepository.getOne(date, query.QuantityRetrasosByYear);
    }

    public async SearchQuantityRetrasosByAsignaturaAndAlumno(asignaturaId: string, alumnoId: string){
        return await this._mysqlRepository.getAllByParams([asignaturaId,alumnoId], query.QuantityRetrasosByAsignaturaAndAlumno);
    }

    public async SearchQuantityRetrasosByMonthAndAlumno(date: string, alumnoId: string){
        return await this._mysqlRepository.getAllByParams([date,alumnoId], query.QuantityRetrasosByMonthAndAlumno);
    }

    public async SearchQuantityRetrasosByYearAndAlumno(date: string, alumnoId: string){
        return await this._mysqlRepository.getAllByParams([date,alumnoId], query.QuantityRetrasosByYearAndAlumno);
    }

    

}