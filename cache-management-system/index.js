const CacheManager = require("./CacheManager");
const TimeBasedEviction = require("./TimeBasedEviction");
const DataBasedEviction = require("./DataBasedEviction");

const timeBasedEvictionPolicy = new TimeBasedEviction(5000);
const dataBasedEvictionPolicy = new DataBasedEviction(3);

const cacheManagerTimeBased = new CacheManager(timeBasedEvictionPolicy);
cacheManagerTimeBased.put("a", 1);
cacheManagerTimeBased.put("b", 2);

setTimeout(() => {
    cacheManagerTimeBased.put("c", 3);
    console.log('TimeBasedCache: Fetching a: ', cacheManagerTimeBased.fetch('a')); // Might return null if more than 5 seconds have passed

}, 6000);


const cacheManagerDataBased = new CacheManager(dataBasedEvictionPolicy);
cacheManagerDataBased.put("a", 1);
cacheManagerDataBased.put("b", 2);
cacheManagerDataBased.put("c", 3);
cacheManagerDataBased.put("d", 4);   // This will remove entry of 'a' , as max size is of 3

console.log('DataBasedCache: Fetching a: ', cacheManagerDataBased.fetch('a')); // null
console.log('DataBasedCache: Fetching b:', cacheManagerDataBased.fetch('b')); // 2
 

