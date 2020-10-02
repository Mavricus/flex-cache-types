import { IFlexCache } from './FlexCache';
import { SinonStub } from 'sinon';
import sinon from 'sinon';

export class FlexCacheStub implements IFlexCache {
    stubs: {
        delete: SinonStub;
        get: SinonStub;
        set: SinonStub;
        setForce: SinonStub;
        update: SinonStub;
    }

    constructor() {
        this.stubs = {
            get: sinon.stub(),
            delete: sinon.stub(),
            set: sinon.stub(),
            setForce: sinon.stub(),
            update: sinon.stub()
        }
    }

    delete<T>(name: string): Promise<void> {
        return this.stubs.delete(name);
    }

    get<T>(name: string): Promise<T | null> {
        return this.stubs.get(name);
    }

    set<T>(name: string, data: T, ttl: number): Promise<void> {
        return this.stubs.set(name, data, ttl);
    }

    setForce<T>(name: string, data: T, ttl: number): Promise<void> {
        return this.stubs.setForce(name, data, ttl);
    }

    update<T>(name: string, data: T, ttl: number): Promise<void> {
        return this.stubs.set(name, data, ttl);
    }

    reset() {
        this.stubs.set.reset();
        this.stubs.setForce.reset();
        this.stubs.get.reset();
        this.stubs.delete.reset();
        this.stubs.update.reset();
    }
}
