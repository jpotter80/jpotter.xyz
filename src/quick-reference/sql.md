---
theme: [deep-space, wide]
title: Quick Reference
toc: true,
---

<body>

# Practical SQL Guide

Visit <a href="https://www.w3schools.com/sql/default.asp">W3 schools</a> for tutorials

---

## Basic Query Structure

### SELECT Statement Fundamentals
```echo sql
-- Basic SELECT syntax
SELECT column1, column2
FROM table_name
WHERE condition
GROUP BY column1
HAVING group_condition
ORDER BY column1 [ASC|DESC]
LIMIT number;

-- Select all columns
SELECT * FROM employees;

-- Select specific columns
SELECT first_name, last_name, salary 
FROM employees;

-- Select with alias
SELECT 
    first_name AS name,
    salary * 12 AS annual_salary
FROM employees;
```

### WHERE Clause Conditions
```echo sql
-- Basic comparison operators
SELECT * FROM products
WHERE price > 100;

-- Multiple conditions
SELECT * FROM employees
WHERE department = 'Sales'
AND salary > 50000;

-- IN operator
SELECT * FROM orders
WHERE status IN ('Pending', 'Shipped');

-- BETWEEN operator
SELECT * FROM products
WHERE price BETWEEN 10 AND 50;

-- LIKE operator for pattern matching
SELECT * FROM customers
WHERE email LIKE '%@gmail.com';
```

---

## Joins and Relationships

### Types of Joins
```echo sql
-- INNER JOIN
SELECT 
    orders.order_id,
    customers.customer_name,
    orders.order_date
FROM orders
INNER JOIN customers 
    ON orders.customer_id = customers.customer_id;

-- LEFT JOIN
SELECT 
    employees.employee_name,
    departments.department_name
FROM employees
LEFT JOIN departments 
    ON employees.department_id = departments.department_id;

-- RIGHT JOIN
SELECT 
    products.product_name,
    categories.category_name
FROM products
RIGHT JOIN categories 
    ON products.category_id = categories.category_id;

-- FULL OUTER JOIN
SELECT 
    students.student_name,
    courses.course_name
FROM students
FULL OUTER JOIN enrollments 
    ON students.student_id = enrollments.student_id
FULL OUTER JOIN courses 
    ON enrollments.course_id = courses.course_id;
```

### Multiple Joins
```echo sql
-- Joining multiple tables
SELECT 
    o.order_id,
    c.customer_name,
    p.product_name,
    oi.quantity,
    oi.unit_price
FROM orders o
INNER JOIN customers c 
    ON o.customer_id = c.customer_id
INNER JOIN order_items oi 
    ON o.order_id = oi.order_id
INNER JOIN products p 
    ON oi.product_id = p.product_id;
```

---

## Aggregate Functions

### Basic Aggregation
```echo sql
-- Common aggregate functions
SELECT 
    COUNT(*) as total_records,
    SUM(amount) as total_amount,
    AVG(amount) as average_amount,
    MAX(amount) as highest_amount,
    MIN(amount) as lowest_amount
FROM transactions;

-- Grouping with aggregates
SELECT 
    department,
    COUNT(*) as employee_count,
    AVG(salary) as avg_salary
FROM employees
GROUP BY department;

-- Having clause with aggregates
SELECT 
    department,
    COUNT(*) as employee_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
```

## Subqueries

### Types of Subqueries
```echo sql
-- Scalar subquery
SELECT 
    product_name,
    price,
    (SELECT AVG(price) FROM products) as avg_price
FROM products;

-- Correlated subquery
SELECT 
    department,
    employee_name,
    salary
FROM employees e1
WHERE salary > (
    SELECT AVG(salary)
    FROM employees e2
    WHERE e1.department = e2.department
);

-- IN clause with subquery
SELECT * FROM orders
WHERE customer_id IN (
    SELECT customer_id
    FROM customers
    WHERE country = 'USA'
);
```

---

## Data Modification

