export interface IAlumnosByCriteriaSearcher {
    SearchAllAlumnos(): Promise<any>;
    SearchQuantityAlumnosInscripted(): Promise<any>;
    SearchQuantityAlumnosByCurso(): Promise<any>;
    SearchQuantityAlumnosWithdrawn(): Promise<any>;
    SearchMateriasStatusByAlumno(alumnoId: string): Promise<any>;
    SearchCalificacionesAverageByAlumno(alumnoId: string): Promise<any>;
    SearchCalificacionesAverageByMateria(materiaId: string): Promise<any>;
}