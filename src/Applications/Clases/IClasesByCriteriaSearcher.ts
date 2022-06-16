export interface IClasesByCriteriaSearcher {
    
    SearchQuantityAsignatureByDay(day: string): Promise<any>;
    SearchQuantityDocentesByDay(day: string): Promise<any>;
   
}