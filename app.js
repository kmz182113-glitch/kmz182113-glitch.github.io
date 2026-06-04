/*
  app.js 放少量网页交互。
  现在只做两件事：
  1. 点击导航后自动收起焦点，让页面感觉更干净。
  2. 滚动时给顶部导航加一点阴影，提示用户页面已经往下移动。
*/

const header = document.querySelector(".site-header");
const brandLink = document.querySelector(".brand");
const navLinks = document.querySelectorAll(".main-nav a, .site-footer a");
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileLanguageButton = document.querySelector(".mobile-language-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");
const languageButtons = document.querySelectorAll("[data-lang]");

const translations = {
  ko: {
    metaTitle: "KJ Archive | 제조업 엔지니어링 통합형 인재",
    metaDescription: "제조업 엔지니어링 통합형 개인 웹사이트: 기계설계, CAE 해석, 산업장비 시각화, AI 프로세스 탐색.",
    "nav.about": "소개",
    "nav.projects": "주요 역량",
    "nav.workflow": "접근 방식",
    "nav.research": "탐색 방향",
    "nav.contact": "연락처",
    "action.contact": "연락하기",
    "hero.eyebrow": "제조업 엔지니어링 통합형 인재",
    "hero.title": "기계설계 <span>|</span> CAE 해석<br />산업장비 시각화 <span>|</span><br />AI 프로세스 탐색",
    "hero.description": "제조업 현장의 문제를 설계, 해석, 시각화, 구매, 협업의 흐름 속에서 바라봅니다. 기계설계와 CAE 해석을 기반으로 구조와 성능, 제작 가능성을 검토하고, 산업장비 3D 시각화를 통해 복잡한 기술 내용을 명확하게 전달합니다. 중국 공급업체 커뮤니케이션과 구매, 프로젝트 조율 경험을 바탕으로 엔지니어링 결과가 실제 실행으로 이어지는 과정을 이해하며, 현재는 AI 프로세스를 기계 엔지니어링 영역에 접목하는 방향을 꾸준히 탐구하고 있습니다.",
    "hero.primary": "주요역량 보기",
    "profile.name": "김민준",
    "profile.role": "기계설계 · CAE · 시각화 · 중국 소싱 · 프로젝트 조율 · AI 워크플로우",
    "profile.education": "한양대학교 ERICA · 기계공학 학사",
    "profile.location": "경기 / 서울권",
    "about.eyebrow": "About Me",
    "about.title": "설계부터 검증, 표현, 관리까지 전체 흐름을 연결하는 엔지니어입니다.",
    "about.description": "저는 단일 기술을 보여주는 것보다 제품과 장비의 아이디어, 구조 설계, CAE 검증, 3D 시각화, 자료 정리, 공급업체 커뮤니케이션, AI 도구를 어떻게 연결해 복잡한 프로젝트를 더 명확하고 추진 가능하며 재사용 가능한 형태로 만드는지에 관심이 있습니다.",
    "about.value1.title": "문제 정의",
    "about.value1.text": "핵심을 먼저 파악",
    "about.value2.title": "구조적 사고",
    "about.value2.text": "복잡한 정보를 시스템으로 정리",
    "about.value3.title": "검증 중심",
    "about.value3.text": "데이터와 해석으로 리스크 축소",
    "about.value4.title": "지식 축적",
    "about.value4.text": "경험을 재사용 가능한 자산으로 전환",
    "projects.eyebrow": "Selected Skill",
    "projects.title": "주요 역량",
    "project1.tag": "기계설계",
    "project1.title": "구조 설계와 장비 설계 역량",
    "project1.text": "제품과 산업장비의 구조를 이해하고, 기능 요구사항을 바탕으로 3D 모델링, 조립 관계, 도면화, 제작 가능성을 고려한 설계 방향을 정리합니다.",
    "project1.hash1": "#3D설계",
    "project1.hash2": "#장비구조",
    "project1.hash3": "#도면화",
    "project2.tag": "CAE 해석",
    "project2.title": "정적·과도·피로·모달 중심 CAE 역량",
    "project2.text": "정적 해석, 과도 해석, 피로 해석, 모달 해석을 중심으로 구조적 리스크를 검토하며, 일부 CFD와 열해석 경험을 바탕으로 설계 검증 관점을 확장하고 있습니다.",
    "project2.hash1": "#정적해석",
    "project2.hash2": "#피로해석",
    "project2.hash3": "#모달해석",
    "project3.tag": "장비 시각화",
    "project3.title": "산업장비 구조와 프로세스 시각화",
    "project3.text": "복잡한 장비 구조와 작동 흐름을 3D 이미지, 설명 자료, 영상 기반 콘텐츠로 정리해 기술 내용을 더 직관적으로 전달합니다.",
    "project3.hash1": "#3D시각화",
    "project3.hash2": "#설명자료",
    "project3.hash3": "#영상콘텐츠",
    "project4.tag": "중국 구매",
    "project4.title": "중국 공급업체 소싱과 구매 커뮤니케이션",
    "project4.text": "중국 공급업체 조사, 견적 비교, 사양 확인, 일정 조율을 통해 설계 아이디어가 실제 제작과 구매 단계로 이어질 수 있도록 지원합니다.",
    "project4.hash1": "#중국 소싱",
    "project4.hash2": "#견적비교",
    "project4.hash3": "#커뮤니케이션",
    "project5.tag": "AI 탐색",
    "project5.title": "제조업 업무 흐름에 AI 적용",
    "project5.text": "현재 가장 집중해서 탐구하는 방향은 AI를 기계공학 업무 프로세스에 적용하는 것입니다. 설계 자료 정리, 해석 결과 설명, 문서화, 지식 축적, 반복 업무 자동화 가능성을 실험하고 있습니다.",
    "project5.hash1": "#AI워크플로우",
    "project5.hash2": "#엔지니어링문서",
    "project5.hash3": "#탐색방향",
    "project6.tag": "외부 실행 리소스",
    "project6.title": "용접 구조물 제작 협력 자원",
    "project6.text": "개인 역량과 별도로, 용접 구조물 제작 경험을 가진 외부 협력 자원을 바탕으로 간단한 제작 의뢰와 소규모 실행 가능성을 검토하고 있습니다.",
    "project6.hash1": "#용접구조물",
    "project6.hash2": "#제작협력",
    "project6.hash3": "#소규모실행",
    "workflow.eyebrow": "Engineering Toolbox",
    "workflow.title": "문제를 이해하고, 필요한 도구를 조합해 프로젝트를 추진합니다",
    "workflow.intro": "모든 프로젝트가 같은 순서로 진행되지는 않습니다. 먼저 문제와 제약을 이해하고, 상황에 맞는 엔지니어링 도구를 선택해 조합하면서 프로젝트를 앞으로 밀어냅니다.",
    "workflow.problem.title": "문제 이해와 방향 설정",
    "workflow.problem.text": "바로 설계나 해석으로 들어가기보다, 먼저 무엇을 해결해야 하는지 확인합니다. 목표, 제약조건, 요구사항, 제작 가능성, 협업 조건을 정리해 어떤 도구를 조합할지 판단합니다.",
    "workflow.toolbox.title": "상황에 따라 조합되는 엔지니어링 도구함",
    "workflow.tool1.title": "기계 설계",
    "workflow.tool1.text": "구조 구상 · 3D 모델링 · 도면화",
    "workflow.tool2.title": "CAE 검증",
    "workflow.tool2.text": "구조 해석 · 리스크 검토 · 설계 판단 보강",
    "workflow.tool3.title": "산업 시각화",
    "workflow.tool3.text": "구조와 작동 방식을 이미지 · 영상으로 전달",
    "workflow.tool4.title": "문서화·정리",
    "workflow.tool4.text": "도면 · BOM · 보고서 · 자료 구조화",
    "workflow.tool5.title": "외부 협업",
    "workflow.tool5.text": "구매 · 제작 · 공급업체 커뮤니케이션 연결",
    "workflow.tool6.title": "AI 활용",
    "workflow.tool6.text": "정보 및 파일 흐름 정리 · 반복 업무 AI워크플로우 제작",
    "workflow.outcome1.title": "프로젝트를 실제로 추진합니다",
    "workflow.outcome1.text": "필요한 도구의 조합이 설계 판단, 검증 근거, 소통 효율, 실행 가능성을 높입니다.",
    "workflow.outcome2.title": "결과는 다시 자산으로 축적됩니다",
    "workflow.outcome2.text": "도면, 해석 결과, 시각 자료, 협업 기록을 다음 프로젝트에서 재사용 가능한 형태로 남깁니다.",
    "workflow.note": "고정된 순서보다 중요한 것은 문제에 맞는 도구 선택과, 결과가 다음 실행으로 이어지게 만드는 연결입니다.",
    "research.eyebrow": "Research Direction",
    "research.title": "현재 탐색 중인 방향",
    "research.description": "AI는 기계공학 업무에서 먼저 정보 정리 단계에 가장 현실적으로 들어온다고 생각합니다. 사람이 자연어로 요청하고, AI가 정보를 이해하고 구조화하며, 필요한 파일과 문서로 출력하는 흐름을 탐색하고 있습니다.",
    "research.flow1.title": "자연어 요청",
    "research.flow1.text": "사람이 말로 지시",
    "research.flow2.title": "AI 정리",
    "research.flow2.text": "정보 이해·구조화",
    "research.flow3.title": "파일 출력",
    "research.flow3.text": "문서 생성·저장",
    "research.llm.title": "LLM의 강점",
    "research.llm.strong1": "자연어 이해",
    "research.llm.strong2": "정보 구조화",
    "research.llm.strong3": "형식 변환",
    "research.apps.title": "적용 예시",
    "research.app1.title": "주간보고서",
    "research.app1.text": "자연어 입력으로 보고서 정리",
    "research.app2.title": "구매요청서",
    "research.app2.text": "필요 정보 정리 후 문서 생성",
    "research.app3.title": "BOM 정리",
    "research.app3.text": "부품 정보를 목적에 맞게 정리",
    "research.app4.title": "회의록·이슈 정리",
    "research.app4.text": "회의 내용과 작업 이슈를 구조화",
    "research.note": "사람의 자연어 요청이 파일과 정보 작업의 시작점이 될 수 있습니다.",
    "contact.eyebrow": "Let's Connect",
    "contact.title": "협업과 논의를 환영합니다.",
    "contact.description": "기계설계, CAE 해석, 산업장비 시각화, AI 워크플로우에 관심이 있다면 편하게 연락해 주세요. 같은 방향을 고민하는 사람들과 아이디어를 나누고 함께 성장하고 싶습니다.",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Phone / KakaoTalk",
    "contact.wechatLabel": "WeChat",
    "footer.copy": "© 2026 KJ Archive. Personal portfolio by Kim Minjun.",
    "footer.top": "상단으로",
  },
  zh: {
    metaTitle: "KJ Archive | 制造业工程整合型个人网站",
    metaDescription: "金旼俊的个人网站：机械设计、CAE分析、工业设备可视化、中国采购沟通与AI流程探索。",
    "nav.about": "介绍",
    "nav.projects": "主要能力",
    "nav.workflow": "推进方式",
    "nav.research": "探索方向",
    "nav.contact": "联系",
    "action.contact": "联系我",
    "hero.eyebrow": "制造业工程整合型人才",
    "hero.title": "机械设计 <span>|</span> <em>CAE分析</em><br />工业设备可视化 <span>|</span><br /><em>AI流程探索</em>",
    "hero.description": "我从设计、分析、可视化、采购与协作的整体流程中理解制造业现场的问题。以机械设计和CAE分析为基础，判断结构、性能与制造可行性；通过工业设备3D可视化，把复杂技术内容表达得更清楚。结合中国供应商沟通、采购和项目协调经验，我关注工程结果如何真正进入执行阶段，并持续探索AI流程在机械工程工作中的应用。",
    "hero.primary": "查看主要能力",
    "profile.name": "金旼俊",
    "profile.role": "机械设计 · CAE · 可视化 · 中国采购 · 项目协调 · AI工作流",
    "profile.education": "汉阳大学 ERICA · 机械工程 学士",
    "profile.location": "韩国京畿 / 首尔圈",
    "about.eyebrow": "About Me",
    "about.title": "我是连接设计、验证、表达与管理全流程的工程型人才。",
    "about.description": "相比单独展示某一项技术，我更关注如何把产品和设备想法、结构设计、CAE验证、3D可视化、资料整理、供应商沟通和AI工具连接起来，让复杂项目更清晰、更容易推进，并沉淀成可以复用的资产。",
    "about.value1.title": "问题定义",
    "about.value1.text": "先抓住核心",
    "about.value2.title": "结构化思考",
    "about.value2.text": "把复杂信息整理成系统",
    "about.value3.title": "验证导向",
    "about.value3.text": "用数据和分析降低风险",
    "about.value4.title": "知识沉淀",
    "about.value4.text": "把经验转化为可复用资产",
    "projects.eyebrow": "Selected Skill",
    "projects.title": "主要能力",
    "project1.tag": "机械设计",
    "project1.title": "结构设计与设备设计能力",
    "project1.text": "理解产品与工业设备结构，根据功能需求整理3D建模、装配关系、图纸化和制造可行性相关的设计方向。",
    "project1.hash1": "#3D设计",
    "project1.hash2": "#设备结构",
    "project1.hash3": "#图纸化",
    "project2.tag": "CAE分析",
    "project2.title": "以静态、瞬态、疲劳、模态为中心的CAE能力",
    "project2.text": "以静态分析、瞬态分析、疲劳分析和模态分析为核心检查结构风险，并结合少量CFD和热分析经验扩展设计验证视角。",
    "project2.hash1": "#静态分析",
    "project2.hash2": "#疲劳分析",
    "project2.hash3": "#模态分析",
    "project3.tag": "设备可视化",
    "project3.title": "工业设备结构与流程可视化",
    "project3.text": "将复杂设备结构和运作流程整理为3D图片、说明资料和视频内容，让技术内容更直观、更容易沟通。",
    "project3.hash1": "#3D可视化",
    "project3.hash2": "#说明资料",
    "project3.hash3": "#视频内容",
    "project4.tag": "中国采购",
    "project4.title": "中国供应商寻找与采购沟通",
    "project4.text": "通过中国供应商调查、报价比较、规格确认和日程协调，帮助设计想法进入实际制作和采购阶段。",
    "project4.hash1": "#中国采购",
    "project4.hash2": "#报价比较",
    "project4.hash3": "#沟通协调",
    "project5.tag": "AI探索",
    "project5.title": "将AI应用到制造业工作流程",
    "project5.text": "目前重点探索如何把AI应用到机械工程工作流程中，包括设计资料整理、分析结果说明、文档化、知识沉淀和重复工作的自动化可能性。",
    "project5.hash1": "#AI工作流",
    "project5.hash2": "#工程文档",
    "project5.hash3": "#探索方向",
    "project6.tag": "外部执行资源",
    "project6.title": "焊接结构件制作协作资源",
    "project6.text": "除个人能力外，也基于具备焊接结构件制作经验的外部协作资源，探索简单制造委托和小规模闭环执行的可能性。",
    "project6.hash1": "#焊接结构件",
    "project6.hash2": "#制作协作",
    "project6.hash3": "#小规模执行",
    "workflow.eyebrow": "Engineering Toolbox",
    "workflow.title": "先理解问题，再组合合适工具推进项目",
    "workflow.intro": "所有项目并不都会按照同一个顺序进行。我的方式是先理解问题和限制条件，再根据实际情况选择并组合工程工具，把项目向前推进。",
    "workflow.problem.title": "问题理解与方向设定",
    "workflow.problem.text": "我不会一开始就直接进入设计或分析，而是先确认到底要解决什么问题。目标、限制条件、需求、制造可行性和协作条件都会影响后续工具选择。",
    "workflow.toolbox.title": "根据情况组合的工程工具箱",
    "workflow.tool1.title": "机械设计",
    "workflow.tool1.text": "结构构想 · 3D建模 · 图纸化",
    "workflow.tool2.title": "CAE验证",
    "workflow.tool2.text": "结构分析 · 风险检查 · 设计判断补强",
    "workflow.tool3.title": "工业可视化",
    "workflow.tool3.text": "用图片和视频说明结构与动作方式",
    "workflow.tool4.title": "文档化整理",
    "workflow.tool4.text": "图纸 · BOM · 报告 · 资料结构化",
    "workflow.tool5.title": "外部协作",
    "workflow.tool5.text": "采购 · 制作 · 供应商沟通连接",
    "workflow.tool6.title": "AI应用",
    "workflow.tool6.text": "信息和文件流程整理 · 重复业务AI工作流制作",
    "workflow.outcome1.title": "推进项目实际执行",
    "workflow.outcome1.text": "合适的工具组合可以提升设计判断、验证依据、沟通效率和执行可行性。",
    "workflow.outcome2.title": "结果再次沉淀为资产",
    "workflow.outcome2.text": "图纸、分析结果、可视化资料和协作记录，会以可在下一项目复用的形式留下。",
    "workflow.note": "比固定顺序更重要的是根据问题选择工具，并让结果能够连接到下一步执行。",
    "research.eyebrow": "Research Direction",
    "research.title": "当前探索方向",
    "research.description": "我认为AI在机械工程工作中，最现实的切入点首先是信息整理。人用自然语言提出需求，AI理解并结构化信息，再输出为需要的文件和文档，这是我正在探索的流程。",
    "research.flow1.title": "自然语言请求",
    "research.flow1.text": "人用语言下达指令",
    "research.flow2.title": "AI整理",
    "research.flow2.text": "理解信息并结构化",
    "research.flow3.title": "文件输出",
    "research.flow3.text": "生成并保存文档",
    "research.llm.title": "LLM的优势",
    "research.llm.strong1": "自然语言理解",
    "research.llm.strong2": "信息结构化",
    "research.llm.strong3": "格式转换",
    "research.apps.title": "应用例子",
    "research.app1.title": "周报整理",
    "research.app1.text": "通过自然语言输入整理报告",
    "research.app2.title": "采购请求书",
    "research.app2.text": "整理必要信息后生成文档",
    "research.app3.title": "BOM整理",
    "research.app3.text": "按目的整理零部件信息",
    "research.app4.title": "会议记录与问题整理",
    "research.app4.text": "结构化会议内容和工作问题",
    "research.note": "人的自然语言请求，可以成为文件和信息处理工作的起点。",
    "contact.eyebrow": "Let's Connect",
    "contact.title": "欢迎合作与交流。",
    "contact.description": "如果你对机械设计、CAE分析、工业设备可视化或AI工作流感兴趣，欢迎通过邮件联系我。我希望和思考同一方向的人交流想法，一起成长。",
    "contact.emailLabel": "邮箱",
    "contact.phoneLabel": "手机号 / KakaoTalk",
    "contact.wechatLabel": "微信",
    "footer.copy": "© 2026 KJ Archive. Personal portfolio by Kim Minjun.",
    "footer.top": "回到顶部",
  },
};

