export interface IMesasExamenesBySearcher {
    SearchAllMesasExamenes(): Promise<any>;
    SearchQuantityAlumnosInscritedMesasExamenes(): Promise<any>;
    SearchQuantityAlumnosNotInscriptedMesasExamenes(): Promise<any>;
}