---
name: code-standard
description: >
  Next.js 项目代码规范 — 在用户询问代码规范、项目结构、编码约定、如何组织代码时触发。
  当用户提到"规范"、"标准"、"项目结构"、"代码风格"、"项目初始化"、"新页面"、"新组件"、"新 API"等场景时必须触发。
  也适用于代码审查(code review)时为新增代码提供规范参照。
---

# Next.js 项目代码规范

本规范基于实际项目经验提炼，涵盖项目结构、页面、组件、API、状态管理、类型、样式等方面。新代码应遵循此规范，确保项目风格统一。

## 项目结构

```
src/
  app/                   # Next.js App Router 路由页面
    (group)/
      page.tsx           # 每个路由段一个 page.tsx
      layout.tsx         # 布局文件（可选）
    layout.tsx           # 根布局
    page.tsx             # 首页
  components/
    ui/                  # shadcn 基础组件（button, card, sheet, input, label 等）
    *.tsx                # 业务组件（product-card, navbar, cart-drawer 等）
  hooks/                 # 全局自定义 Hooks（可选，路径别名 @/hooks）
  contexts/              # React Context 提供者
  lib/                   # 工具函数（api.ts, utils.ts）
  types/                 # 按领域组织的 TypeScript 类型定义
```

## 页面规范

### 通用规则

- 所有页面使用 `"use client"`（本项目的 App Router 模式）
- 使用**命名导出**（组件除外，页面用 `export default`）
- 动态路由参数使用 async-params + `use()` 模式

```typescript
"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: Props) {
  const { id } = use(params);
  // ...
}
```

### 页面三态

每个页面/列表组件应处理三种状态：

1. **Loading 态** — 使用 `animate-pulse` + `bg-muted` 骨架屏，形状匹配实际内容
2. **Error 态** — 居中显示错误图标 + 错误消息 + "返回"按钮
3. **Empty 态** — 居中显示提示图标 + "暂无数据"文案

```typescript
if (loading) {
  return <div className="animate-pulse rounded bg-muted h-32 w-full" />;
}

if (error || !data) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
      <Package className="mb-3 size-12 text-muted-foreground/30" />
      <p className="text-sm text-destructive">{error || "Not found"}</p>
      <Button variant="outline" className="mt-4 cursor-pointer" asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}

if (data.length === 0) {
  return <div className="text-center text-muted-foreground py-8">No items available</div>;
}
```

### 面包屑导航

详情页使用统一的面包屑模式：

```typescript
<nav className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
  <Link href="/" className="flex items-center gap-1 transition-colors hover:text-foreground">
    <Home className="size-3.5" />
    Home
  </Link>
  <ChevronRight className="size-3.5" />
  <span className="text-foreground">Current Page</span>
</nav>
```

### 容器布局

页面内容区统一使用以下容器模式：

```typescript
<div className="mx-4 py-6 md:mx-auto md:max-w-6xl">
```

- 移动端 `mx-4` 保持边距
- 桌面端 `md:mx-auto md:max-w-6xl` 居中并限制宽度

## 组件规范

### 命名与导出

- 业务组件使用**命名导出**（`export function ComponentName()`）
- 组件名使用 PascalCase
- 文件名使用 kebab-case（`product-card.tsx` → `ProductCard`）

### Props 类型

单次使用的 Props 直接内联，不提取为单独的类型文件：

```typescript
export function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart: (product: Product) => void;
});
```

### 组件结构

每个组件应职责单一。复杂组件可拆分为：

- **容器组件** — 管理数据和状态
- **展示组件** — 纯 UI 渲染

示例：`InfiniteProductList` 管理数据加载 + 虚拟滚动，`ProductCard` 只负责渲染单张卡片。

### 常用组件模式

**列表/网格卡片** — 使用京东风格的悬停效果：

```typescript
<div className="group rounded-xl bg-card shadow-xs ring-1 ring-foreground/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-primary/20">
  {/* 内容 */}
</div>
```

**渐变缩略图** — 用于产品卡片，每种颜色基于 ID 确定：

```typescript
const palettes = [
  ["from-blue-500/20", "via-purple-500/10", "to-pink-500/20"],
  ["from-emerald-500/20", "via-teal-500/10", "to-cyan-500/20"],
  // ...更多配色
];
const gradient = palettes[product.id % palettes.length];
```

## API 层规范

所有 API 函数集中在 `src/lib/api.ts` 中，遵循统一模式：

