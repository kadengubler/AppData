#project #itb [PRD](https://docs.google.com/document/d/16CCuNg4pcOtRxK72W6sg6B3whwk5FyKBWqHRppt6yR8/edit#heading=h.7ueoyja6ijay)


2024-02-16
- Find out who manages LC users #dan
- Potential quick wins for Q1
  - Limit access by client - ask #puneet what it would take to get away from all or nothing
  - Define exception process
  - Define Security recommendation
  * [ ] Redefine onboarding process to avoid giving permissions to all new users with #noah
  * [ ] Find out what admin access means. What can they do in client site? #puneet
  * [ ] Remove people that don’t use feature
* [ ] Confirm the data accuracy.
  * [ ] Make it consumable by #bryson
  * [ ] License for PBI? #dan
* [ ] Schedule meeting with Bryson for next week (2024-02-16)
* [ ] Create ticket for team to build report



---
# SQL Queries
```sql
SELECT  
    u.USERNAME, 
    e.NAME_FULL AS Name, 
    d.NAME AS Department,
	t.NAME AS Designation, 
    em.NAME_FULL AS Manager, 
    MAX(CASE WHEN m.TITLE = 'Auto Login - Entrata ( For Client only )' THEN 'yes' ELSE 'no' END) AS "Client Login",
    MAX(CASE WHEN m.TITLE = 'Has Admin Entrata Access ( For Client only )' THEN 'yes' ELSE 'no' END) AS "Client Login - Admin"
FROM 
    users u 
JOIN 
    employees e ON u.EMPLOYEE_ID = e.ID
JOIN 
    user_permissions up ON u.EMPLOYEE_ID = up.USER_ID
JOIN 
    ps_modules m ON up.PS_MODULE_ID = m.PS_MODULE_ID
JOIN
    departments d ON e.DEPARTMENT_ID = d.ID 
JOIN 
    designations t ON e.DESIGNATION_ID = t.ID
JOIN 
		employees em ON e.REPORTING_MANAGER_ID = em.ID
WHERE 
    m.ID IN (415,2151)
GROUP BY
    u.USERNAME, e.NAME_FULL, d.NAME, em.NAME_FULL, t.NAME

```


```sql
SELECT
		u.username,
		u.employee_id,
        e.name_first,
        e.name_last,
        d.name AS department,
		t.NAME AS designation
FROM users u
JOIN employees e ON e. ID = u.employee_id
JOIN departments d ON d. ID = e.department_id
JOIN designations t ON e.DESIGNATION_ID = t.ID

```


```sql
SELECT
		u.username,
		u.employee_id,
        e.name_first,
        e.name_last,
        d.name AS department,
		t.NAME AS designation
FROM users u
JOIN employees e ON e. ID = u.employee_id
JOIN departments d ON d. ID = e.department_id
JOIN designations t ON e.DESIGNATION_ID = t.ID


select * from users limit 100


SELECT table_name FROM information_schema.tables WHERE table_type = 'BASE TABLE' AND table_name LIKE '%company%';

select c.id, c.company_name, s.name, s.description
from clients c
join company_status_types s ON c.company_status_type_id = s.id

select * from clients
select * from company_status_types




```
