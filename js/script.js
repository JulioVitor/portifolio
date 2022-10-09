var header           = document.getElementById('header');
    var navigationHeader = document.getElementById('navigation_header');
    var content          = document.getElementById('content');
    var showSidebar      = false;

    function toggleSidebar()
    {
        showSidebar = !showSidebar;
        if(showSidebar)
        {
            navigationHeader.style.marginLeft = '-10vw';
            navigationHeader.style.animationName = 'showSidebar';
            content.style.filter = 'blur(2px)';
        }
        else
        {
            navigationHeader.style.marginLeft = '-100vw';
            navigationHeader.style.animationName = '';
            content.style.filter = '';
        }
    }

    function closeSidebar()
    {
        if(showSidebar)
        {
            showSidebar = true;
            toggleSidebar();
        }
    }

    window.addEventListener('resize', function(event) {
        if(window.innerWidth > 768 && showSidebar) 
        {  
            showSidebar = true;
            toggleSidebar();
        }
    });
    

/*SCRIP PARA FILTAR OS PROJETOS NA BARRA DE PESQUISA */

let seachBox = document.querySelector('#seach-box');
let imagem = document.querySelectorAll('.container .container-imagem .imagem')

seachBox.oninput = () =>{
    imagem.forEach(hide => hide.style.display = 'none');
    let value = seachBox.value;

    imagens.forEach(filter =>{
        let title = filter.getAttribute('data-title');

        if(value == title){
            filter.style.display = "block";

        }
        if(seachBox.value == ''){
            filter.style.display = "block";
        }
    })
}