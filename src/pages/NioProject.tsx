const systemLayers = [
  { index: "01", label: "LAYOUT", title: "系统与工位布局", text: "从整岛视角理解工位、机器人、检测区域与周边设备的空间关系。" },
  { index: "02", label: "MECHANICAL", title: "机械与末端系统", text: "梳理机器人、快换结构、检测工装和不同任务接口之间的机械依赖。" },
  { index: "03", label: "ELECTRICAL", title: "电气与控制系统", text: "理解控制柜、PLC、网络与现场设备之间的控制和通信关系。" },
  { index: "04", label: "QUALITY", title: "质量制造场景", text: "从检测动作、异常路径和结果追溯出发，建立系统级质量视角。" },
];

const armWorkstreams = [
  {
    index: "01",
    title: "需求与构型定义",
    text: "以 5 自由度、5 kg 负载和目标工作空间为边界，确定关节型机械臂构型、连杆尺度与运动约束。",
  },
  {
    index: "02",
    title: "关节传动选型",
    text: "比较驱动与减速方案，结合静载荷转矩、安全系数和运动精度完成伺服电机及减速机构匹配。",
  },
  {
    index: "03",
    title: "三维结构设计",
    text: "使用 SolidWorks 完成整机与关节结构建模，在轻量化、刚度、装配空间和传动路径之间迭代。",
  },
  {
    index: "04",
    title: "运动与结构验证",
    text: "通过 D-H 建模、正逆运动学、工作空间采样、轨迹规划及静力学分析验证方案可行性。",
  },
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
            <h1>让机器人能力，<br />成为<span>可验证的系统。</span></h1>
            <div className="nio-meta">
              <span>蔚来机器人系统</span>
              <span>机械臂 · 检测岛 · 电气 · 质量</span>
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

      <section className="nio-arm case-section" aria-labelledby="nio-arm-title">
        <div className="case-shell">
          <div className="case-eyebrow">03 / ROBOT ARM DESIGN</div>
          <div className="nio-section-heading nio-arm-heading">
            <h2 id="nio-arm-title">五自由度机械臂，<br />从结构到运动闭环。</h2>
            <p>围绕喷涂任务完成机械臂方案设计：从目标负载和工作空间出发，推进关节传动、三维结构、运动学与仿真验证，让设计指标能够被逐层检查。</p>
          </div>

          <div className="nio-arm-stats" aria-label="机械臂关键设计指标">
            <article><strong>5</strong><span>自由度 / DOF</span></article>
            <article><strong>5<small>kg</small></strong><span>目标负载</span></article>
            <article><strong>700 × 700 × 850<small>mm</small></strong><span>目标工作范围</span></article>
            <article><strong>SW + MATLAB</strong><span>结构与运动验证</span></article>
          </div>

          <div className="nio-arm-visuals">
            <figure className="nio-arm-visual-main">
              <img src="/assets/nio-arm-workspace.webp" alt="五自由度机械臂工作空间仿真" />
              <figcaption><span>01 / WORKSPACE</span><strong>工作空间采样与可达性验证</strong></figcaption>
            </figure>
            <figure>
              <img src="/assets/nio-arm-pose.webp" alt="五自由度机械臂运动学模型姿态" />
              <figcaption><span>02 / KINEMATICS</span><strong>关节模型与姿态验证</strong></figcaption>
            </figure>
          </div>

          <div className="nio-arm-workstreams">
            {armWorkstreams.map((item) => (
              <article key={item.index}>
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="nio-arm-validation">
            <figure>
              <img src="/assets/nio-arm-trajectory.webp" alt="机械臂关节轨迹规划曲线" />
              <figcaption>TRAJECTORY / 位移、速度与加速度连续性</figcaption>
            </figure>
            <div>
              <p>VALIDATION LOGIC</p>
              <h3>把机械设计，转化成可验证的产品指标。</h3>
              <ul>
                <li><span>01</span>工作空间是否覆盖目标作业区域</li>
                <li><span>02</span>关节转矩与传动方案是否保留安全裕度</li>
                <li><span>03</span>结构强度、刚度与轻量化是否取得平衡</li>
                <li><span>04</span>正逆解与轨迹曲线是否连续、稳定、可执行</li>
              </ul>
            </div>
          </div>

          <p className="nio-evidence-note">PUBLIC PREVIEW · SOURCE CAD ASSEMBLIES AND DETAILED COMPONENT DATA NOT PUBLISHED</p>
        </div>
      </section>

      <section className="nio-evidence case-section case-shell" aria-labelledby="nio-evidence-title">
        <div className="case-eyebrow">04 / ENGINEERING EVIDENCE</div>
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
          <div className="case-eyebrow">05 / PRODUCT THINKING</div>
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