```typescript
export async function fetchXxx(param: Type): Promise<ReturnType> {
  const res = await fetch(`${API_BASE}/path`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to fetch xxx: ${res.status}`);
  }

  const json: ApiResponse<ReturnType> = await res.json();

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`);
  }

  return json.data;
}
```

关键点：

- 使用 `API_BASE = "/api/v1"` 作为前缀，通过 Next.js rewrites 代理到后端
- 每个 API 函数依次检查：HTTP 状态 → 业务状态码
- `ApiResponse<T>` 是统一的响应信封
- 有参数的 GET 请求通过 `URLSearchParams` 构建查询参数
- POST/PUT 请求设置 `Content-Type: application/json`

## Hooks 规范

### 全局 Hooks

全局可复用的 hooks 放在 `src/hooks/` 目录，路径别名 `@/hooks/`。以 `use` 开头命名：

```
src/hooks/
  useDebounce.ts      # 防抖
  useLocalStorage.ts  # localStorage 读写封装
  useIntersectionObserver.ts  # 交叉观察器
```

全局 hooks 适合：跨组件共享的逻辑、浏览器 API 封装、第三方库适配。

### 局部 Hooks

仅在单个组件内使用的 hook 逻辑直接写在组件文件中，不需要提取为独立文件。当逻辑增长到需要分离关注点时，再提取到 `src/hooks/`。

### Context Hooks

Context provider 配套的 `useXxx()` hook 直接放在 `src/contexts/` 对应文件中，与 provider 共存：

```typescript
// src/contexts/auth-context.tsx
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
```

此模式的优势：hook 与 provider 耦合紧密，放在同一文件便于维护，使用时只需导入 `useAuth`。

### 判断准则

| 场景                                                  | 位置                  |
| ----------------------------------------------------- | --------------------- |
| 跨多组件复用                                          | `src/hooks/useXxx.ts` |
| API 封装（`useQuery` 风格）                           | `src/hooks/useXxx.ts` |
| 浏览器 API 封装（`useMediaQuery`、`useOnlineStatus`） | `src/hooks/useXxx.ts` |
| 仅单组件内使用、逻辑简单                              | 直接写在组件中        |
| Context 配套 hook                                     | 与 provider 同文件    |
| 第三方库适配层                                        | `src/hooks/useXxx.ts` |

## 状态管理规范

### Context 模式

```typescript
"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface XxxContextValue {
  // 状态和方法
}

const XxxContext = createContext<XxxContextValue | null>(null);

export function XxxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(...);
  // useCallback 包装方法
  return <XxxContext.Provider value={{ ... }}>{children}</XxxContext.Provider>;
}

export function useXxx() {
  const ctx = useContext(XxxContext);
  if (!ctx) throw new Error("useXxx must be used within XxxProvider");
  return ctx;
}
```

- Context value 中不直接暴露 setState，而是通过 useCallback 包装的方法
- `useXxx()` 钩子做空值检查，使用位置不当则抛出明确错误
- Provider 在根布局 `layout.tsx` 中嵌套

### localStorage

用于持久化非敏感数据（token、session_id、用户偏好）：

- 读取：`typeof window === "undefined"` 检查 + SSR 安全
- `getItem` 在 `useState` 初始化或 `useEffect` 中执行

## TypeScript 规范

- 所有类型使用 `interface`（不使用 `type`）
- 按领域分文件（`product.ts`、`auth.ts`、`cart.ts`）
- 响应包装类型后缀 `Data` 或 `CursorData`（`ProductListData`、`FlashActivityCursorData`）
- 可选字段使用 `?` 标记
- 类型导入使用 `import type` 语法
- 泛型统一使用 `ApiResponse<T>` 信封

## 导入导出规范

### 导入顺序

每个文件中的 import 按以下分组顺序排列，组之间用空行分隔：

```typescript
// 1. 标准库 — React、Next.js 核心
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// 2. 三方库 — lucide 图标、radix-ui、工具库等
import { ChevronRight, Home, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

// 3. UI 组件 — shadcn 基础组件（@/components/ui/）
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// 4. 项目业务组件 — 自定义组件（@/components/）
import { ProductCard } from "@/components/product-card";
import { Navbar } from "@/components/navbar";
import { SearchBar } from "@/components/search-bar";

// 5. Hooks / Contexts
import { useAuth } from "@/contexts/auth-context";
import { useCart } from "@/contexts/cart-context";
import { useDebounce } from "@/hooks/useDebounce";

// 6. API / 工具函数
import { fetchProducts, login } from "@/lib/api";

// 7. 类型（统一使用 import type）
import type { Product, Category } from "@/types/product";
import type { LoginRequest } from "@/types/auth";

// 8. 样式 / CSS
import "./globals.css";
```

