var posts=["2022/11/10/2022-11-10-butterfly主题/","2021/01/20/2021-10-20-虚拟机教程/","2022/12/01/2022-12-01-油猴脚本/","2022/12/07/2022-12-07-图书推荐/","2022/12/15/2022-12-15-文案2/","2022/12/16/2022-12-16-python学习1/","2022/12/21/2022-12-20-百度网盘不限速/","2022/12/23/2022-12-23-编程自学网站/","2022/12/28/2022-12-28-Hexo博客/","2022/12/07/2022-12-7-六足机器人/","2023/01/02/2023-1-1-文案1/","2023/01/09/2023-1-10-web前端css基础/","2023/01/18/2023-1-18-python学习3/","2023/01/02/2023-1-2-butterfly魔改/","2023/01/06/2023-1-6-web前端html5/","2023/01/05/2023-1-5-python学习2/","2023/11/26/2023-11-26-数据结构复习/","2023/10/03/2023-10-3-计算机网络/","2023/10/14/2023-10-22-Nodejs在学/","2023/12/10/2023-12-10-自制操作系统/","2023/02/16/2023-2-16-ChatGPT体验/","2023/02/15/2023-2-15-Python学习4/","2023/02/04/2023-2-3-全栈开发自学路线/","2023/02/18/2023-2-18-CSS进阶-项目/","2023/02/08/2023-2-8-Linux基础/","2023/03/01/2023-3-1-JS基础1/","2023/03/14/2023-3-14-Python实战/","2023/03/25/2023-3-25-西门子黑客马拉松总结/","2023/03/02/2023-3-2-PS基础/","2023/03/28/2023-3-28-Chat本地/","2023/03/29/2023-3-29-Python爬虫/","2023/03/28/2023-3-28-数据结构/","2023/03/05/2023-3-5-微信小程序开发/","2023/03/07/2023-3-7-Python学习5/","2023/03/08/2023-3-8-MySQL/","2023/04/15/2023-4-15-JS贪吃蛇/","2023/04/15/2023-4-20-C学生管理/","2023/04/02/2023-4-2-JS基础2/","2023/04/23/2023-4-23-C++记账/","2023/05/10/2023-5-10-Git/","2023/05/15/2023-5-15-HTTP协议/","2023/03/08/2023-5-22-嵌入式桌面屏幕/","2023/06/22/2023-6-22-Ros2/","2023/07/01/2023-7-1-嵌入式开发入门/","2023/07/12/2023-7-12-JQuery/","2023/07/18/2023-7-18-Node.js/","2023/07/10/2023-7-10-BOM/","2023/07/13/2023-7-17-Ajax/","2023/07/19/2023-7-19-Webpack/","2023/07/18/2023-7-18-Vue2/","2023/07/17/2023-7-17-Vue2/","2023/07/20/2023-7-20- Architecture/","2023/07/20/2023-7-20-C++/","2023/07/18/2023-7-18-数据可视化/","2023/07/25/2023-7-25-Vue2/","2023/07/28/2023-7-28-vue3/","2023/08/15/2023-8-15-Web3.0/","2023/08/18/2023-8-18-Docker/","2023/07/05/2023-7-5-DOM/","2023/09/18/2023-9-18-AI智能车学习/","2023/08/03/2023-8-3-ROS移动机器人/","2023/08/10/2023-8-10-Java基础1/","2023/09/06/2023-9-6-Ubuntu美化/","2024/01/20/2024-1-20-操作系统/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};