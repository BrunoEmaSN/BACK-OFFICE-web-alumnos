import { Request, Response } from 'express';
import { route, GET } from "awilix-express";
import { BaseController } from "./BaseController";
import { IDocentesByCriteriaSearcher } from '../Applications/Docentes/IDocentesByCriteriaSearcher';

route('/docentes');
export class DocentesController extends BaseController {
    private readonly _docentesByCriteriaSearcher: IDocentesByCriteriaSearcher;
    constructor(DocentesByCriteriaSearcher: IDocentesByCriteriaSearcher){
        super();
        this._docentesByCriteriaSearcher = DocentesByCriteriaSearcher;
    }

    @GET()
    public async getAll(req: Request, res: Response){
        try{
            const docentes = await this._docentesByCriteriaSearcher
                .SearchGetAllDocentes();
            res.status(200).send(docentes);
        } catch(error) {
            this.handleException(error, res);
        }
    }

    @route('/quantityDocentesActive')
    public async quantityDocentesActive(req: Request, res: Response){
        try{
            const docentes = await this._docentesByCriteriaSearcher
                .SearchQuantityDocentesActive();
            res.status(200).send(docentes);
        } catch(error) {
            this.handleException(error, res);
        }
    }

    @route('/quantityDocentesWithdrawn')
    public async quantityDocentesWithdrawn(req: Request, res: Response){
        try{
            const docentes = await this._docentesByCriteriaSearcher
                .SearchQuantityDocentesWithdrawn();
            res.status(200).send(docentes);
        } catch(error) {
            this.handleException(error, res);
        }
    }

    @route('/hoursAsignamentWeekByDocente')
    public async hoursAsignamentWeekByDocente(req: Request, res: Response){
        try {
            const docentes = await this._docentesByCriteriaSearcher
                .SearchHoursAsignamentWeekByDocente(req.params.id);
            res.status(200).send(docentes);
        } catch (error) {
            this.handleException(error, res);
        }
    }
}