self.addEventListener("install",stats=>{
    stats.waitUntil(
        caches.open("mathQuiz").then(
            cache=>{
            return   cache.addAll(["./","./mathQuiz.png","./css/index.css","./js/index.js","./js/mathQuiz.js"]);
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
console.log(res.request.url);
});
