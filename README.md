# Persist Notify // 持久通知终端

明日方舟（Arknights）风格 UI 的 Android 持久化通知应用。

## 功能

- **持久化通知**：通过前台服务在通知栏持续显示一条通知，除非在应用内点击「TERMINATE // 关闭通知」，否则不会消失；设备重启后由 `BOOT_COMPLETED` 广播自动恢复通知。
- **自定义内容**：通知内容完全由用户输入，**字数不限制**，输入多少显示多少（超长文本以 BigTextStyle 展开显示，系统允许的范围内全部展示）。
- **默认内容**：两个 C 语言题库（《C语言测试1题库-打印版.docx》《C语言测试2题库-打印版.docx》，见 [docs/](docs/)）中**全部 89 道题目的完整答案**（完整可编译的 C 程序，无删减），打包于 `app/src/main/res/raw/default_answers.txt`。
- **题库答案 TXT**：全部题目与答案按 `题目 → 答案` 格式整理在 [C语言题库答案.txt](C语言题库答案.txt)。

## UI 设计

仿明日方舟平面设计语言：纯黑背景 + 罗德岛黄（#FFD902）点缀 + 红色警示色、等宽字体英文标注（STATUS / DEPLOY / UPDATE / TERMINATE）、锐利的矩形面板与色块。

## 编译

**本项目不在本地编译**，完全通过 GitHub Actions 编译：

- 工作流：[.github/workflows/android-ci.yml](.github/workflows/android-ci.yml)
- 环境：`ubuntu-latest` + JDK 17（Temurin）+ Gradle 8.9 + AGP 8.5.2
- 产物：`app/build/outputs/apk/debug/app-debug.apk`、`app-release-unsigned.apk`，上传至 Actions Artifacts

在 Actions 页面运行成功后，于对应 run 的 **Artifacts** 区域下载 APK（release 版未签名，安装建议使用 debug 版）。

## 技术要点

| 项目 | 说明 |
| --- | --- |
| 通知通道 | `IMPORTANCE_LOW`，静音，常驻 |
| 前台服务 | `foregroundServiceType="specialUse"`（Android 14 要求） |
| 开机自启 | `RECEIVE_BOOT_COMPLETED` → 若通知处于开启状态则自动重新部署 |
| 权限 | Android 13+ 动态申请 `POST_NOTIFICATIONS` |
| 内容存储 | `SharedPreferences`，无长度上限 |

## 小米手环 10 端

见 [miband10/](miband10/)：快应用（Quick App）源码，展示题库题目列表，点击题目后显示完整答案（超长文本自动换行显示）。打包需要小米 Vela 快应用工具链与开发者账号，详见该目录 README。

## 目录结构

```
├── app/                     # Android 应用（Java, minSdk 26）
├── docs/                    # 题库 docx 源文件
├── miband10/                # 小米手环 10 快应用源码
├── C语言题库答案.txt          # 全部题目+答案 TXT
└── .github/workflows/       # GitHub Actions 编译流水线
```
