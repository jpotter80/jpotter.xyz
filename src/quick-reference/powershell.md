---
theme: [deep-space, wide]
title: Quick Reference
toc: true,
---

<body>

# Practical Guide to PowerShell

---

## Introduction

PowerShell is a task automation framework and command-line shell from Microsoft. It combines the command-line speed, flexibility, and power of shells like Bash with the familiarity and consistency of the Windows environment and .NET framework.

Visit the <a href="https://learn.microsoft.com/en-us/powershell/">PowerShell Docs</a>

### Key Features
- Object-based pipeline
- Integrated scripting language
- Command-line shell
- Automation platform
- Configuration management framework



---

## Basic Concepts

### Cmdlets
PowerShell commands (cmdlets) follow a verb-noun naming convention:
- Get-Process
- Stop-Service
- New-Item
- Remove-Item

### Pipeline
PowerShell passes objects (not text) between commands:
```powershell
Get-Process | Sort-Object CPU -Descending | Select-Object -First 5
```

### Aliases
Common command aliases:
```powershell
# List all aliases
Get-Alias

# Common aliases
ls  -> Get-ChildItem
cd  -> Set-Location
dir -> Get-ChildItem
cls -> Clear-Host
```

---

## PowerShell Commands (Cmdlets)

### Basic Navigation
```powershell
# Change directory
Set-Location C:\Users
cd C:\Users

# List directory contents
Get-ChildItem
ls

# Get current directory
Get-Location
pwd

# Create new directory
New-Item -ItemType Directory -Path "NewFolder"
mkdir NewFolder
```

### File Operations
```powershell
# Create new file
New-Item -ItemType File -Path "test.txt"

# Copy file
Copy-Item "source.txt" -Destination "destination.txt"

# Move file
Move-Item "source.txt" -Destination "new_location\source.txt"

# Delete file
Remove-Item "file.txt"

# Read file content
Get-Content "file.txt"

# Write to file
Set-Content -Path "file.txt" -Value "Hello, World!"
Add-Content -Path "file.txt" -Value "Additional line"
```

---

## Variables and Data Types

### Variable Declaration and Assignment
```powershell
# Basic variable assignment
$name = "John"
$age = 30
$isActive = $true

# Strongly typed variables
[string]$name = "John"
[int]$age = 30
[bool]$isActive = $true

# Arrays
$array = @(1, 2, 3, 4, 5)
$stringArray = @("apple", "banana", "orange")

# HashTables
$hash = @{
    Name = "John"
    Age = 30
    City = "New York"
}
```

### Working with Variables
```powershell
# Check variable type
$name.GetType()

# Variable scope
$global:globalVar = "Global scope"
$script:scriptVar = "Script scope"
$local:localVar = "Local scope"

# Environment variables
$env:PATH
$env:USERPROFILE
```

---

## Flow Control

### If-Else Statements
```powershell
$age = 25

if ($age -gt 18) {
    Write-Host "Adult"
} elseif ($age -eq 18) {
    Write-Host "Just turned adult"
} else {
    Write-Host "Minor"
}
```

### Loops
```powershell
# ForEach loop
foreach ($item in $array) {
    Write-Host $item
}

# ForEach-Object in pipeline
1..5 | ForEach-Object { $_ * 2 }

# For loop
for ($i = 0; $i -lt 5; $i++) {
    Write-Host $i
}

# While loop
$counter = 0
while ($counter -lt 5) {
    Write-Host $counter
    $counter++
}

# Do-While loop
do {
    Write-Host $counter
    $counter++
} while ($counter -lt 5)
```

---

## Functions and Scripts

### Basic Function
```powershell
function Get-Greeting {
    param(
        [string]$name = "World"
    )
    
    Write-Host "Hello, $name!"
}

# Call function
Get-Greeting
Get-Greeting -name "John"
```

### Advanced Function
```powershell
function Get-SystemInfo {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory=$true)]
        [string]$ComputerName,
        
        [Parameter()]
        [switch]$IncludeMemory
    )
    
    begin {
        Write-Verbose "Starting system info collection"
    }
    
    process {
        $os = Get-WmiObject -Class Win32_OperatingSystem -ComputerName $ComputerName
        $cpu = Get-WmiObject -Class Win32_Processor -ComputerName $ComputerName
        
        $result = [PSCustomObject]@{
            ComputerName = $ComputerName
            OSVersion = $os.Version
            CPUName = $cpu.Name
        }
        
        if ($IncludeMemory) {
            $result | Add-Member -MemberType NoteProperty -Name TotalMemoryGB -Value ($os.TotalVisibleMemorySize/1MB)
        }
        
        return $result
    }
    
    end {
        Write-Verbose "Completed system info collection"
    }
}
```

---

## Working with Files and Folders