function updateHeaderShadow() {
  // window.scrollY 是页面已经向下滚动的距离。
  const scrolled = window.scrollY > 12;
  header.classList.toggle("is-scrolled", scrolled);
}

for (const link of navLinks) {
  link.addEventListener("click", () => {
    // blur 会取消链接的选中状态，避免点击后出现不必要的焦点框。
    link.blur();
  });
}

function closeMobileMenu() {
  header.classList.remove("menu-open");
  mobileMenuButton.setAttribute("aria-expanded", "false");
  mobileMenuButton.setAttribute("aria-label", "메뉴 열기");
}

function toggleMobileMenu() {
  // menu-open 类负责控制手机下拉菜单是否显示。
  const willOpen = !header.classList.contains("menu-open");
  header.classList.toggle("menu-open", willOpen);
  mobileMenuButton.setAttribute("aria-expanded", String(willOpen));
  mobileMenuButton.setAttribute("aria-label", willOpen ? "메뉴 닫기" : "메뉴 열기");
}

function applyLanguage(language) {
  const dictionary = translations[language] || translations.ko;
  const descriptionMeta = document.querySelector('meta[name="description"]');

  document.documentElement.lang = language === "zh" ? "zh-CN" : "ko";
  document.title = dictionary.metaTitle;

  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", dictionary.metaDescription);
  }

  for (const element of document.querySelectorAll("[data-i18n]")) {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.innerHTML = dictionary[key];
    }
  }

  for (const button of languageButtons) {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }

  if (mobileLanguageButton) {
    const nextLabel = language === "zh" ? "한국어로 전환" : "切换到中文";
    mobileLanguageButton.setAttribute("aria-label", nextLabel);
    mobileLanguageButton.setAttribute("title", nextLabel);
  }

  localStorage.setItem("kjArchiveLanguage", language);
}

