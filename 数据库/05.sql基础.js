/*
1. SQL：结构化查询语言，功能包括数据查询、操纵、定义和控制。
    定义数据结构：CREATE ALTER DROP
    检索：SELECT
    修改：INSERT UPDATE DELETE
    数据库用户权限管理：GRANT REVOKE
2. 创建数据表：
    CREATE TABLE Student(
        ID varchar(20) not null, // 建议10 20 50
        age int,
        primary key (ID) // 设主键
    )
3. 修改  ALTER TABLE Student
            改表名 RENAME TO StudentInfo;
            增加列 ADD COLUMN sex varchar(10);
            删除列 DROP COLUMN age;
            修改列 CHANGE COLUMN name stnname varchar(20);
    删除表 DROP TABLE StudentInfo;
4. 单表查询
    SELECT 查什么属性 *全部
    FROM 哪个表
    WHERE 条件
    GROUP BY 对属性分组
    HAVING 对分组后的属性进行条件筛选
    ORDER BY 对属性排序
    LIMIT 返回前多少条记录
    执行顺序：FROM WHERE GROUPBY HAVING SELECT ORDERBY LIMIT
    查询表达式：SELECT Sname, 2026-Sage FROM Student [As] S；如果对表起别名，select可以写S.Sname
    列别名：SELECT 2026-Sage [As] birth; 此时WHERE不能写birth
    去重：SELECT DISTINCT Sname FROM Student;
5. WHERE
    比较：= > < >= <= != <> !> !< NOT+上述-----------WHERE Sdept = 'CS'
    确定范围：BETWEEN...AND...; NOT BETWEEN...AND...-WHERE Age BETWEEN 18 AND 25
    确定集合：IN (...); NOT IN (...)-----------------WHERE Sdept IN ('CS', 'Math')
    字符匹配：LIKE; NOT LIKE
        %: 任意长度字符串；a%b: a开头b结尾任意长
        _: 任意单个字符
        \% \_: 转义字符------------------------------WHERE Sname LIKE 'A%';
    空值：IS NULL; IS NOT NULL-----------------------WHERE Grade IS NULL; IS不可以用=代替
    逻辑运算：AND OR NOT
        AND优先高于OR；括号改变优先级------------------WHERE Sdept = 'CS' And Sage < 20
6. 聚集函数：相当于内置方法，用于SELECT HAVING，不可用于WHERE
    COUNT(*) 统计行数；COUNT(属性) 统计非空值行数
    SUM(属性) 求和；AVG(属性) 平均值；MAX(属性) 最大值；MIN(属性) 最小值
7. 分组函数GROUP BY: 对属性进行分组，值相等为一组；分组后，聚集函数作用于每个组；未分组，聚集函数作用于整个表
    SELECT Cno, COUNT(Sno)
    FROM SC
    GROUP BY Cno
    HAVING COUNT(Sno) > 2;
    得到
        Cno Count(Sno)
        1   22
        2   33
        3   44
    HAVING作用于组，WHERE作用于表
8. 排序：
    SELECT Sno, Grade
    FRON SC
    WHERE Cno = '3'
    ORDER BY Grade DESC;  // 降序，默认升序
    多属性排序：ORDER BY Grade DESC, Sno ASC; 由前到后优先级依次降低
*/