### File System Navigation
```powershell
# List all files in directory
Get-ChildItem -Path C:\Users -Recurse

# Filter files by extension
Get-ChildItem -Path C:\Users -Filter *.txt

# Find files modified in last 24 hours
Get-ChildItem -Path C:\Users -Recurse |
    Where-Object { $_.LastWriteTime -gt (Get-Date).AddDays(-1) }
```

### File Content Operations
```powershell
# Read file content
$content = Get-Content -Path "file.txt"

# Read specific lines
Get-Content -Path "file.txt" -TotalCount 5
Get-Content -Path "file.txt" | Select-Object -First 5

# Search file content
Get-Content -Path "file.txt" | Select-String -Pattern "search term"

# Compare files
Compare-Object -ReferenceObject (Get-Content "file1.txt") -DifferenceObject (Get-Content "file2.txt")
```

---

## System Administration Tasks

### Service Management
```powershell
# List all services
Get-Service

# Get specific service
Get-Service -Name "wuauserv"

# Start/Stop service
Start-Service -Name "wuauserv"
Stop-Service -Name "wuauserv"

# Get service status
Get-Service -Name "wuauserv" | Select-Object Status
```

### Process Management
```powershell
# List all processes
Get-Process

# Find specific process
Get-Process -Name "notepad"

# Stop process
Stop-Process -Name "notepad"

# Start new process
Start-Process "notepad.exe"
```

### Windows Updates
```powershell
# Check for updates
Get-WindowsUpdate

# Install updates
Install-WindowsUpdate

# Get update history
Get-WUHistory
```

---

## Error Handling

### Try-Catch Blocks
```powershell
try {
    # Attempt something that might fail
    $result = 1/0
} catch {
    # Handle the error
    Write-Error "An error occurred: $_"
} finally {
    # Always execute this block
    Write-Host "Cleanup operations"
}
```

### Error Preference
```powershell
# Set error action preference
$ErrorActionPreference = "Stop"  # Stop on all errors
$ErrorActionPreference = "Continue"  # Continue on non-terminating errors
$ErrorActionPreference = "SilentlyContinue"  # Suppress error messages

# Use -ErrorAction parameter
Get-Process -Name "NonExistentProcess" -ErrorAction SilentlyContinue
```

---

## PowerShell Profiles

### Profile Locations
```powershell
# Show all profile paths
$PROFILE | Select-Object *

# Create profile if it doesn't exist
if (!(Test-Path -Path $PROFILE)) {
    New-Item -ItemType File -Path $PROFILE -Force
}
```

### Common Profile Settings
```powershell
# Add to profile
function prompt {
    "PS $($executionContext.SessionState.Path.CurrentLocation)> "
}

# Set aliases
Set-Alias -Name np -Value notepad.exe

# Set default location
Set-Location C:\Users\Username\Documents
```

---

## Best Practices

### Code Style
```powershell
# Use proper verb-noun naming
function Get-UserInfo {
    # Function implementation
}

# Use proper parameter names
function Get-Data {
    param(
        [Parameter(Mandatory=$true)]
        [string]$Path,
        
        [Parameter()]
        [switch]$Force
    )
}

# Use comment-based help
<#
.SYNOPSIS
    Brief description
.DESCRIPTION
    Detailed description
.PARAMETER Path
    Path parameter description
.EXAMPLE
    Example usage
#>
```

### Performance Tips
```powershell
# Use proper filtering
# Good
Get-ChildItem -Filter *.txt
# Bad
Get-ChildItem | Where-Object { $_.Name -like "*.txt" }

# Use proper pipeline handling
# Good
$processes = Get-Process
$processes | ForEach-Object { $_.Name }
# Bad
Get-Process | ForEach-Object { $_.Name }
```

---

## Advanced Topics

### Remote Management
```powershell
# Enable remote management
Enable-PSRemoting

# Start remote session
Enter-PSSession -ComputerName "RemoteComputer"

# Run command on remote computer
Invoke-Command -ComputerName "RemoteComputer" -ScriptBlock {
    Get-Process
}
```

### PowerShell Jobs
```powershell
# Start background job
Start-Job -ScriptBlock {
    Get-Process
}

# Get job status
Get-Job

# Get job results
Receive-Job -Id 1

# Remove job
Remove-Job -Id 1
```

### PowerShell Classes
```powershell
class Person {
    [string]$Name
    [int]$Age
    
    Person([string]$name, [int]$age) {
        $this.Name = $name
        $this.Age = $age
    }
    
    [string]ToString() {
        return "$($this.Name) is $($this.Age) years old"
    }
}

# Use class
$person = [Person]::new("John", 30)
$person.ToString()
```

---

</body>

<style>

a[href] {
  color: #7fc8b6;
}

</style>