const components = [
  {
    index: "01",
    label: "CONTROL ARM",
    title: "控制臂",
    text: "围绕安装点、衬套与球铰接口、运动空间和载荷方向，理解导向结构如何约束车轮按既定轨迹运动。",
  },
  {
    index: "02",
    label: "STEERING KNUCKLE",
    title: "转向节",
    text: "梳理轮毂轴承、制动卡钳、控制臂与转向拉杆的接口关系，检查孔系、安装面和转向运动间隙。",
  },
  {
    index: "03",
    label: "DAMPER BRACKET",
    title: "减振器安装支架",
    text: "结合安装角度、工作行程、局部刚度与拆装空间，参与支架结构细节及周边间隙检查。",
  },
];

const workflow = [
  ["01", "接口与边界", "确认安装点、连接形式、空间边界与周边件关系。"],
  ["02", "结构方案", "根据布置空间和载荷方向选择结构形式，处理圆角、孔边与加强细节。"],
  ["03", "CATIA 迭代", "在既有结构基础上完成零件模型修改、定位结构与总成装配。"],
  ["04", "装配与尺寸链", "检查孔位对齐、安装面贴合、累计尺寸、公差叠加与工具空间。"],
  ["05", "工程图输出", "同步二维视图、结构尺寸、公差、材料与焊接等生产要求。"],
  ["06", "样件验证", "跟踪试制试装，记录尺寸、干涉、装配和制造可行性问题。"],
  ["07", "设计变更", "根据现场反馈更新模型、图纸、版本与整改记录，完成再次验证。"],
];

export default function YutongProject() {
  return (
    <main className="yutong-case">
      <header className="yutong-hero">
        <nav className="yutong-nav case-shell" aria-label="项目导航">
          <a href="/">← 返回作品集</a>
          <img src="/assets/logo-yutong.png" alt="宇通客车" />
          <a href="mailto:qiruifan2-c@my.cityu.edu.hk">联系我 ↗</a>
        </nav>

        <div className="yutong-hero-grid case-shell">
          <div className="yutong-hero-copy">
            <p>INTERNSHIP CASE / 03 · MECHANICAL ENGINEERING</p>
            <h1>
              从悬架零件开始，
              <br />
              <span>学习工程设计。</span>
            </h1>
            <div className="yutong-meta">
              <span>宇通客车悬架设计</span>
              <span>结构 · 装配 · 工程图 · 样件</span>
              <span>2023 — 2024</span>
            </div>
          </div>

          <div className="yutong-schematic" aria-label="客车悬架系统抽象结构图">
            <div className="yutong-schematic-grid" />
            <div className="yutong-wheel yutong-wheel-left"><i /></div>
            <div className="yutong-wheel yutong-wheel-right"><i /></div>
            <div className="yutong-axle" />
            <div className="yutong-arm yutong-arm-left" />
            <div className="yutong-arm yutong-arm-right" />
            <div className="yutong-damper yutong-damper-left"><i /></div>
            <div className="yutong-damper yutong-damper-right"><i /></div>
            <div className="yutong-schematic-center">
              <small>SYSTEM</small>
              <strong>SUSPENSION</strong>
            </div>
            <p>PUBLIC SYSTEM VIEW / GEOMETRY ABSTRACTED</p>
          </div>
        </div>
      </header>

      <section className="yutong-overview case-section case-shell" aria-labelledby="yutong-overview-title">
        <div className="case-eyebrow">01 / CONTEXT</div>
        <div>
          <h2 id="yutong-overview-title">悬架设计不是一个零件，<br />而是一组持续收敛的接口。</h2>
          <p>
            在宇通客车悬架研发实习中，我围绕控制臂、转向节和减振器安装支架等零部件，参与结构分析、CATIA 模型迭代、总成装配检查、工程图更新与样件试装跟踪。重点是让运动、强度、制造与装配约束在同一套工程闭环中被验证。
          </p>
        </div>
        <aside>
          <strong>我的身份</strong>
          <p>悬架研发实习生</p>
          <strong>工作方式</strong>
          <p>参与设计 · 协助验证 · 跟踪变更</p>
        </aside>
      </section>

      <section className="yutong-components case-section" aria-labelledby="yutong-components-title">
        <div className="case-shell">
          <div className="case-eyebrow">02 / COMPONENT VIEW</div>
          <div className="yutong-section-heading">
            <h2 id="yutong-components-title">三个关键部件，<br />连接运动与载荷。</h2>
            <p>公开版只呈现部件作用与设计关注点，不展示原始尺寸、图纸、车型参数或内部技术要求。</p>
          </div>
          <div className="yutong-component-grid">
            {components.map((component) => (
              <article key={component.index}>
                <div><span>{component.index}</span><small>{component.label}</small></div>
                <div className={`yutong-part-mark yutong-part-mark-${component.index}`} aria-hidden="true"><i /></div>
                <h3>{component.title}</h3>
                <p>{component.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="yutong-workflow case-section case-shell" aria-labelledby="yutong-workflow-title">
        <div className="case-eyebrow">03 / ENGINEERING LOOP</div>
        <div className="yutong-section-heading">
          <h2 id="yutong-workflow-title">七个步骤，<br />理解设计如何进入生产。</h2>
          <p>从初始接口到样件反馈，模型、图纸与版本信息持续同步，设计在每一次装配和验证中收敛。</p>
        </div>
        <div className="yutong-workflow-list">
          {workflow.map(([index, title, text]) => (
            <article key={index}>
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <i aria-hidden="true">↘</i>
            </article>
          ))}
        </div>
      </section>

      <section className="yutong-validation case-section" aria-labelledby="yutong-validation-title">
        <div className="case-shell yutong-validation-grid">
          <div>
            <div className="case-eyebrow">04 / VALIDATION MINDSET</div>
            <h2 id="yutong-validation-title">每一次判断，<br />都要回到装配现场。</h2>
            <p>运动间隙、孔位对齐、焊接可达性、工具操作空间与累计公差，决定了一套结构能否从三维模型真正走向样件和生产。</p>
          </div>
          <div className="yutong-check-grid" aria-label="悬架设计验证要点">
            <span>MOTION PATH</span>
            <span>INTERFERENCE</span>
            <span>STRENGTH / STIFFNESS</span>
            <span>MANUFACTURABILITY</span>
            <span>ASSEMBLY SPACE</span>
            <span>TOLERANCE STACK</span>
          </div>
        </div>
      </section>

      <div className="yutong-public-note case-shell">
        <span>PUBLIC CASE</span>
        <p>本页面根据个人工作流程整理，仅展示通用工程方法；未使用原始图纸、车型参数、尺寸、公差或内部技术文件。</p>
      </div>

      <footer className="yutong-footer">
        <div className="case-shell">
          <p>NEXT / LET&apos;S BUILD</p>
          <h2>从每个工程细节，<br />积累更扎实的判断。</h2>
          <div>
            <a href="mailto:qiruifan2-c@my.cityu.edu.hk">联系我 ↗</a>
            <a href="/">返回作品集</a>
          </div>
          <small>© 2026 FAN QIRUI · ENGINEERING & PRODUCT DIRECTION</small>
        </div>
      </footer>
    </main>
  );
}
