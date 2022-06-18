import { Request, Response } from 'express';
import { route, GET } from "awilix-express";
import { BaseController } from "./BaseController";
import { IAsignaturasByCriteriaSearcher } from '../Applications/Asignaturas/IAsignaturasByCriteriaSearcher';

@route('/asignaturas')
export class AsignaturasController extends BaseController {
    private readonly _asignaturasByCriteriaSearcher: IAsignaturasByCriteriaSearcher;
    constructor(AsignaturasByCriteriaSearcher: IAsignaturasByCriteriaSearcher){
        super();
        this._asignaturasByCriteriaSearcher = AsignaturasByCriteriaSearcher;
    }

    @route('/alumnosFree')
    @GET()
    public async alumnosFree(req: Request, res: Response){
        try{
            const alumnos = await this._asignaturasByCriteriaSearcher
                .SearchAlumnosStatusFreeByAsignatura(req.params.id);
            res.status(200).send(alumnos);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/alumnosRegular')
    @GET()
    public async alumnosRegular(req: Request, res: Response){
        try{
            const alumnos = await this._asignaturasByCriteriaSearcher
                .SearchAlumnosStatusRegularByAsignatura(req.params.id);
            res.status(200).send(alumnos);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/alumnosPromoted')
    @GET()
    public async alumnosPromoted(req: Request, res: Response){
        try{
            const alumnos = await this._asignaturasByCriteriaSearcher
                .SearchAlumnosStatusPromotedByAsignatura(req.params.id);
            res.status(200).send(alumnos);
        } catch(error){
            this.handleException(error, res);
        }
    }
}