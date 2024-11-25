import React, {useEffect, useRef, useState} from "react";
import { Canvas } from "fabric";
import "./css/audioroute.css"
import { button } from "blocksin-system";

function canvasApp() {
    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null)

    useEffect(() => {
        if(canvasRef.current) {
            const initCanvas = new Canvas(canvasRef.current, {
                width: 500,
                height: 500,
            })

            initCanvas.backgroundColor = "#fff";
            initCanvas.renderAll();

            setCanvas(initCanvas);

            return () => {
                initCanvas.dispose();
            };
        }
    }, []);

    return <div className="audio-route">
        <canvas id="canvas" ref={canvasRef}></canvas>
    </div>;
}

export default canvasApp;