### 分组原则

| 分组             | 来源                      | 示例                                 |
| ---------------- | ------------------------- | ------------------------------------ |
| 标准库           | react、next               | `useState`、`Link`、`useRouter`      |
| 三方库           | npm 包                    | `lucide-react`、`radix-ui`、`clsx`   |
| UI 组件          | `@/components/ui/`        | `Button`、`Card`、`Sheet`            |
| 业务组件         | `@/components/`           | `ProductCard`、`Navbar`              |
| Hooks / Contexts | `@/hooks/`、`@/contexts/` | `useAuth`、`useDebounce`             |
| API / 工具       | `@/lib/`                  | `fetchProducts`、`cn`、`formatPrice` |
| 类型             | `@/types/`                | 全部使用 `import type`               |
| 样式             | CSS 文件                  | `globals.css`                        |

### 路径别名

由 `components.json` 配置，项目中始终使用 `@/` 别名而非相对路径：

```typescript
// ✅ 正确
import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";

// ❌ 避免
import { Button } from "../../components/ui/button";
import type { Product } from "../types/product";
```

可用别名：

- `@/components/*` — 业务组件
- `@/components/ui/*` — shadcn UI 组件
- `@/hooks/*` — 自定义 Hooks
- `@/contexts/*` — Context 提供者
- `@/lib/*` — 工具函数
- `@/types/*` — 类型定义

### 导出规则

- **页面** — `export default function PageName()`（App Router 要求）
- **组件** — `export function ComponentName()`（命名导出）
- **工具函数** — `export function` 或 `export async function`
- **类型** — `export interface`，按领域分文件
- **常量** — `export const XXX = ...`，大写蛇形命名

## 样式规范

### 工具链

- **Tailwind CSS v4** + **shadcn radix-nova** 样式
- `cn()` 工具函数（`clsx` + `tailwind-merge`）合并类名
- CSS 变量在 `globals.css` 中定义（`@theme inline {}` 块）
- shadcn 组件使用 `data-slot` 属性作为样式钩子

### 常用类名

| 用途     | 类名                                                     |
| -------- | -------------------------------------------------------- |
| 页面背景 | `bg-zinc-50 dark:bg-black`                               |
| 容器居中 | `mx-4 md:mx-auto md:max-w-6xl`                           |
| 卡片     | `rounded-xl bg-card shadow-xs ring-1 ring-foreground/10` |
| 数字     | `tabular-nums`                                           |
| 交互元素 | `cursor-pointer`                                         |

### 价格格式化

所有价格以"分"为单位存储和传输，使用以下格式化函数：

```typescript
function formatPrice(cents: number) {
  return `¥${(cents / 100).toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
```

### Prettier 配置

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 100
}
```

Husky + lint-staged 在提交前自动格式化 `*.{ts,tsx,json,css,md}`。

## shadcn 组件使用规范

### Button

变体：`default`、`outline`、`secondary`、`ghost`、`destructive`、`link`
尺寸：`default`、`xs`、`sm`、`lg`、`icon`、`icon-sm`、`icon-lg`
链接按钮使用 `asChild` 包装 `<Link>`：

```typescript
<Button variant="outline" className="cursor-pointer" asChild>
  <Link href="/products">View Details</Link>
</Button>
```

### Card

```typescript
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardAction>右上角操作</CardAction>
  </CardHeader>
  <CardContent>内容</CardContent>
  <CardFooter>底部操作</CardFooter>
</Card>
```

### Sheet (Drawer)

```typescript
<Sheet open={open} onOpenChange={setOpen}>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
    </SheetHeader>
    {/* 内容 */}
  </SheetContent>
</Sheet>
```

## 项目工具链

| 工具                  | 用途         |
| --------------------- | ------------ |
| Next.js 16            | 框架         |
| Tailwind CSS v4       | 样式         |
| shadcn (radix-nova)   | UI 组件      |
| react-virtualized     | 虚拟滚动     |
| lucide-react          | 图标         |
| radix-ui              | 无头 UI 原语 |
| Prettier              | 代码格式化   |
| Husky + lint-staged   | 提交前格式化 |
| clsx + tailwind-merge | 类名合并     |
