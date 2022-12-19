import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import map from "../images/kraina.jpg"
import "../Styles/Map.css"

export function Map() {
    return (
        <>
            
                <TransformWrapper
                    initialScale={1}
                    initialPositionX={0}
                    initialPositionY={0}
                >
                    {({ zoomIn, zoomOut, resetTransform,...rest }) => (
                        <>
                            <button onClick={() => zoomIn()} className="zoom_button zoomIn"> Zoom In </button>
                            <button onClick={() => zoomOut()} className="zoom_button zoomOut"> Zomm Out </button>
                            <button onClick={() => resetTransform()} className="zoom_button resetZoom"> <span> Reset Zoom</span></button>
                            <div id="border_container">
                        <TransformComponent>
                                <img
                                    id="map"
                                    src={map} alt="Map"
                                />
                            </TransformComponent>
                            </div>
                        </>
                    )}
                </TransformWrapper>
            
        </>
    )
}
