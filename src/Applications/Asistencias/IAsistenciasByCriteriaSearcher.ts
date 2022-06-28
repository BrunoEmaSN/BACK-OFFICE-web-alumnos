export interface IAsistenciasByCriteriaSearcher {

    SearchGetAllAsistencias(): Promise<any>;

    SearchQuantityAsistenciasByCurso(cursoId: string): Promise<any>;
    SearchQuantityAsistenciasByAsignatura(asignaturaId: string): Promise<any>;
    SearchQuantityAsistenciasByDay(day: string): Promise<any>;
    SearchQuantityAsistenciasByMonth(date: string): Promise<any>;
    SearchQuantityAsistenciasByYear(date: string): Promise<any>;

    SearchQuantityAsistenciasByAsignaturaAndAlumno(asignaturaId: string, alumnoId: string): Promise<any>;
    SearchQuantityAsistenciasByMonthAndAlumno(date: string, alumnoId: string): Promise<any>;
    SearchQuantityAsistenciasByYearAndAlumno(date: string, alumnoId: string): Promise<any>;

    SearchQuantityInasistenciasByCurso(cursoId: string): Promise<any>;
    SearchQuantityInasistenciasByAsignatura(asignaturaId: string): Promise<any>;
    SearchQuantityInasistenciasByDay(day: string): Promise<any>;
    SearchQuantityInasistenciasByMonth(date: string): Promise<any>;
    SearchQuantityInasistenciasByYear(date: string): Promise<any>;

    SearchQuantityInasistenciasByAsignaturaAndAlumno(asignaturaId: string, alumnoId: string): Promise<any>;
    SearchQuantityInasistenciasByMonthAndAlumno(date: string, alumnoId: string): Promise<any>;
    SearchQuantityInasistenciasByYearAndAlumno(date: string, alumnoId: string): Promise<any>;


    SearchQuantityRetrasosByCurso(cursoId: string): Promise<any>;
    SearchQuantityRetrasosByAsignatura(asignaturaId: string): Promise<any>;
    SearchQuantityRetrasosByDay(day: string): Promise<any>;
    SearchQuantityRetrasosByMonth(date: string): Promise<any>;
    SearchQuantityRetrasosByYear(date: string): Promise<any>;

    SearchQuantityRetrasosByAsignaturaAndAlumno(asignaturaId: string, alumnoId: string): Promise<any>;
    SearchQuantityRetrasosByMonthAndAlumno(date: string, alumnoId: string): Promise<any>;
    SearchQuantityRetrasosByYearAndAlumno(date: string, alumnoId: string): Promise<any>;

}