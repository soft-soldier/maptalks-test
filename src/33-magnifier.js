/**
 * Created by 86185 in 2020/8/15 on 9:05
 */
let mousePosition = null;

map.on("mousemove", function (e) {
    mousePosition = e.containerPoint;
    map.getRenderer().setToRedraw();
});

map.on("mouseout", function () {
    mousePosition = null;
    map.getRenderer().setToRedraw();
});

map.on("renderend", function (e) {
    if (!mousePosition) {
        return;
    }
    // map"s canvas context
    let ctx = e.context;
    // radius of magnifier
    let radius = 150;
    let pixelRatio = (window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI));
    radius *= (pixelRatio > 1 ? 2 : 1);
    let centerX = mousePosition.x * pixelRatio,
        centerY = mousePosition.y * pixelRatio;
    let originX = centerX - radius,
        originY = centerY - radius;
    let size = 2 * radius + 2;
    // manipulate pixel values to magnify
    let sourceData = ctx.getImageData(originX, originY, size, size).data;
    let dest = ctx.createImageData(size, size);
    let destData = dest.data;
    for (let j = 0; j < size; ++j) {
        for (let i = 0; i < size; ++i) {
            let dI = i - radius;
            let dJ = j - radius;
            let dist = Math.sqrt(dI * dI + dJ * dJ);
            let sourceI = i;
            let sourceJ = j;
            if (dist < radius) {
                sourceI = Math.round(radius + dI / 2);
                sourceJ = Math.round(radius + dJ / 2);
            }
            let destOffset = (j * size + i) * 4;
            let sourceOffset = (sourceJ * size + sourceI) * 4;
            destData[destOffset] = sourceData[sourceOffset];
            destData[destOffset + 1] = sourceData[sourceOffset + 1];
            destData[destOffset + 2] = sourceData[sourceOffset + 2];
            destData[destOffset + 3] = sourceData[sourceOffset + 3];
        }
    }
    // draw magnifier"s outline
    ctx.beginPath();
    ctx.strokeStyle = "#bbb";
    ctx.lineWidth = 2;
    ctx.arc(centerX, centerY, radius + 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();

    // draw magnified image and clip it by circle
    ctx.drawImage(createMagCircle(dest, size), centerX - size / 2, centerY - size / 2);
});

//draw image data into a canvas, and clip it by a circle with diameter of size
function createMagCircle(imageData, size) {
    let magImg = document.createElement("canvas");
    let magCircle = document.createElement("canvas");

    magImg.width = magImg.height = magCircle.width = magCircle.height = size;
    magImg.getContext("2d").putImageData(imageData, 0, 0);

    let ctx = magCircle.getContext("2d");
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
    // clip canvas
    ctx.clip();
    ctx.drawImage(magImg, 0, 0);
    return magCircle;
}
