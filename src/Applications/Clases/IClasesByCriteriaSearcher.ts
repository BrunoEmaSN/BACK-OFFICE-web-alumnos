export interface IClasesByCriteriaSearcher {
    SearchGetAllClases(): Promise<any>;
    SearchQuantityAsignatureByDay(day: string): Promise<any>;
    SearchQuantityDocentesByDay(day: string): Promise<any>;
   
}