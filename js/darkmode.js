var classTheme = window.localStorage.getItem('theme-mode');
if (classTheme) {
    var body = document.getElementById("body");
    body.className = classTheme;
}

function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "light__mode" ? "dark__mode" : "light__mode";
    
    window.localStorage.setItem('theme-mode', body.className);
}