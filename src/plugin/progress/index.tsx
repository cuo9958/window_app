import "./index.scss";

let dom = document.getElementById("nprogress");
let bar: any = null;
let timer: any = null;
if (!dom) {
    dom = document.createElement("div");
    dom.id = "nprogress";
    document.body.appendChild(dom);
    bar = document.createElement("div");
    bar.className = "nprogress_bar";
    dom.appendChild(bar);
} else {
    bar = dom.getElementsByClassName("nprogress_bar");
}
function done() {
    if (timer) clearTimeout(timer);
    setTimeout(() => {
        bar.className = "nprogress_bar";
        bar.style.width = "00%";
    }, 1000);
}
export const NProcess = {
    configure() {},
    start() {
        bar.className = "nprogress_bar loading";
        bar.style.width = "80%";
        timer = setTimeout(() => {
            bar.style.width = "100%";
            done();
        }, 3000);
    },
    done() {
        if (timer) clearTimeout(timer);
        bar.className = "nprogress_bar loading";
        bar.style.width = "100%";
        done();
    },
    set(pre: number) {
        bar.className = "nprogress_bar loading";
        bar.style.width = pre + "%";
        if (pre >= 100) done();
    },
};
