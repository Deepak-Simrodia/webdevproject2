var tl=gsap.timeline()
tl
.from('.Fgsap', {
    stagger:.1,
    y:5,
    duration:1,
    opacity:0,
    ease:'Expo.easeInOut',
    transition:.2
})
.from('.Sgsap', {
    stagger:.1,
    y:10,
    opacity:0,
    duration:2,
    ease:'Expo.easeInOut',
    transition:.5
})
.from('.skani', {
    opacity:0,
    y:10,
    ease:'Expo.easeInOut',
    transition:.2,
},'-=2')
.from('.Tgsap', {
    scrollTrigger:{
        trigger:'.Tgsap',
        scroller:'body',
        scrub:2,
        start:'top 30%'
    },
    
    x:100,
   duration:2
})
.from('.skillpercent', {
    scrollTrigger:{
        trigger:'.skillpercent',
        scroller:'body',
        scrub:5,
    },
    width:'0%',
    duration:.1,
    opacity:0,
})
.from('.boxskill', {
    scrollTrigger:{
        trigger:'.boxskill',
        scroller:'body',
        scrub:5,
    },
    height:'0%',
    duration:.1,
    opacity:0,
})
.from('#inerpage4', {
    scrollTrigger:{
        trigger:'#inerpage4',
        scroller:'body',
        scrub:1,
    },
    width:'10%',
    // duration:.1,
    // opacity:0,
})