export interface IMySQLRepository {
    getAll(query: string): Promise<any[]>;
    getOne(id: number, query: string): Promise<any>;
    insert(entry: any, query: string): Promise<void>;
    update(entry: any, query: string): Promise<void>;
    delete(id: number, query: string): Promise<void>;
}