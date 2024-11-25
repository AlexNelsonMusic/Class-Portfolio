/* const canvas = new fabric.Canvas('canvas', {
    width: 500,
    height: 500,
    backgroundColor: '#ccc'
});

canvas.requestRenderAll();

canvas.on('mouse:over', (e) => {
    console.log(e) 
})

const imgAdded = (e) => {
    console.log(e);
    const inputElem = document.getElementById('my-img');
    const file = inputElem.files[0];
    reader.readAsDataURL(file); 
}

const inputFile = document.getElementById('my-img');
inputFile.addEventListener('change', imgAdded);

const reader = new FileReader

reader.addEventListener('load', () => {
    console.log(reader.result);
    FabricImage.fromURL(reader.result, img => {
        canvas.add(img);
        canvas.requestRenderAll();
    });
}) */

/* const imgElement = document.getElementById('SM57');
const imgInstance = new FabricImage(imgElement, {
    left: 100,
    top: 100,
    angle: 30,
    opacity: 0.85
});
canvas.add(imgInstance); */