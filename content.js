console.groupCollapsed('Iniciando Insta.pro')

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      
      if( request.message === "dar_likes" ) {
        // console.log('Comenzando likes')
        var numero   = window.prompt('¿Cuántos likes quieres dar?',10)
        var confirma = window.confirm('¿Seguro que quieres comenzar a dar likes automáticos?')

        if(confirma){
            
            var i = 0, x , auto = setInterval(function(){
                x = document.querySelectorAll('section > main > section article > div > section > span:nth-child(1) > button ')
                x.forEach(function( cadaBoton ){
                    var meGusta = cadaBoton.querySelector('span[aria-label="Ya no me gusta"]')
                    if( meGusta == undefined ){
                        cadaBoton.click()
                    }
                })
                window.scrollTo( 0 , window.innerHeight * i )
                i++

                if( i == numero ){
                    console.log('Parando')
                    clearInterval(auto)
                }
            },500 )


        }else{
            alert('Cancelado, no darás likes automáticos')
        }

      }
    }
  )

console.groupEnd()