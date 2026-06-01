# 艾脊同行 / AiJiTongXing

> 智能化赋能的青少年脊柱健康中医康复公益服务平台
> An open-source public-welfare demo platform for youth spine-health awareness, posture risk screening, rehabilitation guidance, and follow-up tracking.

![Status](https://img.shields.io/badge/status-early--stage%20demo-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-React%20%2B%20Vite-informational)
![Public Welfare](https://img.shields.io/badge/focus-youth%20spine%20health-green)

## 项目简介

**艾脊同行** 是一个面向青少年脊柱健康公益服务场景的开源前端项目，旨在通过数字化交互、体态风险提示、康复建议和随访记录，帮助用户建立“早筛查、早干预、早康复”的健康管理意识。

本项目目前处于 **早期演示原型 / MVP** 阶段，主要用于公益项目展示、产品原型验证、健康教育演示和后续开源协作。当前版本不作为医疗诊断工具，所有风险评估结果仅用于体态管理和健康教育参考，不能替代医院影像学检查、医生诊断或专业康复建议。

## English Summary

**AiJiTongXing** is an early-stage open-source public-welfare demo platform focused on youth spine-health awareness. It provides a prototype workflow for posture image collection, visual risk reporting, traditional Chinese medicine-inspired rehabilitation suggestions, exercise guidance, and long-term follow-up tracking.

The current version is a demo/MVP and is not intended for clinical diagnosis. It is designed for education, public-welfare service exploration, and future open-source collaboration.

## 为什么做这个项目？

青少年脊柱健康问题具有隐蔽性强、早期不易察觉、干预窗口重要等特点。很多家庭和学校缺乏便捷、低门槛、可持续的健康教育与随访工具。

本项目希望探索一种更轻量的公益服务模式：

* 用可视化交互降低脊柱健康筛查的理解门槛
* 用结构化报告帮助用户理解体态风险
* 用康复建议和打卡流程促进持续干预
* 用随访趋势记录长期变化
* 用开源方式沉淀公益项目的技术能力和协作流程

## 当前功能

| 模块      | 功能说明                        | 当前状态    |
| ------- | --------------------------- | ------- |
| 首页      | 项目介绍、快速入口、公益服务定位            | 已实现     |
| 用户信息    | 年龄、性别、既往情况等基础信息录入           | 已实现     |
| 影像采集    | 正面、背面、前屈位姿态采集流程演示           | Demo 实现 |
| AI 分析流程 | 模拟体表标志点识别、肩部水平度、骨盆倾斜等分析步骤   | Demo 实现 |
| 风险报告    | 输出低 / 中 / 高风险提示、视觉风险指数、干预建议 | 已实现     |
| 干预方案    | 中医艾灸建议、运动康复建议、风险提醒          | 已实现     |
| 打卡记录    | 康复习惯记录与阶段性管理                | 开发中     |
| 随访趋势    | 风险指数趋势图、历史评估记录、复拍提醒         | 已实现     |

## 重要声明

本项目不是医疗器械，也不是医疗诊断系统。

当前版本的“AI 视觉分析”和“风险指数”主要用于交互演示和公益服务流程验证。项目输出的任何报告、分数、建议或干预方案，仅作为健康教育、体态管理和公益筛查演示参考。

如出现明显高低肩、背部不对称、骨盆倾斜、长期疼痛、活动受限，或怀疑脊柱侧弯等情况，请及时前往正规医疗机构进行专业检查，并以医生意见为准。

## 技术栈

* **React 19**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **Recharts**
* **Lucide React**
* **Motion**
* **Google GenAI SDK**：预留 AI 能力扩展接口

## 本地运行

### 1. 克隆仓库

```bash
git clone https://github.com/jgooz/jizhuaijiu.git
cd jizhuaijiu
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

复制环境变量示例文件：

```bash
cp .env.example .env.local
```

如需启用 AI API 相关能力，请在 `.env.local` 中配置：

```bash
GEMINI_API_KEY="your_api_key_here"
APP_URL="http://localhost:3000"
```

当前演示版本可以先不接入真实 AI 服务运行主要前端流程。

### 4. 启动开发环境

```bash
npm run dev
```

默认访问：

```bash
http://localhost:3000
```

### 5. 构建生产版本

```bash
npm run build
```

### 6. 本地预览构建结果

```bash
npm run preview
```

### 7. 类型检查

```bash
npm run lint
```

## 项目结构

```text
.
├── public/                 # 静态资源
├── src/
│   ├── pages/              # 页面模块
│   │   ├── Home.tsx        # 首页
│   │   ├── Profile.tsx     # 用户信息
│   │   ├── Upload.tsx      # 影像采集
│   │   ├── AIProcessing.tsx# AI 分析演示流程
│   │   ├── Report.tsx      # 风险评估报告
│   │   ├── Intervention.tsx# 干预建议
│   │   ├── CheckIn.tsx     # 打卡模块
│   │   ├── FollowUp.tsx    # 随访记录
│   │   └── Mine.tsx        # 我的页面
│   ├── lib/                # 工具函数
│   ├── types.ts            # 类型定义
│   └── App.tsx             # 应用入口
├── .env.example            # 环境变量示例
├── package.json            # 项目依赖与脚本
├── vite.config.ts          # Vite 配置
└── README.md
```

## 安全与隐私原则

由于本项目涉及青少年健康、影像采集和康复建议等敏感场景，后续开发将优先遵循以下原则：

* 默认不收集真实个人身份信息
* 避免上传未经授权的个人健康数据或影像数据
* 对演示数据、测试数据和真实数据进行明确区分
* 对 AI 生成内容添加明显免责声明
* 不将 AI 输出作为诊断结论
* 增加安全审查、依赖扫描和隐私风险检查
* 为贡献者提供清晰的数据使用和安全开发规范

## 开源路线图

### v0.1.x：基础原型完善

* [ ] 完善 README、LICENSE、CONTRIBUTING、SECURITY 文档
* [ ] 优化项目名称、package 信息和仓库描述
* [ ] 增加页面截图和演示视频
* [ ] 发布第一个 GitHub Release
* [ ] 增加基础类型检查和 CI 流程
* [ ] 补充组件级文档

### v0.2.x：产品体验优化

* [ ] 优化影像采集交互
* [ ] 增加更明确的风险说明和医疗免责声明
* [ ] 改进移动端适配
* [ ] 增加无障碍访问支持
* [ ] 增加多语言支持
* [ ] 优化随访记录和趋势展示

### v0.3.x：AI 与安全能力

* [ ] 接入更规范的 AI 辅助分析流程
* [ ] 增加测试数据与真实数据隔离机制
* [ ] 增加隐私保护说明
* [ ] 增加基础自动化测试
* [ ] 增加安全扫描和依赖漏洞检查
* [ ] 探索匿名化/本地化处理方案

## 适合的使用场景

* 青少年脊柱健康公益项目原型展示
* 挑战杯、创新创业、公益服务项目演示
* 医工交叉、数字健康、智慧康复方向课程项目
* 前端公益应用实践
* AI + 健康教育场景探索
* 开源协作和产品原型验证

## 如何贡献

欢迎任何形式的贡献，包括但不限于：

* 修复 bug
* 优化 UI/UX
* 改进 README 和文档
* 补充测试
* 提出隐私和安全建议
* 改进医疗免责声明
* 优化移动端体验
* 增加国际化支持
* 参与 issue 讨论和功能规划

建议流程：

1. Fork 本仓库
2. 创建功能分支

```bash
git checkout -b feature/your-feature-name
```

3. 提交修改

```bash
git commit -m "feat: describe your change"
```

4. 推送分支

```bash
git push origin feature/your-feature-name
```

5. 创建 Pull Request

## 贡献方向建议

如果你不知道从哪里开始，可以优先关注这些方向：

* `good first issue`：适合新贡献者的简单任务
* `documentation`：文档补充与表达优化
* `accessibility`：无障碍体验优化
* `privacy`：隐私保护和数据安全建议
* `frontend`：页面、组件和交互优化
* `health-education`：健康教育内容表达优化

## 许可证

当前仓库尚未正式声明开源许可证。

如果你希望其他开发者可以合法使用、复制、修改和贡献代码，建议添加一个明确的开源许可证，例如：

* MIT License：宽松、适合早期前端项目
* Apache License 2.0：包含专利授权条款，适合更正式的开源项目

在添加 LICENSE 文件前，请谨慎在生产或商业场景中复用本项目代码。

## 致谢

本项目关注青少年脊柱健康公益服务，希望通过开源协作，让更多人参与到健康教育、早期筛查、康复指导和长期随访工具的建设中。

感谢所有关注青少年健康、数字公益、智慧康复和开源协作的开发者、老师、同学和志愿者。

---

**艾脊同行：早筛查，早干预，早康复。**
