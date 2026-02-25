/*
 * SQL 基础知识点练习题
 * 数据表：Student(Sno, Sname, Age, Sex)
 *        Course(Cno, Cname, Credit)
 *        SC(Sno, Cno, Grade)
 * ================================================
 */

// ============ 第一部分：DDL — 数据定义语言 ============

/*
【题1】CREATE TABLE
创建一张新表 Teacher，包含以下列：
  - Tno：VARCHAR(20)，非空，主键
  - Tname：VARCHAR(50)
  - Title：VARCHAR(20)（职称）
  - Dept：VARCHAR(50)（所属院系）
*/
// 你的答案：
/*
答：
CREATE TABLE Teacher (
    Tno   VARCHAR(20) NOT NULL,
    Tname VARCHAR(50),
    Title VARCHAR(20),
    Dept  VARCHAR(50),
    PRIMARY KEY (Tno)
);
*/


/*
【题2】ALTER TABLE — 增加列
在 Student 表中增加一列 Email，类型为 VARCHAR(100)
*/
// 你的答案：
/*
答：
ALTER TABLE Student
ADD COLUMN Email VARCHAR(100);
*/


/*
【题3】ALTER TABLE — 删除列
将 Student 表中的 Email 列删除
*/
// 你的答案：
/*
答：
ALTER TABLE Student
DROP COLUMN Email;
*/


/*
【题4】ALTER TABLE — 修改列
将 Student 表中 Sname 列的类型改为 VARCHAR(100)，列名同时改为 StudentName
*/
// 你的答案：
/*
答：
ALTER TABLE Student
CHANGE COLUMN Sname StudentName VARCHAR(100);
*/


/*
【题5】ALTER TABLE — 改表名
将 Student 表改名为 StudentInfo
*/
// 你的答案：
/*
答：
ALTER TABLE Student
RENAME TO StudentInfo;
*/


/*
【题6】DROP TABLE
删除 Teacher 表
*/
// 你的答案：
/*
答：
DROP TABLE Teacher;
*/


// ============ 第二部分：基本 SELECT 查询 ============

/*
【题7】SELECT * — 全列查询
查询 Student 表中所有学生的全部信息
*/
// 你的答案：
/*
答：
SELECT *
FROM Student;
*/


/*
【题8】SELECT 指定列
查询所有学生的学号和姓名
*/
// 你的答案：
/*
答：
SELECT Sno, Sname
FROM Student;
*/


/*
【题9】查询表达式与列别名
查询所有学生的姓名，并计算其出生年份（假设当前年份为2026），出生年份列起别名 BirthYear
*/
// 你的答案：
/*
答：
SELECT Sname, 2026 - Age AS BirthYear
FROM Student;
*/


/*
【题10】表别名
给 Student 表起别名 S，查询所有学生的学号和姓名
（用别名访问列）
*/
// 你的答案：
/*
答：
SELECT S.Sno, S.Sname
FROM Student AS S;
*/


/*
【题11】DISTINCT 去重
查询 SC 表中出现过的所有课程号（去重）
*/
// 你的答案：
/*
答：
SELECT DISTINCT Cno
FROM SC;
*/


/*
【题12】DISTINCT 多列去重
查询 Student 表中出现过的所有（性别, 年龄）组合（去重）
*/
// 你的答案：
/*
答：
SELECT DISTINCT Sex, Age
FROM Student;
*/


// ============ 第三部分：WHERE 条件 ============

/*
【题13】比较运算符
查询年龄大于20岁的所有学生信息
*/
// 你的答案：
/*
答：
SELECT *
FROM Student
WHERE Age > 20;
*/


/*
【题14】不等于
查询所有非女生的学生学号和姓名
（写出两种等价的不等于写法：!= 和 <>）
*/
// 你的答案：
/*
答：
SELECT Sno, Sname
FROM Student
WHERE Sex != '女';

-- 等价写法：
SELECT Sno, Sname
FROM Student
WHERE Sex <> '女';
*/


/*
【题15】BETWEEN...AND
查询年龄在 19 到 21 岁之间（含边界）的学生信息
再写出取反（NOT BETWEEN）的版本
*/
// 你的答案：
/*
答：
SELECT *
FROM Student
WHERE Age BETWEEN 19 AND 21;

-- 取反：
SELECT *
FROM Student
WHERE Age NOT BETWEEN 19 AND 21;
*/


