import { Link } from "react-router-dom";

export default function Layout(props: any) {
    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="logo">
                        <img src="/images/logo.png" alt="" />
                        Win应用资源
                    </div>
                    <div className="menu">
                        <div className="menu_item">
                            <Link to={"/"}>
                                <i className="fa fa-home"></i>首页
                            </Link>
                        </div>
                        <div className="menu_item">
                            <Link to={"/apps"}>
                                <i className="fa fa-windows"></i>应用
                            </Link>
                        </div>
                        <div className="menu_item">
                            <Link to="/recommend">
                                <i className="fa fa-yelp"></i>推荐场景
                            </Link>
                        </div>
                        <div className="menu_item">
                            <Link to="/about">
                                <i className="fa fa-github-alt"></i>关于我们
                            </Link>
                        </div>
                        <div className="menu_item">
                            <Link to={"/apps"}>
                                <i className="fa fa-search"></i>搜索
                            </Link>
                        </div>
                        <div className="menu_item">
                            <Link to={"/shared"}>
                                <i className="fa fa-pencil"></i>提交应用
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            {props.children}
            <footer id="footer">
                <div className="box solo">
                    <img className="logo" src="/images/logo.png" alt="" />
                    <span>分享你喜欢的WINDOW应用</span>
                </div>
                <div className="line"></div>
                <div className="box copy">
                    <div>
                        <a href="/">Copyright © 2021 夜河资源网 - All rights reserved | |</a>
                    </div>
                </div>
            </footer>
        </>
    );
}
