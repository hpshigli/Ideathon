// var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    // crsr.style.left = dets.x+"px"
    // crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-100+"px"
    blur.style.top = dets.y-100+"px"
})



gsap.to("#nav",{
    backgroundColor:"#0a553d",
    duration:0.5,
    height:"70px",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:"true",
        start:"top -10%",
        end:"top -100%",
        scrub:1,
}

})
gsap.to("#nav",{
    backgroundColor:"#033123",
    duration:0.5,
    height:"70px",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top -88%",
        end:"top -20%",
        scrub:2,
}

})

// gsap.to("#main",{
//     backgroundColor:"#0a553d",
//     scrollTrigger:{
//         trigger:"#main",
//         scroller:"body",
//         // markers:true,
//         start:"top -40%",
//         end:"top -80%",
//         scrub:1
        
//     }

// })
gsap.to("#page3",{
    backgroundColor:"#033123",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -80%",
        scrub:2
        
    }

})
