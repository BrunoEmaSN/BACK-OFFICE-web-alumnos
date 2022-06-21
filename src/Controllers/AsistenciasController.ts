import { Request, Response } from 'express';
import { route, GET } from "awilix-express";
import { BaseController } from "./BaseController";
import { IAsistenciasByCriteriaSearcher } from '../Applications/Asistencias/IAsistenciasByCriteriaSearcher';

@route('/asistencias')
export class AsistenciasController extends BaseController {
    private readonly _asistenciasByCriteriaSearcher: IAsistenciasByCriteriaSearcher;
    constructor(AsistenciasByCriteriaSearcher: IAsistenciasByCriteriaSearcher){
        super();
        this._asistenciasByCriteriaSearcher = AsistenciasByCriteriaSearcher;
    }

    @route('/cantidadAsistenciasByCurso')
    @GET()
    public async asistenciasByCurso(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityAsistenciasByCurso(req.params.id);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/cantidadAsistenciasByAsignatura')
    @GET()
    public async asistenciasByAsignatura(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityAsistenciasByAsignatura(req.params.id);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/cantidadAsistenciasByDay')
    @GET()
    public async asistenciasByDay(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityAsistenciasByDay(req.params.id);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/cantidadInasistenciasByCurso')
    @GET()
    public async inasistenciasByCurso(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityInasistenciasByCurso(req.params.id);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/cantidadInasistenciasByAsignatura')
    @GET()
    public async inasistenciasByAsignatura(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityInasistenciasByAsignatura(req.params.id);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/cantidadInasistenciasByDay')
    @GET()
    public async inasistenciasByDay(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityInasistenciasByDay(req.params.id);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/cantidadRetrasosByCurso')
    @GET()
    public async retrasosByCurso(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityRetrasosByCurso(req.params.id);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/cantidadRetrasosByAsignatura')
    @GET()
    public async retrasosByAsignatura(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityRetrasosByAsignatura(req.params.id);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/cantidadRetrasosByDay')
    @GET()
    public async retrasosByDay(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityRetrasosByDay(req.params.id);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }
}