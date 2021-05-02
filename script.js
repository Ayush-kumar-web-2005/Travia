var tl = gsap.timeline();
var bl=gsap.timeline({repeat:-1,yoyo:true });
tl.from('.travia-text', { duration: 4,scrollTrigger:'.travia-text', x: -400, color: 'black', opacity: 0, stagger: 0.25, delay: 1, ease: 'elastic' })
  .from('#camera-s', { duration: 1.8, x: -500, opacity: 0, ease: 'elastic' })
  .from('.pd-same', { duration: 1, transform: 'scale(0)', opacity: 0, ease: 'bounce', stagger: 0.1 })
  .to('.tc', { duration: 2, transform: 'scale(1)', ease: 'bounce', stagger: 0.2 })
  .to('.and', { duration: 1, transform: 'scale(1)', ease: 'back', stagger: 0.1 })
   .from('#social',{duration:0.2,x:'20vw'})                                     
  // .to('body',{duration:.1,overflowY:'vissible'})




// gsap.registerPlugin(scrollTrigger);


// gsap.to(".box", {
//   scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
//   x: 500
// });
// {

//   trigger:'#sa1',
//   toggleactions:'play none reverse none'
// }

bl.from('.dot',{duration:0.5,transform:'scale(2)',stagger:0.2,color:'#15181c'})




let video=document.getElementById('video')
let sound = document.getElementById('beep')
let play = document.getElementById('container-thanos')

// setTimeout(doSomething, 3000);

play.onclick =
  function() {
    console.log('play');

    video.play();
    sound.play();

    // Video.style.display='block';
    return false;
  };








// thanos snap



disintegrate.init()

document.getElementById('container-thanos').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  e.target.remove()
})

const thanosSnap = function () {
  this.name = 'ThanosSnap'
  this.animationDuration = 2500
  this.animationdelay = 500
  this.size = 3
  this.speedX = Math.random()
  this.speedY = Math.random() * -1
  this.first = true
  this.draw = (ctx, percentComplete) => {
    if (this.first) {
      this.startX += (Math.random() - 0.5) * 10
      this.startY += (Math.random() - 0.5) * 10
      this.first = false
    }
    ctx.beginPath()
    ctx.fillRect(this.startX - this.size / 2, this.startY - this.size / 2, this.size, this.size)
    const r = this.rgbArray[0]
    const g = this.rgbArray[1]
    const b = this.rgbArray[2]
    const a = 1 - percentComplete
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
    ctx.fill()
    this.speedX *= 1.07
    this.speedY *= 1.07
    this.size *= 0.95
    this.startX += this.speedX
    this.startY += this.speedY
  }
}

disintegrate.addParticleType(thanosSnap)




// 
