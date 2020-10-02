export interface IFlexCache {
    get<T>(name: string): Promise<T | null>;
    set<T>(name: string, data: T, ttl: number): Promise<void>;
    setForce<T>(name: string, data: T, ttl: number): Promise<void>;
    update<T>(name: string, data: T, ttl: number): Promise<void>;
    delete<T>(name: string): Promise<void>;
}
