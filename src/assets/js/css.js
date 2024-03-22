
let sideMenu = document.querySelectorAll(".nav-link");
sideMenu.forEach( (item) => {
    let li = item.parentElement;

    item.addEventListener("click", () => {
        sideMenu.forEach(link => {
            link.parentElement.classList.remove("active")
        })
        li.classList.add("active");
    })
})



let sideBar = document.querySelector(".sidebar");
let menuBar = document.querySelector(".menu-btn");

menuBar.addEventListener("click", () => {
    sideBar.classList.toggle("hide")
})


window.addEventListener("resize", () => {
if(window.innerWidth < 768){
    sideBar.classList.add("hide")
}})


let switchMode = document.getElementById("switch-mode");
switchMode.addEventListener("change", (e) => {
    if(e.target.checked){
        document.body.classList.add("dark")
    }else{
        document.body.classList.remove("dark")
    }
})







let searchForm = document.querySelector(".content nav form");
let searchBtn = document.querySelector(".search-btn");
let searchIcon = document.querySelector(".search-icon");

searchBtn.addEventListener("click", (e) => {
    if(window.innerWidth < 590){
        e.preventDefault();
        searchForm.classList.toggle("show");

        if(searchForm.classList.contains("show")){
            searchIcon.classList.replace("fa-search", "fa-times")
        }else{
            searchIcon.classList.replace("fa-times", "fa-search")
        }
    }
})

window.addEventListener("resize", () => {
    if(window.innerWidth < 590){
        searchIcon.classList.replace("fa-times", "fa-search")
        searchForm.classList.remove("show");
    }})