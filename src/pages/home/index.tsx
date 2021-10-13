// import { useLocation, useParams } from "react-router-dom";

import { Banner } from "@/component/banner";
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

interface iState {
    hot_list: any[];
}
export default class HomePage extends React.Component<any, iState> {
    constructor(props: any) {
        super(props);
        this.state = {
            hot_list: [],
        };
    }
    render() {
        const { hot_list } = this.state;
        return (
            <>
                <Banner />
                <div className="app_container">
                    <div className="title">
                        <h3>热门应用</h3>
                        <a href="/" className="more">
                            全部应用
                        </a>
                    </div>
                    <div className="list">
                        {hot_list.map((item, index) => (
                            <div className="app_item" key={index}>
                                <div className="img">
                                    <Link to={"/detail/" + item}>
                                        <img src="/images/20210925163258172487591.png" alt="" />
                                    </Link>
                                </div>
                                <div className="info">
                                    <div className="tit">
                                        <a href="/">VideoProc For Mac v4.3.2021091001 多功能4K视频处理软件</a>
                                    </div>
                                    <div className="txt">
                                        <span className="solog">视频剪辑</span>一款简单、优雅且现代的食谱管理器，适用于 iOS 和 macOS。
                                    </div>
                                    <div className="tips">
                                        <span>2021-09-25</span>
                                        <span>
                                            <i className="fa fa-eye"></i>3,525
                                        </span>
                                        <span>
                                            <i className="fa fa-cloud-download "></i>674
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
    componentDidMount() {
        this.getHotList();
    }
    async getHotList() {
        this.setState({
            hot_list: [1, 2, 3, 4, 5, 6],
        });
    }
}
