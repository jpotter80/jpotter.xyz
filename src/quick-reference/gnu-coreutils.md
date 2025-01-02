---
theme: [deep-space, wide]
title: Quick Reference
toc: true,
---

<body>

# GNU Coreutils Quick Reference Guide

A practical reference guide for commonly used GNU utilities with examples and explanations.

Visit the <a href="https://www.gnu.org/software/coreutils/manual/coreutils.html">GNU Coreutils Manual</a>

---

## Common Option Patterns

- `-v`: Verbose output
- `-i`: Interactive mode
- `-r` or `-R`: Recursive
- `-f`: Force
- `-h`: Human-readable
- `-a`: All files
- `-l`: Long format
- `-n`: Numeric output
- `-q`: Quiet mode

---


## File Operations

### ls (List Directory Contents)

List files and directories with various options.

```bash
# Basic usage
ls              # List contents
ls -l           # Long format
ls -a           # Include hidden files
ls -lh          # Human-readable sizes
ls -R           # Recursive listing
ls -lt          # Sort by modification time

# Common combinations
ls -lah         # Long format, human-readable, including hidden
ls -ltr         # Long format, sorted by time, reverse order

# Examples
ls /etc         # List contents of /etc
ls -l *.txt     # List all text files in long format
```

### cp (Copy)

Copy files and directories.

```bash
# Basic usage
cp file1 file2          # Copy file1 to file2
cp -r dir1 dir2         # Copy directory recursively
cp -p file1 file2       # Preserve permissions
cp -i file1 file2       # Interactive (prompt before overwrite)

# Advanced usage
cp -al                  # Hard link files instead of copying
cp -u file1 file2       # Copy only when source is newer
```

### mv (Move)

Move or rename files and directories.

```bash
# Basic usage
mv file1 file2          # Rename file1 to file2
mv file1 dir1           # Move file1 to dir1
mv -i file1 file2       # Interactive mode
mv -n file1 file2       # No overwrite

# Examples
mv *.txt dir1           # Move all text files to dir1
mv -v file1 file2       # Verbose output
```

### rm (Remove)

Remove files and directories.

```bash
# Basic usage
rm file1                # Remove file
rm -r dir1              # Remove directory recursively
rm -f file1             # Force removal (no prompt)
rm -i file1             # Interactive mode

# Safe practices
rm -I *.txt             # Prompt once before removing multiple files
rm -rf dir1/*           # Remove directory contents (be careful!)
```

### mkdir (Make Directory)

Create directories.

```bash
# Basic usage
mkdir dir1              # Create directory
mkdir -p path/to/dir    # Create parent directories as needed
mkdir -m 755 dir1       # Create with specific permissions

# Examples
mkdir dir1 dir2 dir3    # Create multiple directories
mkdir -pv path/to/dir   # Verbose output with parent creation
```

### chmod (Change Mode)

Change file permissions.

```bash
# Basic usage
chmod 755 file1         # Set specific permissions
chmod u+x file1         # Add execute permission for user
chmod go-w file1        # Remove write permission for group/others

# Recursive changes
chmod -R 755 dir1       # Change permissions recursively
chmod -R u+X dir1       # Add execute for directories only

# Common settings
chmod 644 file1         # Standard file permissions (rw-r--r--)
chmod 755 script.sh     # Standard executable permissions (rwxr-xr-x)
```

### chown (Change Owner)

Change file owner and group.

```bash
# Basic usage
chown user file1                # Change owner
chown user:group file1          # Change owner and group
chown -R user:group dir1        # Recursive change

# Examples
chown -R www-data:www-data /var/www  # Web server files
chown --reference=file1 file2        # Copy ownership
```
---

## Text Processing

### cat (Concatenate)

View and combine files.

```bash
# Basic usage
cat file1               # Display file contents
cat file1 file2         # Concatenate files
cat -n file1            # Show line numbers
cat -A file1            # Show all characters

# Creating files
cat > file1             # Create new file (Ctrl+D to end)
cat >> file1            # Append to file
```

### less (View File Contents)

View files with scrolling and search.

```bash
# Basic usage
less file1              # View file
less -N file1           # Show line numbers
less +F file1           # Follow file (like tail -f)

# Navigation
/pattern                # Search forward
?pattern                # Search backward
n                       # Next search result
N                       # Previous search result
g                       # Go to start
G                       # Go to end
```

### head (View Beginning)

View the start of files.

```bash
# Basic usage
head file1              # Show first 10 lines
head -n 20 file1        # Show first 20 lines
head -c 100 file1       # Show first 100 bytes

# Multiple files
head -n 1 *.txt         # First line of each text file
```

### tail (View End)

View the end of files.

```bash
# Basic usage
tail file1              # Show last 10 lines
tail -n 20 file1        # Show last 20 lines
tail -f file1           # Follow file in real time
tail -f -n0 file1       # Follow file from end

# Multiple files
tail -n 1 *.log         # Last line of each log file
```

### grep (Search Text)

Search text using patterns.