/*
【题16】IN
查询学号为 'S01'、'S03'、'S05' 的学生姓名和年龄
再写出排除这些学号的版本（NOT IN）
*/
// 你的答案：
/*
答：
SELECT Sname, Age
FROM Student
WHERE Sno IN ('S01', 'S03', 'S05');

-- 取反：
SELECT Sname, Age
FROM Student
WHERE Sno NOT IN ('S01', 'S03', 'S05');
*/


/*
【题17】LIKE — % 通配符
查询姓名以"张"开头的所有学生信息
*/
// 你的答案：
/*
答：
SELECT *
FROM Student
WHERE Sname LIKE '张%';
*/


/*
【题18】LIKE — _ 通配符
查询姓名恰好为两个字的学生信息
（提示：一个 _ 匹配一个任意字符）
*/
// 你的答案：
/*
答：
SELECT *
FROM Student
WHERE Sname LIKE '__';
*/


/*
【题19】LIKE — 组合通配符
查询课程名中包含"数据"二字的所有课程信息
*/
// 你的答案：
/*
答：
SELECT *
FROM Course
WHERE Cname LIKE '%数据%';
*/


/*
【题20】IS NULL / IS NOT NULL
查询 SC 表中成绩为空（尚未评分）的选课记录
再写出成绩不为空的版本
注意：不能用 = NULL，必须用 IS NULL
*/
// 你的答案：
/*
答：
SELECT *
FROM SC
WHERE Grade IS NULL;

-- 成绩不为空：
SELECT *
FROM SC
WHERE Grade IS NOT NULL;
*/


/*
【题21】AND
查询年龄 >= 20 且性别为"女"的学生信息
*/
// 你的答案：
/*
答：
SELECT *
FROM Student
WHERE Age >= 20 AND Sex = '女';
*/


/*
【题22】OR
查询年龄为19岁或性别为"女"的学生信息
*/
// 你的答案：
/*
答：
SELECT *
FROM Student
WHERE Age = 19 OR Sex = '女';
*/


/*
【题23】NOT
查询年龄不大于20岁的学生信息（NOT 的用法）
*/
// 你的答案：
/*
答：
SELECT *
FROM Student
WHERE NOT Age > 20;
*/


/*
【题24】AND / OR 优先级
查询（年龄=20 或 年龄=21）且 性别为"男"的学生信息
提示：OR 优先级低于 AND，需要加括号
*/
// 你的答案：
/*
答：
SELECT *
FROM Student
WHERE (Age = 20 OR Age = 21) AND Sex = '男';
*/


// ============ 第四部分：聚集函数 ============

/*
【题25】COUNT(*) — 统计总行数
统计 Student 表一共有多少名学生
*/
// 你的答案：
/*
答：
SELECT COUNT(*)
FROM Student;
*/


/*
【题26】COUNT(列名) — 统计非空行数
统计 SC 表中已登记成绩（Grade 非空）的选课记录数
（说明 COUNT(*) 和 COUNT(Grade) 的区别）
*/
// 你的答案：
/*
答：
SELECT COUNT(Grade)
FROM SC;

-- 区别：COUNT(*) 统计所有行（含NULL），COUNT(Grade) 只统计 Grade 非空的行
*/


/*
【题27】SUM / AVG
计算 SC 表中所有成绩的总和与平均值
*/
// 你的答案：
/*
答：
SELECT SUM(Grade), AVG(Grade)
FROM SC;
*/


/*
【题28】MAX / MIN
查询 SC 表中成绩的最高分和最低分
*/
// 你的答案：
/*
答：
SELECT MAX(Grade), MIN(Grade)
FROM SC;
*/


/*
【题29】聚集函数不可用于 WHERE
下面这条语句 ❌ 错误，说明原因，并改写为正确形式
  SELECT * FROM SC WHERE Grade > AVG(Grade);
*/
// 你的答案：
/*
答：
错误原因：聚集函数（如 AVG）不可直接用于 WHERE 子句，WHERE 在分组之前执行，此时聚集结果尚未计算。

正确写法（用子查询）：
SELECT *
FROM SC
WHERE Grade > (
    SELECT AVG(Grade)
    FROM SC
);
*/


