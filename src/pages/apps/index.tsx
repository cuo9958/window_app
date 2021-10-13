import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import ReactPaginate from "react-paginate";

interface iState {
    pageCount: number;
    appclass: string | number;
    language: string;
    apptype: string;
}

export default class HomePage extends React.Component<any, iState> {
    constructor(props: any) {
        super(props);
        this.state = {
            pageCount: 0,
            appclass: "",
            language: "",
            apptype: "",
        };
    }

    classification = [
        {
            name: "系统工具",
            id: 1,
        },
        {
            name: "应用软件",
            id: 2,
        },
        {
            name: "图形设计",
            id: 3,
        },
        {
            name: "网络工具",
            id: 4,
        },
        {
            name: "媒体音乐",
            id: 5,
        },
        {
            name: "编程开发",
            id: 6,
        },
        {
            name: "行业办公",
            id: 7,
        },
    ];

    render() {
        const { appclass, language, apptype } = this.state;
        return (
            <div id="apps">
                <div className="left_box">
                    <div className="bang type1">
                        <p className="tit">分类</p>
                        <div className={appclass === "" ? "item active" : "item"} onClick={() => this.onClassChange({ id: "" })}>
                            全部软件 <i className="fa fa-angle-right"></i>
                        </div>
                        {this.classification.map((item) => (
                            <div className={appclass === item.id ? "item active" : "item"} key={item.id} onClick={() => this.onClassChange(item)}>
                                {item.name}
                                <i className="fa fa-angle-right"></i>
                            </div>
                        ))}
                    </div>
                    <div className="bang type2">
                        <p className="tit">语言</p>
                        <div className={language === "" ? "item active" : "item"} onClick={() => this.onLanguageChange("")}>
                            <i className={language === "" ? "fa fa-check-circle" : "fa fa-circle-o"}></i>全部
                        </div>
                        <div className={language === "cn" ? "item active" : "item"} onClick={() => this.onLanguageChange("cn")}>
                            <i className={language === "cn" ? "fa fa-check-circle" : "fa fa-circle-o"}></i>中文
                        </div>
                        <div className={language === "en" ? "item active" : "item"} onClick={() => this.onLanguageChange("en")}>
                            <i className={language === "en" ? "fa fa-check-circle" : "fa fa-circle-o"}></i>英文
                        </div>
                    </div>
                    <div className="bang type2">
                        <p className="tit">类型</p>
                        <div className={apptype === "" ? "item active" : "item"} onClick={() => this.onTypeChange("")}>
                            <i className={apptype === "" ? "fa fa-check-circle" : "fa fa-circle-o"}></i>全部
                        </div>
                        <div className={apptype === "1" ? "item active" : "item"} onClick={() => this.onTypeChange("1")}>
                            <i className={apptype === "1" ? "fa fa-check-circle" : "fa fa-circle-o"}></i>官方
                        </div>
                        <div className={apptype === "2" ? "item active" : "item"} onClick={() => this.onTypeChange("2")}>
                            <i className={apptype === "2" ? "fa fa-check-circle" : "fa fa-circle-o"}></i>开源
                        </div>
                        <div className={apptype === "3" ? "item active" : "item"} onClick={() => this.onTypeChange("3")}>
                            <i className={apptype === "3" ? "fa fa-check-circle" : "fa fa-circle-o"}></i>破解
                        </div>
                    </div>
                </div>
                <div className="contents">
                    <div className="title">
                        <div className="top_title">
                            全部软件<span>[1200]</span>
                        </div>
                        <div className="search">
                            <input type="text" name="search" placeholder="请输入搜索词" />
                            <i className="fa fa-search"></i>
                        </div>
                    </div>
                    <div className="list">
                        <div className="item">
                            <div className="logo">
                                <img src="/images/20210925163258172487591.png" alt="" />
                            </div>
                            <div className="tit">
                                <div className="tit1">VideoProc For Mac v4.3.2021091001 多功能4K视频处理软件</div>
                                <div className="tit2">一款简单、优雅且现代的食谱管理器，适用于 iOS 和 macOS。</div>
                            </div>
                            <div className="num_down">
                                <i className="fa fa-cloud-download"></i>1233k
                            </div>
                            <div className="num_comment">
                                <i className="fa fa-commenting"></i>1233k
                            </div>
                            <div className="num_like">
                                <i className="fa fa-thumbs-up"></i>122k
                            </div>
                            <div className="num_link">
                                <i className="fa fa-long-arrow-right"></i>
                            </div>
                        </div>
                        <div className="item">
                            <div className="logo">
                                <img src="/images/20210925163258172487591.png" alt="" />
                            </div>
                            <div className="tit">
                                <div className="tit1">VideoProc For Mac v4.3.2021091001 多功能4K视频处理软件</div>
                                <div className="tit2">一款简单、优雅且现代的食谱管理器，适用于 iOS 和 macOS。</div>
                            </div>
                            <div className="num_down">
                                <i className="fa fa-cloud-download"></i>1233k
                            </div>
                            <div className="num_comment">
                                <i className="fa fa-commenting"></i>1233k
                            </div>
                            <div className="num_like">
                                <i className="fa fa-thumbs-up"></i>122k
                            </div>
                            <div className="num_link">
                                <i className="fa fa-long-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="paginate">
                        <ReactPaginate
                            previousLabel={<i className="fa fa-angle-left"></i>}
                            nextLabel={<i className="fa fa-angle-right"></i>}
                            breakLabel={<i className="fa fa-s15"></i>}
                            onPageChange={this.onPageChange}
                            pageCount={this.state.pageCount}
                        />
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.getList();
    }
    pageindex = 0;
    async getList() {
        const count = 400;
        this.setState({
            pageCount: Math.ceil(count / 20),
        });
    }
    //跳页
    onPageChange = ({ selected }: any) => {
        this.pageindex = selected;
        this.getList();
    };
    //分类选择
    onClassChange(item: any) {
        this.setState(
            {
                appclass: item.id,
            },
            () => this.getList()
        );
    }
    //语言选择
    onLanguageChange(name: string) {
        this.setState({ language: name }, () => this.getList());
    }
    //类型选择
    onTypeChange(name: string) {
        this.setState({ apptype: name }, () => this.getList());
    }
}
