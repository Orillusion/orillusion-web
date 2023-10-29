var T = Object.defineProperty;
var w = (a, e, t) => e in a ? T(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var n = (a, e, t) => (w(a, typeof e != "symbol" ? e + "" : e, t), t);
import { ComponentBase as v } from "@orillusion/core";
class H extends v {
  constructor() {
    super(...arguments);
    /**
     * Stats DOM container
     * with default class="stats"  
     * could custom container style with css
     */
    n(this, "container");
    n(this, "beginTime", performance.now());
    n(this, "prevTime", this.beginTime);
    n(this, "frames", 0);
    n(this, "fpsPanel");
    n(this, "memPanel");
  }
  // private drawcallPanel:Panel
  /**
   * @internal
   */
  init() {
    const t = this.container = document.createElement("div");
    t.className = "stats", t.setAttribute("style", "display:flex;flex-direction:column;gap:1px;position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000"), this.fpsPanel = new b(t, "FPS", "#0ff", "#002"), this.memPanel = new b(t, "MB", "#f08", "#201"), this.beginTime = (performance || Date).now(), document.body.appendChild(this.container);
  }
  /**
   * @internal
   */
  onDisable() {
    this.container.style.display = "none";
  }
  /**
   * @internal
   */
  onEnable() {
    this.container.style.display = "flex";
  }
  /**
   * @internal
   */
  stop() {
    this.fpsPanel.destroy(), this.memPanel.destroy(), document.body.removeChild(this.container);
  }
  /**
   * @internal
   */
  onUpdate() {
    this.frames++;
    const t = this.beginTime = performance.now();
    t >= this.prevTime + 1e3 && (this.fpsPanel.update(this.frames * 1e3 / (t - this.prevTime), 100), this.memPanel.update(performance.memory.totalJSHeapSize / 1048576, 256), this.prevTime = t, this.frames = 0);
  }
}
class b {
  constructor(e, t, s, p) {
    n(this, "canvas");
    n(this, "worker");
    n(this, "width", 80);
    n(this, "height", 48);
    const l = this.canvas = document.createElement("canvas");
    l.width = this.width, l.height = this.height, e.appendChild(l);
    const d = l.transferControlToOffscreen(), m = new Blob([`(${x})()`], { type: "application/javascript" });
    this.worker = new Worker(URL.createObjectURL(m)), this.worker.postMessage({ type: "init", offscreen: d, name: t, fg: s, bg: p }, [d]);
  }
  update(e, t) {
    this.worker.postMessage({ type: "update", value: e, maxValue: t });
  }
  destroy() {
    this.worker.terminate();
  }
}
function x() {
  let a, e, t, s, p, l, d, m = 1 / 0, y = 0;
  const o = 1, u = 3, g = 2, c = 3, r = 15, f = 74, h = 30;
  onmessage = (i) => {
    i.data.type == "update" ? (m = Math.min(m, i.data.value), y = Math.max(y, i.data.value), e.fillStyle = s, e.globalAlpha = 1, e.fillRect(0, 0, l, r), e.fillStyle = p, e.fillText(Math.round(i.data.value) + " " + t + " (" + Math.round(m) + "-" + Math.round(y) + ")", u, g), e.drawImage(a, c + o, r, f - o, h, c, r, f - o, h), e.fillRect(c + f - o, r, o, h), e.fillStyle = s, e.globalAlpha = 0.9, e.fillRect(c + f - o, r, o, Math.round((1 - i.data.value / i.data.maxValue) * h))) : i.data.type == "init" && (a = i.data.offscreen, t = i.data.name, s = i.data.bg, p = i.data.fg, l = a.width, d = a.height, e = a.getContext("2d"), e.font = "bold 9px Helvetica,Arial,sans-serif", e.textBaseline = "top", e.fillStyle = s, e.fillRect(0, 0, l, d), e.fillStyle = p, e.fillText(t, u, g), e.fillRect(c, r, f, h), e.fillStyle = s, e.globalAlpha = 0.9, e.fillRect(c, r, f, h));
  };
}
export {
  H as Stats
};