// ============ 第五部分：GROUP BY / HAVING ============

/*
【题30】GROUP BY 基础
统计每门课程的选课人数，显示：课程号、选课人数
*/
// 你的答案：
/*
答：
SELECT Cno, COUNT(Sno) AS StudentCount
FROM SC
GROUP BY Cno;
*/


/*
【题31】GROUP BY + 多聚集函数
统计每门课程的选课人数和平均成绩，显示：课程号、选课人数、平均成绩
*/
// 你的答案：
/*
答：
SELECT Cno, COUNT(Sno) AS StudentCount, AVG(Grade) AS AvgGrade
FROM SC
GROUP BY Cno;
*/


/*
【题32】GROUP BY + WHERE
统计男生中每门课程的平均成绩
提示：先用 WHERE 过滤出男生，再 GROUP BY
*/
// 你的答案：
/*
答：
SELECT SC.Cno, AVG(SC.Grade) AS AvgGrade
FROM Student, SC
WHERE Student.Sno = SC.Sno AND Student.Sex = '男'
GROUP BY SC.Cno;
*/


/*
【题33】HAVING — 对分组结果筛选
查询选课人数超过 1 人的课程号及其选课人数
（说明 HAVING 和 WHERE 的本质区别）
*/
// 你的答案：
/*
答：
SELECT Cno, COUNT(Sno) AS StudentCount
FROM SC
GROUP BY Cno
HAVING COUNT(Sno) > 1;

-- 区别：WHERE 在分组前过滤行，HAVING 在分组后过滤组；
--      WHERE 中不可使用聚集函数，HAVING 中可以。
*/


/*
【题34】GROUP BY + HAVING + WHERE 综合
统计年龄 >= 19 岁的学生中，每个学生的选课数，
只显示选课数 >= 2 的学生学号及其选课数
*/
// 你的答案：
/*
答：
SELECT SC.Sno, COUNT(SC.Cno) AS CourseCount
FROM Student, SC
WHERE Student.Sno = SC.Sno AND Student.Age >= 19
GROUP BY SC.Sno
HAVING COUNT(SC.Cno) >= 2;
*/


// ============ 第六部分：ORDER BY / LIMIT ============

/*
【题35】ORDER BY — 单列排序
查询 SC 表所有记录，按成绩从高到低排序（降序）
*/
// 你的答案：
/*
答：
SELECT *
FROM SC
ORDER BY Grade DESC;
*/


/*
【题36】ORDER BY — 默认升序
查询所有学生的信息，按年龄从小到大排序（默认升序）
*/
// 你的答案：
/*
答：
SELECT *
FROM Student
ORDER BY Age;
*/


/*
【题37】ORDER BY — 多列排序
查询 SC 表，先按成绩降序，成绩相同时再按学号升序排序
*/
// 你的答案：
/*
答：
SELECT *
FROM SC
ORDER BY Grade DESC, Sno ASC;
*/


/*
【题38】LIMIT — 返回前 N 条
查询成绩最高的前 3 条选课记录（学号、课程号、成绩）
*/
// 你的答案：
/*
答：
SELECT Sno, Cno, Grade
FROM SC
ORDER BY Grade DESC
LIMIT 3;
*/


/*
【题39】LIMIT + OFFSET — 分页
查询 SC 表按成绩降序排列后，第 2 页的结果（每页 3 条）
提示：OFFSET = (页码-1) × 每页条数
*/
// 你的答案：
/*
答：
SELECT *
FROM SC
ORDER BY Grade DESC
LIMIT 3 OFFSET 3;
*/


// ============ 第七部分：综合题 ============

/*
【题40】SQL 执行顺序填空
写出以下 SQL 各子句的执行顺序（用数字1~7标注）：
  SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT
*/
// 你的答案：
/*
答：
执行顺序：
  1. FROM       — 确定数据来源
  2. WHERE      — 行级过滤
  3. GROUP BY   — 分组
  4. HAVING     — 组级过滤
  5. SELECT     — 选取列/计算表达式
  6. ORDER BY   — 排序
  7. LIMIT      — 限制返回行数
*/


