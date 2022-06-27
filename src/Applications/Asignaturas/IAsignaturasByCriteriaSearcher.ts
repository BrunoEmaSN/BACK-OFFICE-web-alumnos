export interface IAsignaturasByCriteriaSearcher {
    SearchGetAllAsignaturas(): Promise<any>;
    SearchAlumnosStatusFreeByAsignatura(asignaturaId: string): Promise<any>;
    SearchAlumnosStatusRegularByAsignatura(asignaturaId: string): Promise<any>;
    SearchAlumnosStatusPromotedByAsignatura(asignaturaId: string): Promise<any>;
}