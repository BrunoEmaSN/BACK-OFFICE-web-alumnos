export interface IAsignaturasByCriteriaSearcher {
    SearchAlumnosStatusFreeByAsignatura(asignaturaId: string): Promise<any>;
    SearchAlumnosStatusRegularByAsignatura(asignaturaId: string): Promise<any>;
    SearchAlumnosStatusPromotedByAsignatura(asignaturaId: string): Promise<any>;
}