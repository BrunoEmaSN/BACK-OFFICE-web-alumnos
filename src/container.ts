import express from "express";
import { createContainer, asClass } from "awilix";
import { scopePerRequest } from "awilix-express";
import { MySQLRepository } from "./Repositories/MySQLRepository";

import { AlumnosByCriteriaSearcher } from "./Applications/Alumnos/AlumnosByCriteriaSearcher";
import { DocentesByCriteriaSearcher } from "./Applications/Docentes/DocentesByCriteriaSearcher";
import { AsignaturasByCriteriaSearcher } from "./Applications/Asignaturas/AsignaturasByCriteriaSearcher";
import { MesasExamenesByCriteriaSearcher } from "./Applications/MesasExamenes/MesasExamenesByCriteriaSearcher";

export default (app: express.Application): void => {
    const container = createContainer({
        injectionMode: 'CLASSIC'
    });

    container.register({
        MySQLRepository: asClass(MySQLRepository).scoped(),
        AlumnosByCriteriaSearcher: asClass(AlumnosByCriteriaSearcher).scoped(),
        AsignaturasByCriteriaSearcher: asClass(AsignaturasByCriteriaSearcher).scoped(),
        DocentesByCriteriaSearcher: asClass(DocentesByCriteriaSearcher).scoped(),
        MesasExamenesByCritreriaSearcher: asClass(MesasExamenesByCriteriaSearcher).scoped(),
    });

    app.use(scopePerRequest(container));
}