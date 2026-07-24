const systemLayers = [
  { index: "01", label: "MANUFACTURING", title: "制造现场认知", text: "在实习中观察质量要求如何进入日常制造工作，理解现场节奏、规范与协作的重要性。" },
  { index: "02", label: "ROBOTICS", title: "机器人应用场景", text: "从实际制造环境认识机器人不是孤立设备，而是需要与工艺、人员和质量目标共同工作的系统。" },
  { index: "03", label: "COLLABORATION", title: "跨专业协作", text: "学习机械、电气、质量与现场团队之间如何沟通问题，并尊重不同岗位的专业边界。" },
  { index: "04", label: "QUALITY", title: "质量与责任意识", text: "认识到制造质量依赖严谨记录、问题闭环和合规意识，也包括对企业信息与资料的保护。" },
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
            <p>INTERNSHIP EXPERIENCE / 02 · QUALITY MANUFACTURING</p>
            <h1>在制造现场中，<br /><span>学习理解质量与机器人。</span></h1>
            <div className="nio-meta">
              <span>蔚来质量制造实习</span>
              <span>行业经验 · 场景认知 · 保密合规</span>
              <span>2024</span>
            </div>
          </div>
          <figure className="nio-hero-visual">
            <img src="/assets/project-nio-inspection.svg" alt="机器人制造场景抽象视觉" />
            <figcaption>EXPERIENCE OVERVIEW / NO INTERNAL DETAILS</figcaption>
          </figure>
        </div>
      </header>

      <section className="nio-overview case-section case-shell" aria-labelledby="nio-overview-title">
        <div className="case-eyebrow">01 / CONTEXT</div>
        <div>
          <h2 id="nio-overview-title">这段经历代表我的行业经验，<br />不代表一个可公开的内部项目。</h2>
          <p>我曾在蔚来担任质量制造实习生，这段经历让我接触汽车制造现场，并开始理解质量工作、机器人应用和跨专业协作。由于签署了保密协议，本页面不介绍具体产品、产线、设备方案、参数、图纸或内部流程。</p>
        </div>
        <aside>
          <strong>我的身份</strong>
          <p>质量制造实习生</p>
          <strong>公开范围</strong>
          <p>经历背景 · 学习收获 · 通用认知</p>
        </aside>
      </section>

      <section className="nio-architecture case-section" aria-labelledby="nio-system-title">
        <div className="case-shell">
          <div className="case-eyebrow">02 / SYSTEM VIEW</div>
          <div className="nio-section-heading">
            <h2 id="nio-system-title">实习带给我的，<br />是对制造现场的初步认识。</h2>
            <p>以下内容只总结个人层面的通用学习收获，不对应蔚来的具体产线、设备、产品或内部方案。</p>
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
          <div className="case-eyebrow">03 / INDEPENDENT COURSE PROJECT</div>
          <div className="nio-section-heading nio-arm-heading">
            <h2 id="nio-arm-title">独立课程设计：<br />五自由度机械臂。</h2>
            <p>以下机械臂是我的课程设计项目，并非蔚来内部机器人或实习工作成果。课程题目参考工业机器人的典型形态与作业方式，围绕喷涂任务完成构型、关节传动、三维结构、运动学和仿真验证，用来说明我的机械工程基础。</p>
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
              <h3>用清晰的指标，检查每一步机械设计。</h3>
              <ul>
                <li><span>01</span>工作空间是否覆盖目标作业区域</li>
                <li><span>02</span>关节转矩与传动方案是否保留安全裕度</li>
                <li><span>03</span>结构强度、刚度与轻量化是否取得平衡</li>
                <li><span>04</span>正逆解与轨迹曲线是否连续、稳定、可执行</li>
              </ul>
            </div>
          </div>

          <p className="nio-evidence-note">COURSE PROJECT · INDEPENDENT FROM NIO INTERNSHIP · SOLIDWORKS + MATLAB</p>
        </div>
      </section>

      <section className="nio-diagram case-section case-shell" aria-labelledby="nio-method-title">
        <div className="nio-diagram-copy">
          <div className="case-eyebrow">04 / LEARNING CONNECTION</div>
          <h2 id="nio-method-title">把实习认知与课程实践，<br />清楚地区分，也相互印证。</h2>
          <p>蔚来实习让我认识机器人进入制造现场后需要面对工艺、协作与质量要求；机械臂课程设计则让我练习结构建模和工程验证。二者来源不同，但共同帮助我建立对机器人产品的基础理解。</p>
        </div>
        <div className="nio-system-map" aria-label="机器人产品学习路径">
          <div className="nio-map-center">机器人产品<br /><span>LEARNING</span></div>
          <div className="nio-map-node nio-map-node-a">制造现场认知</div>
          <div className="nio-map-node nio-map-node-b">机械工程基础</div>
          <div className="nio-map-node nio-map-node-c">质量与合规</div>
          <div className="nio-map-node nio-map-node-d">持续学习实践</div>
          <i className="nio-map-line nio-map-line-a" /><i className="nio-map-line nio-map-line-b" />
          <i className="nio-map-line nio-map-line-c" /><i className="nio-map-line nio-map-line-d" />
        </div>
      </section>

      <section className="nio-confidential case-shell" aria-label="保密说明">
        <span>CONFIDENTIALITY</span>
        <p>蔚来相关内容仅用于说明本人实习经历。任何内部图纸、参数、流程、设备照片、产品信息及项目资料均不在本网站或面试材料中展示；页面中的机械臂模型、仿真和参数全部来自独立课程设计。</p>
      </section>

      <footer className="nio-footer">
        <div className="case-shell">
          <p>NEXT / SYSTEMS PRODUCT</p>
          <h2>从工程细节出发，<br />继续学习系统思考。</h2>
          <div><a href="mailto:qiruifan2-c@my.cityu.edu.hk">联系范麒瑞 ↗</a><a href="/">返回作品集 ↑</a></div>
          <small>© 2026 FAN QIRUI · INTERNSHIP EXPERIENCE & INDEPENDENT COURSE PROJECT</small>
        </div>
      </footer>
    </main>
  );
}
