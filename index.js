//kod för "logga in" rutan
let loggaInCounter = 0;
const loggaInRuta = function () {
        let loggaIn = document.getElementById("logga-inRuta");
        if(loggaInCounter %2 === 0) {
                loggaIn.style.display = 'block';
                setTimeout(() => {
                        loggaIn.classList.add('show');
                }, 10);
        }
        else {
                loggaIn.classList.toggle('show');

                setTimeout(() => {
                        loggaIn.style.display = 'none';
                }, 300);

        }
        loggaInCounter++;
}
document.getElementById('logga-in').addEventListener('click',loggaInRuta);

//--------------------------------------------------------------------------------------------------
//kod för fade in animation
let appear = document.querySelectorAll('.appear');
let cb = function (entries) {
        entries.forEach(entry => {
                if(entry.isIntersecting) {
                        entry.target.classList.add('inView')
                } else {
                        entry.target.classList.remove('inView');
                }
        });
}
const io =  new IntersectionObserver(cb);
for(let i = 0; i < appear.length; ++i) {
        io.observe(appear[i]);
}
//------------------------------------------------------------------------
//kod för våra gym korten
let activeGym = null;
document.querySelectorAll('.gym').forEach((gym) => {
        gym.addEventListener('click', function() {
                if(activeGym!== this) {
                if(activeGym) {
                        activeGym.classList.remove('active');
                }
                        this.classList.add('active');
                        activeGym= this;
                }

        })
})
//-------------------------------

//ändra skroll funktion

let header = document.querySelector('header');

window.addEventListener("scroll", function () {
        console.log("Scroll position:", window.scrollY);
        if (window.scrollY > 0.87* window.innerHeight) {
                header.classList.add("visa");
        } else {
                header.classList.remove("visa");
        }
});