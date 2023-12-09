function smooothscroll(){
  gsap.registerPlugin(ScrollTrigger);
 
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
}); 
locoScroll.on("scroll", ScrollTrigger.update); 
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },  
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  }, 
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});  
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
 
ScrollTrigger.refresh();
 
}
smooothscroll();
function animationcursor(){
    var page1 = document.querySelector(".page1 ");
    var page4 = document.querySelector(".page4 .pgpt2 ");
    // page4
    document.querySelector(".cusor2").innerHTML="Take it"
    page1.addEventListener("mousemove",(dets)=>{
     
        gsap.to(".cusor",{
            x:dets.x+"px",
            y:dets.y+"px",
            delay:0.1,
            opacity: 1
        })
    })
    page1.addEventListener("mouseenter",(dets)=>{
        gsap.to(".cusor",{
            scale:1,
            opacity: 1
            })
        })
    page1.addEventListener("mouseleave",(dets)=>{
     
        gsap.to(".cusor",{
        scale:0,
        opacity: 0
        })
    })
    page4.addEventListener("mousemove",(dets)=>{
     
        gsap.to(".cusor",{
            x:dets.x+"px",
            y:dets.y+"px",
            delay:0.1,
            opacity: 1
        })
    })
    page4.addEventListener("mouseenter",(dets)=>{
        gsap.to(".cusor",{
            scale:1,
            opacity: 1
            })
        })
    page4.addEventListener("mouseleave",(dets)=>{
     
        gsap.to(".cusor",{
        scale:0,
        opacity: 0
        })
    })
    
}
animationcursor()

function textanim(){

  gsap.from(".elem2 div h1, .elem1 .left h2, .elem1 .right h2, .elem1", {
    y: 120,          
    delay: 1,           
    duration: 200,       
    stagger: 6,         // Stagger the animation start time for each element by 6 seconds
    scrollTrigger: {    // Define the scroll trigger settings
        trigger: ".page2",   // The trigger element for the scroll trigger
        scroller: ".main",   // The element that acts as the scroll container
        start: "top 47%",    // The start position of the trigger element when it reaches the scroller's top
        end: "top 46%",      // The end position of the trigger element when it reaches the scroller's top
        scrub: 3             // Enable scrubbing with a scrub value of 3
    }
});
  gsap.from(".page3 .pag3top h2", {
    y: 420,          
    delay: 1,           
    duration: 200,       
    stagger: 6,         // Stagger the animation start time for each element by 6 seconds
    scrollTrigger: {    // Define the scroll trigger settings
        trigger: ".page3",   // The trigger element for the scroll trigger
        scroller: ".main",   // The element that acts as the scroll container
        start: "top 47%",    // The start position of the trigger element when it reaches the scroller's top
        end: "top 46%",      // The end position of the trigger element when it reaches the scroller's top
        scrub: 3             // Enable scrubbing with a scrub value of 3
    }
});
  gsap.from(".pg6btm div h1", {
    y: 320, 
    delay: 1,           
    duration: 200,       
    stagger: 6,         // Stagger the animation start time for each element by 6 seconds
    scrollTrigger: {    // Define the scroll trigger settings
        trigger: ".page6",   // The trigger element for the scroll trigger
        scroller: ".main",   // The element that acts as the scroll container
        start: "top 47%",    // The start position of the trigger element when it reaches the scroller's top
        end: "top 46%",      // The end position of the trigger element when it reaches the scroller's top
        scrub: 3             // Enable scrubbing with a scrub value of 3
    }
});


    gsap.from(".secondftr h1 span",{
      y:-100,  
      delay:10,
      duration:5,
      stagger:3,
      opacity:0,
        scrollTrigger:{
            trigger:".footer",
            scroller:".main",
            start:"top 47%",
            end:"top 46%",
        
            scrub:2
        }

    })

}
textanim(   );


function swipper(){
  
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    duration:2,
    delay: 5000,
    disableOnInteraction: true,
  },
});
}

swipper();

var t1 = gsap.timeline();

t1.from(".lodder h3",{
  x:40,
  delay:0.2,
  stagger:0.1,
  opacity:0
});
t1.to(".lodder h3",{
  x:-40,
  delay:0.1,
  stagger:0.1,
  opacity:0
});
t1.to(".lodder",{
  opacity:0,
  // delay:0.3
})

t1.from(".containt h1 span",{
  y:100,  
  stagger:0.1,
  opacity:0,
  delay:-0.5,
})
t1.to(".lodder",{
  display:"none"
})