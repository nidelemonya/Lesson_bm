## Event Loop
Event Loop是一个程序结构，用于等待和发送消息和事件。(a programming construct that waits for and dispatches events or messages in a program.)

简单说，就是在程序中设置两个线程：一个负责程序本身的运行，称为"主线程"；另一个负责主线程与其他进程（主要是各种I/O操作）的通信，被称为"Event Loop线程"（可以译为"消息线程"）。