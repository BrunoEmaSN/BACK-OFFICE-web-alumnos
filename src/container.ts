import express from "express";
import { createContainer, asClass } from "awilix";
import { scopePerRequest } from "awilix-express";
import { MySQLRepository } from "./Repositories/MySQLRepository";
import { AlumnosByCriteriaSearcher } from "./Applications/Alumnos/AlumnosByCriteriaSearcher";
import { DocentesByCriteriaSearcher } from "./Applications/Docentes/DocentesByCriteriaSearcher";
<<<<<<< Updated upstream
=======
import { AsignaturasByCriteriaSearcher } from "./Applications/Asignaturas/AsignaturasByCriteriaSearcher";
import { ClasesByCriteriaSearcher } from "./Applications/Clases/ClasesByCriteriaSearcher";
>>>>>>> Stashed changes

export default (app: express.Application): void => {
    const container = createContainer({
        injectionMode: 'CLASSIC'
    });

    container.register({
        MySQLRepository: asClass(MySQLRepository).scoped(),
        AlumnosByCriteriaSearcher: asClass(AlumnosByCriteriaSearcher).scoped(),
<<<<<<< Updated upstream
        DocentesByCriteriaSearcher: asClass(DocentesByCriteriaSearcher).scoped()
=======

        DocentesByCriteriaSearcher: asClass(DocentesByCriteriaSearcher).scoped(),

        AsignaturasByCriteriaSearcher: asClass(AsignaturasByCriteriaSearcher).scoped(),

        ClasesByCriteriaSearcher: asClass(ClasesByCriteriaSearcher).scoped()

>>>>>>> Stashed changes
    });

    app.use(scopePerRequest(container));
}