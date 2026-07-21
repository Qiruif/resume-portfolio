const projects = [
  {
    index: "01",
    title: "CYPLORE 智能骑行产品体系",
    subtitle: "硬件产品定义 · App 体验 · AI Agent 服务",
    image: "/assets/cyplore-hardware.jpg",
    imageSecondary: "/assets/cyplore-sketch.jpg",
    summary:
      "从电助力套件的结构与参数验证出发，延伸至设备连接、骑行数据、OTA 与故障诊断体验，建立软硬件一体化的产品框架。",
    result: "Kickstarter 60 万美元+ / 800%+ 达成率",
    className: "project-card project-card-featured project-card-cyplore",
    href: "/projects/cyplore",
  },
  {
    index: "02",
    title: "蔚来机器人系统",
    subtitle: "机械臂设计 · 智能检测 · 电气协同",
    image: "/assets/project-nio-inspection.svg",
    summary:
      "从五自由度机械臂的结构与运动验证，延伸至汽车制造质量场景中的智能检测岛，呈现机械、控制、设备与质量流程之间的系统关系。",
    result: "机械臂 / 运动学 / 检测岛 / 系统协同",
    className: "project-card project-card-featured project-card-nio",
    href: "/projects/nio",
  },
  {
    index: "03",
    title: "宇通客车悬架设计",
    subtitle: "机械设计 · CATIA 建模 · 工程验证",
    image: "",
    visualType: "suspension",
    summary:
      "围绕控制臂、转向节与减振器安装支架，参与从接口分析、三维迭代和总成装配，到工程图、样件试装与设计变更的工程闭环。",
    result: "结构设计 / 装配校核 / 样件验证 / 版本闭环",
    className: "project-card project-card-featured project-card-yutong",
    href: "/projects/yutong",
  },
];

const strengths = [
  {
    number: "01",
    title: "产品定义",
    text: "把模糊需求拆成用户场景、系统边界、功能结构与可验证指标，形成团队可以执行的 PRD 与路线图。",
  },
  {
    number: "02",
    title: "机器人系统理解",
    text: "理解机械结构、传感器、控制、数据链路与软件体验之间的依赖关系，能与研发进行同一语境的决策。",
  },
  {
    number: "03",
    title: "数据驱动迭代",
    text: "通过控制图、回归、聚类、可视化与用户反馈定位关键问题，让迭代优先级建立在证据之上。",
  },
  {
    number: "04",
    title: "跨团队推进",
    text: "连接研发、供应链、质量、市场和海外平台，在复杂约束下推动软硬件功能完成评审、验证与上线。",
  },
];

const experiences = [
  {
    date: "2026 — NOW",
    company: "深圳市锥光创新科技有限公司",
    role: "硬件产品经理实习生",
    logo: "/assets/logo-cyplore.png",
    logoAlt: "CYPLORE",
    logoClass: "logo-cyplore",
  },
  {
    date: "2025 — 2026",
    company: "香港城市大学 · 刘成教授课题组",
    role: "兼职技术助理",
    logo: "/assets/logo-cityu.png",
    logoAlt: "香港城市大学",
    logoClass: "logo-cityu",
  },
  {
    date: "2025",
    company: "郑州煤炭工业集团",
    role: "工程技术研究院技术人员",
    logo: "/assets/logo-zmg.png",
    logoAlt: "郑州煤炭工业集团",
    logoClass: "logo-zmg",
  },
  {
    date: "2024",
    company: "蔚来汽车科技（安徽）有限公司",
    role: "质量制造实习生",
    logo: "/assets/logo-nio.png",
    logoAlt: "蔚来",
    logoClass: "logo-nio",
  },
  {
    date: "2023.12 — 2024.02",
    company: "郑州宇通客车股份有限公司",
    role: "悬架研发实习生",
    logo: "/assets/logo-yutong.png",
    logoAlt: "宇通客车",
    logoClass: "logo-yutong",
  },
];

