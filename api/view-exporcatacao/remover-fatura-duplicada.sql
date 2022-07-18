
-- https://youtu.be/NoimKe9imhs
-- 3650 TOTAL
-- 479 DUPLICADOS
-- https://www.mysqltutorial.org/mysql-delete-duplicate-rows/

DELETE FROM fatura
where id IN (
    select F2.id from fatura as F2 
    group by F2.fatura_id
    having Count(F2.fatura_id)>1 
    ORDER BY id ASC    
)