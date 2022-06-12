export interface IDocentesByCriteriaSearcher {
    SearchGetAllDocentes(): Promise<any>;
    SearchQuantityDocentesActive(): Promise<any>;
    SearchQuantityDocentesWithdrawn(): Promise<any>;
    SearchHoursAsignamentWeekByDocente(docenteId: string): Promise<any>;
}