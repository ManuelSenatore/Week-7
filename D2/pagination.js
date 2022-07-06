class Pagination {
    constructor(items = [], PageSize = 10) {
        this.items = items;
        this.pageSize = PageSize;

        this.page = 1;

        this.totPage = Math.ceil(this.items.length / this.pageSize)
        this.getVisibleItems();
    }
    next(){
        this.page = this.page < this.totPage ? this.page + 1 : this.totPage;
        this.getVisibleItems();
    };
    prev(){
        this.page = this.page > 1 ? this.page - 1 : 1;
        this.getVisibleItems();

    };
    first(){
        this.page = 1;
        this.getVisibleItems();
    };
    last(){
        this.page = this.totPage;
        this.getVisibleItems();
    };
    
    getVisibleItems(){
        let lastIndex = this.page * this.pageSize;
        let firstIndex = this.page * this.pageSize - this.pageSize;
        let rightItems = this.items.slice(firstIndex, lastIndex);
        let container = document.querySelector("tbody");
        container.innerHTML = "";
        rightItems.forEach((e)=>{
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            td1.innerHTML = e.nome + " " + e.cognome;
            td2.innerHTML = e.id;
            tr.append(td1, td2);
            container.append(tr);
        })
        
        // prende gli elementi corretti in base alla pagina a cui siamo e li imposto nella tabella
    }
}




let users = [
    {nome: "Marco", cognome: "Rossi", id: 1},
    {nome: "Marcia", cognome: "Marcia", id: 2},
    {nome: "Marcelia", cognome: "Marcia", id: 3},
    {nome: "Nicolas", cognome: "Werner", id: 4},
    {nome: "John", cognome: "John", id: 5},
    {nome: "John", cognome: "John", id: 6}, 
    {nome: "Jack", cognome: "Walker", id: 7},
    {nome: "John", cognome: "Walker", id: 8},
    {nome: "John", cognome: "Walker", id: 9},
    {nome: "John", cognome: "Walker", id: 10}
]

let p = new Pagination(users, 2)


document.getElementById("avanti").addEventListener("click",()=>{
   p.next()
})

document.getElementById("indietro").addEventListener("click",()=>{
    p.prev()
 })

document.getElementById("fine").addEventListener("click",()=>{
    p.last()
 })

document.getElementById("inizio").addEventListener("click",()=>{
    p.first()
 })