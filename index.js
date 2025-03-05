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
let threshold = 0;
let homeHeader = document.querySelector('body#home header');
let otherHeaders = document.querySelectorAll('header:not(body#home header)');

let updateThreshold = function(){
        if(window.matchMedia("(max-width: 500px)").matches) {
                threshold =0.6 * window.innerWidth;
        }
        else {
                threshold = 0.398 * window.innerWidth;
        }
};
updateThreshold();
window.addEventListener('resize',updateThreshold);

window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;

        if(homeHeader && !inloggningOpen) {

                if (scrollTop >threshold) {
                        homeHeader.classList.add("visa");
                } else {
                        homeHeader.classList.remove("visa");
                }

        }
        otherHeaders.forEach(header => {
                if (scrollTop > 0.172 * window.innerWidth) {
                        header.classList.add("visa");
                } else {
                        header.classList.remove("visa");
                }
        });

});
//-------------------------------------------------------

//jquery navlist hamburger
$(document).ready(function() {
        $('.hamburger').click(function () {
                let $menu = $('#Navlist-mobile')
                if( $menu.hasClass('show')) {
                        $menu.animate({right: "-100%"}, 400,function() {
                                $menu.removeClass('show');
                        });
                        $menu.find('a, button').fadeOut(200);
                        $('.navboard').css('background', 'transparent');

                }
                else{
                        $menu.addClass('show').css("right", "-100%").animate({right: "0"}, 400);
                        $menu.find('a, button').css("opacity", "0").fadeTo(1000, 1);
                        $('.navboard').css('background', '#171717');
                }
                $('body#home #logo').toggleClass('show');
                $('.hamburger').toggleClass('active');
        })
})
//---------------------

//draggable, fördjupningsuppgift

document.addEventListener("DOMContentLoaded", function() {
        $('#draggable').draggable();
})