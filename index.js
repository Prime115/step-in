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

