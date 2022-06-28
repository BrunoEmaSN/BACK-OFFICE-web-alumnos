import connector from './MySQLPersistence';
import { IMySQLRepository } from './IMySQLRepository';

export class MySQLRepository implements IMySQLRepository {
    public async getAll(query: string): Promise<any[]> {
        const [result]: any[] = await connector.execute(query);
        return result;
    }
    
    public async getOne(id: string, query: string): Promise<any> {
        const [result]: any = await connector.execute(query, [id]);
        return result;
    }

    public async getAllByParams(params: Array<any>, query: string): Promise<any> {
        const [result]: any = await connector.execute(query, params);
        return result;
    }

    public async insert(entry: any, query: string): Promise<void> {
        await connector.execute(query, [...entry]);
    }

    public async update(entry: any, query: string): Promise<void> {
        await connector.execute(query, [...entry]);
    }

    public async delete(id: string, query: string): Promise<void> {
        await connector.execute(query, [id]);
    }
}