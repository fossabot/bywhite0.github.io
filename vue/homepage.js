const app = Vue.createApp({data(){return{title:'白影的鸽子窝'}}})
app.component('stage',{template:`<div class="mdui-panel" mdui-panel><div class="mdui-panel-item" style="margin:6px"><div class="mdui-panel-item-header"><div class="mdui-panel-item-title">公告</div><i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i></div><div class="mdui-panel-item-body"><ul class="mdui-list mdui-list-dense"><li class="mdui-list-item"><div class="mdui-list-item-content"><div class="mdui-list-item-text">  ● 点击左上角菜单按钮畅游本站<br />● 也试试右下角的按钮叭~</div></div></li></ul></div></div></div><div class="mdui-panel" mdui-panel><div class="mdui-panel-item" style="margin:6px"><div class="mdui-panel-item-header"><div class="mdui-panel-item-title">近期更新</div><div class="mdui-panel-item-summary">当前版本 v2.3.0</div><i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i></div><div class="mdui-panel-item-body"><ul class="mdui-list mdui-list-dense"><li class="mdui-list-item mdui-ripple"><div class="mdui-list-item-content"><div class="mdui-list-item-title">v2.3.0 <small class="mdui-typo sm">2021.08.26-09.12</small></div><div class="mdui-list-item-text">2021.09.12<br />  ● 播放器兼容深色模式<br />2021.09.11<br />  ● 全站统一主题色(部分除外)<br />  ● 「能不能好好说话」部分样式调整<br />  ● 适配MDUI v1.0.2<br />  ● 修复选项卡无法使用id切换的bug<br />2021.09.08<br />  ● 新增「初中数学基础知识点总结」<br />2021.09.06<br />  ● 子页面导航栏部分样式调整<br />2021.09.05<br />  ● 口令模块实装<br />  ● 原“彩蛋模块”整合到口令模块<br />  ● 侧边栏优化<br />  ● 侧边栏新增渲染时长计算<br />  ● 主页HTML结构调整<br />  ● 播放器优化<br />2021.08.30<br />  ● 新增邮箱订阅功能<br />2021.08.29<br />  ● 「CNvalues」兼容深色模式<br />2021.08.26<br />  ● 主页新增浮动操作按钮<br />  ● 主页“彩蛋模块”实装<br />  ● 解决Without You“Fuck”被消音的问题</div></div></li><li class="mdui-list-item mdui-ripple"><div class="mdui-list-item-content"><div class="mdui-list-item-title">v2.2.0 <small class="mdui-typo sm">2021.08.15-17</small></div><div class="mdui-list-item-text">2021.08.17<br />  ● 「音乐外链生成工具」上线<br />  ● 修复「360°文字时钟」显示错位的bug<br />  ● 修复主页「一言」加载错误的bug<br />  ● 修复评论无法滚动的bug<br />2021.08.15<br />  ● 上线几个游戏相关工具（外部链接）<br />  ● 主页移除主题设置<br />  ● 主页菜单移至侧边栏<br />  ● 侧边栏排版优化<br />  ● 修复深色模式下侧边栏样式的bug</div></div></li></ul></div></div></div><div class="mdui-panel" mdui-panel><div class="mdui-panel-item" style="margin:6px"><div class="mdui-panel-item-header"><div class="mdui-panel-item-title">待办</div><i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i></div><div class="mdui-panel-item-body"><label class="mdui-checkbox"><input type="checkbox" checked disabled/><i class="mdui-checkbox-icon"></i>播放器样式调整</label><br /><label class="mdui-checkbox"><input type="checkbox" disabled/><i class="mdui-checkbox-icon"></i>修复深色模式bug</label></div></div></div><div class="mdui-panel" mdui-panel><div class="mdui-panel-item" style="margin:6px"><div class="mdui-panel-item-header"><div class="mdui-panel-item-title">开发进度</div><i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i></div><div class="mdui-panel-item-body"><div class="mdui-container"><div class="mdui-row"><div class="mdui-col-xs-12 mdui-col-sm-6 mdui-col-md-4" mdui-tooltip="{content: '主站功能的完善进度'}"><div class="mdui-container"><div class="mdui-row mdui-valign"><div class="mdui-col-xs-4"><div class="progress-ti">主站建设</div></div><div class="mdui-col-xs-8"><div class="mdui-progress"><div class="mdui-progress-determinate" style="width: 40%;"></div></div></div></div></div></div><div class="mdui-col-xs-12 mdui-col-sm-6 mdui-col-md-4" mdui-tooltip="{content: '主站资源的兼容进度'}"><div class="mdui-container"><div class="mdui-row mdui-valign"><div class="mdui-col-xs-4"><div class="progress-ti">兼容性</div></div><div class="mdui-col-xs-8"><div class="mdui-progress"><div class="mdui-progress-determinate" style="width: 45%;"></div></div></div></div></div></div><div class="mdui-col-xs-12 mdui-col-sm-6 mdui-col-md-4" mdui-tooltip="{content: '深色模式兼容进度'}"><div class="mdui-container"><div class="mdui-row mdui-valign"><div class="mdui-col-xs-4"><div class="progress-ti">深色兼容</div></div><div class="mdui-col-xs-8"><div class="mdui-progress"><div class="mdui-progress-determinate" style="width: 64%;"></div></div></div></div></div></div></div></div></div></div></div><div class="mdui-panel" mdui-panel><div class="mdui-panel-item" style="margin:6px"><div class="mdui-panel-item-header"><div class="mdui-panel-item-title">播放器</div><i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i></div><div class="mdui-panel-item-body" style="padding:0px"><div id="you"></div><!meting-js server="tencent" type="playlist" id="7730318960"></!meting-js></div></div><div class="mdui-panel" mdui-panel><div class="mdui-panel-item" style="margin:6px"><div class="mdui-panel-item-header"><div class="mdui-panel-item-title">一言</div><i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i></div><div class="mdui-panel-item-body"><iframe src="hitokoto.html" id="hitokoto_pan" style="border:0px;" width=100%></iframe><div class="mdui-panel-item-actions"><button class="mdui-btn mdui-ripple cb-btn"  data-clipboard-target="#hitokoto_output" onclick="hitokotoCopy()">复制</button><button class="mdui-btn mdui-ripple" onclick="document.getElementById('hitokoto_pan').contentWindow.location.reload(true);">再来一条</button></div></div></div><textarea id="hitokoto_output" style="position: absolute;top: 0;left: 0;opacity: 0;z-index: -10;"></textarea>`})
app.mount('body')