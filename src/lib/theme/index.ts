/**
 * 主题配置
 */
const themeMultipleVars = [
  {
    scopeName: "theme-default"
  },
  {
    scopeName: "theme-dusk"
  },
  {
    scopeName: "theme-mingQing"
  },
  {
    scopeName: "theme-pink"
  }
];

const themeColors = [
  /* 道奇蓝（默认） */
  { color: "#1b2a47", themeColor: "theme-default" },
  /* 亮白色 */
  { color: "#ffffff", themeColor: "theme-light" },
  /* 猩红色 */
  { color: "#f5222d", themeColor: "theme-dusk" },
  /* 橙红色 */
  { color: "#fa541c", themeColor: "theme-volcano" },
  /* 金色 */
  { color: "#fadb14", themeColor: "theme-yellow" },
  /* 绿宝石 */
  { color: "#13c2c2", themeColor: "theme-mingQing" },
  /* 酸橙绿 */
  { color: "#52c41a", themeColor: "theme-auroraGreen" },
  /* 深粉色 */
  { color: "#eb2f96", themeColor: "theme-pink" },
  /* 深紫罗兰色 */
  { color: "#722ed1", themeColor: "theme-saucePurple" }
];
// 是否是暗黑模式
const dataTheme = false;
/**
 * 切换主题
 * @param {string} theme - 主题名称
 */
export function toggleTheme(theme: string) {
  addClassNameToHtmlTag(theme);
  const color =
    themeColors.find(item => item.themeColor === theme).color || "#409EFF";
  setEpThemeColor(color);
}

/**
 * 获取正则表达式字符串
 * @param {string} scopeName - 范围名称
 * @returns {string} - 正则表达式字符串
 */
function getRegstr(scopeName) {
  return `(^${scopeName}\\s+|\\s+${scopeName}\\s+|\\s+${scopeName}$|^${scopeName}$)`;
}

// 将className添加到html标签上
function addClassNameToHtmlTag(scopeName) {
  console.log(scopeName);
  let currentClassName = document.documentElement.className;

  if (new RegExp(getRegstr(scopeName)).test(currentClassName)) {
    return;
  }
  themeMultipleVars.forEach(item => {
    currentClassName = currentClassName.replace(
      new RegExp(getRegstr(item.scopeName), "g"),
      ` ${scopeName} `
    );
  });
  document.documentElement.className = currentClassName.replace(
    /(^\s+|\s+$)/g,
    ""
  );
}

/** 设置 `element-plus` 主题色 */
const setEpThemeColor = (color: string) => {
  document.documentElement.style.setProperty("--el-color-primary", color);
  for (let i = 1; i <= 2; i++) {
    setPropertyPrimary("dark", i, color);
  }
  for (let i = 1; i <= 9; i++) {
    setPropertyPrimary("light", i, color);
  }
};

function setPropertyPrimary(mode: string, i: number, color: string) {
  document.documentElement.style.setProperty(
    `--el-color-primary-${mode}-${i}`,
    dataTheme ? darken(color, i / 10) : lighten(color, i / 10)
  );
}

/** hex转rgb */
function hexToRgb(str) {
  const hxs = str.replace("#", "").match(/../g);
  for (let i = 0; i < 3; i++) hxs[i] = parseInt(hxs[i], 16);
  return hxs;
}

/** rgb转hex */
function rgbToHex(a, b, c) {
  const hexs = [a.toString(16), b.toString(16), c.toString(16)];
  for (let i = 0; i < 3; i++) {
    if (hexs[i].length == 1) hexs[i] = `0${hexs[i]}`;
  }
  return `#${hexs.join("")}`;
}

/** 加深颜色值 */
export function darken(color, level) {
  const rgbc = hexToRgb(color);
  for (let i = 0; i < 3; i++) rgbc[i] = Math.floor(rgbc[i] * (1 - level));
  return rgbToHex(rgbc[0], rgbc[1], rgbc[2]);
}

/** 变浅颜色值 */
export function lighten(color, level) {
  const rgbc = hexToRgb(color);
  for (let i = 0; i < 3; i++)
    rgbc[i] = Math.floor((255 - rgbc[i]) * level + rgbc[i]);
  return rgbToHex(rgbc[0], rgbc[1], rgbc[2]);
}
