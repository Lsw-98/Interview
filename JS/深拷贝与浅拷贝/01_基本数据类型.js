var a = 1;
b = a; // 栈内存会开辟一个新的内存空间，此时b和a都是相互独立的
a = 2;
console.log(b);   // 1