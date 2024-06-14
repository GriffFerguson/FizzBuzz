var liElems = document.getElementsByTagName("li");
var viewer = {
    frame: document.getElementById("file-viewer"),
    filename: document.getElementById("viewer-filename"),
    download: document.getElementById("viewer-download"),
    openNew: document.getElementById("viewer-open-new")
}

for (var li of liElems) {
    li.addEventListener("click", (e) => {
        fetch("./" + e.target.dataset.viewerLink)
        .then((res) => {
            return res.text();
        })
        .then((text) => {
            var parent = document.createElement("div");
            var lines = text.split("\n");
            for (var line of lines) {
                var span = document.createElement("span");
                span.innerText = line;
                parent.appendChild(span);
            }
            return parent;
        })
        .then((elem) => {
            viewer.frame.innerHTML = "";
            viewer.download.setAttribute("href", e.target.dataset.viewerLink);
            viewer.filename.innerText = e.target.dataset.viewerLink;
            if (e.target.dataset.viewerLink.endsWith(".html")) {
                viewer.openNew.style.display = "inline";
                viewer.openNew.setAttribute("href", e.target.dataset.viewerLink);
            } else {
                viewer.openNew.style.display = "none";
            }
            viewer.frame.appendChild(elem);
        })
    })
}