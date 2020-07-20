// Archives to add in pages
let files = [
    //models
    "/models/keyboard.js",
    "/models/shortkeys.js",

    //configs
    "/configs/shortKeys/events.js",
    "/configs/env.js",
];

//get Content of archives listed before
files.forEach(
    (filePath) => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = (e) => {
            if(xhr.status == 200 && xhr.readyState == 4){
                addTag(xhr.responseText, filePath);
            }
        }

        //Sync to folow ordenation
        xhr.open("GET", chrome.extension.getURL(filePath), false);
        xhr.send();
    }
);

//Add tag and code in the page especified in the manifest.json
function addTag(body, filePath){
    script = document.createElement("script");
    script.setAttribute("id", "custom-script-code"+filePath);
    script.setAttribute("type", "text/javascript");
    script.text = body;
    document.documentElement.appendChild(script);
}