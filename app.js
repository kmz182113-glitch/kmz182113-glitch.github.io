/*
  app.js 放少量网页交互。
  现在只做两件事：
  1. 点击导航后自动收起焦点，让页面感觉更干净。
  2. 滚动时给顶部导航加一点阴影，提示用户页面已经往下移动。
*/

const header = document.querySelector(".site-header");
const navLinks = document.querySelectorAll(".main-nav a, .site-footer a");
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

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

window.addEventListener("scroll", updateHeaderShadow);
updateHeaderShadow();
