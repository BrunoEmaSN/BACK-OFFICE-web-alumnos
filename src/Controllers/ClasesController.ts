import { Request, Response } from 'express';
import { route, GET } from "awilix-express";
import { BaseController } from "./BaseController";
import { IClasesByCriteriaSearcher } from '../Applications/Clases/IClasesByCriteriaSearcher';

@route('/clases')
export class Clases extends BaseController {
    private readonly _clasesByCriteriaSearcher: IClasesByCriteriaSearcher;
    constructor(ClasesByCriteriaSearcher: IClasesByCriteriaSearcher){
        super();
        this._clasesByCriteriaSearcher = ClasesByCriteriaSearcher;
    }

    @route('/asignaturasByDay')
    @GET()
    public async asignaturasByDay(req: Request, res: Response){
        try{
            const asignaturas = await this._clasesByCriteriaSearcher
                .SearchQuantityAsignatureByDay(req.params.id);
            res.status(200).send(asignaturas);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/docentesByDay')
    @GET()
    public async docentesByDay(req: Request, res: Response){
        try{
            const docentes = await this._clasesByCriteriaSearcher
                .SearchQuantityDocentesByDay(req.params.id);
            res.status(200).send(docentes);
        } catch(error){
            this.handleException(error, res);
        }
    }
   
}