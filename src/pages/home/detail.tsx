import React from "react";
import "./index.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import ClipboardJS from "clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface iState {
    model: any;
    showPop: boolean;
}
export default class DetailPage extends React.Component<any, iState> {
    constructor(props: any) {
        super(props);
        this.state = {
            model: {},
            showPop: false,
        };
        this.params = this.props.match.params;
    }
    params: any;
    render() {
        return (
            <div id="detail">
                <div className="box">
                    <div className="down">
                        <div className="logo">
                            <img src="/images/20210925163258172487591.png" alt="" />
                        </div>
                        <div className="txts">
                            <div className="tit">
                                VideoProc For Mac v4.3.2021091001 多功能4K视频处理软件 <small>[v4.3.2]</small>
                            </div>
                            <div className="labels">
                                <div className="tag">
                                    <i className="fa fa-tag"></i>视频处理
                                </div>
                                <div className="tag">
                                    <i className="fa fa-tag"></i>多功能
                                </div>
                                <div className="tag">
                                    <i className="fa fa-tag"></i>破解
                                </div>
                            </div>
                            <div className="btns">
                                <button className="btn_down" onClick={this.showDownload}>
                                    <i className="fa fa-cloud-download"></i>
                                    免费下载
                                </button>
                                <button className="like" onClick={this.like}>
                                    <i className="fa fa-thumbs-up"></i>赞&nbsp;[90]&nbsp;
                                </button>
                            </div>
                            <div className="auther">
                                <div className="item">
                                    开源&nbsp;<a href="/">疯狂紫萧</a>
                                </div>
                                <div className="item">
                                    <i className="fa fa-commenting"></i>评论[1200]
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banners">
                        <AwesomeSlider className="banner" bullets={false}>
                            <div data-src="/images/banner.jpeg" />
                            <div data-src="/images/banner.jpeg" />
                        </AwesomeSlider>
                    </div>
                </div>
                <div className="container">
                    <div className="info">
                        <div className="item">
                            <div className="t1">大小</div>
                            <div className="t2">300</div>
                            <div className="t3">MB</div>
                        </div>
                        <div className="item">
                            <div className="t1">下载次数</div>
                            <div className="t2">10023</div>
                            <div className="t3">次</div>
                        </div>
                        <div className="item">
                            <div className="t1">语言</div>
                            <div className="t2">中文</div>
                            <div className="t3">CN</div>
                        </div>
                        <div className="item">
                            <div className="t1">系统</div>
                            <div className="t2">32位/64位</div>
                            <div className="t3">window</div>
                        </div>
                        <div className="item">
                            <div className="t1">分类</div>
                            <div className="t2">视频处理</div>
                            <div className="t3">工具</div>
                        </div>
                        <div className="item">
                            <div className="t1">上传日期</div>
                            <div className="t2">2021-02-31</div>
                            <div className="t3">33天前</div>
                        </div>
                    </div>
                    <div className="contents">
                        <h3> 应用介绍</h3>
                        <p>
                            Kaleidoscope是世界上最强大的文件比较应用程序。比较Mac和iPad上的不同文本文件，图像和文件夹。在几秒钟内查看并合并更改（仅在Mac上合并）。Kaleidoscope是创意和专业过程的一个组成部分。使用它来解开文本文件，图像或文件夹的多个版本之间的复杂性。
                        </p>
                        <p>
                            功能介绍 常规差异对比 单一窗口的工作流程：每一个标签比较 比较两个文件：添加任意数量的文件，每个选项卡 始终保持最新状态：自动刷新文件时改变
                            文件架系列：快速从文件到文件 路径栏：查看您的文件在哪里 键盘快捷键：每个动作都有快捷方式 文本范围 支持任何文本文件：纯文本，源代码， HTML等。 清除比较
                            三种布局：块，流体与统一 比较文件：进口文本。 doc和rtf文件 即时搜索 更改步进：迅速蹿改来改
                        </p>
                    </div>
                    <div className="history">
                        <h3>历史版本</h3>
                        <div className="table">
                            <div className="list">
                                <div className="item version table-head">版本号</div>
                                <div className="item filesize table-head">文件大小</div>
                                <div className="item lange table-head">语言</div>
                                <div className="item date table-head"> 更新日期</div>
                                <div className="item table-head">免费下载</div>
                            </div>
                            <div className="list">
                                <div className="item version">v4.3.1</div>
                                <div className="item filesize">100MB</div>
                                <div className="item lange">中文</div>
                                <div className="item date"> 2021-02-27</div>
                                <div className="item">
                                    <button className="btn">
                                        <i className="fa fa-cloud-download"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="down_box" className={this.state.showPop ? "show" : ""}>
                    <div className="pop_box">
                        <div className="pop_content">
                            <p>VideoProc For Mac v4.3.2021091001 多功能4K视频处理软件</p>
                            <div className="content">
                                <a href="/">
                                    <i className="fa fa-hdd-o"></i>百度盘下载
                                </a>
                                <span>提取码&nbsp;XUSY2</span>
                                <button className="btn_copy" data-clipboard-text="测试内容">
                                    复制
                                </button>
                            </div>

                            <div className="close" onClick={this.clsoeDownload}>
                                <i className="fa fa-close"></i>
                            </div>
                        </div>
                        <div className="pop_foot" onClick={this.clsoeDownload}>
                            关闭
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }

    componentDidMount() {
        this.getDetail();
        const clipboard = new ClipboardJS(".btn_copy");

        clipboard.on("success", function (e) {
            toast("提取码已复制成功");
        });
    }
    async getDetail() {
        this.setState({
            model: {},
        });
    }
    //打开下载弹层
    showDownload = () => {
        this.setState({ showPop: true });
    };
    //关闭下载弹层
    clsoeDownload = () => {
        this.setState({ showPop: false });
    };
    //点赞
    like = () => {
        toast("感谢您的赞");
    };
}
