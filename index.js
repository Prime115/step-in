//kod för "logga in" rutan
let loggaInCounter = 0;
let inloggningOpen = false;

const loggaInRuta = function () {
        let loggaIn = document.getElementById("logga-inRuta");
        if(loggaInCounter %2 === 0) {
                loggaIn.style.display = 'block';
                inloggningOpen = true;
                setTimeout(() => {
                        loggaIn.classList.add('show');
                        if  (loggaIn.classList.contains('show')) {
                                homeHeader.classList.add('visa');
                        }
                }, 10);

        }
        else {
                loggaIn.classList.remove('show');
                inloggningOpen= false;
                setTimeout(() => {
                        loggaIn.style.display = 'none';
                        if  (!loggaIn.classList.contains('show')) {
                                homeHeader.classList.remove('visa');
                        }
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

let homeHeader = document.querySelector('body#home header');
let otherHeaders = document.querySelectorAll('header:not(body#home header)');
window.addEventListener("scroll", function () {
        if(!inloggningOpen) {
                if (window.scrollY > 0.87* window.innerHeight) {
                        homeHeader?.classList.add("visa");
                } else {
                        homeHeader?.classList.remove("visa");
                }
                otherHeaders.forEach(header => {
                        if (window.scrollY > 0.38 * window.innerHeight) {
                                header.classList.add("visa");
                        } else {
                                header.classList.remove("visa");
                        }
                });

        }

});
