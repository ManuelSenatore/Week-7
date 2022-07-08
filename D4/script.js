let url = "http://jsonplaceholder.typicode.com/posts"

async function getPosts() {

    await fetch(url).then(res => res.json()).then((res) => {
        //esecuzione
        console.log(res);
        // document.write(res.title)
        // document.write(res.body)
        // document.write(res.userId)
        posts = res
    })

    getVisibleItems()

    function getVisibleItems() {
        document.getElementById("table").innerHTML = "";
        posts.forEach((e) => {
            let td = document.createElement("td")
            let tr = document.createElement("tr")
            td.innerHTML = e.title
            document.getElementById("table").append(tr)
            tr.append(td)
        })
    }
}
getPosts()