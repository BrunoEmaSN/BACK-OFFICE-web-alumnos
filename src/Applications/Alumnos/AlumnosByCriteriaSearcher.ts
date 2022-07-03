import { IMySQLRepository } from "../../Repositories/IMySQLRepository";
import { IAlumnosByCriteriaSearcher } from "./IAlumnosByCriteriaSearcher";
import query from "./SearchAlumnosQuery";

export class AlumnosByCriteriaSearcher implements IAlumnosByCriteriaSearcher {
    private readonly _mysqlRepository: IMySQLRepository;
    constructor(MySQLRepository: IMySQLRepository){
        this._mysqlRepository = MySQLRepository;
    }

    public async SearchAllAlumnos(){
        return await this._mysqlRepository.getAll(query.GetAllAlumnos);
    }

    public async SearchQuantityAlumnosInscripted(){
        const alumnosList = await this._mysqlRepository.getAll(query.QuantityAlumnosInscripted);
        const cantidadTotal = alumnosList.map(a => a.cantidad)
            .reduce((prev, curr) => prev + curr, 0);

        return alumnosList.map((a) => ({
            periodo: a.periodo,
            cantidad: a.cantidad,
            porcentaje: a.cantidad / cantidadTotal * 100
        }));
    }

    public async SearchQuantityAlumnosByCurso(){
        return await this._mysqlRepository.getAll(query.QuantityAlumnosByCurso);
    }

    public async SearchQuantityAlumnosWithdrawn(){
        return await this._mysqlRepository.getAll(query.QuantityAlumnosWithdrawn);
    }

    public async SearchMateriasStatusByAlumno(){
        return await this._mysqlRepository.getAll(query.MateriasStatusByAlumno);
    }

    public async SearchCalificacionesAverageByAlumno(alumnoId: string){
        return await this._mysqlRepository.getOne(alumnoId, query.CalificacionesAverageByAlumno);
    }

    public async SearchCalificacionesAverageByMateria(materiaId: string){
        return await this._mysqlRepository.getOne(materiaId, query.CalificacionesAverageByMateria);
    }
}