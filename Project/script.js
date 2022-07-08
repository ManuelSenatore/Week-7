let url = "users.json";
let users = [];




async function getCard(){

    await fetch(url).then(res=>res.json()).then((res)=>{
        users = res;
        console.log(users);
    }) 

    users.users.forEach((e)=>{
        console.log(e);
        let random = Math.random();
        let imagine = "https://picsum.photos/200/300?random" + random;        
        let cards = document.createElement('div'); 
        cards.classList.add('card');    
        let imageDiv = document.createElement('div');
        imageDiv.classList.add('card-image');
        let nameDiv = document.createElement('div');
        nameDiv.classList.add('card-name');
        let emailDiv = document.createElement('div');
        emailDiv.classList.add('card-email');
        let cardGender = document.createElement('div');
        document.body.append(cards);
        console.log(cards);
        let img = document.createElement('img');
        img.classList.add("img");
        img.src = imagine
        console.log(e.gender)
        let btn = document.createElement('button');
        if(e.gender == 'Male') {
            btn.innerHTML = "<ion-icon name=\"man-outline\"></ion-icon>"
        // cardGender.innerHTML = "<button><ion-icon name=\"man-outline\"></ion-icon></button>"
        cards.style.backgroundImage = "linear-gradient(to top, black, rgb(0, 0, 128))"
        } else if (e.gender == 'Female'){
            btn.innerHTML = "<ion-icon name=\"woman-outline\"></ion-icon>"
        // cardGender.innerHTML = "<button><ion-icon name=\"woman-outline\"></buttonion-icon></button>";
        cards.style.backgroundImage = "linear-gradient(to top, black, pink)"
        } 
        let information = document.createElement("div")
        information.classList.add("card-info")
        let address = document.createElement("div")
        address.innerHTML ="<p> City: <br>" + e.address.city + "</p>"
        let phone = document.createElement("div")
        phone.innerHTML ="<p> Phone: <br>" + e.phone + "</p>"
        btn.addEventListener("click", function(e) {
            if(information.style.display == "block"){
                cards.style.height = "300px"
                information.style.display = "none"
            }else{
                cards.style.height = "400px"
                information.style.display = "block"
            }

        })
        cardGender.append(btn)       
        cards.append(imageDiv, nameDiv, emailDiv, cardGender, information)
        imageDiv.append(img);
        nameDiv.innerHTML = "<h2>" + e.name + "</h2>"
        emailDiv.innerHTML =  "<span>" + e.email + "</span>"
        information.append(address, phone)


    })

}
getCard();
