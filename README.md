<h1 align="center">generate-api-issue-doc</h1>

通过填写表单，生成markdown关于对接接口问题文档。会生成一个base64的连接地址，通过浏览器打开即可查看。

## 运行项目

使用node 16.0及以上的版本

### 安装依赖

```sh
pnpm install
```

### 编译重新加载开发

```sh
pnpm run dev
```
## 提交方法
由于使用了husky + commitlint对提交进行验证，需要使用如下几种方法提交

* 方法一：
```shell
pnpm run commit
```

* 方法二：提交时直接使用规范的格式
```shell
git commit -m "feat: 添加一个新特性"
```

## License

generate-api-issue-doc is [MIT](./LICENSE).
