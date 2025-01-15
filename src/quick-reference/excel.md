---
theme: [deep-space, wide]
title: Quick Reference
toc: true,
---

<body>

# Excel Reference Guide for Data Analytics

---

## Essential Functions

### Basic Calculations
- `SUM(range)` - Adds all numbers in a range
- `AVERAGE(range)` - Calculates the arithmetic mean
- `COUNT(range)` - Counts cells containing numbers
- `COUNTA(range)` - Counts non-empty cells
- `MAX(range)` - Returns the largest value
- `MIN(range)` - Returns the smallest value

### Common Syntax
```xlsx
=FUNCTION(argument1, [argument2], ...)
- Arguments in square brackets are optional
- Use comma (,) to separate arguments
- Use colon (:) for ranges (A1:A10)
```

---

## Data Cleaning Functions

### Removing Whitespace
- `TRIM(text)` - Removes extra spaces
- `CLEAN(text)` - Removes non-printing characters

### Case Manipulation
- `UPPER(text)` - Converts to uppercase
- `LOWER(text)` - Converts to lowercase
- `PROPER(text)` - Capitalizes first letter of each word

### Data Validation
- `ISNUMBER(value)` - Checks if value is a number
- `ISTEXT(value)` - Checks if value is text
- `ISBLANK(value)` - Checks if cell is empty

### Error Handling
- `IFERROR(value, value_if_error)` - Returns alternative if error
- `IFNA(value, value_if_na)` - Returns alternative if #N/A

---

## Lookup and Reference Functions

### VLOOKUP
```xlsx
=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])
```
Example:
```xlsx
=VLOOKUP("John", A2:C100, 2, FALSE)
```

### INDEX-MATCH
```xlsx
=INDEX(return_array, MATCH(lookup_value, lookup_array, 0))
```
Example:
```xlsx
=INDEX(B2:B100, MATCH("John", A2:A100, 0))
```

### XLOOKUP (Excel 365)
```xlsx
=XLOOKUP(lookup_value, lookup_array, return_array, [missing], [match_mode])
```
Example:
```xlsx
=XLOOKUP("John", A2:A100, B2:B100, "Not Found", 0)
```

---

## Statistical Functions

### Basic Statistics
- `MEDIAN(range)` - Middle value
- `MODE.SNGL(range)` - Most frequent value
- `STDEV.P(range)` - Population standard deviation
- `VAR.P(range)` - Population variance
- `CORREL(array1, array2)` - Correlation coefficient

### Advanced Statistics
- `PERCENTILE.INC(array, k)` - kth percentile
- `QUARTILE.INC(array, quart)` - Specified quartile
- `RANK.EQ(number, ref, [order])` - Rank of a number

---

## Text Functions

### Text Manipulation
- `LEFT(text, num_chars)` - Extracts characters from left
- `RIGHT(text, num_chars)` - Extracts characters from right
- `MID(text, start_num, num_chars)` - Extracts from middle
- `CONCATENATE(text1, [text2], ...)` - Joins text strings
- `&` - Text join operator
- `SUBSTITUTE(text, old_text, new_text, [instance_num])`

### Text Analysis
- `LEN(text)` - Returns length of string
- `FIND(find_text, within_text, [start_num])` - Returns position
- `SEARCH(find_text, within_text, [start_num])` - Case-insensitive FIND

---

## Date & Time Functions

### Date Calculations
- `TODAY()` - Current date
- `NOW()` - Current date and time
- `DATEDIF(start_date, end_date, unit)` - Difference between dates
- `EDATE(start_date, months)` - Date months away
- `WORKDAY(start_date, days, [holidays])` - Workday date

### Date Components
- `YEAR(date)` - Year component
- `MONTH(date)` - Month component
- `DAY(date)` - Day component
- `WEEKDAY(date, [return_type])` - Day of week

---

## Logical Functions

### Basic Logic
```xlsx
=IF(logical_test, value_if_true, value_if_false)
```

### Nested Logic
```xlsx
=IF(test1, value1, 
    IF(test2, value2,
        IF(test3, value3, value_if_all_false)))
```

### Multiple Conditions
- `AND(logical1, [logical2], ...)` - TRUE if all TRUE
- `OR(logical1, [logical2], ...)` - TRUE if any TRUE
- `NOT(logical)` - Inverts logical value

---

## Power Query Basics

### Common Transformations
1. Remove Columns
2. Filter Rows
3. Change Type
4. Replace Values
5. Group By
6. Pivot/Unpivot
7. Merge Queries
8. Append Queries

### M Formula Language Example
```xlsx
let
    Source = Excel.CurrentWorkbook(){[Name="Table1"]}[Content],
    #"Changed Type" = Table.TransformColumnTypes(Source,{
        {"Date", type date},
        {"Value", type number}}),
    #"Filtered Rows" = Table.SelectRows(#"Changed Type", 
        each [Value] > 0)
in
    #"Filtered Rows"
```

---

## PivotTables

### Creation Steps
1. Select data range
2. Insert → PivotTable
3. Choose fields for:
   - Rows
   - Columns
   - Values
   - Filters

### Common Value Calculations
- Sum
- Count
- Average
- Min/Max
- % of Total
- Running Total

---

## Keyboard Shortcuts

### Navigation
- `Ctrl + Arrow` - Move to edge of data
- `Ctrl + Home` - Go to beginning of worksheet
- `Ctrl + End` - Go to last cell with data
- `Alt + Page Down/Up` - Move one screen right/left
- `F5` - Go to specific cell

### Selection
- `Shift + Arrow` - Extend selection
- `Ctrl + Space` - Select entire column
- `Shift + Space` - Select entire row
- `Ctrl + A` - Select all
- `Ctrl + Shift + Arrow` - Select to edge of data

### Editing
- `Ctrl + C` - Copy
- `Ctrl + X` - Cut
- `Ctrl + V` - Paste
- `Ctrl + Z` - Undo
- `Ctrl + Y` - Redo
- `F2` - Edit cell
- `Alt + Enter` - New line in cell

### Formatting
- `Ctrl + 1` - Format cells dialog
- `Ctrl + B` - Bold
- `Ctrl + I` - Italic
- `Ctrl + U` - Underline
- `Alt + H + H` - Fill color
- `Alt + H + FC` - Font color

### Data
- `Ctrl + T` - Create table
- `Alt + A + T` - Filter
- `Alt + A + C` - Clear filter
- `F11` - Create new chart
- `Alt + F1` - Create embedded chart

### Formula Bar
- `F4` - Toggle absolute/relative references
- `Ctrl + Shift + Enter` - Array formula (pre-365)
- `Alt + =` - AutoSum
- `Ctrl + Shift + U` - Expand/collapse formula bar

### Window Management
- `Ctrl + N` - New workbook
- `Ctrl + O` - Open workbook
- `Ctrl + S` - Save
- `Ctrl + W` - Close window
- `Ctrl + Tab` - Switch between workbooks
- `Alt + Tab` - Switch between applications

---


</body>

<style>

a[href] {
  color: #7fc8b6;
}

</style>