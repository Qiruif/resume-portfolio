import { createContext, useContext, useLayoutEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

type Language = "zh" | "en";

const zhToEn: Record<string, string> = {
  "范麒瑞｜产品经理实习生": "Fan Qirui | Product Management Intern",
  "CYPLORE 智能骑行产品体系｜范麒瑞": "CYPLORE Smart Cycling Product Ecosystem | Fan Qirui",
  "蔚来质量制造实习与机械臂课程设计｜范麒瑞": "NIO Quality Manufacturing Internship & Robotic Arm Course Project | Fan Qirui",
  "宇通客车悬架设计｜范麒瑞": "Yutong Bus Suspension Design | Fan Qirui",
  "范麒瑞的产品经理实习生求职作品集，记录智能硬件、智能制造、AI 与工程实践中的学习和成长。":
    "Fan Qirui's product management portfolio, documenting learning and growth across smart hardware, intelligent manufacturing, AI and engineering practice.",

  "关于": "About",
  "项目": "Projects",
  "能力": "Capabilities",
  "联系我 ↗": "Contact ↗",
  "联系我": "Contact",
  "返回首页": "Back to home",
  "主导航": "Main navigation",
  "在真实项目中，": "Through real projects,",
  "学习把": "learning how to",
  "产品做好。": "build better products.",
  "我是范麒瑞，智能制造工程本科生，也是一名正在学习入行的产品经理实习生。我希望发挥工程背景优势，从用户需求、技术实现和真实场景出发，在智能硬件、制造与 AI 项目中逐步积累产品能力。":
    "I am Fan Qirui, an Intelligent Manufacturing Engineering student and an aspiring product management intern. Drawing on my engineering background, I am building product skills through real user needs, technical implementation and practical projects across smart hardware, manufacturing and AI.",
  "了解我的项目经历 ↘": "Explore my projects ↘",
  "范麒瑞职业形象照": "Professional portrait of Fan Qirui",
  "产品经理实习生": "Product Management Intern",
  "从工程基础出发，": "Building from engineering,",
  "持续学习产品思维。": "growing into product thinking.",
  "机械工程与智能制造的学习经历，让我能够从结构、传感器、控制和数据链路理解复杂软硬件产品，也让我认识到自己仍需要补充大量真实场景与产品经验。":
    "My background in mechanical engineering and intelligent manufacturing helps me understand complex hardware-software products through structures, sensors, controls and data flows. It also reminds me how much I still have to learn from real product contexts.",
  "我参与过电助力硬件、智能骑行 App、机器人检测、悬架设计与 AI Agent 服务等项目。希望通过这些实践学习如何理解需求、配合团队、验证方案，并把每一次反馈变成下一次进步。":
    "I have worked on e-bike hardware, a smart cycling app, robotic inspection, suspension design and AI agent services. Through these experiences, I am learning to understand needs, collaborate with teams, validate solutions and turn feedback into progress.",
  "范麒瑞在香港城市大学学院毕业典礼": "Fan Qirui at the City University of Hong Kong College Commencement",
  "研究、教学与职业探索": "Research, Teaching & Career Exploration",
  "本科阶段，我将部分课程安排在第五学年修读，也借此延长探索与实践的时间。我加入刘成教授课题组，参与损伤检测研究项目的协作，并协助制作 SYE3003《Design and Analysis of Manufacturing Processes and Systems》课程教案；在研究、教学与项目实践之间，进一步认识自己的能力方向并规划未来职业道路。":
    "During my undergraduate studies, I scheduled part of my coursework for a fifth year, creating more time for exploration and practice. I joined Professor Liu Cheng's research group to collaborate on a damage-detection research project and helped develop teaching materials for SYE3003, Design and Analysis of Manufacturing Processes and Systems. Across research, teaching and project work, I gained a clearer view of my strengths and future career direction.",
  "教育背景": "Education",
  "香港大学 · 机械工程学院": "The University of Hong Kong · Department of Mechanical Engineering",
  "机械工程硕士（待入学）": "MSc in Mechanical Engineering · Incoming",
  "全日制 · Mechanical Engineering": "Full-time · Mechanical Engineering",
  "香港城市大学 · 系统工程学系": "City University of Hong Kong · Department of Systems Engineering",
  "智能制造工程本科": "BEng in Intelligent Manufacturing Engineering",
  "全日制 · GPA 3.1 / 4.3": "Full-time · GPA 3.1 / 4.3",
  "深圳市锥光创新科技有限公司": "Shenzhen Cone Light Innovation Technology Co., Ltd.",
  "硬件产品经理实习生": "Hardware Product Management Intern",
  "香港城市大学 · 刘成教授课题组": "City University of Hong Kong · Prof. Liu Cheng's Research Group",
  "兼职技术助理": "Part-time Technical Assistant",
  "郑州煤炭工业集团": "Zhengzhou Coal Industry Group",
  "工程技术研究院技术人员": "Engineering Technology Researcher",
  "蔚来汽车科技（安徽）有限公司": "NIO Automobile Technology (Anhui) Co., Ltd.",
  "质量制造实习生": "Quality Manufacturing Intern",
  "郑州宇通客车股份有限公司": "Zhengzhou Yutong Bus Co., Ltd.",
  "悬架研发实习生": "Suspension R&D Intern",
  "精选项目": "Selected Projects",
  "记录我在实习和学习中参与的工作，也诚实呈现自己对工程、用户与产品的理解过程。":
    "A record of the work I joined during internships and study, and of how my understanding of engineering, users and products continues to develop.",
  "查看完整案例 ↗": "View case study ↗",
  "CYPLORE 智能骑行产品体系": "CYPLORE Smart Cycling Product Ecosystem",
  "硬件产品定义 · App 体验 · AI Agent 服务": "Hardware Definition · App Experience · AI Agent Service",
  "从电助力套件的结构与参数验证出发，延伸至设备连接、骑行数据、OTA 与故障诊断体验，建立软硬件一体化的产品框架。":
    "Starting with structural and parameter validation for an e-bike kit, then extending into connectivity, ride data, OTA and diagnostics to form an integrated hardware-software product framework.",
  "Kickstarter 60 万美元+ / 800%+ 达成率": "US$600K+ on Kickstarter / 800%+ funded",
  "蔚来质量制造实习": "NIO Quality Manufacturing Internship",
  "制造质量 · 智能化场景 · 跨专业协作": "Manufacturing Quality · Intelligent Systems · Cross-functional Collaboration",
  "在蔚来质量制造实习中接触汽车制造现场，学习从质量、工艺与协作视角理解智能化设备如何服务真实生产，并逐步建立对复杂工程系统的整体认识。":
    "Through a quality manufacturing internship at NIO, I learned how intelligent equipment supports real production through the lenses of quality, process and collaboration, while developing a broader view of complex engineering systems.",
  "制造质量 / 智能化场景 / 跨专业协作 / 工程基础": "Manufacturing Quality / Intelligent Systems / Collaboration / Engineering",
  "宇通客车悬架设计": "Yutong Bus Suspension Design",
  "机械设计 · CATIA 建模 · 工程验证": "Mechanical Design · CATIA Modelling · Engineering Validation",
  "围绕控制臂、转向节与减振器安装支架，参与从接口分析、三维迭代和总成装配，到工程图、样件试装与设计变更的工程闭环。":
    "Worked across interface analysis, 3D iteration, assembly checks, engineering drawings, prototype fitting and design changes for control arms, steering knuckles and damper brackets.",
  "结构设计 / 装配校核 / 样件验证 / 版本闭环": "Structural Design / Assembly Checks / Prototype Validation / Revision Loop",
  "正在积累的能力": "Capabilities I Am Building",
  "这些能力仍在成长，希望在下一段实践中继续接受指导、承担责任。":
    "These capabilities are still developing, and I hope to keep learning, taking guidance and accepting responsibility in my next role.",
  "需求梳理": "Requirement Framing",
  "在项目中练习从用户场景出发，梳理问题、功能边界与验证指标，把模糊需求逐步说清楚。":
    "Practising how to clarify problems, functional boundaries and validation metrics from real user scenarios.",
  "工程理解": "Engineering Understanding",
  "机械与智能制造背景帮助我理解结构、传感器、控制和数据链路，也让我更愿意向研发学习。":
    "My mechanical and manufacturing background helps me understand structures, sensors, controls and data flows—and learn effectively from engineering teams.",
  "数据分析": "Data Analysis",
  "尝试通过控制图、回归、聚类和可视化理解问题，让自己的判断尽可能建立在事实与反馈之上。":
    "Using control charts, regression, clustering and visualisation to ground decisions in evidence and feedback.",
  "协作与执行": "Collaboration & Execution",
  "在研发、供应链、质量与市场的协作中认真记录、及时沟通，学习把分配到的工作扎实完成。":
    "Keeping clear records, communicating promptly and delivering assigned work across engineering, supply chain, quality and marketing.",
  "期待在下一段实践中，": "Looking forward to my next opportunity",
  "继续认真学习产品工作。": "to keep learning product work.",

  "← 返回作品集": "← Back to Portfolio",
  "返回作品集 ↑": "Back to Portfolio ↑",
  "返回作品集": "Back to Portfolio",
  "联系范麒瑞 ↗": "Contact Fan Qirui ↗",
  "项目导航": "Project navigation",
  "从电助力硬件，": "From e-bike hardware",
  "到": "to a ",
  "智能骑行体验。": "smart cycling experience.",
  "从一件硬件出发，": "Starting with one piece of hardware,",
  "学习理解完整产品。": "learning to understand the whole product.",
  "CYPLORE 项目从电助力套件的工程验证出发，逐步延伸到设备连接、骑行数据、OTA、故障诊断和 AI Agent 服务。作为硬件产品实习生，我参与其中的需求梳理与验证工作，并学习如何同时理解用户需求、硬件约束和软件体验。":
    "CYPLORE began with engineering validation of an e-bike kit and expanded into device connectivity, ride data, OTA, diagnostics and AI agent services. As a hardware product intern, I supported requirement framing and validation while learning to balance user needs, hardware constraints and software experience.",
  "万美元+": "US$10K+",
  "Kickstarter 众筹金额": "Kickstarter Funding",
  "目标达成率": "Funding Goal Achieved",
  "层": "Layers",
  "硬件 · 软件 · 服务": "Hardware · Software · Service",
  "从部件、草图到可验证产品": "From components and sketches to a verifiable product",
  "从草图与部件，": "From sketches and components",
  "走向真实产品。": "to a real product.",
  "产品研发不是单一界面的设计，而是结构、外观、验证与使用体验持续收敛的过程。":
    "Product development is not the design of a single interface, but a continuous convergence of structure, form, validation and user experience.",
  "尝试从用户路径，": "Learning through the user journey",
  "理解复杂产品能力。": "to understand complex product capabilities.",
  "通过硬件、软件与服务三个层次的工作，我逐步学习如何用真实场景中的可用性检查产品设计。":
    "Across hardware, software and service, I am learning to evaluate product design through usability in real scenarios.",
  "从结构与参数验证开始": "Start with Structure & Parameter Validation",
  "围绕电助力套件的结构、部件与参数开展验证，把工程约束转化为清晰的产品边界与交付标准。":
    "Validate the structure, components and parameters of the e-bike kit, translating engineering constraints into clear product boundaries and delivery criteria.",
  "建立软硬件体验闭环": "Build a Hardware-Software Experience Loop",
  "将设备连接、骑行数据、OTA 与故障诊断组织为连续体验，让硬件能力能够被用户理解和使用。":
    "Connect device pairing, ride data, OTA and diagnostics into a continuous experience that makes hardware capabilities understandable and usable.",
  "延伸至 AI Agent 服务": "Extend into AI Agent Services",
  "把售前咨询与售后支持纳入产品体系，让信息、诊断与服务形成更完整的用户触点。":
    "Bring pre-sales guidance and after-sales support into the product ecosystem to create a more complete set of information, diagnosis and service touchpoints.",
  "我在项目中学习的方式": "How I Learn Through the Project",
  "理解系统": "Understand the System",
  "拆解机械结构、硬件能力与软件依赖。": "Break down mechanical structures, hardware capabilities and software dependencies.",
  "定义产品": "Define the Product",
  "把场景、功能边界和验证标准组织成可执行方案。": "Turn scenarios, functional boundaries and validation criteria into an executable plan.",
  "连接体验": "Connect the Experience",
  "统一设备、App、数据与服务之间的用户路径。": "Unify the user journey across devices, app, data and services.",
  "推进落地": "Drive Delivery",
  "协同研发、供应链、质量与市场完成验证和交付。": "Collaborate with engineering, supply chain, quality and marketing to validate and deliver.",
  "继续学习如何让技术": "Continuing to learn how technology",
  "被用户理解和使用。": "can be understood and used.",

  "在蔚来，走进汽车制造现场，": "At NIO, entering the automotive manufacturing floor",
  "学习理解质量与智能化。": "to learn about quality and intelligent systems.",
  "在蔚来，": "At NIO,",
  "理解质量如何融入制造现场。": "learning how quality is embedded in manufacturing.",
  "作为质量制造实习生，我在汽车制造场景中学习质量工作的基本方法，观察智能化设备、现场工艺与团队协作之间的关系。这段经历让我开始从真实生产约束出发理解问题，也建立了对制造质量、工程沟通和工作责任的初步认识。":
    "As a quality manufacturing intern, I learned foundational quality practices in an automotive production environment and observed how intelligent equipment, shop-floor processes and teamwork connect. The experience taught me to understand problems through real production constraints and strengthened my awareness of quality, engineering communication and professional responsibility.",
  "注：受保密协议约束，具体产品、产线、设备方案、参数、图纸及内部流程不作公开展示。":
    "Note: In accordance with confidentiality obligations, specific products, production lines, equipment solutions, parameters, drawings and internal processes are not disclosed.",
  "我的身份": "My Role",
  "公开范围": "Public Scope",
  "经历背景 · 学习收获 · 通用认知": "Experience · Learning · General Insights",
  "实习带给我的，": "What the internship gave me",
  "是对制造现场的初步认识。": "was an initial understanding of manufacturing.",
  "以下内容只总结个人层面的通用学习收获，不对应蔚来的具体产线、设备、产品或内部方案。":
    "The following points summarise general personal learning and do not refer to any specific NIO production line, equipment, product or internal solution.",
  "制造现场认知": "Manufacturing Context",
  "在实习中观察质量要求如何进入日常制造工作，理解现场节奏、规范与协作的重要性。":
    "Observed how quality requirements enter daily manufacturing work and learned the importance of shop-floor rhythm, standards and collaboration.",
  "机器人应用场景": "Robotics in Practice",
  "从实际制造环境认识机器人不是孤立设备，而是需要与工艺、人员和质量目标共同工作的系统。":
    "Learned that robots in manufacturing are not isolated devices, but systems that work with processes, people and quality goals.",
  "跨专业协作": "Cross-functional Collaboration",
  "学习机械、电气、质量与现场团队之间如何沟通问题，并尊重不同岗位的专业边界。":
    "Learned how mechanical, electrical, quality and shop-floor teams communicate problems while respecting professional boundaries.",
  "质量与责任意识": "Quality & Responsibility",
  "认识到制造质量依赖严谨记录、问题闭环和合规意识，也包括对企业信息与资料的保护。":
    "Recognised that manufacturing quality depends on rigorous records, closed-loop problem solving, compliance and protection of company information.",
  "独立课程设计：": "Independent Course Project:",
  "五自由度机械臂。": "Five-axis Robotic Arm.",
  "以下机械臂是我的课程设计项目，并非蔚来内部机器人或实习工作成果。课程题目参考工业机器人的典型形态与作业方式，围绕喷涂任务完成构型、关节传动、三维结构、运动学和仿真验证，用来说明我的机械工程基础。":
    "This robotic arm is an independent course project, not a NIO internal robot or internship deliverable. Inspired by typical industrial robot forms and tasks, it covers configuration, joint transmission, 3D structure, kinematics and simulation for a spraying scenario, demonstrating my mechanical engineering foundation.",
  "自由度 / DOF": "Degrees of Freedom / DOF",
  "目标负载": "Target Payload",
  "目标工作范围": "Target Workspace",
  "结构与运动验证": "Structural & Motion Validation",
  "工作空间采样与可达性验证": "Workspace Sampling & Reachability",
  "关节模型与姿态验证": "Joint Model & Pose Validation",
  "位移、速度与加速度连续性": "Position, Velocity & Acceleration Continuity",
  "需求与构型定义": "Requirements & Configuration",
  "以 5 自由度、5 kg 负载和目标工作空间为边界，确定关节型机械臂构型、连杆尺度与运动约束。":
    "Define the articulated arm configuration, link dimensions and motion constraints around five axes, a 5 kg payload and the target workspace.",
  "关节传动选型": "Joint Transmission Selection",
  "比较驱动与减速方案，结合静载荷转矩、安全系数和运动精度完成伺服电机及减速机构匹配。":
    "Compare drive and reduction options, matching servo motors and reducers through static torque, safety factor and motion accuracy.",
  "三维结构设计": "3D Structural Design",
  "使用 SolidWorks 完成整机与关节结构建模，在轻量化、刚度、装配空间和传动路径之间迭代。":
    "Model the full arm and joints in SolidWorks, iterating across weight, stiffness, assembly space and transmission paths.",
  "运动与结构验证": "Motion & Structural Validation",
  "通过 D-H 建模、正逆运动学、工作空间采样、轨迹规划及静力学分析验证方案可行性。":
    "Validate feasibility through D-H modelling, forward and inverse kinematics, workspace sampling, trajectory planning and static analysis.",
  "用清晰的指标，检查每一步机械设计。": "Check every design step against clear engineering criteria.",
  "工作空间是否覆盖目标作业区域": "Does the workspace cover the target operation area?",
  "关节转矩与传动方案是否保留安全裕度": "Do joint torque and transmission choices retain a safety margin?",
  "结构强度、刚度与轻量化是否取得平衡": "Are strength, stiffness and weight appropriately balanced?",
  "正逆解与轨迹曲线是否连续、稳定、可执行": "Are kinematic solutions and trajectories continuous, stable and executable?",
  "把实习认知与课程实践，": "Connecting internship insight and course practice",
  "清楚地区分，也相互印证。": "while keeping their sources clear.",
  "蔚来实习让我认识智能化设备进入制造现场后需要面对工艺、协作与质量要求；机械臂课程设计则让我练习结构建模和工程验证。二者来源不同，但共同帮助我建立对复杂产品与工程场景的基础理解。":
    "The NIO internship showed me how intelligent equipment must meet process, collaboration and quality requirements on the manufacturing floor. The robotic arm course project let me practise structural modelling and engineering validation. They are separate experiences that together build my understanding of complex products and engineering contexts.",
  "产品理解": "Product Understanding",
  "机械工程基础": "Mechanical Engineering",
  "质量与合规": "Quality & Compliance",
  "持续学习实践": "Continuous Learning",
  "从工程细节出发，": "Starting from engineering detail,",
  "继续学习系统思考。": "continuing to develop systems thinking.",

  "从悬架零件开始，": "Starting with suspension components,",
  "学习工程设计。": "learning engineering design.",
  "结构 · 装配 · 工程图 · 样件": "Structure · Assembly · Drawings · Prototypes",
  "悬架设计不是一个零件，": "Suspension design is not one component,",
  "而是一组持续收敛的接口。": "but a set of interfaces that must converge.",
  "在宇通客车悬架研发实习中，我围绕控制臂、转向节和减振器安装支架等零部件，参与结构分析、CATIA 模型迭代、总成装配检查、工程图更新与样件试装跟踪。重点是让运动、强度、制造与装配约束在同一套工程闭环中被验证。":
    "During my suspension R&D internship at Yutong Bus, I supported structural analysis, CATIA model iteration, assembly checks, drawing updates and prototype fitting for control arms, steering knuckles and damper brackets. The focus was validating motion, strength, manufacturing and assembly constraints in one engineering loop.",
  "工作方式": "How I Worked",
  "参与设计 · 协助验证 · 跟踪变更": "Design Support · Validation · Change Tracking",
  "三个关键部件，": "Three key components",
  "连接运动与载荷。": "connecting motion and load.",
  "公开版只呈现部件作用与设计关注点，不展示原始尺寸、图纸、车型参数或内部技术要求。":
    "This public version presents component functions and design considerations only, without original dimensions, drawings, vehicle parameters or internal technical requirements.",
  "控制臂": "Control Arm",
  "围绕安装点、衬套与球铰接口、运动空间和载荷方向，理解导向结构如何约束车轮按既定轨迹运动。":
    "Study mounting points, bush and ball-joint interfaces, motion space and load directions to understand how guide structures constrain wheel motion.",
  "转向节": "Steering Knuckle",
  "梳理轮毂轴承、制动卡钳、控制臂与转向拉杆的接口关系，检查孔系、安装面和转向运动间隙。":
    "Map interfaces among hub bearings, brake calipers, control arms and steering links, checking hole patterns, mounting faces and steering clearance.",
  "减振器安装支架": "Damper Mounting Bracket",
  "结合安装角度、工作行程、局部刚度与拆装空间，参与支架结构细节及周边间隙检查。":
    "Review bracket details and surrounding clearances through mounting angle, operating travel, local stiffness and service space.",
  "七个步骤，": "Seven steps",
  "理解设计如何进入生产。": "to understand how design reaches production.",
  "从初始接口到样件反馈，模型、图纸与版本信息持续同步，设计在每一次装配和验证中收敛。":
    "From initial interfaces to prototype feedback, models, drawings and revisions stay synchronised as the design converges through assembly and validation.",
  "接口与边界": "Interfaces & Boundaries",
  "确认安装点、连接形式、空间边界与周边件关系。": "Confirm mounting points, connection types, spatial boundaries and surrounding components.",
  "结构方案": "Structural Concept",
  "根据布置空间和载荷方向选择结构形式，处理圆角、孔边与加强细节。": "Select structural form around package space and load direction, refining fillets, hole edges and reinforcement.",
  "CATIA 迭代": "CATIA Iteration",
  "在既有结构基础上完成零件模型修改、定位结构与总成装配。": "Modify part models, locating features and assemblies within the existing architecture.",
  "装配与尺寸链": "Assembly & Tolerance Stack",
  "检查孔位对齐、安装面贴合、累计尺寸、公差叠加与工具空间。": "Check hole alignment, mounting-face contact, accumulated dimensions, tolerance stacks and tool access.",
  "工程图输出": "Engineering Drawings",
  "同步二维视图、结构尺寸、公差、材料与焊接等生产要求。": "Synchronise 2D views, dimensions, tolerances, materials, welding and production requirements.",
  "样件验证": "Prototype Validation",
  "跟踪试制试装，记录尺寸、干涉、装配和制造可行性问题。": "Follow prototype builds and fitting, recording dimensional, interference, assembly and manufacturability issues.",
  "设计变更": "Design Changes",
  "根据现场反馈更新模型、图纸、版本与整改记录，完成再次验证。": "Update models, drawings, revisions and corrective records from shop-floor feedback, then validate again.",
  "每一次判断，": "Every decision",
  "都要回到装配现场。": "must return to the assembly floor.",
  "运动间隙、孔位对齐、焊接可达性、工具操作空间与累计公差，决定了一套结构能否从三维模型真正走向样件和生产。":
    "Motion clearance, hole alignment, welding access, tool space and accumulated tolerances determine whether a structure can move from a 3D model into prototypes and production.",
  "本页面根据个人工作流程整理，仅展示通用工程方法；未使用原始图纸、车型参数、尺寸、公差或内部技术文件。":
    "This page is based on my personal workflow and presents only general engineering methods; no original drawings, vehicle parameters, dimensions, tolerances or internal technical documents are used.",
  "从每个工程细节，": "From every engineering detail,",
  "积累更扎实的判断。": "building more grounded judgement.",
};

const enToZh = Object.fromEntries(
  Object.entries(zhToEn).map(([zh, en]) => [en, zh]),
) as Record<string, string>;

const I18nContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
} | null>(null);

