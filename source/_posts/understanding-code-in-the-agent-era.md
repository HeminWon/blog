---
title: Agent 时代，程序员该如何理解代码
date: 2026-10-30
section: thoughts
description: 当代码可以交给 Agent，如何判断自己真正理解了它？
tags: [AI, 编程]
draft: true
---

设想 Agent 写好了一个搜索功能，界面正常，测试通过。你读完它的解释，也觉得没有问题。

但如果上一次请求比这一次更晚返回，界面会显示哪份结果？

这个问题，往往比“读过多少代码”更能检验理解。**看懂一份解释，与能够预测程序的行为，并不是一回事。**

## 理解，不只是为了查错

讨论 AI 代码时，我们很容易把理解等同于审查：有没有 Bug，是否满足需求，能不能上线。

但即使 Agent 能可靠地完成这些检查，理解仍然有用。Geoffrey Litt 在 [Understanding is the new bottleneck](https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck) 中提出，理解系统也是为了继续参与它的演进，而不只是判断这次交付对不对。

例如，搜索结果应该先显示缓存，还是等待网络返回？这不完全是正确性问题，而是响应速度与数据时效性的取舍。两种方案都可以有通过的测试，但开发者仍然需要知道当前选择了什么，才能判断下一次需求会牵动哪里。

代码没有报错，不代表其中的选择都已经被理解和接受。

## 不必逐行读，但不能只停在概念上

这也不意味着要研究每一行实现。理解的深度，应当取决于眼前需要作出的判断。

一次只处理临时副本、结果容易核对的脚本，可以主要检查输入输出和异常路径。涉及原始数据、权限边界或多个模块共享状态的逻辑，则需要追踪到具体实现。

因此，“人只管架构，细节交给 AI”也不够准确。搜索请求的更新顺序只是一个小细节，却可能决定界面是否显示错误结果。重要的不是代码属于哪一层，而是它影响什么。

**可以不记得某个函数怎么写，但应当知道关键行为由哪里保证、在什么条件下可能失效。** 否则，所谓掌握全局，可能只是记住了几个模块名称。

## 用预测检验理解

如果逐行阅读成本太高，直接让 Agent 解释全部代码，会不会更好？有时只会得到另一篇需要消化的长文。

Litt 的 `/explain-diff` 提供了一个思路：先讲背景和修改目标，再按逻辑关系说明变更。他还会用测验检查自己是否读懂，而不是把读完文档当作终点。[原文](https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck)

![Explain Diff 按逻辑顺序解释代码变更的演讲截图](/blog/images/understanding-code-in-the-agent-era/explain-diff.jpeg)

*图：Geoffrey Litt 演讲中的 Explain Diff 示例。截图来源：[特工宇宙](https://mp.weixin.qq.com/s/Fmj_nSFOtI1EkuBM37RoZg)。*

在此基础上，可以再走一步：让解释变成能够验证的预测。

回到搜索功能，先判断旧请求晚返回时会发生什么，再让 Agent 构造这个场景，核对实际结果。如果预测不符，就沿着请求和状态更新的路径找到原因。此时需要阅读的，是决定行为的代码，而不是所有改动。

这里也有一个边界：Agent 生成的说明、流程图和演示，都可能遗漏条件。它们帮助形成理解，却不能代替真实代码、日志和测试提供的证据。

这样做不是要给每次开发增加一道学习任务，而是区分两种完成：功能已经运行，以及自己已经能够继续修改它。

前者可以越来越多地委托给 Agent；后者不能仅凭一句“测试通过”来确认。

## 参考资料

- Geoffrey Litt：[Understanding is the new bottleneck](https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck)
- Anthropic：[How AI assistance impacts the formation of coding skills](https://www.anthropic.com/research/AI-assistance-coding-skills)

### 延伸阅读

- [Hubwiz：Agent 时代的代码审查](https://www.hubwiz.com/blog/do-we-still-need-code-reviews-in-the-age-of-coding-agents/)
- [AI Agent 时代，我们还需要学编程吗？](https://www.cailven.com/ai-agent-%E6%97%B6%E4%BB%A3%EF%BC%8C%E6%88%91%E4%BB%AC%E8%BF%98%E9%9C%80%E8%A6%81%E5%AD%A6%E7%BC%96%E7%A8%8B%E5%90%97%EF%BC%9F/)
- [钛媒体：相关讨论](https://www.tmtpost.com/agent/ai-article/19871)
- [代码看不懂了，Bug 还怎么修？AI 时代的调试心法](https://tonybai.com/2026/10/13/debug-when-you-no-longer-understand-the-code/)
- [博客园：相关讨论](https://www.cnblogs.com/itech/p/20017175)
- [Xinfinite：相关讨论](https://www.xinfinite.net/t/topic/21129)
- [Code Agent可能是Agent的未来](https://zhuanlan.zhihu.com/p/2012787539828809845)
