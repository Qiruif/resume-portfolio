const systemLayers = [
  { index: "01", label: "LAYOUT", title: "系统与工位布局", text: "从整岛视角理解工位、机器人、检测区域与周边设备的空间关系。" },
  { index: "02", label: "MECHANICAL", title: "机械与末端系统", text: "梳理机器人、快换结构、检测工装和不同任务接口之间的机械依赖。" },
  { index: "03", label: "ELECTRICAL", title: "电气与控制系统", text: "理解控制柜、PLC、网络与现场设备之间的控制和通信关系。" },
  { index: "04", label: "QUALITY", title: "质量制造场景", text: "从检测动作、异常路径和结果追溯出发，建立系统级质量视角。" },
];

export default function NioProject() {
  return (
    <main className="nio-case">
      <header className="nio-hero">
        <nav className="nio-nav case-shell" aria-label="项目导航">
          <a href="/">← 返回作品集</a>
          <img src="/assets/logo-nio.png" alt="NIO 蔚来" />
          <a href="mailto:qiruifan2-c@my.cityu.edu.hk">联系我 ↗</a>
        </nav>
        <div className="nio-hero-grid case-shell">
          <div className="nio-hero-copy">
            <p>SELECTED CASE / 02 · QUALITY MANUFACTURING</p>
            <h1>让机器人检测，<br />成为<span>可协同的系统。</span></h1>
            <div className="nio-meta">
              <span>蔚来智能检测岛</span>
              <span>机器人 · 机械 · 电气 · 质量</span>
              <span>2024</span>
            </div>
          </div>
          <figure className="nio-hero-visual">
            <img src="/assets/project-nio-inspection.svg" alt="智能检测岛系统抽象视觉" />
            <figcaption>PUBLIC CASE / CONFIDENTIAL DETAILS REDACTED</figcaption>
          </figure>
        </div>
      </header>

      <section className="nio-overview case-section case-shell" aria-labelledby="nio-overview-title">
        <div className="case-eyebrow">01 / CONTEXT</div>
        <div>
          <h2 id="nio-overview-title">在制造质量场景中，<br />理解复杂机器人系统。</h2>
          <p>这是一套面向汽车制造质量场景的智能检测岛。项目资料覆盖总体布局、设备布局、机械系统和电气控制，呈现出机器人能力如何通过工装、控制与现场流程成为完整检测系统。</p>
        </div>
        <aside>
          <strong>我的身份</strong>
          <p>质量制造实习生</p>
          <strong>案例重点</strong>
          <p>系统理解 · 接口梳理 · 质量场景</p>
        </aside>
      </section>

      <section className="nio-architecture case-section" aria-labelledby="nio-system-title">
        <div className="case-shell">
          <div className="case-eyebrow">02 / SYSTEM VIEW</div>
          <div className="nio-section-heading">
            <h2 id="nio-system-title">四个层次，<br />共同决定检测质量。</h2>
            <p>公开版仅展示系统层级和工作方法；具体尺寸、零件号、电气拓扑及原始图纸不在网页中披露。</p>
          </div>
          <div className="nio-layer-grid">
            {systemLayers.map((layer) => (
              <article key={layer.index}>
                <div><span>{layer.index}</span><small>{layer.label}</small></div>
                <h3>{layer.title}</h3>
                <p>{layer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nio-evidence case-section case-shell" aria-labelledby="nio-evidence-title">
        <div className="case-eyebrow">03 / ENGINEERING EVIDENCE</div>
        <div className="nio-section-heading">
          <h2 id="nio-evidence-title">真实工程内容，<br />只展示必要部分。</h2>
          <p>以下画面由项目资料局部截取并模糊处理，仅用于呈现系统规模与跨专业协同关系。</p>
        </div>
        <div className="nio-evidence-grid">
          <figure className="nio-evidence-wide">
            <img src="/assets/nio-layout-public.webp" alt="经过脱敏处理的智能检测岛整体布局局部" />
            <figcaption><span>01 / SYSTEM LAYOUT</span><strong>整岛与工位关系</strong></figcaption>
          </figure>
          <figure>
            <img src="/assets/nio-mechanical-public.webp" alt="经过脱敏处理的机器人机械系统局部" />
            <figcaption><span>02 / MECHANICAL</span><strong>机器人与检测工装</strong></figcaption>
          </figure>
          <figure>
            <img src="/assets/nio-electrical-public.webp" alt="经过脱敏处理的设备与电气布局局部" />
            <figcaption><span>03 / ELECTRICAL</span><strong>双工位控制关系</strong></figcaption>
          </figure>
        </div>
        <p className="nio-evidence-note">PUBLIC PREVIEW · DIMENSIONS, PART NUMBERS AND TITLE BLOCKS REDACTED</p>
      </section>

      <section className="nio-diagram case-section case-shell" aria-labelledby="nio-method-title">
        <div className="nio-diagram-copy">
          <div className="case-eyebrow">04 / PRODUCT THINKING</div>
          <h2 id="nio-method-title">从一张图纸，<br />看到系统边界。</h2>
          <p>机械、电气和现场流程并不是独立模块。产品判断需要识别它们之间的接口、约束与异常传递路径，再把系统语言转化为可验证、可追踪的质量目标。</p>
        </div>
        <div className="nio-system-map" aria-label="智能检测岛系统关系图">
          <div className="nio-map-center">检测任务<br /><span>INSPECTION</span></div>
          <div className="nio-map-node nio-map-node-a">机器人与末端</div>
          <div className="nio-map-node nio-map-node-b">设备与工位</div>
          <div className="nio-map-node nio-map-node-c">电气与控制</div>
          <div className="nio-map-node nio-map-node-d">质量与追溯</div>
          <i className="nio-map-line nio-map-line-a" /><i className="nio-map-line nio-map-line-b" />
          <i className="nio-map-line nio-map-line-c" /><i className="nio-map-line nio-map-line-d" />
        </div>
      </section>

      <section className="nio-confidential case-shell" aria-label="保密说明">
        <span>CONFIDENTIALITY</span>
        <p>本页面为公开版案例，不展示原始工程图纸、详细尺寸、零件编号或电气拓扑。完整项目资料仅在获得适当授权的面试沟通中展示。</p>
      </section>

      <footer className="nio-footer">
        <div className="case-shell">
          <p>NEXT / SYSTEMS PRODUCT</p>
          <h2>理解工程细节，<br />做出系统级产品判断。</h2>
          <div><a href="mailto:qiruifan2-c@my.cityu.edu.hk">联系范麒瑞 ↗</a><a href="/">返回作品集 ↑</a></div>
          <small>© 2026 FAN QIRUI · NIO CASE STUDY / PUBLIC VERSION</small>
        </div>
      </footer>
    </main>
  );
}
