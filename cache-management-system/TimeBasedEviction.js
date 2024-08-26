const EvictionPolicy = require('./EvictionPolicy');


class TimeBasedEviction extends EvictionPolicy {

    constructor(timeLimit){
        super();
        this.timeLimit = timeLimit;  // Time limit in milliseconds
    }

    evict(cache) {
        const currentTime = Date.now();
        for( const [key, value ] of cache.entries()) {
            if( currentTime - value.timestamp > this.timeLimit ) {
                cache.delete(key);
            }
        }
    }
}

module.exports = TimeBasedEviction;