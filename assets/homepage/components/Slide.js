import React from "react";
import useTilt from "./useTilt";

export default function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);

    return (
        <a
            ref={ref}
            className="slide"
            data-active={active}
            href={slide.link}
            style={{
                "--offset": offset,
                "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
            }}
        >
            <div
                className="slideBackground"
                style={{
                    backgroundImage:
                        `url('${slide.url ? slide.url : 
                            window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : null) 
                            + "/media/uploads" + slide.cover.folder + slide.cover.src}')`
                }}
            />
            <div
                className="slideContent"
                style={{
                    backgroundImage:
                        `url('${slide.url ? slide.url :
                            window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : null)
                            + "/media/uploads" + slide.cover.folder + slide.cover.src}')`
                }}
            >
                <div className="slideContentInner">
                    <h2 className="slideTitle">{slide.title}</h2>
                    <h3 className="slideSubtitle">{slide.subtitle}</h3>
                    <p className="slideDescription">{slide.description}</p>
                </div>
            </div>
        </a>
    );
}