export default function Home() {
  return (
    <main className="portfolio">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source
            src="https://www.pexels.com/download/video/32386532/"
            type="video/mp4"
          />
        </video>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />

        <nav className="top-nav shell" aria-label="主导航">
          <a className="brand" href="#top" aria-label="返回首页">
            FQR<span>®</span>
          </a>
          <div className="nav-links">
            <a href="#profile">关于</a>
            <a href="#projects">项目</a>
            <a href="#strengths">优势</a>
          </div>
          <a className="nav-contact" href="#contact">
            联系我 <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <div className="hero-content shell">
          <div className="hero-copy">
            <p className="kicker">
              <span /> ROBOTICS PRODUCT MANAGER · EMBODIED INTELLIGENCE
            </p>
            <h1 id="hero-title">
              让机器人，
              <br />
              从技术原型
              <br />
              走向<span>真实世界。</span>
            </h1>
            <p className="hero-lead">
              我是范麒瑞，关注具身智能与人形机器人产品，连接机械、电控、感知、数据与真实任务场景，推动复杂机器人系统成为可验证、可交付的产品。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                查看精选项目 <span aria-hidden="true">↘</span>
              </a>
              <a
                className="button button-ghost"
                href="mailto:qiruifan2-c@my.cityu.edu.hk"
              >
                qiruifan2-c@my.cityu.edu.hk
              </a>
            </div>
          </div>

          <figure className="hero-portrait">
            <div className="hero-portrait-frame">
              <img
                src="/assets/fan-qirui-portrait.webp"
                alt="范麒瑞职业形象照"
                width="1000"
                height="1500"
                fetchPriority="high"
              />
            </div>
            <figcaption>
              <span className="status-dot" aria-hidden="true" />
              <div>
                <p>机器人产品经理</p>
                <small>MECHANICAL · ROBOTICS · PRODUCT</small>
              </div>
              <span aria-hidden="true">FQR / 01</span>
            </figcaption>
          </figure>
        </div>

        <div className="hero-footer shell" aria-hidden="true">
          <span>SCROLL TO EXPLORE</span>
          <span className="hero-line" />
          <span>01 / 05</span>
        </div>
      </section>

      <section className="profile section shell" id="profile">
        <div className="section-heading">
          <p>01 / PROFILE</p>
          <h2>在工程与用户之间，<br />做清晰的产品判断。</h2>
        </div>

        <div className="profile-grid">
          <div className="profile-content">
            <p className="profile-intro">
              机械工程与智能制造背景，让我能够从结构、传感器、控制与数据链路理解机器人系统；产品实践则让我持续关注，技术如何被用户真正理解、使用并认可。
            </p>
            <p className="profile-body">
              我参与过电助力硬件与智能骑行 App、机器人检测与质量数据体系、AI Agent 售前售后服务等项目。习惯从真实问题出发，建立需求优先级、验证路径和跨团队协作机制。
            </p>

            <div className="contact-list" aria-label="联系方式">
              <a href="tel:+8618876994627"><span>PHONE</span>188 7699 4627</a>
              <a href="mailto:qiruifan2-c@my.cityu.edu.hk"><span>EMAIL</span>qiruifan2-c@my.cityu.edu.hk</a>
              <p><span>BASE</span>Hong Kong · Shenzhen</p>
            </div>
          </div>

          <aside className="education-panel" aria-labelledby="education-title">
            <div className="education-header">
              <p>EDUCATION</p>
              <h3 id="education-title">教育背景</h3>
            </div>

            <article className="education-item">
              <div className="education-logo education-logo-hku">
                <img src="/assets/logo-hku.svg" alt="香港大学 Logo" />
              </div>
              <div className="education-copy">
                <p>香港大学 · 机械工程学院</p>
                <h4>机械工程硕士（待入学）</h4>
                <span>全日制 · Mechanical Engineering</span>
              </div>
              <time>2026.09 — 2027.09</time>
            </article>

            <article className="education-item">
              <div className="education-logo education-logo-cityu">
                <img src="/assets/logo-cityu.png" alt="香港城市大学 Logo" />
              </div>
              <div className="education-copy">
                <p>香港城市大学 · 系统工程学系</p>
                <h4>智能制造工程本科</h4>
                <span>全日制 · GPA 3.1 / 4.3</span>
              </div>
              <time>2021.09 — 2026.06</time>
            </article>
          </aside>
        </div>

        <div className="experience-list" aria-label="个人经历">
          {experiences.map((experience) => (
            <article className="experience-row" key={experience.company}>
              <div className={`company-logo ${experience.logoClass}`}>
                <img src={experience.logo} alt={`${experience.logoAlt} Logo`} />
              </div>
              <time>{experience.date}</time>
              <h3>{experience.company}</h3>
              <p>{experience.role}</p>
              <span aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="shell">
          <div className="section-heading section-heading-row">
            <div>
              <p>02 / SELECTED WORK</p>
              <h2>精选项目</h2>
            </div>
            <p className="section-note">
              从硬件定义、软件体验到数据与服务系统，展示我如何把复杂技术组织成清晰产品。
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={project.className} key={project.index}>
                {project.href && (
                  <a className="project-case-link" href={project.href} aria-label={`查看${project.title}完整案例`}>
                    <span>查看完整案例 ↗</span>
                  </a>
                )}
                <div className="project-visual">
                  {project.visualType === "suspension" ? (
                    <div className="suspension-cover" aria-label="客车悬架结构抽象视觉">
                      <div className="suspension-cover-wheel suspension-cover-wheel-left" />
                      <div className="suspension-cover-wheel suspension-cover-wheel-right" />
                      <div className="suspension-cover-arm suspension-cover-arm-left" />
                      <div className="suspension-cover-arm suspension-cover-arm-right" />
                      <div className="suspension-cover-damper suspension-cover-damper-left" />
                      <div className="suspension-cover-damper suspension-cover-damper-right" />
                      <div className="suspension-cover-axle" />
                      <div className="suspension-cover-label">
                        <span>BUS SUSPENSION / ENGINEERING LOOP</span>
                        <strong>INTERFACE → MODEL → ASSEMBLY → VALIDATION</strong>
                      </div>
                    </div>
                  ) : project.imageSecondary ? (
                    <div className="project-cover-pair">
                      <img src={project.image} alt="CYPLORE 产品硬件部件" />
                      <img src={project.imageSecondary} alt="CYPLORE 产品设计草图" />
                    </div>
                  ) : (
                    <img src={project.image} alt={`${project.title} 项目视觉`} />
                  )}
                  <span className="project-index">CASE / {project.index}</span>
                </div>
                <div className="project-info">
                  <div>
                    <p>{project.subtitle}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <p className="project-summary">{project.summary}</p>
                  <div className="project-result">
                    <span>RESULT</span>
                    <strong>{project.result}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="strengths section shell" id="strengths">
        <div className="section-heading section-heading-row">
          <div>
            <p>03 / EDGE</p>
            <h2>我的优势</h2>
          </div>
          <p className="section-note">不是单点技能，而是一套从问题到落地的工作方式。</p>
        </div>

        <div className="strength-grid">
          {strengths.map((item) => (
            <article className="strength-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-screen" id="contact" aria-labelledby="contact-title">
        <div className="contact-orbit contact-orbit-one" aria-hidden="true" />
        <div className="contact-orbit contact-orbit-two" aria-hidden="true" />
        <div className="contact-content shell">
          <p>04 / CONTACT</p>
          <h2 id="contact-title">一起把下一台机器人，<br />做成真正好用的产品。</h2>
          <a className="contact-mail" href="mailto:qiruifan2-c@my.cityu.edu.hk">
            qiruifan2-c@my.cityu.edu.hk <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-bottom">
            <span>HONG KONG · SHENZHEN</span>
            <span>AVAILABLE FOR PRODUCT OPPORTUNITIES</span>
            <span>© 2026 FAN QIRUI</span>
          </div>
        </div>
      </section>
    </main>
  );
}
