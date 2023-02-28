
import imagesLoaded from "imagesloaded";

const content = document.querySelector("section");


const imgLoad = imagesLoaded(content);

imgLoad.on("done", instance => {
  

  gsap.to("svg", {
    scale:0
  })

  gsap.to(".blinder", {
    scaleY: 0,
    stagger: .3,
    ease: "power3.out"
  })

  const tl = gsap.timeline();

  tl.to(["h1", "p"], {
    y: 0,
    stagger: .3,
    duration: 2,
    ease: "power4.out"
  })

})