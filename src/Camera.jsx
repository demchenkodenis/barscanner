import {useRef} from "react";

const Camera = () => {
    const code = useRef(null)

    const camera = () => {
        if (navigator.mediaDevices.getUserMedia){
            navigator.mediaDevices.getUserMedia({video: true})
                .then(s => {
                    console.log(s)
                })
                .catch(e => console.log(e))
        }
    }

    const btn = {
        marginTop: '20px',
        width: '200px',
        height: '32px'
    }

    return (
        <>
            <div id="code" ref={code}></div>
            <button style={{...btn}} onClick={camera}>Сканировать</button>
        </>
    )
}

export default Camera;