### INSERT Statements
```echo sql
-- Single row insert
INSERT INTO employees (first_name, last_name, salary)
VALUES ('John', 'Doe', 50000);

-- Multiple row insert
INSERT INTO employees (first_name, last_name, salary)
VALUES 
    ('Jane', 'Smith', 60000),
    ('Bob', 'Johnson', 55000);

-- Insert from select
INSERT INTO employee_archive
SELECT * FROM employees
WHERE termination_date IS NOT NULL;
```

### UPDATE Statements
```echo sql
-- Basic update
UPDATE employees
SET salary = 60000
WHERE employee_id = 100;

-- Update with multiple columns
UPDATE products
SET 
    price = price * 1.1,
    last_modified = CURRENT_TIMESTAMP
WHERE category = 'Electronics';

-- Update with joins
UPDATE orders o
INNER JOIN customers c 
    ON o.customer_id = c.customer_id
SET o.status = 'Priority'
WHERE c.customer_type = 'Premium';
```

### DELETE Statements
```echo sql
-- Basic delete
DELETE FROM orders
WHERE order_date < '2020-01-01';

-- Delete with joins
DELETE orders
FROM orders
INNER JOIN customers 
    ON orders.customer_id = customers.customer_id
WHERE customers.status = 'Inactive';
```

---

## Table Operations

### CREATE TABLE
```echo sql
-- Create new table
CREATE TABLE employees (
    employee_id INTEGER PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    hire_date DATE DEFAULT CURRENT_DATE,
    salary DECIMAL(10,2),
    department_id INTEGER,
    FOREIGN KEY (department_id) 
        REFERENCES departments(department_id)
);

-- Create table from select
CREATE TABLE employee_summary AS
SELECT 
    department,
    COUNT(*) as employee_count,
    AVG(salary) as avg_salary
FROM employees
GROUP BY department;
```

### ALTER TABLE
```echo sql
-- Add column
ALTER TABLE employees
ADD COLUMN phone_number VARCHAR(20);

-- Modify column
ALTER TABLE employees
ALTER COLUMN salary SET DEFAULT 50000;

-- Add constraint
ALTER TABLE employees
ADD CONSTRAINT salary_check 
CHECK (salary >= 0);
```

---

## Common Table Expressions (CTEs)

### Basic CTEs
```echo sql
-- Simple CTE
WITH dept_stats AS (
    SELECT 
        department,
        COUNT(*) as emp_count,
        AVG(salary) as avg_salary
    FROM employees
    GROUP BY department
)
SELECT *
FROM dept_stats
WHERE emp_count > 10;

-- Multiple CTEs
WITH dept_stats AS (
    SELECT 
        department,
        COUNT(*) as emp_count,
        AVG(salary) as avg_salary
    FROM employees
    GROUP BY department
),
high_salary_depts AS (
    SELECT department
    FROM dept_stats
    WHERE avg_salary > 60000
)
SELECT e.*
FROM employees e
INNER JOIN high_salary_depts h 
    ON e.department = h.department;
```

---

## Window Functions

### Basic Window Functions
```echo sql
-- Row number
SELECT 
    department,
    employee_name,
    salary,
    ROW_NUMBER() OVER (
        PARTITION BY department 
        ORDER BY salary DESC
    ) as salary_rank
FROM employees;

-- Running totals
SELECT 
    order_date,
    amount,
    SUM(amount) OVER (
        ORDER BY order_date
    ) as running_total
FROM orders;

-- Moving averages
SELECT 
    order_date,
    amount,
    AVG(amount) OVER (
        ORDER BY order_date
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) as moving_avg
FROM orders;
```

---

## Best Practices

### Query Optimization
1. Use specific column names instead of SELECT *
2. Add appropriate indexes for frequently queried columns
3. Use JOINs instead of subqueries where possible
4. Use EXISTS instead of IN for better performance with large datasets
5. Avoid SELECT DISTINCT when possible
6. Use appropriate data types for columns

### Code Style
1. Use meaningful table and column names
2. Capitalize SQL keywords
3. Use appropriate indentation
4. Add comments for complex queries
5. Break long queries into multiple lines
6. Use meaningful aliases

### Security
1. Always use parameterized queries
2. Avoid dynamic SQL when possible
3. Use appropriate permissions
4. Validate input data
5. Use transactions for data consistency

---


</body>

<style>

a[href] {
  color: #7fc8b6;
}

</style>