import React from "react";
import "./index.scss";
import "particles.js";
import { Cfg } from "./cfg";

interface iState {
    showPop: boolean;
}
export default class SharedPage extends React.Component<any, iState> {
    constructor(props: any) {
        super(props);
        this.state = {
            showPop: false,
        };
    }
    render() {
        const { showPop } = this.state;
        return (
            <div id="shared">
                <div id="backjs" className="tuijian">
                    <button className="btn" onClick={this.showDownload}>
                        推荐应用
                    </button>
                </div>
                <div className="wait_box">
                    <h3>
                        待上架应用<span>(123)</span>
                    </h3>
                    <div className="list">
                        <div className="item">
                            <div className="logo">
                                <img src="/images/20210925163258172487591.png" alt="" />
                            </div>
                            <div className="tit">
                                <div className="tit1">
                                    多功能4K视频处理软件 <small>[v1.2.3]</small>
                                </div>
                                <div className="tit2">一款简单、优雅且现代的食谱管理器，适用于 iOS 和 macOS。</div>
                                <div className="foot">
                                    <span className="auther">作者xxx</span>
                                    <span className="filesize">11.4MB</span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="logo">
                                <img src="/images/20210925163258172487591.png" alt="" />
                            </div>
                            <div className="tit">
                                <div className="tit1">
                                    多功能4K视频处理软件 <small>[v1.2.3]</small>
                                </div>
                                <div className="tit2">
                                    一款简单、优雅且现代的食谱管理器，适用于 iOS 和 macOS。一款简单、优雅且现代的食谱管理器，适用于 iOS 和
                                    macOS。一款简单、优雅且现代的食谱管理器，适用于 iOS 和 macOS。
                                </div>
                                <div className="foot">
                                    <span className="auther">作者xxx</span>
                                    <span className="filesize">11.4MB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="dialog" className={showPop ? "show" : ""}>
                    <div className="box">
                        <h3>推荐应用</h3>
                        <div className="item">
                            <input className="title" type="text" name="title" placeholder="请输入应用名称" />
                            <input className="small" type="text" name="version" placeholder="请输入应用版本号" />
                        </div>
                        <div className="item">
                            <input type="text" name="sortname" placeholder="请输入一句话的概述" />
                        </div>
                        <div className="item">
                            <input type="text" name="address" placeholder="请输入应用地址" />
                        </div>
                        <div className="item">
                            <textarea
                                name="remark"
                                placeholder="请输入推荐理由。例如:专为设计师而打造的矢量绘图软件，拥有简约的设计，调色板，面板，菜单，窗口，控件和功能强大的矢量绘图和文字工具；包含针对UI设计的操作和交互模式，让你设计图标、移动手机UI、网站UI等更加简单高效。"
                            ></textarea>
                        </div>
                        <div className="item">
                            <input className="title" type="text" name="nickname" placeholder="请输入您的昵称" />
                            <input className="small" type="text" name="email" placeholder="请输入您的邮箱" />
                        </div>
                        <div className="item">
                            <button className="submit">立即提交</button>
                            <button className="cancel" onClick={this.clsoeDownload}>
                                取消
                            </button>
                        </div>
                        <div className="close" onClick={this.clsoeDownload}>
                            <i className="fa fa-close"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        particlesJS("backjs", Cfg);
    }
    //打开下载弹层
    showDownload = () => {
        this.setState({ showPop: true });
    };
    //关闭下载弹层
    clsoeDownload = () => {
        this.setState({ showPop: false });
    };
}
