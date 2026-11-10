module.exports = { questions: [
 {
  "id": 0,
  "t": "题库1-第1题",
  "q": "用 for 循环计算 1 到 100 的整数和，并输出结果。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int i, sum = 0;\n    for (i = 1; i <= 100; i++)\n        sum += i;\n    printf(\"1到100的和为：%d\\n\", sum);\n    return 0;\n}"
 },
 {
  "id": 1,
  "t": "题库1-第2题",
  "q": "用 for 循环计算 1 到 100 中所有偶数的和，输出结果。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int i, sum = 0;\n    for (i = 2; i <= 100; i += 2)\n        sum += i;\n    printf(\"1到100中偶数的和为：%d\\n\", sum);\n    return 0;\n}"
 },
 {
  "id": 2,
  "t": "题库1-第3题",
  "q": "用 for 循环计算 1 到 100 中所有奇数的和，输出个数。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int i, sum = 0, count = 0;\n    for (i = 1; i <= 100; i += 2) {\n        sum += i;\n        count++;\n    }\n    printf(\"1到100中奇数的和为：%d\\n\", sum);\n    printf(\"奇数的个数为：%d\\n\", count);\n    return 0;\n}"
 },
 {
  "id": 3,
  "t": "题库1-第4题",
  "q": "用 for 循环打印 10 到 1 的倒序数字（每行 1 个数字）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int i;\n    for (i = 10; i >= 1; i--)\n        printf(\"%d\\n\", i);\n    return 0;\n}"
 },
 {
  "id": 4,
  "t": "题库1-第5题",
  "q": "用 for 循环打印 1 到 9 的乘法表（格式：1×1=1，1×2=2…9×9=81）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int i, j;\n    for (i = 1; i <= 9; i++) {\n        for (j = 1; j <= i; j++)\n            printf(\"%d×%d=%d\\t\", j, i, i * j);\n        printf(\"\\n\");\n    }\n    return 0;\n}"
 },
 {
  "id": 5,
  "t": "题库1-第6题",
  "q": "用 for 循环计算 10 的阶乘（10! = 1×2×3×…×10），输出结果。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int i;\n    long long fact = 1;\n    for (i = 1; i <= 10; i++)\n        fact *= i;\n    printf(\"10的阶乘为：%lld\\n\", fact);\n    return 0;\n}"
 },
 {
  "id": 6,
  "t": "题库1-第7题",
  "q": "用 for 循环接收用户输入的 10 个整数，计算其中正数的平均值并输出。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int i, num, sum = 0, count = 0;\n    for (i = 1; i <= 10; i++) {\n        printf(\"请输入第%d个整数：\", i);\n        scanf(\"%d\", &num);\n        if (num > 0) {\n            sum += num;\n            count++;\n        }\n    }\n    if (count > 0)\n        printf(\"正数的平均值为：%.2f\\n\", (double)sum / count);\n    else\n        printf(\"没有输入正数。\\n\");\n    return 0;\n}"
 },
 {
  "id": 7,
  "t": "题库1-第8题",
  "q": "用 for 循环打印一个 10行10列的\"*\"（组成正方形）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int i, j;\n    for (i = 1; i <= 10; i++) {\n        for (j = 1; j <= 10; j++)\n            printf(\"* \");\n        printf(\"\\n\");\n    }\n    return 0;\n}"
 },
 {
  "id": 8,
  "t": "题库1-第9题",
  "q": "用 for 循环打印一个 5 行的直角三角形（第 1 行 1 个 *，第 2 行 2 个 *… 第 5 行 5 个 *）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int i, j;\n    for (i = 1; i <= 5; i++) {\n        for (j = 1; j <= i; j++)\n            printf(\"*\");\n        printf(\"\\n\");\n    }\n    return 0;\n}"
 },
 {
  "id": 9,
  "t": "题库1-第10题",
  "q": "用 for 循环判断 1 到 50 中哪些是素数（只能被 1 和自身整除的数），并输出所有素数。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int i, j, isPrime;\n    for (i = 2; i <= 50; i++) {\n        isPrime = 1;\n        for (j = 2; j * j <= i; j++) {\n            if (i % j == 0) {\n                isPrime = 0;\n                break;\n            }\n        }\n        if (isPrime)\n            printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n    return 0;\n}"
 },
 {
  "id": 10,
  "t": "题库1-第11题",
  "q": "用 for 循环计算 1 到 100 中所有能被 3 或 5 整除的数的和，输出结果。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int i, sum = 0;\n    for (i = 1; i <= 100; i++) {\n        if (i % 3 == 0 || i % 5 == 0)\n            sum += i;\n    }\n    printf(\"1到100中能被3或5整除的数的和为：%d\\n\", sum);\n    return 0;\n}"
 },
 {
  "id": 11,
  "t": "题库1-第12题",
  "q": "用 for 循环接收用户输入的一个正整数 n，打印 n 行的\"*\"（第1行1个*，第 2 行 3 个 *… 第 n 行 2n-1 个 *）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int n, i, j;\n    printf(\"请输入一个正整数n：\");\n    scanf(\"%d\", &n);\n    for (i = 1; i <= n; i++) {\n        for (j = 1; j <= 2 * i - 1; j++)\n            printf(\"*\");\n        printf(\"\\n\");\n    }\n    return 0;\n}"
 },
 {
  "id": 12,
  "t": "题库1-第13题",
  "q": "用 for 循环将 1 到 20 的整数存入数组，再遍历数组打印所有元素（每个元素间隔 1 个空格）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[20], i;\n    for (i = 0; i < 20; i++)\n        a[i] = i + 1;\n    for (i = 0; i < 20; i++)\n        printf(\"%d \", a[i]);\n    printf(\"\\n\");\n    return 0;\n}"
 },
 {
  "id": 13,
  "t": "题库1-第14题",
  "q": "用 for 循环统计用户输入的一个字符串中字母（a-z、A-Z）的个数，忽略数字和符号。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    char str[100];\n    int i, count = 0;\n    printf(\"请输入一个字符串：\");\n    scanf(\"%s\", str);\n    for (i = 0; str[i] != '\\0'; i++) {\n        if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z'))\n            count++;\n    }\n    printf(\"字母的个数为：%d\\n\", count);\n    return 0;\n}"
 },
 {
  "id": 14,
  "t": "题库1-第15题",
  "q": "用 for 循环计算两个正整数 m 和 n（m < n）之间所有整数的平方和，m 和 n 由用户输入。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int m, n, i;\n    long long sum = 0;\n    printf(\"请输入m和n（m<n）：\");\n    scanf(\"%d %d\", &m, &n);\n    for (i = m; i <= n; i++)\n        sum += (long long)i * i;\n    printf(\"%d到%d之间所有整数的平方和为：%lld\\n\", m, n, sum);\n    return 0;\n}"
 },
 {
  "id": 15,
  "t": "题库1-第16题",
  "q": "用 while 循环计算 1 到 50 的整数和，输出结果。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int i = 1, sum = 0;\n    while (i <= 50) {\n        sum += i;\n        i++;\n    }\n    printf(\"1到50的和为：%d\\n\", sum);\n    return 0;\n}"
 },
 {
  "id": 16,
  "t": "题库1-第17题",
  "q": "用 while 循环接收用户输入的整数，直到输入 0 时停止，统计输入的非零整数个数。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int num, count = 0;\n    printf(\"请输入整数（输入0停止）：\");\n    scanf(\"%d\", &num);\n    while (num != 0) {\n        count++;\n        scanf(\"%d\", &num);\n    }\n    printf(\"非零整数的个数为：%d\\n\", count);\n    return 0;\n}"
 },
 {
  "id": 17,
  "t": "题库1-第18题",
  "q": "用 while 循环打印 1 到 100 中所有能被 4 整除的数，每个数间隔 1 个空格。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int i = 1;\n    while (i <= 100) {\n        if (i % 4 == 0)\n            printf(\"%d \", i);\n        i++;\n    }\n    printf(\"\\n\");\n    return 0;\n}"
 },
 {
  "id": 18,
  "t": "题库1-第19题",
  "q": "用 while 循环计算一个正整数的位数（如输入 123，输出 3；输入 45，输出 2），正整数由用户输入。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int num, count = 0;\n    printf(\"请输入一个正整数：\");\n    scanf(\"%d\", &num);\n    if (num <= 0) {\n        printf(\"输入必须是正整数！\\n\");\n        return 1;\n    }\n    while (num > 0) {\n        num /= 10;\n        count++;\n    }\n    printf(\"该整数的位数为：%d\\n\", count);\n    return 0;\n}"
 },
 {
  "id": 19,
  "t": "题库1-第20题",
  "q": "用 while 循环实现 \"猜数字游戏\"：程序随机生成 1-100 的整数，用户每次输入猜测值，程序提示 \"太大\"\"太小\"，直到猜对为止，统计猜测次数。",
  "a": "#include <stdio.h>\n#include <stdlib.h>\n#include <time.h>\nint main(void)\n{\n    int target, guess, count = 0;\n    srand((unsigned)time(NULL));\n    target = rand() % 100 + 1;\n    printf(\"猜数字游戏开始（1-100）！\\n\");\n    while (1) {\n        printf(\"请输入你猜的数字：\");\n        scanf(\"%d\", &guess);\n        count++;\n        if (guess > target)\n            printf(\"太大\\n\");\n        else if (guess < target)\n            printf(\"太小\\n\");\n        else {\n            printf(\"恭喜你猜对了！答案是%d，共猜了%d次。\\n\", target, count);\n            break;\n        }\n    }\n    return 0;\n}"
 },
 {
  "id": 20,
  "t": "题库1-第21题",
  "q": "用 while 循环将用户输入的一个正整数反转（如输入 1234，输出 4321；输入 56，输出 65）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int num, reversed = 0;\n    printf(\"请输入一个正整数：\");\n    scanf(\"%d\", &num);\n    while (num > 0) {\n        reversed = reversed * 10 + num % 10;\n        num /= 10;\n    }\n    printf(\"反转后的整数为：%d\\n\", reversed);\n    return 0;\n}"
 },
 {
  "id": 21,
  "t": "题库1-第22题",
  "q": "用 while 循环计算 1 到 100 中所有能被 7 整除但不能被 3 整除的数的个数，输出个数。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int i = 1, count = 0;\n    while (i <= 100) {\n        if (i % 7 == 0 && i % 3 != 0)\n            count++;\n        i++;\n    }\n    printf(\"个数为：%d\\n\", count);\n    return 0;\n}"
 },
 {
  "id": 22,
  "t": "题库1-第23题",
  "q": "用 while 循环接收用户输入的多个整数，计算所有输入数的最大值和最小值，输入 -1 时停止。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int num, max, min, first = 1;\n    printf(\"请输入多个整数（输入-1停止）：\");\n    while (1) {\n        scanf(\"%d\", &num);\n        if (num == -1)\n            break;\n        if (first) {\n            max = num;\n            min = num;\n            first = 0;\n        } else {\n            if (num > max)\n                max = num;\n            if (num < min)\n                min = num;\n        }\n    }\n    if (first)\n        printf(\"没有输入有效数据。\\n\");\n    else {\n        printf(\"最大值为：%d\\n\", max);\n        printf(\"最小值为：%d\\n\", min);\n    }\n    return 0;\n}"
 },
 {
  "id": 23,
  "t": "题库1-第24题",
  "q": "用 while 循环打印 1 到 100 中所有个位数为 5 的数，每行打印 5 个数据。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int i = 1, count = 0;\n    while (i <= 100) {\n        if (i % 10 == 5) {\n            printf(\"%d\\t\", i);\n            count++;\n            if (count % 5 == 0)\n                printf(\"\\n\");\n        }\n        i++;\n    }\n    if (count % 5 != 0)\n        printf(\"\\n\");\n    return 0;\n}"
 },
 {
  "id": 24,
  "t": "题库1-第25题",
  "q": "用 while 循环计算 1 + 1/2 + 1/3 + … + 1/100 的和（保留 2 位小数输出）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int i = 1;\n    double sum = 0.0;\n    while (i <= 100) {\n        sum += 1.0 / i;\n        i++;\n    }\n    printf(\"结果为：%.2f\\n\", sum);\n    return 0;\n}"
 },
 {
  "id": 25,
  "t": "题库1-第26题",
  "q": "用 while 循环判断用户输入的正整数是否为 \"回文数\"（如 121、1331 是回文数，123 不是），并输出判断结果。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int num, original, reversed = 0;\n    printf(\"请输入一个正整数：\");\n    scanf(\"%d\", &num);\n    original = num;\n    while (num > 0) {\n        reversed = reversed * 10 + num % 10;\n        num /= 10;\n    }\n    if (original == reversed)\n        printf(\"%d 是回文数\\n\", original);\n    else\n        printf(\"%d 不是回文数\\n\", original);\n    return 0;\n}"
 },
 {
  "id": 26,
  "t": "题库1-第27题",
  "q": "用 while 循环实现：从 1 开始累加，直到累加和超过 1000，输出此时的累加和与累加的最后一个数。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int i = 0, sum = 0;\n    while (sum <= 1000) {\n        i++;\n        sum += i;\n    }\n    printf(\"累加和为：%d\\n\", sum);\n    printf(\"累加的最后一个数为：%d\\n\", i);\n    return 0;\n}"
 },
 {
  "id": 27,
  "t": "题库1-第28题",
  "q": "用 while 循环接收用户输入的数字，统计其中数字字符（0-9）的个数，输入 \"#\" 时停止输入。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    char ch;\n    int count = 0;\n    printf(\"请输入字符（输入#停止）：\");\n    while (1) {\n        scanf(\" %c\", &ch);\n        if (ch == '#')\n            break;\n        if (ch >= '0' && ch <= '9')\n            count++;\n    }\n    printf(\"数字字符的个数为：%d\\n\", count);\n    return 0;\n}"
 },
 {
  "id": 28,
  "t": "题库1-第29题",
  "q": "用 while 循环打印一个 4 行的倒直角三角形（第 1 行 4 个 *，第 2 行 3 个 *… 第 4 行 1 个 *）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int i = 4, j;\n    while (i >= 1) {\n        j = 1;\n        while (j <= i) {\n            printf(\"*\");\n            j++;\n        }\n        printf(\"\\n\");\n        i--;\n    }\n    return 0;\n}"
 },
 {
  "id": 29,
  "t": "题库1-第30题",
  "q": "计算两个正整数的最大公约数（如输入 12 和 18，输出 6；输入 7 和 5，输出 1），数字由用户输入。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a, b, t;\n    printf(\"请输入两个正整数：\");\n    scanf(\"%d %d\", &a, &b);\n    while (b != 0) {\n        t = a % b;\n        a = b;\n        b = t;\n    }\n    printf(\"最大公约数为：%d\\n\", a);\n    return 0;\n}"
 },
 {
  "id": 30,
  "t": "题库1-第31题",
  "q": "用 switch 语句实现：接收用户输入的 1-7 的整数，输出对应的星期几（1→星期一，2→星期二…7→星期日），输入其他数字提示 \"输入错误\"。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int day;\n    printf(\"请输入1-7的整数：\");\n    scanf(\"%d\", &day);\n    switch (day) {\n    case 1: printf(\"星期一\\n\"); break;\n    case 2: printf(\"星期二\\n\"); break;\n    case 3: printf(\"星期三\\n\"); break;\n    case 4: printf(\"星期四\\n\"); break;\n    case 5: printf(\"星期五\\n\"); break;\n    case 6: printf(\"星期六\\n\"); break;\n    case 7: printf(\"星期日\\n\"); break;\n    default: printf(\"输入错误\\n\"); break;\n    }\n    return 0;\n}"
 },
 {
  "id": 31,
  "t": "题库1-第32题",
  "q": "用 switch 语句实现简易计算器：接收用户输入的两个整数 a、b 和一个运算符（+、-、*、/），计算并输出结果（除法需判断除数不为 0，输入其他运算符提示 \"运算符错误\"）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a, b;\n    char op;\n    printf(\"请输入表达式（如 3+5）：\");\n    scanf(\"%d %c %d\", &a, &op, &b);\n    switch (op) {\n    case '+':\n        printf(\"%d %c %d = %d\\n\", a, op, b, a + b);\n        break;\n    case '-':\n        printf(\"%d %c %d = %d\\n\", a, op, b, a - b);\n        break;\n    case '*':\n        printf(\"%d %c %d = %d\\n\", a, op, b, a * b);\n        break;\n    case '/':\n        if (b != 0)\n            printf(\"%d %c %d = %d\\n\", a, op, b, a / b);\n        else\n            printf(\"除数不能为0\\n\");\n        break;\n    default:\n        printf(\"运算符错误\\n\");\n        break;\n    }\n    return 0;\n}"
 },
 {
  "id": 32,
  "t": "题库1-第33题",
  "q": "用 switch 语句实现：接收用户输入的月份（1-12），输出对应的季节（3-5→春季，6-8→夏季，9-11→秋季，12、1-2→冬季），输入其他数字提示 \"月份错误\"。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int month;\n    printf(\"请输入月份（1-12）：\");\n    scanf(\"%d\", &month);\n    switch (month) {\n    case 3: case 4: case 5:\n        printf(\"春季\\n\");\n        break;\n    case 6: case 7: case 8:\n        printf(\"夏季\\n\");\n        break;\n    case 9: case 10: case 11:\n        printf(\"秋季\\n\");\n        break;\n    case 12: case 1: case 2:\n        printf(\"冬季\\n\");\n        break;\n    default:\n        printf(\"月份错误\\n\");\n        break;\n    }\n    return 0;\n}"
 },
 {
  "id": 33,
  "t": "题库1-第34题",
  "q": "用 switch 语句实现：接收用户输入的学生成绩（0-100），按分数段输出等级（90-100→A，80-89→B，70-79→C，60-69→D，0-59→E），输入超出范围提示 \"成绩错误\"。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int score;\n    printf(\"请输入成绩（0-100）：\");\n    scanf(\"%d\", &score);\n    if (score < 0 || score > 100) {\n        printf(\"成绩错误\\n\");\n        return 0;\n    }\n    switch (score / 10) {\n    case 10: case 9:\n        printf(\"A\\n\");\n        break;\n    case 8:\n        printf(\"B\\n\");\n        break;\n    case 7:\n        printf(\"C\\n\");\n        break;\n    case 6:\n        printf(\"D\\n\");\n        break;\n    default:\n        printf(\"E\\n\");\n        break;\n    }\n    return 0;\n}"
 },
 {
  "id": 34,
  "t": "题库1-第35题",
  "q": "用 switch 语句实现：接收用户输入的一个字符，判断是否为元音字母（a、e、i、o、u，不区分大小写），是则输出 \"是元音字母\"，否则输出 \"不是元音字母\"。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    char ch;\n    printf(\"请输入一个字符：\");\n    scanf(\" %c\", &ch);\n    switch (ch) {\n    case 'a': case 'e': case 'i': case 'o': case 'u':\n    case 'A': case 'E': case 'I': case 'O': case 'U':\n        printf(\"是元音字母\\n\");\n        break;\n    default:\n        printf(\"不是元音字母\\n\");\n        break;\n    }\n    return 0;\n}"
 },
 {
  "id": 35,
  "t": "题库1-第36题",
  "q": "用 switch 语句实现：接收用户输入的 1-4 的整数，分别执行以下操作：1→计算 10 的平方，2→计算 10 的立方，3→计算 10 的倒数，4→计算 10 的绝对值，输出结果。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int choice;\n    printf(\"请输入1-4的整数：\");\n    scanf(\"%d\", &choice);\n    switch (choice) {\n    case 1:\n        printf(\"10的平方为：%d\\n\", 10 * 10);\n        break;\n    case 2:\n        printf(\"10的立方为：%d\\n\", 10 * 10 * 10);\n        break;\n    case 3:\n        printf(\"10的倒数为：%.2f\\n\", 1.0 / 10);\n        break;\n    case 4:\n        printf(\"10的绝对值为：%d\\n\", 10 < 0 ? -10 : 10);\n        break;\n    default:\n        printf(\"选择错误\\n\");\n        break;\n    }\n    return 0;\n}"
 },
 {
  "id": 36,
  "t": "题库1-第37题",
  "q": "接收用户输入的年份，输出是否为闰年（需判断闰年：能被 4 整除且不能被 100 整除，或能被 400 整除的年份为闰年）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int year;\n    printf(\"请输入年份：\");\n    scanf(\"%d\", &year);\n    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)\n        printf(\"%d年是闰年\\n\", year);\n    else\n        printf(\"%d年不是闰年\\n\", year);\n    return 0;\n}"
 },
 {
  "id": 37,
  "t": "题库1-第38题",
  "q": "用 switch 语句实现：模拟 \"菜单选择\"，菜单选项为 1→计算1到100的和，2→退出程序，用户输入选项后执行对应操作，输入其他选项提示 \"选择错误\"。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int choice;\n    printf(\"===== 菜单 =====\\n\");\n    printf(\"1. 计算1到100的和\\n\");\n    printf(\"2. 退出程序\\n\");\n    printf(\"请输入选项：\");\n    scanf(\"%d\", &choice);\n    switch (choice) {\n    case 1: {\n        int i, sum = 0;\n        for (i = 1; i <= 100; i++)\n            sum += i;\n        printf(\"1到100的和为：%d\\n\", sum);\n        break;\n    }\n    case 2:\n        printf(\"退出程序\\n\");\n        break;\n    default:\n        printf(\"选择错误\\n\");\n        break;\n    }\n    return 0;\n}"
 },
 {
  "id": 38,
  "t": "题库1-第39题",
  "q": "用 switch 语句实现：接收用户输入的两个整数 x 和 y（x < y），输入 1 则计算 x 到 y 的和，输入 2 则计算 x 到 y 的平均值，输出结果。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int x, y, choice, i;\n    long long sum = 0;\n    printf(\"请输入两个整数x和y（x<y）：\");\n    scanf(\"%d %d\", &x, &y);\n    printf(\"请输入选项（1：求和，2：求平均值）：\");\n    scanf(\"%d\", &choice);\n    switch (choice) {\n    case 1:\n        for (i = x; i <= y; i++)\n            sum += i;\n        printf(\"%d到%d的和为：%lld\\n\", x, y, sum);\n        break;\n    case 2:\n        for (i = x; i <= y; i++)\n            sum += i;\n        printf(\"%d到%d的平均值为：%.2f\\n\", x, y, (double)sum / (y - x + 1));\n        break;\n    default:\n        printf(\"选择错误\\n\");\n        break;\n    }\n    return 0;\n}"
 },
 {
  "id": 39,
  "t": "题库1-第40题",
  "q": "用 switch 语句实现：接收用户输入的字符（'Y'/'y' 或 'N'/'n'），输入 'Y'/'y' 则输出 \"同意\"，输入 'N'/'n' 则输出 \"拒绝\"，输入其他字符提示 \"输入无效\"。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    char ch;\n    printf(\"请输入字符（Y/N）：\");\n    scanf(\" %c\", &ch);\n    switch (ch) {\n    case 'Y': case 'y':\n        printf(\"同意\\n\");\n        break;\n    case 'N': case 'n':\n        printf(\"拒绝\\n\");\n        break;\n    default:\n        printf(\"输入无效\\n\");\n        break;\n    }\n    return 0;\n}\n════════════════════════════════════════════\n题库2：C语言测试2题库（数组）答案\n════════════════════════════════════════════"
 },
 {
  "id": 40,
  "t": "题库2-第1题",
  "q": "定义一个包含 10 个整数的一维数组，初始化值为 1~10，遍历并打印所有偶数元素。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    int i;\n    for (i = 0; i < 10; i++) {\n        if (a[i] % 2 == 0)\n            printf(\"%d \", a[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}"
 },
 {
  "id": 41,
  "t": "题库2-第2题",
  "q": "定义一个长度为 5 的浮点型数组，从键盘输入 5 个成绩，计算并输出平均值。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    double score[5], sum = 0;\n    int i;\n    for (i = 0; i < 5; i++) {\n        printf(\"请输入第%d个成绩：\", i + 1);\n        scanf(\"%lf\", &score[i]);\n        sum += score[i];\n    }\n    printf(\"平均值为：%.2f\\n\", sum / 5);\n    return 0;\n}"
 },
 {
  "id": 42,
  "t": "题库2-第3题",
  "q": "定义一个一维数组存储 8 个整数，找出其中的最大值和最小值并输出。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[8] = {23, 7, 56, 12, 89, 3, 45, 66};\n    int i, max, min;\n    max = a[0];\n    min = a[0];\n    for (i = 1; i < 8; i++) {\n        if (a[i] > max)\n            max = a[i];\n        if (a[i] < min)\n            min = a[i];\n    }\n    printf(\"最大值为：%d\\n\", max);\n    printf(\"最小值为：%d\\n\", min);\n    return 0;\n}"
 },
 {
  "id": 43,
  "t": "题库2-第4题",
  "q": "初始化一个包含 10 个随机整数（1~100）的数组，统计其中偶数的个数。",
  "a": "#include <stdio.h>\n#include <stdlib.h>\n#include <time.h>\nint main(void)\n{\n    int a[10];\n    int i, count = 0;\n    srand((unsigned)time(NULL));\n    for (i = 0; i < 10; i++) {\n        a[i] = rand() % 100 + 1;\n        printf(\"%d \", a[i]);\n    }\n    printf(\"\\n\");\n    for (i = 0; i < 10; i++) {\n        if (a[i] % 2 == 0)\n            count++;\n    }\n    printf(\"偶数的个数为：%d\\n\", count);\n    return 0;\n}"
 },
 {
  "id": 44,
  "t": "题库2-第5题",
  "q": "从键盘输入 6 个整数存入数组，计算所有元素的和并输出。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[6], i, sum = 0;\n    for (i = 0; i < 6; i++) {\n        printf(\"请输入第%d个整数：\", i + 1);\n        scanf(\"%d\", &a[i]);\n        sum += a[i];\n    }\n    printf(\"所有元素的和为：%d\\n\", sum);\n    return 0;\n}"
 },
 {
  "id": 45,
  "t": "题库2-第6题",
  "q": "定义一个字符数组，存储字符串 \"Hello, World!\"，用循环遍历并打印每个字符。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    char str[] = \"Hello, World!\";\n    int i;\n    for (i = 0; str[i] != '\\0'; i++) {\n        printf(\"%c\\n\", str[i]);\n    }\n    return 0;\n}"
 },
 {
  "id": 46,
  "t": "题库2-第7题",
  "q": "将数组中的 10 个整数按从小到大的顺序排序（用冒泡排序法），并打印排序结果。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[10] = {64, 25, 90, 12, 22, 11, 8, 76, 33, 5};\n    int i, j, temp;\n    for (i = 0; i < 9; i++) {\n        for (j = 0; j < 9 - i; j++) {\n            if (a[j] > a[j + 1]) {\n                temp = a[j];\n                a[j] = a[j + 1];\n                a[j + 1] = temp;\n            }\n        }\n    }\n    printf(\"排序后的结果为：\\n\");\n    for (i = 0; i < 10; i++)\n        printf(\"%d \", a[i]);\n    printf(\"\\n\");\n    return 0;\n}"
 },
 {
  "id": 47,
  "t": "题库2-第8题",
  "q": "定义一个数组存储 5 个学生的年龄，计算年龄大于等于 18 的学生人数。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int ages[5] = {16, 18, 20, 17, 19};\n    int i, count = 0;\n    for (i = 0; i < 5; i++) {\n        if (ages[i] >= 18)\n            count++;\n    }\n    printf(\"年龄大于等于18的学生人数为：%d\\n\", count);\n    return 0;\n}"
 },
 {
  "id": 48,
  "t": "题库2-第9题",
  "q": "从键盘输入一个整数 n（n≤10），再输入 n 个整数存入数组，逆序打印数组元素。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[10], n, i;\n    printf(\"请输入整数n（n≤10）：\");\n    scanf(\"%d\", &n);\n    for (i = 0; i < n; i++) {\n        printf(\"请输入第%d个整数：\", i + 1);\n        scanf(\"%d\", &a[i]);\n    }\n    printf(\"逆序打印的结果为：\\n\");\n    for (i = n - 1; i >= 0; i--)\n        printf(\"%d \", a[i]);\n    printf(\"\\n\");\n    return 0;\n}"
 },
 {
  "id": 49,
  "t": "题库2-第10题",
  "q": "初始化一个数组 {2,5,8,10,9}，查找能被3整除的元素并输出（若不存在输出 -1）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[5] = {2, 5, 8, 10, 9};\n    int i, found = -1;\n    for (i = 0; i < 5; i++) {\n        if (a[i] % 3 == 0) {\n            found = a[i];\n            break;\n        }\n    }\n    if (found != -1)\n        printf(\"能被3整除的元素为：%d\\n\", found);\n    else\n        printf(\"-1\\n\");\n    return 0;\n}"
 },
 {
  "id": 50,
  "t": "题库2-第11题",
  "q": "定义一个长度为 7 的数组，将所有元素乘以 2 后重新存入数组并打印。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[7] = {1, 2, 3, 4, 5, 6, 7};\n    int i;\n    for (i = 0; i < 7; i++)\n        a[i] = a[i] * 2;\n    for (i = 0; i < 7; i++)\n        printf(\"%d \", a[i]);\n    printf(\"\\n\");\n    return 0;\n}"
 },
 {
  "id": 51,
  "t": "题库2-第12题",
  "q": "从键盘输入 10 个整数，统计数组中偶数和奇数的个数。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[10], i, even = 0, odd = 0;\n    for (i = 0; i < 10; i++) {\n        printf(\"请输入第%d个整数：\", i + 1);\n        scanf(\"%d\", &a[i]);\n    }\n    for (i = 0; i < 10; i++) {\n        if (a[i] % 2 == 0)\n            even++;\n        else\n            odd++;\n    }\n    printf(\"偶数的个数为：%d\\n\", even);\n    printf(\"奇数的个数为：%d\\n\", odd);\n    return 0;\n}"
 },
 {
  "id": 52,
  "t": "题库2-第13题",
  "q": "从键盘输入一个字符数组，将所有小写字母转换为大写字母后输出（如 \"apple\"→\"APPLE\"）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    char str[100];\n    int i;\n    printf(\"请输入一个字符串：\");\n    scanf(\"%s\", str);\n    for (i = 0; str[i] != '\\0'; i++) {\n        if (str[i] >= 'a' && str[i] <= 'z')\n            str[i] = str[i] - 'a' + 'A';\n    }\n    printf(\"转换后的字符串为：%s\\n\", str);\n    return 0;\n}"
 },
 {
  "id": 53,
  "t": "题库2-第14题",
  "q": "初始化数组 {10,20,33,40,51}，计算所有元素的平方和并输出。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[5] = {10, 20, 33, 40, 51};\n    int i;\n    long long sum = 0;\n    for (i = 0; i < 5; i++)\n        sum += (long long)a[i] * a[i];\n    printf(\"所有元素的平方和为：%lld\\n\", sum);\n    return 0;\n}"
 },
 {
  "id": 54,
  "t": "题库2-第15题",
  "q": "从键盘输入一个字符串（不超过 20 个字符），统计其中字母 'a' 出现的次数（若不存在输出 -1）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    char str[21];\n    int i, count = 0;\n    printf(\"请输入一个字符串（不超过20个字符）：\");\n    scanf(\"%20s\", str);\n    for (i = 0; str[i] != '\\0'; i++) {\n        if (str[i] == 'a')\n            count++;\n    }\n    if (count > 0)\n        printf(\"字母a出现的次数为：%d\\n\", count);\n    else\n        printf(\"-1\\n\");\n    return 0;\n}"
 },
 {
  "id": 55,
  "t": "题库2-第16题",
  "q": "定义一个数组存储 6 个整数，删除其中 5 的倍数的元素（后续元素前移，空出的元素补0），打印新数组。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[6] = {5, 12, 25, 7, 30, 11};\n    int i, j, len = 6;\n    for (i = 0; i < len; i++) {\n        if (a[i] % 5 == 0) {\n            for (j = i; j < len - 1; j++)\n                a[j] = a[j + 1];\n            a[len - 1] = 0;\n            len--;\n            i--;\n        }\n    }\n    printf(\"删除5的倍数后的新数组为：\\n\");\n    for (i = 0; i < 6; i++)\n        printf(\"%d \", a[i]);\n    printf(\"\\n\");\n    return 0;\n}"
 },
 {
  "id": 56,
  "t": "题库2-第17题",
  "q": "用数组存储 1~100 中所有能被 7 整除的数，输出这些数及其个数。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[100], i, count = 0;\n    for (i = 7; i <= 100; i++) {\n        if (i % 7 == 0) {\n            a[count] = i;\n            count++;\n        }\n    }\n    printf(\"1~100中能被7整除的数有：\\n\");\n    for (i = 0; i < count; i++)\n        printf(\"%d \", a[i]);\n    printf(\"\\n个数为：%d\\n\", count);\n    return 0;\n}"
 },
 {
  "id": 57,
  "t": "题库2-第18题",
  "q": "从键盘输入 5 个整数，将数组中最大的元素与最后一个元素交换位置并打印。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[5], i, maxIndex = 0, temp;\n    for (i = 0; i < 5; i++) {\n        printf(\"请输入第%d个整数：\", i + 1);\n        scanf(\"%d\", &a[i]);\n    }\n    for (i = 1; i < 5; i++) {\n        if (a[i] > a[maxIndex])\n            maxIndex = i;\n    }\n    temp = a[maxIndex];\n    a[maxIndex] = a[4];\n    a[4] = temp;\n    printf(\"交换后的数组为：\\n\");\n    for (i = 0; i < 5; i++)\n        printf(\"%d \", a[i]);\n    printf(\"\\n\");\n    return 0;\n}"
 },
 {
  "id": 58,
  "t": "题库2-第19题",
  "q": "初始化一个数组，判断其中是否存在重复元素（如存在输出 \"有重复\"，否则输出 \"无重复\"）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[8] = {1, 5, 9, 3, 7, 5, 2, 8};\n    int i, j, hasDuplicate = 0;\n    for (i = 0; i < 8 && !hasDuplicate; i++) {\n        for (j = i + 1; j < 8; j++) {\n            if (a[i] == a[j]) {\n                hasDuplicate = 1;\n                break;\n            }\n        }\n    }\n    if (hasDuplicate)\n        printf(\"有重复\\n\");\n    else\n        printf(\"无重复\\n\");\n    return 0;\n}"
 },
 {
  "id": 59,
  "t": "题库2-第20题",
  "q": "定义一个长度为 10 的数组，用随机数填充后，将奇数放在数组前半部分，偶数放在后半部分。",
  "a": "#include <stdio.h>\n#include <stdlib.h>\n#include <time.h>\nint main(void)\n{\n    int a[10], odd[10], even[10];\n    int i, oddCount = 0, evenCount = 0;\n    srand((unsigned)time(NULL));\n    for (i = 0; i < 10; i++) {\n        a[i] = rand() % 100 + 1;\n        if (a[i] % 2 != 0)\n            odd[oddCount++] = a[i];\n        else\n            even[evenCount++] = a[i];\n    }\n    for (i = 0; i < oddCount; i++)\n        a[i] = odd[i];\n    for (i = 0; i < evenCount; i++)\n        a[oddCount + i] = even[i];\n    printf(\"调整后的数组为：\\n\");\n    for (i = 0; i < 10; i++)\n        printf(\"%d \", a[i]);\n    printf(\"\\n\");\n    return 0;\n}"
 },
 {
  "id": 60,
  "t": "题库2-第21题",
  "q": "从键盘输入一个整数 n，创建一个长度为 n 的数组并从键盘输入数组的每一个元素，打印数组。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int n, i;\n    printf(\"请输入数组长度n：\");\n    scanf(\"%d\", &n);\n    if (n <= 0) {\n        printf(\"n必须为正整数！\\n\");\n        return 1;\n    }\n    int a[n];\n    for (i = 0; i < n; i++) {\n        printf(\"请输入第%d个元素：\", i + 1);\n        scanf(\"%d\", &a[i]);\n    }\n    printf(\"数组元素为：\\n\");\n    for (i = 0; i < n; i++)\n        printf(\"%d \", a[i]);\n    printf(\"\\n\");\n    return 0;\n}"
 },
 {
  "id": 61,
  "t": "题库2-第22题",
  "q": "计算数组 {3,1,4,1,5,9} 中所有奇数的和与所有偶数的积。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[6] = {3, 1, 4, 1, 5, 9};\n    int i, oddSum = 0, evenProduct = 1, hasEven = 0;\n    for (i = 0; i < 6; i++) {\n        if (a[i] % 2 != 0)\n            oddSum += a[i];\n        else {\n            evenProduct *= a[i];\n            hasEven = 1;\n        }\n    }\n    printf(\"奇数的和为：%d\\n\", oddSum);\n    if (hasEven)\n        printf(\"偶数的积为：%d\\n\", evenProduct);\n    else\n        printf(\"数组中没有偶数\\n\");\n    return 0;\n}"
 },
 {
  "id": 62,
  "t": "题库2-第23题",
  "q": "定义一个字符数组，统计其中数字字符'3'的个数。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    char str[] = \"a3bc33de3f\";\n    int i, count = 0;\n    for (i = 0; str[i] != '\\0'; i++) {\n        if (str[i] == '3')\n            count++;\n    }\n    printf(\"字符'3'的个数为：%d\\n\", count);\n    return 0;\n}"
 },
 {
  "id": 63,
  "t": "题库2-第24题",
  "q": "初始化数组 {5,3,8,9,1}，用选择排序法按从大到小的顺序排序并打印。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[5] = {5, 3, 8, 9, 1};\n    int i, j, maxIndex, temp;\n    for (i = 0; i < 4; i++) {\n        maxIndex = i;\n        for (j = i + 1; j < 5; j++) {\n            if (a[j] > a[maxIndex])\n                maxIndex = j;\n        }\n        if (maxIndex != i) {\n            temp = a[i];\n            a[i] = a[maxIndex];\n            a[maxIndex] = temp;\n        }\n    }\n    printf(\"从大到小排序后的结果为：\\n\");\n    for (i = 0; i < 5; i++)\n        printf(\"%d \", a[i]);\n    printf(\"\\n\");\n    return 0;\n}"
 },
 {
  "id": 64,
  "t": "题库2-第25题",
  "q": "从键盘输入 10 个整数（数据互不相同），找出数组中第二大的元素并打印输出。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[10], i, max, second;\n    for (i = 0; i < 10; i++) {\n        printf(\"请输入第%d个整数：\", i + 1);\n        scanf(\"%d\", &a[i]);\n    }\n    max = a[0] > a[1] ? a[0] : a[1];\n    second = a[0] > a[1] ? a[1] : a[0];\n    for (i = 2; i < 10; i++) {\n        if (a[i] > max) {\n            second = max;\n            max = a[i];\n        } else if (a[i] > second) {\n            second = a[i];\n        }\n    }\n    printf(\"第二大的元素为：%d\\n\", second);\n    return 0;\n}"
 },
 {
  "id": 65,
  "t": "题库2-第26题",
  "q": "定义一个数组，将其中所有偶数的元素累加，输出累加和。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[8] = {1, 2, 3, 4, 5, 6, 7, 8};\n    int i, sum = 0;\n    for (i = 0; i < 8; i++) {\n        if (a[i] % 2 == 0)\n            sum += a[i];\n    }\n    printf(\"所有偶数元素的累加和为：%d\\n\", sum);\n    return 0;\n}"
 },
 {
  "id": 66,
  "t": "题库2-第27题",
  "q": "用数组存储用户输入的多个非0整数（以 0 结束），计算所有输入整数的平均值。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[100];\n    int num, count = 0, i;\n    long long sum = 0;\n    printf(\"请输入多个非0整数（输入0结束）：\\n\");\n    while (1) {\n        scanf(\"%d\", &num);\n        if (num == 0)\n            break;\n        if (count < 100)\n            a[count++] = num;\n    }\n    if (count == 0) {\n        printf(\"没有输入有效数据。\\n\");\n        return 0;\n    }\n    for (i = 0; i < count; i++)\n        sum += a[i];\n    printf(\"平均值为：%.2f\\n\", (double)sum / count);\n    return 0;\n}"
 },
 {
  "id": 67,
  "t": "题库2-第28题",
  "q": "初始化数组 {1,2,3,4,5}，将数组元素循环右移一位（如 [1,2,3,4,5]→[5,1,2,3,4]）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[5] = {1, 2, 3, 4, 5};\n    int i, last = a[4];\n    for (i = 4; i > 0; i--)\n        a[i] = a[i - 1];\n    a[0] = last;\n    printf(\"循环右移一位后的数组为：\\n\");\n    for (i = 0; i < 5; i++)\n        printf(\"%d \", a[i]);\n    printf(\"\\n\");\n    return 0;\n}"
 },
 {
  "id": 68,
  "t": "题库2-第29题",
  "q": "从键盘输入一个奇数位长度的字符串，判断其是否为回文字符串（如 \"aba\" 是回文，\"abc\" 不是）。",
  "a": "#include <stdio.h>\n#include <string.h>\nint main(void)\n{\n    char str[100];\n    int len, i, isPalindrome = 1;\n    printf(\"请输入一个奇数位长度的字符串：\");\n    scanf(\"%s\", str);\n    len = strlen(str);\n    for (i = 0; i < len / 2; i++) {\n        if (str[i] != str[len - 1 - i]) {\n            isPalindrome = 0;\n            break;\n        }\n    }\n    if (isPalindrome)\n        printf(\"%s 是回文字符串\\n\", str);\n    else\n        printf(\"%s 不是回文字符串\\n\", str);\n    return 0;\n}"
 },
 {
  "id": 69,
  "t": "题库2-第30题",
  "q": "定义两个长度相同的整数数组，将对应元素相加后存入第三个数组并打印。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[5] = {1, 2, 3, 4, 5};\n    int b[5] = {10, 20, 30, 40, 50};\n    int c[5];\n    int i;\n    for (i = 0; i < 5; i++)\n        c[i] = a[i] + b[i];\n    printf(\"相加后的第三个数组为：\\n\");\n    for (i = 0; i < 5; i++)\n        printf(\"%d \", c[i]);\n    printf(\"\\n\");\n    return 0;\n}"
 },
 {
  "id": 70,
  "t": "题库2-第31题",
  "q": "定义一个 3×3 的二维整数数组，初始化值为 1~9，按行遍历并打印所有元素。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n    int i, j;\n    for (i = 0; i < 3; i++) {\n        for (j = 0; j < 3; j++)\n            printf(\"%d \", a[i][j]);\n        printf(\"\\n\");\n    }\n    return 0;\n}"
 },
 {
  "id": 71,
  "t": "题库2-第32题",
  "q": "从键盘输入一个 2×4 的浮点型数组，计算所有元素的总和并输出。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    double a[2][4], sum = 0;\n    int i, j;\n    for (i = 0; i < 2; i++) {\n        for (j = 0; j < 4; j++) {\n            printf(\"请输入a[%d][%d]：\", i, j);\n            scanf(\"%lf\", &a[i][j]);\n            sum += a[i][j];\n        }\n    }\n    printf(\"所有元素的总和为：%.2f\\n\", sum);\n    return 0;\n}"
 },
 {
  "id": 72,
  "t": "题库2-第33题",
  "q": "定义一个 4×4 的二维数组，找出其中的最大值及其所在的行号和列号。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[4][4] = {\n        {3, 8, 12, 5},\n        {7, 21, 9, 14},\n        {6, 17, 25, 2},\n        {11, 4, 19, 13}\n    };\n    int i, j, max, maxRow = 0, maxCol = 0;\n    max = a[0][0];\n    for (i = 0; i < 4; i++) {\n        for (j = 0; j < 4; j++) {\n            if (a[i][j] > max) {\n                max = a[i][j];\n                maxRow = i;\n                maxCol = j;\n            }\n        }\n    }\n    printf(\"最大值为：%d\\n\", max);\n    printf(\"所在行号为：%d，列号为：%d\\n\", maxRow, maxCol);\n    return 0;\n}"
 },
 {
  "id": 73,
  "t": "题库2-第34题",
  "q": "初始化一个 3×5 的数组，计算每一行元素的平均值，输出每行平均值。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[3][5] = {\n        {1, 2, 3, 4, 5},\n        {6, 7, 8, 9, 10},\n        {2, 4, 6, 8, 10}\n    };\n    int i, j, sum;\n    for (i = 0; i < 3; i++) {\n        sum = 0;\n        for (j = 0; j < 5; j++)\n            sum += a[i][j];\n        printf(\"第%d行的平均值为：%.2f\\n\", i + 1, (double)sum / 5);\n    }\n    return 0;\n}"
 },
 {
  "id": 74,
  "t": "题库2-第35题",
  "q": "从键盘输入一个 5×3 的整数数组，统计数组中所有偶数的个数。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[5][3];\n    int i, j, count = 0;\n    for (i = 0; i < 5; i++) {\n        for (j = 0; j < 3; j++) {\n            printf(\"请输入a[%d][%d]：\", i, j);\n            scanf(\"%d\", &a[i][j]);\n            if (a[i][j] % 2 == 0)\n                count++;\n        }\n    }\n    printf(\"所有偶数的个数为：%d\\n\", count);\n    return 0;\n}"
 },
 {
  "id": 75,
  "t": "题库2-第36题",
  "q": "定义一个 5×5 的二维数组，计算其主对角线元素的和（主对角线：a[0][0]+a[1][1]+…）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[5][5] = {\n        {1, 2, 3, 4, 5},\n        {6, 7, 8, 9, 10},\n        {11, 12, 13, 14, 15},\n        {16, 17, 18, 19, 20},\n        {21, 22, 23, 24, 25}\n    };\n    int i, sum = 0;\n    for (i = 0; i < 5; i++)\n        sum += a[i][i];\n    printf(\"主对角线元素的和为：%d\\n\", sum);\n    return 0;\n}"
 },
 {
  "id": 76,
  "t": "题库2-第37题",
  "q": "将一个 3×4 的数组转置为 4×3 的数组（行变列，列变行）并打印。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[3][4] = {\n        {1, 2, 3, 4},\n        {5, 6, 7, 8},\n        {9, 10, 11, 12}\n    };\n    int b[4][3];\n    int i, j;\n    for (i = 0; i < 3; i++) {\n        for (j = 0; j < 4; j++)\n            b[j][i] = a[i][j];\n    }\n    printf(\"转置后的4×3数组为：\\n\");\n    for (i = 0; i < 4; i++) {\n        for (j = 0; j < 3; j++)\n            printf(\"%d \", b[i][j]);\n        printf(\"\\n\");\n    }\n    return 0;\n}"
 },
 {
  "id": 77,
  "t": "题库2-第38题",
  "q": "初始化一个 4×4 的数组，用循环将所有主对角线的元素赋值为 1，其余为 0。（主对角线：a[0][0]、a[1][1]、…）",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[4][4];\n    int i, j;\n    for (i = 0; i < 4; i++) {\n        for (j = 0; j < 4; j++) {\n            if (i == j)\n                a[i][j] = 1;\n            else\n                a[i][j] = 0;\n        }\n    }\n    printf(\"数组为：\\n\");\n    for (i = 0; i < 4; i++) {\n        for (j = 0; j < 4; j++)\n            printf(\"%d \", a[i][j]);\n        printf(\"\\n\");\n    }\n    return 0;\n}"
 },
 {
  "id": 78,
  "t": "题库2-第39题",
  "q": "从键盘输入一个元素值不大于10的 3×3 的数组，计算其所有元素的乘积并输出。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[3][3];\n    int i, j;\n    long long product = 1;\n    printf(\"请输入3×3的数组元素（元素值不大于10）：\\n\");\n    for (i = 0; i < 3; i++) {\n        for (j = 0; j < 3; j++) {\n            scanf(\"%d\", &a[i][j]);\n            product *= a[i][j];\n        }\n    }\n    printf(\"所有元素的乘积为：%lld\\n\", product);\n    return 0;\n}"
 },
 {
  "id": 79,
  "t": "题库2-第40题",
  "q": "定义一个 5×2 的二维数组，找出每一列中的最小值，输出列号、行号及对应最小值。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[5][2] = {\n        {3, 8},\n        {9, 2},\n        {6, 5},\n        {1, 7},\n        {4, 10}\n    };\n    int i, j, min, minRow;\n    for (j = 0; j < 2; j++) {\n        min = a[0][j];\n        minRow = 0;\n        for (i = 1; i < 5; i++) {\n            if (a[i][j] < min) {\n                min = a[i][j];\n                minRow = i;\n            }\n        }\n        printf(\"第%d列最小值为：%d，行号：%d\\n\", j, min, minRow);\n    }\n    return 0;\n}"
 },
 {
  "id": 80,
  "t": "题库2-第41题",
  "q": "初始化一个 3×3 的数组，判断其是否为对称矩阵（a[i][j] == a[j][i]）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[3][3] = {\n        {1, 2, 3},\n        {2, 5, 6},\n        {3, 6, 9}\n    };\n    int i, j, isSymmetric = 1;\n    for (i = 0; i < 3 && isSymmetric; i++) {\n        for (j = 0; j < 3; j++) {\n            if (a[i][j] != a[j][i]) {\n                isSymmetric = 0;\n                break;\n            }\n        }\n    }\n    if (isSymmetric)\n        printf(\"该矩阵是对称矩阵\\n\");\n    else\n        printf(\"该矩阵不是对称矩阵\\n\");\n    return 0;\n}"
 },
 {
  "id": 81,
  "t": "题库2-第42题",
  "q": "用二维数组存储 5 名学生的 3 门成绩，计算每个学生的总分并输出。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int score[5][3] = {\n        {80, 90, 85},\n        {70, 75, 88},\n        {92, 68, 79},\n        {60, 85, 90},\n        {77, 82, 91}\n    };\n    int i, j, sum;\n    for (i = 0; i < 5; i++) {\n        sum = 0;\n        for (j = 0; j < 3; j++)\n            sum += score[i][j];\n        printf(\"第%d名学生的总分为：%d\\n\", i + 1, sum);\n    }\n    return 0;\n}"
 },
 {
  "id": 82,
  "t": "题库2-第43题",
  "q": "从键盘输入一个 4×4 的数组，将第 2 行和第 4 行的元素交换后打印。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[4][4];\n    int i, j, temp;\n    printf(\"请输入4×4的数组元素：\\n\");\n    for (i = 0; i < 4; i++) {\n        for (j = 0; j < 4; j++)\n            scanf(\"%d\", &a[i][j]);\n    }\n    for (j = 0; j < 4; j++) {\n        temp = a[1][j];\n        a[1][j] = a[3][j];\n        a[3][j] = temp;\n    }\n    printf(\"交换第2行和第4行后的数组为：\\n\");\n    for (i = 0; i < 4; i++) {\n        for (j = 0; j < 4; j++)\n            printf(\"%d \", a[i][j]);\n        printf(\"\\n\");\n    }\n    return 0;\n}"
 },
 {
  "id": 83,
  "t": "题库2-第44题",
  "q": "定义一个 2×3 的数组，计算所有元素的平方和并输出。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[2][3] = {{1, 2, 3}, {4, 5, 6}};\n    int i, j;\n    long long sum = 0;\n    for (i = 0; i < 2; i++) {\n        for (j = 0; j < 3; j++)\n            sum += (long long)a[i][j] * a[i][j];\n    }\n    printf(\"所有元素的平方和为：%lld\\n\", sum);\n    return 0;\n}"
 },
 {
  "id": 84,
  "t": "题库2-第45题",
  "q": "初始化一个 5×5 的数组，将主对角线的元素设为 5，其余为 0（主对角线：a[0][0]、a[1][1]…），（副对角线：a[0][4]、a[1][3]、a[2][2]、a[3][1]、a[4][0]…）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[5][5];\n    int i, j;\n    for (i = 0; i < 5; i++) {\n        for (j = 0; j < 5; j++) {\n            if (i == j)\n                a[i][j] = 5;\n            else\n                a[i][j] = 0;\n        }\n    }\n    printf(\"数组为：\\n\");\n    for (i = 0; i < 5; i++) {\n        for (j = 0; j < 5; j++)\n            printf(\"%d \", a[i][j]);\n        printf(\"\\n\");\n    }\n    return 0;\n}"
 },
 {
  "id": 85,
  "t": "题库2-第46题",
  "q": "用二维数组存储 3×3 的矩阵，计算矩阵中所有偶数的和与奇数的和。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    int i, j, evenSum = 0, oddSum = 0;\n    for (i = 0; i < 3; i++) {\n        for (j = 0; j < 3; j++) {\n            if (a[i][j] % 2 == 0)\n                evenSum += a[i][j];\n            else\n                oddSum += a[i][j];\n        }\n    }\n    printf(\"所有偶数的和为：%d\\n\", evenSum);\n    printf(\"所有奇数的和为：%d\\n\", oddSum);\n    return 0;\n}"
 },
 {
  "id": 86,
  "t": "题库2-第47题",
  "q": "从键盘输入一个 3×5 的数组，打印其中所有能被 3 整除的元素及其位置（行，列）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[3][5];\n    int i, j;\n    printf(\"请输入3×5的数组元素：\\n\");\n    for (i = 0; i < 3; i++) {\n        for (j = 0; j < 5; j++)\n            scanf(\"%d\", &a[i][j]);\n    }\n    printf(\"能被3整除的元素及其位置：\\n\");\n    for (i = 0; i < 3; i++) {\n        for (j = 0; j < 5; j++) {\n            if (a[i][j] % 3 == 0)\n                printf(\"元素 %d 位于（第%d行，第%d列）\\n\", a[i][j], i, j);\n        }\n    }\n    return 0;\n}"
 },
 {
  "id": 87,
  "t": "题库2-第48题",
  "q": "定义两个 2×2 的矩阵，计算它们的乘积（矩阵乘法：c[i][j] = a[i][0]*b[0][j] + a[i][1]*b[1][j]）。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[2][2] = {{1, 2}, {3, 4}};\n    int b[2][2] = {{5, 6}, {7, 8}};\n    int c[2][2];\n    int i, j, k;\n    for (i = 0; i < 2; i++) {\n        for (j = 0; j < 2; j++) {\n            c[i][j] = 0;\n            for (k = 0; k < 2; k++)\n                c[i][j] += a[i][k] * b[k][j];\n        }\n    }\n    printf(\"矩阵乘积为：\\n\");\n    for (i = 0; i < 2; i++) {\n        for (j = 0; j < 2; j++)\n            printf(\"%d \", c[i][j]);\n        printf(\"\\n\");\n    }\n    return 0;\n}"
 },
 {
  "id": 88,
  "t": "题库2-第49题",
  "q": "初始化一个 4×3 的数组，将每一列的元素按从小到大排序后打印。",
  "a": "#include <stdio.h>\nint main(void)\n{\n    int a[4][3] = {\n        {9, 2, 7},\n        {4, 8, 1},\n        {6, 3, 5},\n        {2, 10, 12}\n    };\n    int i, j, k, temp;\n    for (j = 0; j < 3; j++) {\n        for (i = 0; i < 3; i++) {\n            for (k = 0; k < 3 - i; k++) {\n                if (a[k][j] > a[k + 1][j]) {\n                    temp = a[k][j];\n                    a[k][j] = a[k + 1][j];\n                    a[k + 1][j] = temp;\n                }\n            }\n        }\n    }\n    printf(\"每一列从小到大排序后的数组为：\\n\");\n    for (i = 0; i < 4; i++) {\n        for (j = 0; j < 3; j++)\n            printf(\"%d \", a[i][j]);\n        printf(\"\\n\");\n    }\n    return 0;\n}"
 }
] };
