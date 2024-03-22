<template>
  <section class="content">
        <nav>
            <i class="fas fa-bars menu-btn"></i>
            <a href="#" class="nav-link">Categories</a>
            <form action="#">
                <div class="form-input">
                    <input type="search" placeholder="search... ">
                    <button class="search-btn">
                        <i class="fas fa-search search-icon"></i>
                    </button>
                </div>
            </form>
            <input type="checkbox" hidden id="switch-mode">
            <label for="switch-mode" class="switch-mode"></label>

            <a href="#" class="notification">
                <i class="fas fa-bell"></i>
                <span class="num">28</span>
            </a>

            <a href="#" class="profile">
                <img src="../../assets/img/pexels-pixabay-415829.jpg" alt="">
            </a>
        </nav>
  </section>
</template>

<script>
export default {
    name: 'navBar',
    mounted(){
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


    }
}
</script>

<style>

</style>