
function Utente(nome, cognome, data){
     this.nome = nome
     this.cognome = cognome
     this.data = data  
     this.getAge = function(){
        let today     = new Date();
        let anniUtente = new Date(this.data)
        var years = (today.getFullYear() - anniUtente.getFullYear());
        return years;      
     }
    }
  let form = document.getElementById("form");

   form.addEventListener("submit", (event) => {
    event.preventDefault();
    let utente1 = new Utente(
        document.getElementById("nome").value,
        document.getElementById("cognome").value,
        document.getElementById("data").value
    );
    console.log(utente1.nome)
    let nome = utente1.nome;
    let cognome = utente1.cognome;
    let eta = utente1.getAge();
    console.log(eta)
        // creo le sezioni e gli setto un id
        let riga = document.createElement('tr');
        riga.setAttribute('id','riga');
    
        let rigaNome = document.createElement('td');
        rigaNome.setAttribute('id','rigaNome');
    
        let rigaCognome = document.createElement('td');
        rigaCognome.setAttribute('id','rigaCognome');
    
        let rigaAge = document.createElement('td'); 
        rigaAge.setAttribute('id','rigaAge');
    
    
        // qui a cascata inserisco tutti gli elementi 
        document.getElementsByClassName('table-body')[0].append(riga);
        riga.append(rigaNome);
        riga.append(rigaCognome);
        riga.append(rigaAge);
    
        rigaNome.innerHTML = nome;
        rigaCognome.innerHTML = cognome;
        rigaAge.innerHTML = eta; 
        }
)




// function calcAge (birthday) {
//     birthday = new Date(birthday);
//     today     = new Date();
 
//     var years = (today.getFullYear() - birthday.getFullYear());
 
//     if (today.getMonth() < birthday.getMonth() || 
//         today.getMonth() == birthday.getMonth() && today.getDate() < birthday.getDate()) {
//         years--;
//     }
 
//     return years;
// }