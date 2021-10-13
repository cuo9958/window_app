import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";

export function Banner() {
    return (
        <div id="banners">
            <AwesomeSlider className="banner" animation="openAnimation" bullets={false}>
                <div data-src="/images/banner.jpeg" />
                <div data-src="/images/banner.jpeg" />
            </AwesomeSlider>
        </div>
    );
}
