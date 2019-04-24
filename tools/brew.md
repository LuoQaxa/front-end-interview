
### [更换brew镜像源](https://www.zhihu.com/question/31360766)
1. 查看当前brew源
```js
cd /usr/local/Homebrew
git remote -v //https://github.com/Homebrew/brew
```

2. 设置远程仓库地址
`git remote set-url origin git://mirrors.tuna.tsinghua.edu.cn/homebrew.git`

3. `brew update`