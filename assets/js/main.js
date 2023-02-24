
document.addEventListener('DOMContentLoaded', function() {

    // gsap
    gsap.to('#loading-cont', {opacity: 0, y: -1000, duration: 1, delay: 1});
    setTimeout(()=> {document.querySelector('#loading-cont').style.display = 'none';}, 2500); 
    gsap.to('#nav', {opacity: 1, duration: 2, delay: 2});
    gsap.to('#scroll-down-mark', {opacity: 1, duration: 2, delay: 2});
    gsap.from('#nav', {y: -50, duration: 2, delay: 1});        
    gsap.from('#title', {opacity:0, y: 100, duration: 2, delay: 1});
    gsap.from('#intro-txt', {opacity:0, y: -100, duration: 2, delay: 1});
    gsap.from('#contacts', {opacity:0, duration: 1, delay: 2});
    gsap.from('#gnb-cont a', {opacity:0, duration: 1, y: -30, stagger: 0.5, delay: 3});
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.about', {scrollTrigger: "#cont-2 > .scroll-trigger", opacity:0, y: 50, duration: 2});
    gsap.from('.flip', {scrollTrigger: "#cont-3 > .scroll-trigger", opacity:0, y: 50, duration: 1, stagger: 0.5});        

    // pdf 보기 / 닫기 (카드 버튼)
    let fPdf = document.getElementById('farmocean-pdf');
    let fBtn = document.getElementById('farmocean-pdf-btn');
    let bPdf = document.getElementById('bus-pdf');
    let bBtn = document.getElementById('bus-pdf-btn');
    
    fBtn.addEventListener('click', ()=> {
        if (fPdf.style.display == 'none' || fPdf.style.display == '') {
            fPdf.style.display = 'block';
            fBtn.innerText = 'PDF 닫기';
            if(bPdf.style.display == 'block') {
                bPdf.style.display = 'none';
                bBtn.innerText = 'PDF 보기';
            }
            window.scrollTo(0, document.body.scrollHeight, {behavior:'smooth'});
        } else {
            fPdf.style.display = 'none';
            fBtn.innerText = 'PDF 보기';
        }  
    });
    
    bBtn.addEventListener('click', ()=> {
        if (bPdf.style.display == 'none' || bPdf.style.display == '') {
            bPdf.style.display = 'block';
            bBtn.innerText = 'PDF 닫기';
            if(fPdf.style.display == 'block') {
                fPdf.style.display = 'none';
                fBtn.innerText = 'PDF 보기';
            }
            window.scrollTo(0, document.body.scrollHeight, {behavior:'smooth'});
        } else {
            bPdf.style.display = 'none';
            bBtn.innerText = 'PDF 보기';
        }  
    });

});
