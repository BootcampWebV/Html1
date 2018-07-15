export class Main {

    constructor () {
   
        this.oBotonMenu = document.querySelector('#menuBtn')
        this.aMenu = document.querySelectorAll("nav a")
        this.aSections = document.querySelectorAll("section")
        this.select = document.querySelector('#ask')
        this.textarea = document.querySelector("#mensaje")
        this.menu = document.querySelector("#menuBtn")
        this.submit = document.querySelector("#send");
        this.about = document.querySelector('#about');
        this.oOffsets = []

        this.prepararNavegacion()

        
    }

    defineEventListeners() {
        this.about.addEventListener("scroll",this.a)
        this.menu.addEventListener("click", this.menuc)
        this.select.addEventListener("change",this.comprobar)
        this.textarea.addEventListener("blur", this.limitepalabra)
        window.addEventListener('scroll', this.changeMenuStyle.bind(this))
        
       

    }
   
   
    comprobar(){

        var ask = document.getElementById("ask");
        var input = document.getElementById("other");
        if(ask.selectedIndex == 4)
        {
          input.style.display = "block";
        }
        else
        {
          input.style.display = "none";
        }
      }

    


    limitepalabra(obj,e) {
        var text = (document.getElementById("mensaje"));
        var button = (document.getElementById("send"))
        var maxPalabras = 100;
        var txt = text.value.split(' ');
        if (txt.length>maxPalabras)
        { 
            alert("el textarea no puede contener mas de 100 palabras")
            button.disabled = true;
            button.style.backgroundColor = "#f65959";
            
            return false;
        }
            button.style.display = "block";
            button.style.backgroundColor = "#079BCF";
            button.disabled = false;
        return true
      }
   


    prepararNavegacion() {
        this.aSections.forEach(
            (item) => {
                let cumulative =  this.cumulativeOffset(item);
                this.oOffsets["#"+item.id] = cumulative;
            }
        )
    console.log(this.oOffsets)
    }

    cumulativeOffset (element) {
        var top = 0;
        do {
            top += element.offsetTop || 0;
            element = element.offsetParent;
        } while(element);
        return top;
    };




  

    changeMenuStyle () {
        let pageOffset = window.pageYOffset
        let menuItem = 0
        if (pageOffset >=  this.oOffsets['#banner'] && pageOffset < this.oOffsets['#about']) {
            menuItem = 1
        } else if (pageOffset >= this.oOffsets['#about'] && pageOffset < this.oOffsets['#conocimiento']) {
            menuItem = 2
        } else if (pageOffset >= this.oOffsets['#conocimiento'] && pageOffset < this.oOffsets['#contacto']) {
            menuItem = 3
       }  else {
            menuItem = 4
        }
        this.aMenu.forEach(
            (item) => item.classList.remove('button')
        )
        this.aMenu[menuItem].classList.add('button')
    }


    menuc() {
        var x = document.getElementById("navM");
        var y = document.getElementById("menures");
        if (y.className === "menu") {
            y.className = "menu-v"
            x.className = "menuMov";
           
        } else {
            x.className = "nav";
            y.className = "menu"
        }
    }


   
}