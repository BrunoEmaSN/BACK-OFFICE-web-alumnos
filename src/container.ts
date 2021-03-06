import express from "express";
import { createContainer, asClass } from "awilix";
import { scopePerRequest } from "awilix-express";
import { MySQLRepository } from "./Repositories/MySQLRepository";
import { AlumnosByCriteriaSearcher } from "./Applications/Alumnos/AlumnosByCriteriaSearcher";

export default (app: express.Application): void => {
    const container = createContainer({
        injectionMode: 'CLASSIC'
    });

    container.register({
        MySQLRepository: asClass(MySQLRepository).scoped(),
        AlumnosByCriteriaSearcher: asClass(AlumnosByCriteriaSearcher).scoped(),
    });

    app.use(scopePerRequest(container));
}