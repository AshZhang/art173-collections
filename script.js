const MAX_COLOR = 16777215;
const IMAGE_PATH = "images/";
let images;
loadJSON((json) => {
    images = json;
    displayImages();
});

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'images.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText));
        }
    };
    xobj.send(null);
}

function buildItem(image){
    let item = document.createElement("div");
    item.classList.add("item");
    let link = document.createElement("a");
    link.href = image.link;
    let imageElem = document.createElement("img");
    imageElem.src = IMAGE_PATH + image.src;
    imageElem.alt = image.title;
    link.appendChild(imageElem);
    let caption = document.createElement("p");
    caption.classList.add("caption");
    caption.innerHTML = image.title;
    console.log(caption);
    let author = document.createElement("p");
    author.classList.add("caption");
    author.innerHTML = image.author;
    item.appendChild(link);
    item.appendChild(caption);
    item.appendChild(author);
    return item;
}
function displayImages() {
    const container = document.body.getElementsByClassName("container")[0];
    images.forEach((image) => {
        let item = buildItem(image);
        container.appendChild(item);
    });
}