export const ProjectSlide = (props) => {
    return (
        <div className="project-slides swiper-slide">
            <div className="img">
                <img alt={props.title} className="swiper-lazy swiper-lazy-loaded" src={props.url} />
            </div>
        </div >
    );
};



