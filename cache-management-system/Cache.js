class Cache {
    constructor(evictionPolicy) {
        this.cache = new Map();
        this.evictionPolicy = evictionPolicy;
    }

    set(key, value) {
        this.cache.set(key, { value, timestamp: Date.now() });
        this.evictionPolicy.evict(this.cache);
    }

    get(key) {
        if( this.cache.has(key) ) {
            return this.cache.get(key)
        }
        return null;
    }

    delete(key) {
        this.cache.delete(key);
    }

    size() {
        return this.cache.size;
    }

}

module.exports = Cache;