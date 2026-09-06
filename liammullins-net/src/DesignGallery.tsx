
import './pages/Pages.css';

const imageModules = import.meta.glob('./assets/images/work/*.{png,jpg,jpeg,svg}', {eager: true});

const images = Object.values(imageModules).map((module) => (module as {default: string}).default);

export default function DesignGallery() {
    return (
        <div className="imageGallery" style={{rotate: '-5deg'}}>
            {images.map((src, index) => (
                <img key={index} src={src}/>
            ))}
        </div>
    );
}