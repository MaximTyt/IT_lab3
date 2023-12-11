let body = document.querySelector('body');
let theme = document.getElementById('switch');
let link = document.getElementsByTagName('a');
theme.addEventListener('click', ()=> {
    if(theme.checked){
        body.style.backgroundColor = "#1D1018";
        body.style.color = 'aliceblue';
        for(var i=0;i<link.length;i++)
        {
            if(link[i].className == 'a-black')
            {
                link[i].style.color = 'aliceblue';  
            }
        }             
    }
    else{
        body.style.backgroundColor = "#ffffff";
        body.style.color = 'black';                
        for(var i=0;i<link.length;i++)
        {
            if(link[i].className == 'a-black')
            {
                link[i].style.color = 'black';  
            }
        }   
    }
});
function videoslider(links){
    document.querySelector(".slider").src = links;
}
let vol = document.querySelector('.nav-volume');
let aud = document.querySelector('.audio');        
vol.addEventListener('click', ()=> {
    if(vol.classList.contains('volume--muted')){
        vol.classList.remove('volume--muted');                
        aud.play();
        aud.volume = 0.2;
    }
    else{
        vol.classList.add('volume--muted');                
        aud.pause();
    }
});
const slider = document.querySelector('.video-row');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});