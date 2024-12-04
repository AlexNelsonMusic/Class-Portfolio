// canvas settings

const canvas = new fabric.Canvas('canvas', {
    // backgroundColor: 'red'
    selection: true
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

let pointerPosition = { x: 0, y: 0 };

canvas.on('mouse:move', (event) => {
    const pointer = canvas.getPointer(event.e);
    pointerPosition.x = pointer.x;
    pointerPosition.y = pointer.y;
});

let isSearchBarActive = false;

// textboxes, shapes, deletion
document.addEventListener('keydown', (e) => {
    if (isSearchBarActive) {
        return;
    }

    const activeObject = canvas.getActiveObject();

    // allow character deletion while editing textbox
    if (activeObject && activeObject.type === 'textbox' && activeObject.isEditing) {
        return;
    }

    if (e.code === "Backspace" || e.code === "Delete") {
        const activeObjects = canvas.getActiveObjects();

        if (activeObjects.length > 0) {
            activeObjects.forEach((obj) => {
                canvas.remove(obj); // remove each object
            });
            canvas.discardActiveObject(); // clear selection
            canvas.renderAll();

            compileGearInventory();
        }
    }

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
            fill: '#000000',
            left: pointerPosition.x,
            top: pointerPosition.y
        });
        canvas.add(rectangle);
    } 

    if (e.code === "KeyS") {
        const square = new fabric.Rect({
            width: 80,
            height: 80,
            fill: '#000000',
            left: pointerPosition.x,
            top: pointerPosition.y
        });
        canvas.add(square);
    } 

    if (e.code === "KeyC") {
        const circle = new fabric.Circle({
            radius: 50,
            fill: '#000000',
            left: pointerPosition.x,
            top: pointerPosition.y
        });
        canvas.add(circle);
    } 
});

// object duplication

let isAltPressed = false;

document.addEventListener('keydown', (e) => {
    if (e.key === 'Alt') {
        isAltPressed = true;
    }
});
document.addEventListener('keyup', (e) => {
    if (e.key === 'Alt') {
        isAltPressed = false;
    }
});

canvas.on('object:moving', (e) => {
    if (isAltPressed && e.target) {
        const activeObject = e.target;

        // prevent multiple clones during a single drag
        if (!activeObject.isCloned) {
            activeObject.isCloned = true;

            // clone active object
            activeObject.clone((cloned) => {
                cloned.set({
                    evented: true
                });

                // Reset `isCloned` so this object can be cloned again
                cloned.isCloned = false;

                canvas.add(cloned);

                canvas.setActiveObject(activeObject);

                compileGearInventory();
            });
        }
    }
});

// Reset `isCloned` flag when drag ends
canvas.on('mouse:up', () => {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
        activeObject.isCloned = false;
    }
});

// color picker

const colorPicker = document.createElement('input');
colorPicker.type = 'color';
colorPicker.id = 'color-picker';
document.body.appendChild(colorPicker);

// move color picker to new object

function movePicker() {
    const activeObject = canvas.getActiveObject();

    // hide picker if no objects selected
    if (!activeObject || !(activeObject.type === 'rect' || activeObject.type === 'circle' || activeObject.type === 'textbox')) {
        colorPicker.style.display = 'none';
        return;
    }

    const canvasRect = canvas.getElement().getBoundingClientRect(); // get canvas position

    // position picker on left edge of object
    const objectLeft = (activeObject.left - 30) * canvas.getZoom();
    const objectTop = activeObject.top * canvas.getZoom();

    colorPicker.style.left = `${canvasRect.left + objectLeft}px`;
    colorPicker.style.top = `${canvasRect.top + objectTop}px`;
    colorPicker.style.display = 'block';

    // update color picker value
    const color = rgbToHex(activeObject.fill || '#000000');
    colorPicker.value = color;

    // re-add to DOM (force refresh)
    const parent = colorPicker.parentElement;
    parent.removeChild(colorPicker);
    parent.appendChild(colorPicker);
}

function rgbToHex(color) {
    if (!color) return '#000000';
    if (color.startsWith('#')) return color; // return if already in hex

    const match = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
        return `#${match.slice(1, 4)
            .map(num => parseInt(num).toString(16).padStart(2, '0'))
            .join('')}`;
    }

    console.warn('Unexpected color format:', color);
    return '#000000';
}

