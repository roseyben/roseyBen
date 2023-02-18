const BgPics = ['./pics1.jpg', './pics2.jpg']
const container = document.querySelector('.container')


const Autochange = function (){
    const randomImg = Math.floor(Math.random() * BgPics.length);
    const newRands = BgPics[randomImg]
    container.style.background = `linear-gradient(90deg, rgb(0,0,0), rgba(0,0,0,0.4)), url(${newRands})`;
    container.style.backgroundPosition = 'center';
    container.style.backgroundSize = 'cover';
    container.style.transition = 'cover';
}

setInterval(() =>{
    Autochange(container)
}, 2000)

