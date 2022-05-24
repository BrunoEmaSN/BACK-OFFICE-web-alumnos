import { Request, Response } from 'express';
import { route, GET, POST, PUT, DELETE } from "awilix-express";
import { IMySQLRepository } from '../../../../Shared/Infrastructure/Repositories/IMySQLRepository';
import { BaseController } from '../../../../Shared/Infrastructure/Controllers/BaseController';
import { IUser } from '../../Domain/Model/IUser';
import { UsersQuery } from '../UsersQuery';

@route('/users')
export class UsersController extends BaseController {
    private readonly _mysqlRepository: IMySQLRepository;

    constructor(MySQLRepository: IMySQLRepository) {
        super();
        this._mysqlRepository = MySQLRepository;
    }

    @GET()
    public async getAll(req: Request, res: Response) {
        try {
            const usersList: IUser[] = await this._mysqlRepository.getAll(UsersQuery.all);
            res.status(200).send(usersList);
        } catch (error) {
            this.handleException(error, res);
        }
    }

    @route('/:id')
    @GET()
    public async getOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);

            const user: IUser = await this._mysqlRepository.getOne(id, UsersQuery.one);

            if (user) {
                res.status(200).send(user);
            } else {
                res.status(404).send('');
            }
        } catch (error) {
            this.handleException(error, res);
        }
    }

    @POST()
    public async add(req: Request, res: Response) {
        try {
            res.status(200).send(await this._mysqlRepository.insert(req.body, UsersQuery.add));
        } catch (error) {
            this.handleException(error, res);
        }
    }

    @route('/:id')
    @PUT()
    public async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            res.status(200).send(await this._mysqlRepository.update({ id, ...req.body}, UsersQuery.update));
        } catch (error) {
            this.handleException(error, res);
        }
    }

    @route('/:id')
    @DELETE()
    public async remove(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            res.status(200).send(await this._mysqlRepository.delete(id, UsersQuery.remove));
        } catch (error) {
            this.handleException(error, res);
        }
    }
}