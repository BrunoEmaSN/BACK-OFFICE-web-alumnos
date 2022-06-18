import { Request, Response } from 'express';
import { route, GET } from "awilix-express";
import { BaseController } from "./BaseController";
import { IMesasExamenesBySearcher } from '../Applications/MesasExamenes/IMesasExamenesBySearcher';

@route('/alumnos')
export class AlumnosController extends BaseController {
    private readonly _mesasExamenesByCriteriaSearcher: IMesasExamenesBySearcher;
    constructor(MesasExamenesByCriteriaSearcher: IMesasExamenesBySearcher){
        super();
        this._mesasExamenesByCriteriaSearcher = MesasExamenesByCriteriaSearcher;
    }

    @GET()
    public async getAll(req: Request, res: Response){
        try{
            const mesas = await this._mesasExamenesByCriteriaSearcher
                .SearchAllMesasExamenes();
            res.status(200).send(mesas);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/alumnosInscriptedMesasExamenes')
    @GET()
    public async alumnosInscriptedMesasExamenes(req: Request, res: Response){
        try{
            const alumnos = await this._mesasExamenesByCriteriaSearcher
                .SearchQuantityAlumnosInscritedMesasExamenes();
            res.status(200).send(alumnos);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/alumnosNotInscriptedMesasExamenes')
    @GET()
    public async alumnosNotInscriptedMesasExamenes(req: Request, res: Response){
        try{
            const alumnos = await this._mesasExamenesByCriteriaSearcher
                .SearchQuantityAlumnosNotInscriptedMesasExamenes();
            res.status(200).send(alumnos);
        } catch(error){
            this.handleException(error, res);
        }
    }
}