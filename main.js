
const content = document.querySelector("section");


const imgLoad = imagesLoaded(content);

imgLoad.on("done", instance => {

  const tl = gsap.timeline();

  tl.to("svg", {
    scale: 0
  })
    .to(".blinder", {
      scaleY: 0,
      stagger: .3,
      ease: "power3.out"
    }).to(["h1", "p"], {
      y: 0,
      stagger: .3,
      duration: 2,
      ease: "power4.out"
    })

})