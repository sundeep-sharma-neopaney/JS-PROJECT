self.addEventListener("install",stats=>{
    stats.waitUntil(
        caches.open("wordCounter").then(
            cache=>{
            return   cache.addAll(["./","./w.png","./css/index.css","./js/index.js","./js/wordCounter.js"]);
            }).catch(e=>{
                console.log(e);
            })
    );
   
});
self.addEventListener("fetch",res=>{
res.respondWith(
    caches.match(res.request).then(r=>{
        return r || fetch(res.request);
    })
    
);

});
