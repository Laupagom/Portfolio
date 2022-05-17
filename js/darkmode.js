function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark__mode" ? "light__mode" : "dark__mode";
}