function scrollToTop(event, trigger) {
  // 顶部 logo 使用这个逻辑回到页面最上方。
  event.preventDefault();
  trigger.blur();
  closeMobileMenu();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", toggleMobileMenu);

  document.addEventListener("click", (event) => {
    // 手机菜单打开时，如果点击的是 header 外面的页面区域，就自动关闭菜单。
    const clickedInsideHeader = header.contains(event.target);
    const menuIsOpen = header.classList.contains("menu-open");

    if (menuIsOpen && !clickedInsideHeader) {
      closeMobileMenu();
    }
  });

  for (const link of mobileMenuLinks) {
    link.addEventListener("click", () => {
      link.blur();
      closeMobileMenu();
    });
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });
}

if (mobileLanguageButton) {
  mobileLanguageButton.addEventListener("click", () => {
    const currentLanguage = localStorage.getItem("kjArchiveLanguage") || "ko";
    const nextLanguage = currentLanguage === "zh" ? "ko" : "zh";
    applyLanguage(nextLanguage);
    closeMobileMenu();
    mobileLanguageButton.blur();
  });
}

if (brandLink) {
  brandLink.addEventListener("click", (event) => {
    scrollToTop(event, brandLink);
  });
}

for (const button of languageButtons) {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
    button.blur();
  });
}

window.addEventListener("scroll", updateHeaderShadow);
applyLanguage(localStorage.getItem("kjArchiveLanguage") || "ko");
updateHeaderShadow();





