import express from "express";
import { createContainer, asClass } from "awilix";
import { scopePerRequest } from "awilix-express";
import { MySQLRepository } from "./Repositories/MySQLRepository";

export default (app: express.Application): void => {
    const container = createContainer({
        injectionMode: 'CLASSIC'
    });

    container.register({
        MySQLRepository: asClass(MySQLRepository).scoped(),
    });

    app.use(scopePerRequest(container));
}