/*
【题41】综合查询
查询年龄在 18~22 岁之间、姓名不包含"李"字的所有学生，
按年龄升序排列，只返回前 3 条，显示：学号、姓名、年龄、性别
*/
// 你的答案：
/*
答：
SELECT Sno, Sname, Age, Sex
FROM Student
WHERE Age BETWEEN 18 AND 22 AND Sname NOT LIKE '%李%'
ORDER BY Age ASC
LIMIT 3;
*/


/*
【题42】综合 — GROUP BY + HAVING + ORDER BY
统计每位学生的平均成绩，筛选出平均成绩 >= 80 的学生，
按平均成绩从高到低显示：学号、平均成绩
*/
// 你的答案：
/*
答：
SELECT Sno, AVG(Grade) AS AvgGrade
FROM SC
GROUP BY Sno
HAVING AVG(Grade) >= 80
ORDER BY AvgGrade DESC;
*/


/*
【题43】综合 — 易错题分析
以下哪些写法是错误的？说明原因并改正：
  (a) SELECT * FROM Student WHERE COUNT(*) > 5;
  (b) SELECT Sno, AVG(Grade) FROM SC;
  (c) SELECT Sno FROM SC GROUP BY Sno HAVING Grade > 80;
*/
// 你的答案：
/*
答：
(a) ❌ 错误：COUNT(*) 是聚集函数，不能用于 WHERE 子句。
    改正：若要筛选，应用 HAVING，且需配合 GROUP BY。

(b) ❌ 错误（标准SQL中）：SELECT 中出现了非聚集列 Sno 和聚集函数 AVG(Grade)，
    但未写 GROUP BY Sno，会导致歧义。
    改正：SELECT Sno, AVG(Grade) FROM SC GROUP BY Sno;

(c) ❌ 错误：HAVING 子句中使用了非聚集列 Grade，
    HAVING 应对组级聚集结果过滤，而非行级属性。
    改正（筛选平均成绩 > 80）：
    SELECT Sno FROM SC GROUP BY Sno HAVING AVG(Grade) > 80;
    或若要过滤行级条件，应改用 WHERE：
    SELECT DISTINCT Sno FROM SC WHERE Grade > 80;
*/


/*
【题44】综合 — 别名作用范围
以下 SQL 是否报错？说明原因：
  SELECT 2026 - Age AS BirthYear
  FROM Student
  WHERE BirthYear < 2005;
*/
// 你的答案：
/*
答：
❌ 报错。
原因：列别名 BirthYear 在 SELECT 中定义，但 WHERE 子句在 SELECT 之前执行，
此时 BirthYear 尚未被计算/命名，因此无法在 WHERE 中引用别名。

改正方式：在 WHERE 中使用原始表达式，或用子查询/派生表：
SELECT *
FROM (
    SELECT Sno, Sname, 2026 - Age AS BirthYear
    FROM Student
) AS T
WHERE BirthYear < 2005;
*/


// ============ 答题指南 ============
/*
【易错点汇总】
1. 聚集函数（COUNT/SUM/AVG/MAX/MIN）只能用于 SELECT 和 HAVING，不可用于 WHERE
2. GROUP BY 后 SELECT 中只能出现：分组列 + 聚集函数，不能出现其他普通列
3. WHERE 在分组前过滤行；HAVING 在分组后过滤组
4. 列别名不能在 WHERE 中引用（执行顺序：WHERE 先于 SELECT）
5. NULL 值判断必须用 IS NULL / IS NOT NULL，不能用 = NULL
6. LIKE 中 % 匹配任意长度字符串，_ 匹配单个字符；需要匹配 % 或 _ 本身时用 \% \_
7. ORDER BY 默认升序（ASC），降序加 DESC；多列排序按列的先后优先级执行
8. LIMIT n OFFSET m：跳过前 m 条，取 n 条（第 p 页：OFFSET = (p-1)*n）
9. IN (...) 等价于多个 OR 连接的等值条件；NOT IN 需注意列表中不能含 NULL
10. BETWEEN 含两端边界，等价于 >= 低值 AND <= 高值

【SQL 执行顺序口诀】
FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT
（"弗维格·哈赛奥利"：From / Where / GroupBy / Having / Select / OrderBy / LimiT）
*/
