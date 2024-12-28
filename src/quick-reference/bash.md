---
theme: [deep-space, wide]
title: Gallery of Work
toc: true,
---

<body>

# Bash Quick Reference Guide

A practical guide to Bash scripting with examples and explanations.

Visit the <a href="https://www.gnu.org/software/bash/manual/">GNU Bash Manual</a>

---


## Basic Script Structure

Every Bash script should start with a shebang and include basic documentation:

```bash
#!/bin/bash

# Author: Your Name
# Date: 2024-12-27
# Description: Script purpose and functionality

# Script content goes here
```

---

## Common Shortcuts and Tips

- `!!` - Previous command
- `$?` - Last command's exit status
- `&&` - Run if previous succeeds
- `||` - Run if previous fails
- `&>` - Redirect both stdout and stderr
- `ctrl+r` - Search command history
- `ctrl+a` - Move to start of line
- `ctrl+e` - Move to end of line

---

## Variables

### Variable Declaration and Usage

```bash
# Basic variable assignment
name="John"
age=30

# Using variables
echo "Hello, $name"
echo "You are $age years old"

# Command substitution
current_date=$(date)
echo "Current date is: $current_date"
```

### Arithmetic Operations

```bash
# Basic arithmetic
num1=5
num2=3
sum=$((num1 + num2))
product=$((num1 * num2))

# Increment/Decrement
((num1++))
((num2--))
```

---

## Control Structures

### If Statements

```bash
if [ "$age" -gt 18 ]; then
    echo "Adult"
elif [ "$age" -eq 18 ]; then
    echo "Just turned adult"
else
    echo "Minor"
fi

# Using multiple conditions
if [ "$name" = "John" ] && [ "$age" -gt 18 ]; then
    echo "John is an adult"
fi
```

### Loops

```bash
# For loop
for i in {1..5}; do
    echo "Number: $i"
done

# While loop
counter=1
while [ $counter -le 5 ]; do
    echo "Count: $counter"
    ((counter++))
done

# Until loop
until [ $counter -gt 5 ]; do
    echo "Count: $counter"
    ((counter++))
done
```

---

## Functions

### Basic Function Structure

```bash
# Function definition
greet() {
    local name="$1"  # Local variable
    echo "Hello, $name!"
}

# Function call
greet "Alice"

# Function with return value
calculate_sum() {
    local num1=$1
    local num2=$2
    echo $((num1 + num2))
}

result=$(calculate_sum 5 3)
```

---

## File Operations

### Reading Files

```bash
# Read line by line
while IFS= read -r line; do
    echo "$line"
done < "input.txt"

# Read entire file content
content=$(<filename)

# Process file with specific delimiter
while IFS=, read -r field1 field2; do
    echo "$field1 - $field2"
done < "data.csv"
```

### Writing Files

```bash
# Overwrite file
echo "Content" > file.txt

# Append to file
echo "More content" >> file.txt

# Multiple lines
cat << EOF > file.txt
Line 1
Line 2
Line 3
EOF
```

---

## Command Line Arguments

```bash
# $1, $2, etc. - Individual arguments
# $0 - Script name
# $# - Number of arguments
# $@ - All arguments as separate strings
# $* - All arguments as a single string

process_args() {
    echo "Script name: $0"
    echo "First argument: $1"
    echo "All arguments: $@"
    echo "Number of arguments: $#"
}
```

---

## String Manipulation

```bash
string="Hello World"

# Length
echo ${#string}

# Substring (offset, length)
echo ${string:0:5}

# Replace
echo ${string/World/Bash}

# Upper/lowercase
echo ${string^^}  # Upper
echo ${string,,}  # Lower

# Remove prefix/suffix
echo ${string#Hello }  # Remove prefix
echo ${string% World}  # Remove suffix
```

---

## Arrays

```bash
# Array declaration
fruits=("Apple" "Banana" "Orange")

# Accessing elements
echo "${fruits[0]}"  # First element
echo "${fruits[@]}"  # All elements
echo "${#fruits[@]}"  # Array length

# Adding elements
fruits+=("Mango")

# Slicing
echo "${fruits[@]:1:2}"  # Elements 1-2

# Iteration
for fruit in "${fruits[@]}"; do
    echo "$fruit"
done
```

---

## Error Handling

```bash
# Exit on error
set -e

# Error handling function
handle_error() {
    local exit_code=$?
    local line_number=$1
    echo "Error on line $line_number: Exit code $exit_code"
    exit $exit_code
}

# Trap errors
trap 'handle_error $LINENO' ERR

# Check command success
if ! command; then
    echo "Command failed"
    exit 1
fi
```

---

## Practical Examples

### Backup Script

```bash
#!/bin/bash

backup_files() {
    local source_dir="$1"
    local backup_dir="$2"
    local date_stamp=$(date +%Y%m%d_%H%M%S)
    local backup_file="backup_${date_stamp}.tar.gz"
    
    tar -czf "$backup_dir/$backup_file" "$source_dir" || {
        echo "Backup failed"
        return 1
    }
    
    echo "Backup created: $backup_file"
}

backup_files "/path/to/source" "/path/to/backup"
```

### Log Analysis Script

```bash
#!/bin/bash

analyze_log() {
    local log_file="$1"
    local search_term="$2"
    
    if [ ! -f "$log_file" ]; then
        echo "Error: Log file not found"
        return 1
    }
    
    echo "Analyzing '$search_term' in $log_file:"
    echo "Occurrences: $(grep -c "$search_term" "$log_file")"
    echo "Last 5 matches:"
    grep "$search_term" "$log_file" | tail -n 5
}
```

---

## Best Practices

1. **Always Quote Variables**
   ```bash
   file_name="my file.txt"
   if [ -f "$file_name" ]; then  # Quoted
       rm "$file_name"           # Quoted
   fi
   ```

2. **Use Local Variables in Functions**
   ```bash
   my_function() {
       local my_var="local"  # Scope limited to function
   }
   ```

3. **Input Validation**
   ```bash
   validate_number() {
       local input="$1"
       if [[ "$input" =~ ^[0-9]+$ ]]; then
           return 0
       else
           echo "Error: Not a number"
           return 1
       fi
   }
   ```

4. **Check for Required Commands**
   ```bash
   check_dependencies() {
       local cmds=("git" "tar" "grep")
       for cmd in "${cmds[@]}"; do
           if ! command -v "$cmd" &>/dev/null; then
               echo "Error: $cmd is required"
               exit 1
           fi
       done
   }
   ```

5. **Use Meaningful Exit Codes**
   ```bash
   if ! some_command; then
       echo "Error: Command failed"
       exit 1
   fi
   ```

6. **Use shellcheck for Script Validation**
   ```bash
   # Install shellcheck and run:
   shellcheck script.sh
   ```

---

## Further Resources

- [shellcheck](https://www.shellcheck.net/)
- [Bash Hackers Wiki](https://wiki.bash-hackers.org/)
- [Advanced Bash-Scripting Guide](https://tldp.org/LDP/abs/html/)

---

</body>

<style>

a[href] {
  color: #7fc8b6;
}

</style>