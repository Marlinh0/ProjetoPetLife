var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function(duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle("ativa")
    })
})

window.sr = ScrollReveal({reset:true});

sr.reveal('#inicio',{ duration: 1000});

sr.reveal('#clinica',{ duration: 2000});

sr.reveal('#farmacia',{ duration: 2000});

sr.reveal('#duvidas',{ duration: 2000});

