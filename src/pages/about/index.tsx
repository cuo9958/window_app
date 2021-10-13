import React from "react";
import "./index.scss";

export default class AboutPage extends React.Component {
    render() {
        return (
            <div id="about">
                <div className="top">关于我的内容可以参考Github上的内容.</div>
                <div className="box">
                    <h2>我一直在坚持的……</h2>
                    <div>
                        <img src="/images/about.png" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}
