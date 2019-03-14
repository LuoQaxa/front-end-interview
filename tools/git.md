[参考](https://git-scm.com/book/zh/v1/Git-%E5%B7%A5%E5%85%B7-%E5%82%A8%E8%97%8F%EF%BC%88Stashing%EF%BC%89)

## 常用命令
#### stash 储藏
  适用于在多分支开发时，在其中一个分支正在开发中时，需要切换到其他分支上进行开发，但是你不想提交只进行一半的工作，这时候可以将修改的部分内容先储藏起来。它能够将修改过的未被追踪的文件保存到一个未完结变更的堆栈中。

#### 步骤
1. `git stash`: 往堆栈中推送一个新的储藏
2. `git stash list`: 查看现有的储藏
3. `git stash apply` (name),如果不指明name，默认使用最近的储藏
4. `git stash drop`: 删除储藏