const EvictionPolicy =  require('./EvictionPolicy');

class DataBasedEviction extends EvictionPolicy {
    constructor(maxSize) {
        super();
        this.maxSize = maxSize;
    }

    evict(cache) {
        if( cache.size > this.maxSize ) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }
    }
}

module.exports = DataBasedEviction;