console.log('Hello!');

var idade = prompt('Em que ano você nasceu?')

  switch (parseInt(idade)){

    case 2011, 2012:
      window.location.href = "home_default.html"
        break

    case 2005:
      window.location.href = "homejovem.html"
      break
    
      case 2004:
        window.location.href = "home_adulto.html"
        break
      

      default:
        alert('nenhum comando válido')
        break
    
  }