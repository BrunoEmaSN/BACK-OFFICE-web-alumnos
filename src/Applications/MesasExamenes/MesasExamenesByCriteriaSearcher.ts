import moment from "moment";
import { IMySQLRepository } from "../../Repositories/IMySQLRepository";
import { IMesasExamenesBySearcher } from "./IMesasExamenesBySearcher";
import query from "./SearcherMesasExamenesQuery";

export class MesasExamenesByCriteriaSearcher implements IMesasExamenesBySearcher{
    private readonly _mysqlRepository: IMySQLRepository;
    constructor(MySQLRepository: IMySQLRepository){
        this._mysqlRepository = MySQLRepository;
    }

    public async SearchAllMesasExamenes(): Promise<any> {
        return await this._mysqlRepository.getAll(query.GetAllMesasExamenes);
    }

    public async SearchQuantityAlumnosInscritedMesasExamenes(): Promise<any> {
        const today = moment().format('yyyy-MM-dd');
        const mesasExamenes = await this._mysqlRepository
            .getOne(today, query.QuantityAlumnosInscritedMesasExamenes);
        return mesasExamenes;
    }

    public async SearchQuantityAlumnosNotInscriptedMesasExamenes(): Promise<any> {
        const today = moment().format('yyyy-MM-dd');
        const mesasExamenes = await this._mysqlRepository
            .getOne(today, query.QuantityAlumnosNotInscritedMesasExamenes);
        return mesasExamenes;
    }
}