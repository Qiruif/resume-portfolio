import { LanguageSwitch } from "../i18n";

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
    title: "蔚来质量制造实习",
    subtitle: "制造质量 · 智能化场景 · 跨专业协作",
    image: "/assets/project-nio-inspection.svg",
    summary:
      "在蔚来质量制造实习中接触汽车制造现场，学习从质量、工艺与协作视角理解智能化设备如何服务真实生产，并逐步建立对复杂工程系统的整体认识。",
    result: "制造质量 / 智能化场景 / 跨专业协作 / 工程基础",
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
    title: "需求梳理",
    text: "在项目中练习从用户场景出发，梳理问题、功能边界与验证指标，把模糊需求逐步说清楚。",
  },
  {
    number: "02",
    title: "工程理解",
    text: "机械与智能制造背景帮助我理解结构、传感器、控制和数据链路，也让我更愿意向研发学习。",
  },
  {
    number: "03",
    title: "数据分析",
    text: "尝试通过控制图、回归、聚类和可视化理解问题，让自己的判断尽可能建立在事实与反馈之上。",
  },
  {
    number: "04",
    title: "协作与执行",
    text: "在研发、供应链、质量与市场的协作中认真记录、及时沟通，学习把分配到的工作扎实完成。",
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
            <a href="#strengths">能力</a>
          </div>
          <a className="nav-contact" href="#contact">
            联系我 <span aria-hidden="true">↗</span>
          </a>
          <LanguageSwitch />
        </nav>

        <div className="hero-content shell">
          <div className="hero-copy">
            <p className="kicker">
              <span /> PRODUCT MANAGEMENT INTERN · LEARNING BY BUILDING
            </p>
            <h1 id="hero-title">
              在真实项目中，
              <br />
              学习把
              <br />
              <span>产品做好。</span>
            </h1>
            <p className="hero-lead">
              我是范麒瑞，智能制造工程本科生，也是一名正在学习入行的产品经理实习生。我希望发挥工程背景优势，从用户需求、技术实现和真实场景出发，在智能硬件、制造与 AI 项目中逐步积累产品能力。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                了解我的项目经历 <span aria-hidden="true">↘</span>
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
                <p>产品经理实习生</p>
                <small>LEARNING · ENGINEERING · PRODUCT</small>
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
          <h2>从工程基础出发，<br />持续学习产品思维。</h2>
        </div>

        <div className="profile-grid">
          <div className="profile-content">
            <p className="profile-intro">
              机械工程与智能制造的学习经历，让我能够从结构、传感器、控制和数据链路理解复杂软硬件产品，也让我认识到自己仍需要补充大量真实场景与产品经验。
            </p>
            <p className="profile-body">
              我参与过电助力硬件、智能骑行 App、机器人检测、悬架设计与 AI Agent 服务等项目。希望通过这些实践学习如何理解需求、配合团队、验证方案，并把每一次反馈变成下一次进步。
            </p>

            <div className="contact-list" aria-label="联系方式">
              <a href="tel:+8618876994627"><span>PHONE</span>188 7699 4627</a>
              <a href="mailto:qiruifan2-c@my.cityu.edu.hk"><span>EMAIL</span>qiruifan2-c@my.cityu.edu.hk</a>
              <p><span>BASE</span>Hong Kong · Shenzhen</p>
            </div>
          </div>

          <div className="profile-side">
            <figure className="profile-campus-photo">
              <img
                src="/assets/fan-qirui-cityu-graduation.jpg"
                alt="范麒瑞在香港城市大学学院毕业典礼"
                width="1440"
                height="2160"
                loading="lazy"
              />
              <figcaption>
                <span>CITYU · ACADEMIC EXPLORATION / 2026</span>
                <h3>研究、教学与职业探索</h3>
                <p>
                  本科阶段，我将部分课程安排在第五学年修读，也借此延长探索与实践的时间。我加入刘成教授课题组，参与损伤检测研究项目的协作，并协助制作 SYE3003《Design and Analysis of Manufacturing Processes and Systems》课程教案；在研究、教学与项目实践之间，进一步认识自己的能力方向并规划未来职业道路。
                </p>
              </figcaption>
            </figure>

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
              记录我在实习和学习中参与的工作，也诚实呈现自己对工程、用户与产品的理解过程。
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
                    <span>PROJECT HIGHLIGHT</span>
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
            <p>03 / GROWTH</p>
            <h2>正在积累的能力</h2>
          </div>
          <p className="section-note">这些能力仍在成长，希望在下一段实践中继续接受指导、承担责任。</p>
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
          <h2 id="contact-title">期待在下一段实践中，<br />继续认真学习产品工作。</h2>
          <a className="contact-mail" href="mailto:qiruifan2-c@my.cityu.edu.hk">
            qiruifan2-c@my.cityu.edu.hk <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-bottom">
            <span>HONG KONG · SHENZHEN</span>
            <span>OPEN TO INTERNSHIP &amp; PRODUCT OPPORTUNITIES</span>
            <span>© 2026 FAN QIRUI</span>
          </div>
        </div>
      </section>
    </main>
  );
}
