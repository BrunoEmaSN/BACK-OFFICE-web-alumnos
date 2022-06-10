import { IMySQLRepository } from "../../Repositories/IMySQLRepository";
import query from "./SearchAlumnosQuery";

export class AlumnosByCriteruaSearcher {
    private readonly _mysqlRepository: IMySQLRepository;
    constructor(mysqlRepository: IMySQLRepository){
        this._mysqlRepository = mysqlRepository;
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

    public async SearchMateriasStatusByAlumno(alumnoId: number){
        return await this._mysqlRepository.getOne(alumnoId, query.MateriasStatusByAlumno);
    }

    public async SearchCalificacionesAverageByAlumno(alumnoId: number){
        return await this._mysqlRepository.getOne(alumnoId, query.CalificacionesAverageByAlumno);
    }

    public async SearchCalificacionesAverageByMateria(materiaId: number){
        return await this._mysqlRepository.getOne(materiaId, query.CalificacionesAverageByMateria);
    }
}