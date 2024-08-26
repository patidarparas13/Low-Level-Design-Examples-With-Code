Cache Management system where there can be different eviction policies such as time based and data based.

System Design Overview
Cache Class: Manages the storage of data.
Eviction Policy Interface: Defines the contract for eviction policies.
Concrete Eviction Policies: Implementations like TimeBasedEviction, DataBasedEviction, etc.
Cache Manager: Orchestrates the interaction between the cache and the eviction policies.
