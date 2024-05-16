// Verificar el ancho de la pantalla
function checkScreenWidth() {
    if (window.matchMedia("(max-width: 850px)").matches) {
     
        var enlaces = document.querySelectorAll('.ancla');
        enlaces.forEach(function(enlace) {
            enlace.addEventListener('click', function() {
                var navbar = document.querySelector('ul');
                navbar.style.display = 'none';

                var check = document.getElementById('check');
                check.addEventListener('click', function() {
                    var navbar = document.querySelector('ul');
                    navbar.style.display = 'block';
                });
            });
        });
    }
}


window.onload = checkScreenWidth;
window.onresize = checkScreenWidth;




    
    

        
        

        