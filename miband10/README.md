# 小米手环 10 · C语言题库快应用（源码）

在小米手环 10 上浏览两个 C 语言题库的全部题目，**点击任意题目后显示完整答案**；答案为一行显示不下的完整 C 代码，会自动换行接着显示，无任何删减。

## 功能

- 题目列表页（`src/Answer`）：按顺序展示题库1（40题）+ 题库2（49题）共 **89 题**
- 答案详情页（`src/Detail`）：点击题目进入，显示题目原文与**完整可编译的 C 程序答案**，长代码自动折行，上下滑动查看全部
- 明日方舟风格：黑底 + 罗德岛黄 #FFD902 + 锐利色块
- 题库数据：`src/Common/data.js`（由仓库根目录 [C语言题库答案.txt](../C语言题库答案.txt) 自动生成）

## 目录结构

```
miband10/
├── manifest.json          # 快应用清单（包名/路由/全局样式）
├── icon/icon.png          # 应用图标（192×192）
└── src/
    ├── Answer/index.ux    # 题目列表页
    ├── Detail/index.ux    # 答案详情页
    └── Common/data.js     # 89 题题库数据（自动生成）
```

## 打包与安装

手环 10 运行小米 Vela OS，第三方应用需要以**快应用（Quick App）**形式打包安装：

1. 注册小米开发者账号并开通「快应用 / Vela 快应用」权限（[小米开发者平台](https://dev.mi.com/)）
2. 使用小米官方 Vela 快应用工具链（`hap`/`vela` packager 或小米快应用开发者工具）导入本目录
3. `npm run build`（或工具内打包）生成 `.rpk` 包
4. 通过小米运动健康 App 的开发者模式，将 `.rpk` 推送安装到手环 10

> 注意：安装第三方快应用需要在小米运动健康开发者选项中开启调试模式，或使用小米官方签名。

## 数据再生成

如需重新生成题库数据（修改答案 txt 后）：

```bash
python - <<'EOF'
import json, re
txt = open('C语言题库答案.txt', encoding='utf-8').read()
items = []
for i, b in enumerate([b for b in re.split(r'(?=【题库)', txt) if b.startswith('【题库')]):
    t = re.search(r'【(题库\d+-第\d+题)】', b).group(1)
    q = re.search(r'题目：(.*)', b).group(1).strip()
    a = re.search(r'答案：\n(.*?)(?=\n\n【|\Z)', b, re.S).group(1).rstrip()
    items.append({'id': i, 't': t, 'q': q, 'a': a})
open('miband10/src/Common/data.js', 'w', encoding='utf-8').write(
    'module.exports = { questions: ' + json.dumps(items, ensure_ascii=False, indent=1) + ' };')
EOF
```
