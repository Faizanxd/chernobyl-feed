import './style.css'

const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

const userTheme = localStorage.getItem("theme");

const systemTheme = window.matchMedia("(prefer-color-scheme: dark)").matches;

const iconToggle = () =>{
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

const themeCheck =() =>{
    if(userTheme=== "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
       moonIcon.classList.add("display-none");
        return;
    }
     sunIcon.classList.add("display-none");
};

const themeSwitch =() =>{
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme","dark");
    iconToggle();

};

moonIcon.addEventListener("click",()=>{
    themeSwitch();
});
sunIcon.addEventListener("click",()=>{
    themeSwitch();
});

themeCheck();