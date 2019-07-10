# gen-config

> 生成常用的配置 提供一些常用选项

## 安装

全局安装 `npm install -g gen-config`

## 命令

> 可选择全部安装 或者手动选择需要的文件 建议选择全部安装 然后再删除不需要的文件

```shell
# 在当前目录下执行 文件直接在此目录下生成
gen-config
# 指定一个目录 文件生成在demoDir目录
gen-config demoDir
```

```shell
# 打印版本
gen-config -v
# 或者
gen-config --version
```

## 文件列表

- .editorconfig
- .prettierrc
- .prettierignore
- .gitignore
- .babelrc
- .eslintrc
- .eslintignore
- .npmignore
- .dockerignore

## 说明

对于.babelrc 或.eslintrc 文件 需要自行安装或者修改里面的依赖

## 参考项目

[create-umi](https://github.com/umijs/create-umi)
