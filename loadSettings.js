VERSION = "1.1.0.0"

if (!localStorage.settings) {
    console.log("CREATING SETTINGS DATA . . .")
    localStorage.settings = JSON.stringify({
        "page": {
            "bgcolor": "#ffffff",
            "textcolor": "#000000"
        },
        "navbar": {
            "bgcolor": "#cf762c",
            "textcolor": "#000000"
        }
    })
}

data = JSON.parse(localStorage.settings)
navbar = document.getElementById("navbar")
a = document.getElementsByName("navbarlocate")
body = document.getElementsByTagName("body")

if (body) {
    body[0].style["background-color"] = data.page.bgcolor

    Array.from(document.getElementsByTagName("h1")).forEach(el => {
        if (el.id != "navtitle") {
            el.style["color"] = data.page.textcolor
        }
    })
    Array.from(document.getElementsByTagName("h2")).forEach(el => {
        el.style["color"] = data.page.textcolor
    })
    Array.from(document.getElementsByTagName("h3")).forEach(el => {
        el.style["color"] = data.page.textcolor
    })

    Array.from(document.getElementsByTagName("label")).forEach(el => {
        el.style["color"] = data.page.textcolor
    })
}

if (navbar) {
    navbar.style["background-color"] = data.navbar.bgcolor
    navbar.style["color"] = data.navbar.textcolor
}
if (a) {
    a.forEach(el => {
        el.style["color"] = data.navbar.textcolor
    })
}