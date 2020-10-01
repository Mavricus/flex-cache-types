import { IFlexCache } from './FlexCache';
import { SinonStub } from 'sinon';
import sinon from 'sinon';

export class FlexCacheStub implements IFlexCache {
    stubs: {
        delete: SinonStub;
        get: SinonStub;
        set: SinonStub;
    }

    constructor() {
        this.stubs = {
            get: sinon.stub(),
            delete: sinon.stub(),
            set: sinon.stub()
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

    reset() {
        this.stubs.set.reset();
        this.stubs.get.reset();
        this.stubs.delete.reset();
    }
}