function translateValue(value: string, language: Language) {
  const key = value.trim();
  if (!key) return value;
  const dictionary = language === "en" ? zhToEn : enToZh;
  const translated = dictionary[key];
  return translated ? value.replace(key, translated) : value;
}

function translateDocument(language: Language) {
  const root = document.body;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];

  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    const parent = node.parentElement;
    if (!parent || parent.closest("[data-no-i18n]") || ["SCRIPT", "STYLE"].includes(parent.tagName)) continue;
    nodes.push(node);
  }

  nodes.forEach((node) => {
    node.nodeValue = translateValue(node.nodeValue ?? "", language);
  });

  root.querySelectorAll<HTMLElement>("*").forEach((element) => {
    if (element.closest("[data-no-i18n]")) return;
    ["aria-label", "alt", "title"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value) element.setAttribute(attribute, translateValue(value, language));
    });
  });

  document.title = translateValue(document.title, language);
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (description) description.content = translateValue(description.content, language);
  document.documentElement.lang = language === "en" ? "en" : "zh-CN";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = window.localStorage.getItem("fqr-language");
    return saved === "en" ? "en" : "zh";
  });

  useLayoutEffect(() => {
    translateDocument(language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (nextLanguage: Language) => {
        window.localStorage.setItem("fqr-language", nextLanguage);
        setLanguageState(nextLanguage);
      },
    }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function LanguageSwitch() {
  const context = useContext(I18nContext);
  if (!context) return null;

  return (
    <div
      className="language-switch"
      data-no-i18n
      role="group"
      aria-label={context.language === "zh" ? "切换语言" : "Switch language"}
    >
      <button
        type="button"
        className={context.language === "zh" ? "is-active" : ""}
        aria-pressed={context.language === "zh"}
        onClick={() => context.setLanguage("zh")}
      >
        中文
      </button>
      <span aria-hidden="true" />
      <button
        type="button"
        className={context.language === "en" ? "is-active" : ""}
        aria-pressed={context.language === "en"}
        onClick={() => context.setLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}
