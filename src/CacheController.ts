export interface ICacheController {
    get<T>(name: string): Promise<T | null>;
    set<T>(name: string, data: T, ttl: number): Promise<void>;
    delete<T>(name: string): Promise<void>;
}
