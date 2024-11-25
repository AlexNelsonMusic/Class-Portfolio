const canvas = new fabric.Canvas('canvas', {
    width: 1424,
    height: 720,
});

canvas.requestRenderAll();

fabric.Image.fromURL('./images/audio.route/electric2.png', function(img) {
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
fabric.Image.fromURL('./images/audio.route/vox.png', function(img) {
    img.scaleToWidth(125);
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
fabric.Image.fromURL('./images/audio.route/e609.png', function(img) {
    img.scaleToWidth(30);
    canvas.add(img);
});
fabric.Image.fromURL('./images/audio.route/e609.png', function(img) {
    img.scaleToWidth(30);
    canvas.add(img);
});
