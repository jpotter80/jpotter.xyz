---
theme: [deep-space, wide]
title: Gallery of Work
toc: true,
---

<body>

# Practical Guide to Using DuckDB Locally

---

## Introduction

DuckDB is an embedded analytical database system that provides fast and efficient data processing capabilities. It's designed to handle both small and large datasets with excellent performance, particularly for analytical queries.

<a href="https://duckdb.org/">Visit duckdb.org</a>

---

## Installation

### Python
```python
pip install duckdb
```

### R
```R
install.packages("duckdb")
```

### CLI
Download the appropriate binary for your operating system from the official DuckDB website.

---

## Creating and Managing Databases

### Creating a New Database
```python
import duckdb

# Create a new database (or connect to existing one)
conn = duckdb.connect('my_database.db')

# In-memory database
conn = duckdb.connect(':memory:')
```

### Managing Connections
```python
# Create connection
conn = duckdb.connect('my_database.db')

# Execute queries
conn.execute('CREATE TABLE test (id INTEGER, name VARCHAR)')

# Always close connections when done
conn.close()

# Using context manager (recommended)
with duckdb.connect('my_database.db') as conn:
    conn.execute('CREATE TABLE test (id INTEGER, name VARCHAR)')
```

---

## Working with Tables

### Creating Tables
```echo sql
-- Basic table creation
CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    name VARCHAR,
    department VARCHAR,
    salary DECIMAL(10,2)
);

-- Create table with constraints
CREATE TABLE departments (
    dept_id INTEGER PRIMARY KEY,
    dept_name VARCHAR NOT NULL UNIQUE,
    location VARCHAR
);
```

### Python Implementation
```python
import duckdb

with duckdb.connect('company.db') as conn:
    # Create table
    conn.execute("""
        CREATE TABLE employees (
            id INTEGER PRIMARY KEY,
            name VARCHAR,
            department VARCHAR,
            salary DECIMAL(10,2)
        )
    """)
    
    # Insert data
    conn.execute("""
        INSERT INTO employees (id, name, department, salary)
        VALUES 
            (1, 'John Doe', 'IT', 75000.00),
            (2, 'Jane Smith', 'HR', 65000.00)
    """)
```

---

## Importing Data

### Reading CSV Files
```python
import duckdb

conn = duckdb.connect('analytics.db')

# Direct CSV import into new table
conn.execute("""
    CREATE TABLE sales AS 
    SELECT * FROM read_csv_auto('sales_data.csv')
""")

# Import with specific options
conn.execute("""
    CREATE TABLE customers AS 
    SELECT * FROM read_csv(
        'customers.csv',
        header=True,
        delimiter=',',
        columns={
            'customer_id': 'INTEGER',
            'name': 'VARCHAR',
            'email': 'VARCHAR'
        }
    )
""")

# Reading CSV into existing table
conn.execute("""
    INSERT INTO sales 
    SELECT * FROM read_csv_auto('new_sales.csv')
""")
```

### Reading Parquet Files
```python
# Import Parquet file
conn.execute("""
    CREATE TABLE transactions AS 
    SELECT * FROM read_parquet('transactions.parquet')
""")
```

### Reading JSON Files
```python
# Import JSON file
conn.execute("""
    CREATE TABLE users AS 
    SELECT * FROM read_json_auto('users.json')
""")
```

---

## Basic Queries

### SELECT Queries

```echo sql
-- Basic SELECT
SELECT * FROM employees;

-- Filtered SELECT
SELECT name, salary 
FROM employees 
WHERE department = 'IT' 
  AND salary > 60000;

-- Aggregations
SELECT 
    department,
    COUNT(*) as employee_count,
    AVG(salary) as avg_salary
FROM employees
GROUP BY department
HAVING COUNT(*) > 5
ORDER BY avg_salary DESC;
```

### JOIN Operations

```echo sql
-- Inner JOIN
SELECT 
    e.name,
    d.dept_name,
    e.salary
FROM employees e
JOIN departments d ON e.department = d.dept_name;

-- LEFT JOIN with aggregation
SELECT 
    d.dept_name,
    COUNT(e.id) as employee_count
FROM departments d
LEFT JOIN employees e ON d.dept_name = e.department
GROUP BY d.dept_name;
```

---

## Advanced Features

### Window Functions
```echo sql

-- Row numbers per department
SELECT 
    name,
    department,
    salary,
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) as salary_rank
FROM employees;

-- Running totals
SELECT 
    date,
    amount,
    SUM(amount) OVER (ORDER BY date) as running_total
FROM transactions;
```

### Common Table Expressions (CTEs)

```echo sql
WITH department_stats AS (
    SELECT 
        department,
        AVG(salary) as avg_salary,
        COUNT(*) as emp_count
    FROM employees
    GROUP BY department
)
SELECT 
    e.name,
    e.salary,
    ds.avg_salary,
    (e.salary - ds.avg_salary) as salary_diff
FROM employees e
JOIN department_stats ds ON e.department = ds.department
WHERE e.salary > ds.avg_salary;
```

### User-Defined Functions
```python
import duckdb

# Create a simple UDF
conn.create_function('double_salary', lambda x: x * 2)

# Use the UDF in a query
result = conn.execute("""
    SELECT 
        name,
        salary,
        double_salary(salary) as doubled_salary
    FROM employees
""").fetchall()
```
---


## Best Practices

### Performance Optimization
1. Use appropriate data types for columns
2. Create indexes for frequently queried columns:
```echo sql
CREATE INDEX idx_employee_department ON employees(department);
```

3. Partition large tables when appropriate:
```echo sql
CREATE TABLE sales_partitioned (
    date DATE,
    product_id INTEGER,
    amount DECIMAL(10,2)
) PARTITION BY RANGE (date);
```

### Memory Management
```python
# Set memory limit
conn.execute("SET memory_limit='4GB'")

# Enable parallel processing
conn.execute("SET threads TO 4")
```

### Database Maintenance
```echo sql
-- Analyze table statistics
ANALYZE employees;

-- Vacuum database to reclaim space
VACUUM;
```
---


## Common Use Cases

### Data Analysis Pipeline
```python
import duckdb
import pandas as pd

# Connect to database
conn = duckdb.connect('analytics.db')

# Load and transform data
conn.execute("""
    CREATE TABLE daily_sales AS
    WITH daily_totals AS (
        SELECT 
            date_trunc('day', timestamp) as date,
            product_id,
            SUM(amount) as total_sales
        FROM sales
        GROUP BY 1, 2
    )
    SELECT 
        d.date,
        d.product_id,
        p.product_name,
        d.total_sales,
        LAG(d.total_sales) OVER (
            PARTITION BY d.product_id 
            ORDER BY d.date
        ) as prev_day_sales
    FROM daily_totals d
    JOIN products p ON d.product_id = p.id
""")

# Export results to pandas
df = conn.execute("""
    SELECT * 
    FROM daily_sales 
    ORDER BY date, product_id
""").df()
```

### Time-Series Analysis
```echo sql
WITH daily_metrics AS (
    SELECT 
        date_trunc('day', timestamp) as date,
        COUNT(*) as transaction_count,
        SUM(amount) as total_amount,
        COUNT(DISTINCT customer_id) as unique_customers
    FROM transactions
    GROUP BY 1
)
SELECT 
    date,
    transaction_count,
    total_amount,
    unique_customers,
    AVG(total_amount) OVER (
        ORDER BY date
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) as seven_day_moving_avg
FROM daily_metrics
ORDER BY date;
```
---


</body>

<style>

a[href] {
  color: #7fc8b6;
}

</style>
