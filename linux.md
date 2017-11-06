# linux
## ftp
1. 安装 `yum -y install vsftpd`
2. 启动 `systemctl start vsftpd.service`
3. 查看一下启动状态 `systemctl status vsftpd.service`
4. 添加安全组端口`21/22`
5. 进入ftp配置目录`cd /etc/vsftpd`
6. 将`user_list` `ftpusers`中root注释 以实现root登陆
