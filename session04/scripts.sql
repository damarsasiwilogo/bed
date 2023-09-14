show databases;

show tables;

-- create data

INSERT INTO
    students(
        name,
        description,
        gender,
        height,
        isMarried,
        pocketMoney,
        score,
        birthday,
        lastseen
    )
VALUES (
        'damar',
        'pernah gondrong waktu covid',
        'Men',
        180,
        false,
        40000000,
        99.999,
        DATE('1994-06-12'),
        NOW()
    ), (
        'rizky',
        'penikmat anime',
        'Men',
        170,
        false,
        90000000,
        99.999,
        DATE('2001-01-01'),
        NOW()
    );

-- read data

SELECT DISTINCT * FROM students;

SELECT name, pocketMoney FROM students;

-- read unique data

SELECT distinct NAME, pocketMoney FROM students;

SELECT distinct * FROM students;

select name, pocketMoney from students where nama='damar';

-- update data

update students set height=180, score=95.00 where name='damar';

update students set lastseen=now() where name='ronal';

-- delete data

delete from students where id = 2;

-- sql where clause

select * from students where name not in ('damar');

select * from students where name like '%ar%';

-- sql limit clause

select
    name,
    min(pocketMoney),
    max(pocketMoney),
    sum(pocketMoney)
from students
group by name
having
    sum(pocketMoney) > 12837123
order by
    min(pocketMoney) desc,
    name desc
limit 2
offset 1;