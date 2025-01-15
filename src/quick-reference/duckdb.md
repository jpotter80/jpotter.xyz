---
theme: [deep-space, wide]
title: Quick Reference
toc: true,
---

<body>

# DuckDB CLI and Observable Framework Reference Guide

---

## DuckDB CLI Commands

### Starting DuckDB

Basic CLI startup:
```bash
# Start with new in-memory database
duckdb

# Open existing database
duckdb database.db

# Start with specific config
duckdb -readonly database.db
```

### Essential Dot Commands

```echo sql
-- Show all dot commands
.help

-- Exit CLI
.exit

-- Show tables
.tables

-- Show schemas
.schemas

-- Show table structure
.schema TABLE_NAME

-- Show database configuration
.show

-- Enable timing of queries
.timer on/off

-- Import data
.import FILE_PATH TABLE_NAME

-- Export data
.export TABLE_NAME FILE_PATH

-- Load extension
.load extension_name

-- List installed extensions
.extensions
```

### Query Output Formatting

```echo sql
-- Set output mode
.mode FORMAT
-- Available formats: ascii, csv, column, html, insert, json, line, list, markdown, table, tabs

-- Set headers on/off
.headers on/off

-- Set column separator
.separator STRING

-- Set null display string
.nullvalue STRING
```

---

## CLI Configuration

### Memory Settings

```echo sql
-- Set memory limit
SET memory_limit='4GB';

-- Set temp directory
SET temp_directory='/path/to/temp';
```

### Query Settings

```echo sql
-- Enable parallel execution
SET enable_progress_bar=true;

-- Set threads
SET threads=4;

-- Enable profiling
SET enable_profiling=true;
```

---

## File Operations

### CSV Operations

```echo sql
-- Import CSV
COPY table_name FROM 'file.csv' (HEADER, DELIMITER ',');

-- Export CSV
COPY table_name TO 'output.csv' (HEADER, DELIMITER ',');

-- Read CSV directly
SELECT * FROM read_csv_auto('file.csv');
```

### Parquet Operations

```echo sql
-- Import Parquet
CREATE TABLE table_name AS SELECT * FROM parquet_scan('file.parquet');

-- Export Parquet
COPY table_name TO 'output.parquet' (FORMAT PARQUET);
```

---

## Query Execution

### Transaction Control

```echo sql
-- Start transaction
BEGIN TRANSACTION;

-- Commit transaction
COMMIT;

-- Rollback transaction
ROLLBACK;
```

### Query Profiling

```echo sql
-- Enable profiling
PRAGMA enable_profiling;

-- Show last profile
PRAGMA show_profiling;
```

---

## Observable Framework Integration

### Basic Setup

```echo js
// Import DuckDB
import * as duckdb from "npm:@duckdb/duckdb-wasm";
import {DuckDBClient} from "npm:@observablehq/duckdb";

// Create client with table
const db = DuckDBClient.of({
  tableName: FileAttachment("data.parquet")
});
```

### Query Execution Methods

```echo js
// Using sql tagged template
const result = await db.sql`
  SELECT * FROM tableName 
  WHERE column > 10
`;

// Using query method
const result = await db.query("SELECT * FROM tableName");

// Using queryRow for single row
const row = await db.queryRow("SELECT COUNT(*) FROM tableName");
```

### Configuration in Observable Framework

```echo js
// Framework configuration
export default {
  duckdb: {
    extensions: {
      // Enable with default settings
      spatial: true,
      
      // Enable with custom settings
      json: {
        source: "core",
        install: true,
        load: true
      },
      
      // Install but don't load
      h3: false
    }
  }
};
```

### Working with Extensions

```echo js
// Create client with specific extensions
const db = await DuckDBClient.of({}, {
  extensions: ["spatial", "json"]
});

// Check loaded extensions
await db.sql`
  SELECT * FROM duckdb_extensions()
  WHERE loaded = true
`;
```

### File Attachments

```echo js
// Working with various file types
const db = DuckDBClient.of({
  csv_data: FileAttachment("data.csv"),
  parquet_data: FileAttachment("data.parquet"),
  json_data: FileAttachment("data.json")
});

// Using in queries
const result = await db.sql`
  SELECT * FROM csv_data
  JOIN parquet_data USING (id)
`;
```

---

## Extensions Management

### Core Extensions

```echo sql
-- Load core extension
LOAD 'json';
LOAD 'spatial';

-- Install extension
INSTALL 'spatial';

-- Load and install
LOAD 'spatial';
```

### Extension Configuration

In Observable Framework:
```echo js
export default {
  duckdb: {
    extensions: {
      // Core extensions
      json: true,
      spatial: true,
      
      // Community extensions
      h3: {
        source: "community",
        install: true,
        load: true
      },
      
      // Custom repository
      custom_ext: {
        source: "https://custom-repo.com/extensions",
        install: true,
        load: true
      }
    }
  }
};
```

### Common Extensions and Use Cases

1. **spatial**: Geographic operations
```echo sql
SELECT ST_GeomFromText('POINT(0 0)');
```

2. **json**: JSON handling
```echo sql
SELECT json_extract('{"a": 1}', '$.a');
```

3. **httpfs**: Remote file access
```echo sql
SELECT * FROM parquet_scan('s3://bucket/file.parquet');
```

### Best Practices

1. **Extension Loading**:
   - Load extensions at startup
   - Verify extension loading with `duckdb_extensions()`
   - Handle dependencies between extensions

2. **Performance**:
   - Use appropriate file formats (Parquet preferred)
   - Enable parallel execution when possible
   - Monitor memory usage

3. **Error Handling**:
   - Check extension availability before use
   - Handle loading failures gracefully
   - Verify data compatibility

4. **Security**:
   - Use read-only mode when appropriate
   - Validate file paths
   - Control extension access

---


</body>

<style>

a[href] {
  color: #7fc8b6;
}

</style>
