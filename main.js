import { highlightCurrentPage, setupNavHoverEffects } from './utils/navigation.js';

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  // 设置导航交互
  highlightCurrentPage();
  setupNavHoverEffects();
});