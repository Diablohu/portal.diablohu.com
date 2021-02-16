# Diablohu's Admin Portal

[ad.diablohu.com](https://ad.diablohu.com) 源代码

---

## 如何更新数据

> 当前，更新任何数据均需要重新构建并部署。关于构建和部署请参阅下文“开发信息”。

> 所有图片在构建时会自动压缩为适合的尺寸，无需特意处理。

### 语言包

-   语言包文件为标准的 _JSON_ 文件，均存放在 `/src/locales/` 目录下。

---

## 开发信息

### 使用技术

-   框架: [_Koot.js_](https://koot.js.org)
-   包管理器: _Yarn_
-   代码检测: _ESLint_
-   代码自动修正: _Prettier_

### 开始开发

**1. 安装依赖包**

```bash
> yarn
```

**2. 开启开发环境**

```bash
> yarn dev
```

**3. 敲代码！**

### 部署

Azure 服务器上已配置自动更新，只需要在本地按以下步骤操作即可。

**1. 构建并提交生产环境代码**

```bash
> yarn push
```

执行该命令后，会进行构建操作，包括 Web 端、服务器端代码以及各类数据的构建。构建后会询问是否提交到 _git_。

**注:** 请确保您当前的本地环境可访问 _git_ 代码仓库

## 服务器及端口

|            | 开发环境 | 生产环境 |
| :--------: | :------: | :------: |
| Web 服务器 |   8080   |   3080   |

所有端口号均可在 `/koot.config.js` 中修改

## 其他事项

**更新依赖包**

运行以下命令可以 CLI 方式更新依赖包

```bash
> yarn up
```
