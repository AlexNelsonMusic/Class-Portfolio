// canvas settings

const canvas = new fabric.Canvas('canvas', {
    // backgroundColor: 'red'
});

function resizeCanvas() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    canvas.setWidth(width);
    canvas.setHeight(height);
    canvas.renderAll();
}

resizeCanvas();

window.addEventListener('resize', resizeCanvas);

// creates object at mouse position

let pointerPosition = { x: 0, y: 0 };

canvas.on('mouse:move', (event) => {
    const pointer = canvas.getPointer(event.e);
    pointerPosition.x = pointer.x;
    pointerPosition.y = pointer.y;
});

// textboxes, shapes

document.addEventListener('keydown', (e) => {
    if (e.code === "KeyT") {
        const textBox = new fabric.Textbox('Text', {
            width: 75,
            left: pointerPosition.x,
            top: pointerPosition.y
        });
        canvas.add(textBox);
    }

    if (e.code === "KeyR") {
        const rectangle = new fabric.Rect({
            width: 100,
            height: 60,
            fill: 'black',
            left: pointerPosition.x,
            top: pointerPosition.y
        });
        canvas.add(rectangle);
    } 

    if (e.code === "KeyS") {
        const square = new fabric.Rect({
            width: 80,
            height: 80,
            fill: 'black',
            left: pointerPosition.x,
            top: pointerPosition.y
        });
        canvas.add(square);
    } 

    if (e.code === "KeyC") {
        const circle = new fabric.Circle({
            radius: 50,
            fill: 'black',
            left: pointerPosition.x,
            top: pointerPosition.y
        });
        canvas.add(circle);
    }


    if (e.code === "Backspace" || e.code === "Delete") {
        
        const activeObject = canvas.getActiveObject();

        if (activeObject) {
            
            if (activeObject.type === 'textbox' && activeObject.isEditing) {
                return; // Skip deletion if textbox is being edited
            }
            canvas.remove(activeObject);
        }
    }
});

// Gear images

const pngList = [
    { name: "Electric Guitar (strat-style)", url: "./images/audio.route/electric.png" },
    { name: "Electric Guitar (les paul-style)", url: "./images/audio.route/electric2.png" },
    { name: "Electric Bass", url: "./images/audio.route/bass.png" },
    { name: "Acoustic Guitar", url: "./images/audio.route/acoustic.png" },
    { name: "Guitar Amp (combo)", url: "./images/audio.route/vox.png" },
    { name: "Shure SM57", url: "./images/audio.route/SM57.png" },
    { name: "Sennheiser e609", url: "./images/audio.route/e609.png" },
];

const gearList = document.getElementById('gear-list');
const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');

document.addEventListener('keydown', (e) => {
    if (e.code === "KeyG") {
        gearList.style.display = "block";
        searchBar.focus();
    }
});

document.addEventListener('click', (e) => {
    if (!gearList.contains(e.target)) {
        gearList.style.display = "none";
    }
});

searchBar.addEventListener('input', () => {
    const searchQuery = searchBar.value.toLowerCase();
    const filteredGear = pngList.filter(item => item.name.toLowerCase().includes(searchQuery));

    searchResults.innerHTML = "";
    filteredGear.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item.name;
        div.style.cursor = "pointer";
        div.style.padding = "5px";
        div.style.borderBottom = "1px solid #ccc";
        div.addEventListener('click', () => addGearToCanvas(item.url));
        searchResults.appendChild(div);
    });
});

function addGearToCanvas(url) {
    fabric.Image.fromURL(url, (img) => {
        img.set({
            left: canvas.width / 2,
            top: canvas.height / 2,
            scaleX: 0.5,
            scaleY: 0.5,
        });
        canvas.add(img);
        gearList.style.display = "none"; 
    });
}

/* fabric.Image.fromURL('./images/audio.route/electric2.png', function(img) {
    img.scaleToWidth(50);
    canvas.add(img);
});
fabric.Image.fromURL('./images/audio.route/electric.png', function(img) {
    img.scaleToWidth(50);
    canvas.add(img);
});
fabric.Image.fromURL('./images/audio.route/bass.png', function(img) {
    img.scaleToWidth(50);
    canvas.add(img);
});
fabric.Image.fromURL('./images/audio.route/acoustic.png', function(img) {
    img.scaleToWidth(100);
    canvas.add(img);
});
fabric.Image.fromURL('./images/audio.route/vox.png', function(img) {
    img.scaleToWidth(125);
    canvas.add(img);
});
fabric.Image.fromURL('./images/audio.route/SM57.png', function(img) {
    img.scaleToWidth(70);
    canvas.add(img);
});
fabric.Image.fromURL('./images/audio.route/e609.png', function(img) {
    img.scaleToWidth(30);
    canvas.add(img);
});
 */