import { Request, Response } from 'express';
import { route, GET } from "awilix-express";
import { BaseController } from "./BaseController";
import { IClasesByCriteriaSearcher } from '../Applications/Clases/IClasesByCriteriaSearcher';

@route('/clases')
export class ClasesContorller extends BaseController {
    private readonly _clasesByCriteriaSearcher: IClasesByCriteriaSearcher;
    constructor(ClasesByCriteriaSearcher: IClasesByCriteriaSearcher){
        super();
        this._clasesByCriteriaSearcher = ClasesByCriteriaSearcher;
    }

    @GET()
    public async getAll(req: Request, res: Response){
        try{
            const clases = await this._clasesByCriteriaSearcher
                .SearchGetAllClases();
            res.status(200).send(clases);
        } catch(error) {
            this.handleException(error, res);
        }
    }

    @route('/asignaturasByDay/:day')
    @GET()
    public async asignaturasByDay(req: Request, res: Response){
        try{
            const asignaturas = await this._clasesByCriteriaSearcher
                .SearchQuantityAsignatureByDay(req.params.day);
            res.status(200).send(asignaturas);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/docentesByDay/:day')
    @GET()
    public async docentesByDay(req: Request, res: Response){
        try{
            const docentes = await this._clasesByCriteriaSearcher
                .SearchQuantityDocentesByDay(req.params.day);
            res.status(200).send(docentes);
        } catch(error){
            this.handleException(error, res);
        }
    }
   
}