// https://codepen.io/team/keyframers/pen/rNxmVZN
import React, {useState} from 'react';
import Slide from "./components/Slide";

const initialState = {
    slideIndex: 0
};

function slidesReducer(state, event) {
    if (event.type === "PREV") {
        return {
            ...state,
            slideIndex:
                state.slideIndex === 0 ? event.slides.length - 1 : state.slideIndex - 1
        };
    }
    if (event.type === "NEXT") {
        return {
            ...state,
            slideIndex: (state.slideIndex + 1) % event.slides.length
        };
    }
}

export default function App() {
    const [slides, setSlides] = React.useState([]);
    const [load, setLoad] = React.useState(true);
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);

    React.useEffect(() => {
        const url =
            window.location.protocol
            + "//" + window.location.hostname +
            (window.location.port ? ":" + window.location.port : '')
            + "/api";
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setSlides(result);
                    setLoad(false);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, []);

    if (load) {
        return null;
    } else {
        return (
            <div className="slides">
                <button onClick={() => dispatch({ type: "PREV", slides: slides })}>‹</button>

                {[...slides, ...slides, ...slides].map((slide, i) => {
                    let offset = slides.length + (state.slideIndex - i);
                    return <Slide slide={slide} offset={offset} key={i} />;
                })}
                <button onClick={() => dispatch({ type: "NEXT", slides: slides })}>›</button>
            </div>
        );
    }
}