import { LanguageSwitch } from "../i18n";

const productLayers = [
  {
    index: "01",
    label: "HARDWARE",
    title: "从结构与参数验证开始",
    text: "围绕电助力套件的结构、部件与参数开展验证，把工程约束转化为清晰的产品边界与交付标准。",
  },
  {
    index: "02",
    label: "EXPERIENCE",
    title: "建立软硬件体验闭环",
    text: "将设备连接、骑行数据、OTA 与故障诊断组织为连续体验，让硬件能力能够被用户理解和使用。",
  },
  {
    index: "03",
    label: "SERVICE",
    title: "延伸至 AI Agent 服务",
    text: "把售前咨询与售后支持纳入产品体系，让信息、诊断与服务形成更完整的用户触点。",
  },
];

const process = [
  ["01", "理解系统", "拆解机械结构、硬件能力与软件依赖。"],
  ["02", "定义产品", "把场景、功能边界和验证标准组织成可执行方案。"],
  ["03", "连接体验", "统一设备、App、数据与服务之间的用户路径。"],
  ["04", "推进落地", "协同研发、供应链、质量与市场完成验证和交付。"],
];

export default function CyploreProject() {
  return (
    <main className="cyplore-case">
      <header className="cyplore-hero">
        <video
          className="cyplore-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/cyplore-lab.png"
        >
          <source src="/assets/cyplore-product-film.mp4" type="video/mp4" />
        </video>
        <div className="cyplore-hero-overlay" aria-hidden="true" />

        <nav className="cyplore-nav case-shell" aria-label="项目导航">
          <a href="/" className="cyplore-back">← 返回作品集</a>
          <img src="/assets/logo-cyplore.png" alt="CYPLORE" />
          <a href="mailto:qiruifan2-c@my.cityu.edu.hk">联系我 ↗</a>
          <LanguageSwitch />
        </nav>

        <div className="cyplore-hero-content case-shell">
          <p>SELECTED CASE / 01 · SMART HARDWARE PRODUCT</p>
          <h1>
            从电助力硬件，
            <br />
            到<span>智能骑行体验。</span>
          </h1>
          <div className="cyplore-hero-meta">
            <p>CYPLORE 智能骑行产品体系</p>
            <p>硬件产品定义 · App 体验 · AI Agent 服务</p>
            <p>2026</p>
          </div>
        </div>

        <div className="cyplore-scroll case-shell" aria-hidden="true">
          <span>SCROLL TO EXPLORE</span><i />
        </div>
      </header>

      <section className="cyplore-overview case-section case-shell" aria-labelledby="overview-title">
        <div className="case-eyebrow">01 / OVERVIEW</div>
        <div className="cyplore-overview-copy">
          <h2 id="overview-title">从一件硬件出发，<br />学习理解完整产品。</h2>
          <p>
            CYPLORE 项目从电助力套件的工程验证出发，逐步延伸到设备连接、骑行数据、OTA、故障诊断和 AI Agent 服务。作为硬件产品实习生，我参与其中的需求梳理与验证工作，并学习如何同时理解用户需求、硬件约束和软件体验。
          </p>
        </div>
        <div className="cyplore-outcomes" aria-label="项目成果">
          <article><strong>60</strong><span>万美元+</span><p>Kickstarter 众筹金额</p></article>
          <article><strong>800</strong><span>%+</span><p>目标达成率</p></article>
          <article><strong>3</strong><span>层</span><p>硬件 · 软件 · 服务</p></article>
        </div>
      </section>

      <section className="cyplore-lab case-shell" aria-label="CYPLORE 产品研发工作台">
        <figure>
          <img src="/assets/cyplore-lab.png" alt="CYPLORE 产品部件、工具与设计草图工作台" />
          <figcaption>
            <span>PRODUCT LAB / CYPLORE</span>
            <span>从部件、草图到可验证产品</span>
          </figcaption>
        </figure>
      </section>

      <section className="cyplore-film case-section case-shell" aria-labelledby="cyplore-film-title">
        <div className="case-eyebrow">02 / DEVELOPMENT FILM</div>
        <div className="cyplore-film-heading">
          <h2 id="cyplore-film-title">从草图与部件，<br />走向真实产品。</h2>
          <p>产品研发不是单一界面的设计，而是结构、外观、验证与使用体验持续收敛的过程。</p>
        </div>
        <div className="cyplore-film-frame">
          <video autoPlay muted loop playsInline preload="metadata" poster="/assets/cyplore-hardware.jpg">
            <source src="/assets/cyplore-development-film.mp4" type="video/mp4" />
          </video>
          <span>PRODUCT DEVELOPMENT / CYPLORE</span>
        </div>
      </section>

      <section className="cyplore-system case-section case-shell" aria-labelledby="system-title">
        <div className="case-eyebrow">03 / PRODUCT SYSTEM</div>
        <div className="cyplore-system-heading">
          <h2 id="system-title">尝试从用户路径，<br />理解复杂产品能力。</h2>
          <p>通过硬件、软件与服务三个层次的工作，我逐步学习如何用真实场景中的可用性检查产品设计。</p>
        </div>
        <div className="cyplore-layer-grid">
          {productLayers.map((layer) => (
            <article key={layer.index}>
              <div><span>{layer.index}</span><small>{layer.label}</small></div>
              <h3>{layer.title}</h3>
              <p>{layer.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cyplore-process case-section" aria-labelledby="process-title">
        <div className="case-shell">
          <div className="case-eyebrow">04 / APPROACH</div>
          <h2 id="process-title">我在项目中学习的方式</h2>
          <div className="cyplore-process-list">
            {process.map(([index, title, text]) => (
              <article key={index}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <i aria-hidden="true">↗</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="cyplore-footer">
        <div className="case-shell">
          <p>NEXT / LET&apos;S BUILD</p>
          <h2>继续学习如何让技术<br />被用户理解和使用。</h2>
          <div className="cyplore-footer-actions">
            <a href="mailto:qiruifan2-c@my.cityu.edu.hk">联系范麒瑞 ↗</a>
            <a href="/">返回作品集 ↑</a>
          </div>
          <small>© 2026 FAN QIRUI · CYPLORE CASE STUDY</small>
        </div>
      </footer>
    </main>
  );
}
