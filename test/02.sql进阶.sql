-- 存储过程
CREATE OR REPLACEMENT PROCEDURE GetTeacherInfo
    (p_tno IN INT, p_tname OUT VARCHAR2, p_salary OUT DECIMAL)
IS
BEGIN
    SELECT tname, salary INTO p_tname, p_salary
    FROM Teacher
    WHERE tec_id = p_tno;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        p_tname := NULL;
        p_salary := NULL;
    WHEN OTHERS THEN
        p_tname := NULL;
        p_salary := NULL;
END GetTeacherInfo;

-- 触发器
CREATE OR REPLACEMENT TRIGGER InsertUserLog
AFTER INSERT
ON User FOR EACH ROW
BEGIN
    INSERT INTO user_logs(user_id, action)
    VALUES (:NEW.user_id, 'INSERT');
END;

-- 视图
CREATE VIEW TeacherPublic AS
    SELECT tec_id, tname, dept FROM Teacher;

-- 索引
CREATE INDEX idx_name ON Stu(name);