// move color picker to new object
canvas.on('selection:created', movePicker);
canvas.on('selection:updated', movePicker);

// hide color picker on unselect or object drag
canvas.on('selection:cleared', () => {
    colorPicker.style.display = 'none';
});
canvas.on('object:moving', () => {
    colorPicker.style.display = 'none';
});

// re-show color picker after dragging
canvas.on('object:modified', () => {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
        movePicker();
    }
});

// update object color
colorPicker.addEventListener('input', () => {
    const activeObject = canvas.getActiveObject();
    if (activeObject && (activeObject.type === 'rect' || activeObject.type === 'circle' || activeObject.type === 'textbox')) {
        activeObject.set('fill', colorPicker.value);
        canvas.renderAll();
    }
});

// Gear images

let gearList = [];

fetch('javascript/gearList.json')
    .then(response => response.json())
    .then(data => {
        gearList = data;
        // console.log('Gear List:', gearList);
    })
    .catch(error => {
        console.error('Error loading gear list:', error);
    });

const gearListContainer = document.getElementById('gear-list-container');
const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');

document.addEventListener('keydown', (e) => {
    if (e.code === "KeyG") {
        e.preventDefault(); // stop g from being typed into the search bar
        gearListContainer.style.display = "block";

        gearListContainer.style.position = "absolute";
        gearListContainer.style.left = `${pointerPosition.x}px`;
        gearListContainer.style.top = `${pointerPosition.y}px`;
        
        searchBar.value = ""; // clear search bar
        searchResults.innerHTML = ""; // clear search results
        searchBar.focus();
        isSearchBarActive = true;
    }
});

document.addEventListener('click', (e) => {
    if (!gearListContainer.contains(e.target)) {
        gearListContainer.style.display = "none";
        isSearchBarActive = false;
        searchResults.innerHTML = "";
        searchResults.style.border = "none";
    }
});

// stop hotkeys from activating while typing in searchbar
searchBar.addEventListener('keydown', (e) => {
    e.stopPropagation();
});

searchBar.addEventListener('input', () => {
    const searchQuery = searchBar.value.toLowerCase();
    const filteredGear = gearList.filter(item => item.name.toLowerCase().includes(searchQuery));

    searchResults.innerHTML = "";

    if (filteredGear.length > 0) {
        searchResults.style.border = "1px solid #ccc";
        filteredGear.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item.name;
            div.style.cursor = "pointer";
            div.style.padding = "5px";
            div.style.borderBottom = "1px solid #ccc";
            div.addEventListener('click', () => addGearToCanvas(item.url));
            searchResults.appendChild(div);
        });
    } else {
        searchResults.style.border = "none";
    }
});

function addGearToCanvas(url) {
    fabric.Image.fromURL(url, (img) => {

        const scaleX = 150 / img.width;
        const scaleY = 150 / img.width;
        const scale = Math.min(scaleX, scaleY);

        img.set({
            left: pointerPosition.x,
            top: pointerPosition.y,
            scaleX: scale,
            scaleY: scale
        });
        canvas.add(img);
        gearListContainer.style.display = "none"; 
        isSearchBarActive = false;

        compileGearInventory();
    });
}

// Gear Inventory

function compileGearInventory() {
    const gearInventory = [];
   
    canvas.getObjects().forEach(obj => {
        if (obj.type === 'image' && obj._element) {
            const url = obj._element.src;
    
            // creates a URL object from the image URL
            const parsedUrl = new URL(url);
    
            // gets file pathname from the URL
            const relativeUrl = parsedUrl.pathname;
    
            const matchingGear = gearList.find(function(item) {
                return relativeUrl.endsWith(item.url);
            });
    
            if (matchingGear) {
                gearInventory.push(matchingGear.name);
            } else {
                console.log('No matching gear found for:', url);
            }
        }
    });
    

    console.log('Session List:', gearInventory);
    return gearInventory;
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyI') {
        const gearInventory = compileGearInventory();
        alert('Gear Inventory:\n' + gearInventory.join('\n')); 
    }
});