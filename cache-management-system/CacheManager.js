const Cache = require('./Cache');

class CacheManager extends Cache {
    constructor(evictionPolicy) {
        super();
        this.cache = new Cache(evictionPolicy);
    }

    put(key, value) {
        this.cache.set(key, value);
    }

    fetch(key) {
        return this.cache.get(key);
    }

    remove(key) {
        this.cache.delete(key);
    }
};


module.exports = CacheManager;