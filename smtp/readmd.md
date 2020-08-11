## 使用stmp发邮件
telnet smtp.qq.com 25
授权码 
helo qq 建立连接
auth login 登录账户 
1239941131@qq.com (base64加密) MTIzOTk0MTEzMUBxcS5jb20=
授权码 (base64加密) bWZncHdwdG91d3BiaWliZg==

mail from:<1239941131@qq.com>  
rcpt to:<1239941131@qq.com> 
data //提示下面为正文
from:school
to:123
subject:hello 
dear:xiaoliu haha
. 
quit 关闭连接