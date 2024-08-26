class EvictionPolicy {
    evict(cache) {
        throw new Error('evict() must be implemented by subclass');
    }
}

module.exports = EvictionPolicy;