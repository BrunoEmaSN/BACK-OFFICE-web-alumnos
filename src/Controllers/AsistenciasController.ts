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

    @GET()
    public async getAll(req: Request, res: Response){
        try{
            const asistencias = await this._asistenciasByCriteriaSearcher
                .SearchGetAllAsistencias();
            res.status(200).send(asistencias);
        } catch(error) {
            this.handleException(error, res);
        }
    }

    @route('/cantidadAsistenciasByCurso/:id')
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

    @route('/cantidadAsistenciasByAsignatura/:id')
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

    @route('/cantidadAsistenciasByDay/:day')
    @GET()
    public async asistenciasByDay(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityAsistenciasByDay(req.params.day);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/cantidadAsistenciasByMonth/:month')
    @GET()
    public async asistenciasByMonth(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityAsistenciasByMonth(req.params.month);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/cantidadAsistenciasByYear/:year')
    @GET()
    public async asistenciasByYear(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityAsistenciasByYear(req.params.year);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/cantidadAsistenciasByAsignaturaAndAlumno/:asignatura/:alumno')
    @GET()
    public async asistenciasByAsignaturaAndAlumno(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityAsistenciasByAsignaturaAndAlumno(req.params.asignatura, req.params.alumno);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/cantidadInasistenciasByCurso/:id')
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

    @route('/cantidadInasistenciasByAsignatura/:id')
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

    @route('/cantidadInasistenciasByDay/:day')
    @GET()
    public async inasistenciasByDay(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityInasistenciasByDay(req.params.day);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/cantidadInasistenciasByMonth/:month')
    @GET()
    public async inasistenciasByMonth(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityInasistenciasByMonth(req.params.month);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/cantidadInasistenciasByYear/:year')
    @GET()
    public async inasistenciasByYear(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityInasistenciasByYear(req.params.year);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/cantidadRetrasosByCurso/:id')
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

    @route('/cantidadRetrasosByAsignatura/:id')
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

    @route('/cantidadRetrasosByDay/:day')
    @GET()
    public async retrasosByDay(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityRetrasosByDay(req.params.day);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/cantidadRetrasosByMonth/:month')
    @GET()
    public async retrasosByMonth(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityRetrasosByMonth(req.params.month);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }

    @route('/cantidadRetrasosByYear/:year')
    @GET()
    public async retrasosByYear(req: Request, res: Response){
        try{
            const cantidad = await this._asistenciasByCriteriaSearcher
                .SearchQuantityRetrasosByYear(req.params.year);
            res.status(200).send(cantidad);
        } catch(error){
            this.handleException(error, res);
        }
    }
}