```bash
# Basic usage
grep pattern file1              # Search for pattern
grep -i pattern file1           # Case-insensitive search
grep -r pattern dir1            # Recursive search
grep -v pattern file1           # Invert match

# Advanced usage
grep -E 'pattern1|pattern2'     # Extended regex
grep -w word file1              # Match whole words
grep -l pattern files           # List matching files
grep -c pattern file1           # Count matches
```

### sed (Stream Editor)

Edit text streams.

```bash
# Basic usage
sed 's/old/new/' file1          # Replace first occurrence
sed 's/old/new/g' file1         # Replace all occurrences
sed -i 's/old/new/g' file1      # Edit file in place

# Advanced usage
sed '1d' file1                  # Delete first line
sed '/pattern/d' file1          # Delete matching lines
sed 's/.*pattern.*/new/' file1  # Replace entire line
```

### awk (Text Processing)

Process and analyze text files.

```bash
# Basic usage
awk '{print $1}' file1          # Print first field
awk -F: '{print $1}' file1      # Use custom delimiter
awk 'NR>1' file1                # Skip first line

# Advanced usage
awk '{sum+=$1} END {print sum}' # Sum first column
awk '$1 > 100'                  # Filter rows
awk '{printf "%-10s %s\n", $1, $2}'  # Formatted output
```

---

## System Information

### ps (Process Status)

Display process information.

```bash
# Basic usage
ps                      # Show user processes
ps aux                  # Show all processes
ps -ef                  # Full format listing

# Common uses
ps aux | grep process   # Find specific process
ps -u username          # Show user's processes
ps --sort=-%cpu        # Sort by CPU usage
```

### top (System Monitor)

Monitor system processes in real-time.

```bash
# Basic usage
top                     # Start top
top -u username         # Show user's processes

# Interactive commands
k                       # Kill process
r                       # Renice process
f                       # Select fields to display
q                       # Quit
```

### df (Disk Free)

Show disk space usage.

```bash
# Basic usage
df                      # Show disk usage
df -h                   # Human-readable sizes
df -T                   # Show filesystem type
df -i                   # Show inode information

# Examples
df -h /home             # Check specific partition
df --total             # Show total
```

### du (Disk Usage)

Show directory space usage.

```bash
# Basic usage
du                      # Show usage
du -h                   # Human-readable sizes
du -s                   # Summary only
du -sh *                # Usage of all items in current directory

# Examples
du -sh /var/log/*       # Check log sizes
du -h --max-depth=1    # Show one level deep
```

---

## Network Utilities

### ping (Network Connectivity)

Test network connectivity.

```bash
# Basic usage
ping host              # Ping continuously
ping -c 4 host         # Send 4 packets
ping -i 2 host         # 2 second interval

# Examples
ping -w 5 host         # 5 second timeout
ping -s 1000 host      # Use 1000 byte packets
```

### curl (Transfer Data)

Transfer data from or to a server.

```bash
# Basic usage
curl url               # Get content
curl -o file url       # Save to file
curl -O url           # Save with remote filename

# Advanced usage
curl -H "Header" url  # Custom header
curl -X POST url      # POST request
curl -d "data" url    # Send data
```

### wget (Download Files)

Download files from web.

```bash
# Basic usage
wget url              # Download file
wget -O file url      # Save with different name
wget -c url           # Continue download

# Advanced usage
wget -r url           # Recursive download
wget --limit-rate=100k url  # Limit bandwidth
wget -b url           # Background download
```

---

## Archive Utilities

### tar (Tape Archive)

Create and extract archives.

```bash
# Create archives
tar -cvf archive.tar files    # Create archive
tar -czvf archive.tar.gz files  # Create compressed archive
tar -cjvf archive.tar.bz2 files # Create bz2 archive

# Extract archives
tar -xvf archive.tar         # Extract
tar -xzvf archive.tar.gz     # Extract gzip
tar -xjvf archive.tar.bz2    # Extract bz2

# View contents
tar -tvf archive.tar         # List contents
```

### gzip (Compression)

Compress or expand files.

```bash
# Basic usage
gzip file              # Compress file
gzip -d file.gz        # Decompress
gzip -l file.gz        # List contents

# Advanced usage
gzip -r directory      # Compress directory
gzip -9 file           # Maximum compression
gzip -k file           # Keep original file
```

---

## Best Practices

1. **Use man pages for detailed help**
   ```bash
   man command
   ```

2. **Check command options**
   ```bash
   command --help
   ```

3. **Test destructive commands first**
   ```bash
   rm -i file          # Interactive mode
   mv -i file dest     # Prompt before overwrite
   ```

4. **Use verbose mode when learning**
   ```bash
   cp -v file dest
   rm -v file
   ```

---

## Further Resources

- Man Pages Online: [Linux Man Pages](https://linux.die.net/man/)
- GNU Software Directory: [GNU Software](https://www.gnu.org/software/software.html)

---

</body>

<style>

a[href] {
  color: #7fc8b6;
}

</style>