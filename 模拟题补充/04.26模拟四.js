/*
1. 白盒强度由低到高 语句 判定 条件 判定条件 条件组合 路径
2. 显卡pcb板类似主板
3. ssh 22；dhcp 68-67；ftp数据20控制21
4. 套接字层位于传输层和应用层；ipsec传输层和网络层；tls应用层或传输层
5. RAID0 无冗余只增速，一个坏就全坏；RAID1 镜像存储，两块磁盘完全同步写入，数据冗余，允许损坏。无速度提升；
6. 系统应用集成四层次低到高：通信服务-应用链接-信息传递转化-流程控制
7. icmp：ping traceroute；tcp：http https ftp；udp：dns dhcp；区别属于哪个层
8. go语言适合云，容器，分布式 c#适合windows桌面开发
9. DROP DB 删除数据库
   DROP TABLE 删除表结构和数据
   Truncate TABLE 删除表
   DELETE FROM TABLE 删除行
10. 画图。DMZ连防火墙！！！
一般是   internet-防火墙-路由器-三层交换机
有了dmz  internet-路由器-防火墙-三层 防火墙再连dmz
VPN闪电接在internet
dhcp在汇聚层交换机旁挂
*/