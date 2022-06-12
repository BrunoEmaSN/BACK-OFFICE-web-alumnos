import { Request, Response } from 'express';
import { route, GET } from "awilix-express";
import { BaseController } from "./BaseController";
import { IAlumnosByCriteriaSearcher } from '../Applications/Alumnos/IAlumnosByCriteriaSearcher';

@route('/alumnos')
export class AlumnosController extends BaseController {
    private readonly _alumnosByCriteriaSearcher: IAlumnosByCriteriaSearcher;
    constructor(AlumnosByCriteriaSearcher: IAlumnosByCriteriaSearcher){
        super();
        this._alumnosByCriteriaSearcher = AlumnosByCriteriaSearcher;
    }

    @GET()
    public async getAll(req: Request, res: Response){
        try{
            const alumnos = await this._alumnosByCriteriaSearcher.SearchAllAlumnos();
            res.status(200).send(alumnos);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/alumnosInscripted')
    @GET()
    public async alumnosInscripted(req: Request, res: Response){
        try{
            const alumnos = await this._alumnosByCriteriaSearcher
                .SearchQuantityAlumnosInscripted();
            res.status(200).send(alumnos);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/alumnosWithdrawn')
    @GET()
    public async alumnosWithdrawn(req: Request, res: Response){
        try{
            const alumnos = await this._alumnosByCriteriaSearcher
                .SearchQuantityAlumnosWithdrawn();
            res.status(200).send(alumnos);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/materiasStatusByAlumno')
    @GET()
    public async materiasStatusByAlumno(req: Request, res: Response){
        try{
            const alumnos = await this._alumnosByCriteriaSearcher
                .SearchMateriasStatusByAlumno(req.params.id);
            res.status(200).send(alumnos);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/calificacionesAverageByAlumno')
    @GET()
    public async calificacionesAverageByAlumno(req: Request, res: Response){
        try{
            const alumnos = await this._alumnosByCriteriaSearcher
                .SearchCalificacionesAverageByAlumno(req.params.id);
            res.status(200).send(alumnos);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/calificacionesAverageByMateria')
    @GET()
    public async calificacionesAverageByMateria(req: Request, res: Response){
        try{
            const alumnos = await this._alumnosByCriteriaSearcher
                .SearchCalificacionesAverageByMateria(req.params.id);
            res.status(200).send(alumnos);
        } catch(error){
            this.handleException(error, res);
        }
    }
}