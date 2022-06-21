export interface IAsistenciasByCriteriaSearcher {
    SearchQuantityAsistenciasByCurso(cursoId: string): Promise<any>;
    SearchQuantityAsistenciasByAsignatura(asignaturaId: string): Promise<any>;
    SearchQuantityAsistenciasByDay(day: string): Promise<any>;

    SearchQuantityInasistenciasByCurso(cursoId: string): Promise<any>;
    SearchQuantityInasistenciasByAsignatura(asignaturaId: string): Promise<any>;
    SearchQuantityInasistenciasByDay(day: string): Promise<any>;

    SearchQuantityRetrasosByCurso(cursoId: string): Promise<any>;
    SearchQuantityRetrasosByAsignatura(asignaturaId: string): Promise<any>;
    SearchQuantityRetrasosByDay(day: string): Promise<any>;
    
}