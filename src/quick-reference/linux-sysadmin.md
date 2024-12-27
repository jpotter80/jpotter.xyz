# Linux System Administration Command Guide

## System Information and Monitoring

### System Information
```bash
# Basic System Info
uname -a                 # All system information
hostnamectl             # System and OS information
lsb_release -a          # Distribution information
cat /etc/os-release     # OS information
dmidecode               # Hardware information
lshw                    # Hardware configuration

# CPU Information
lscpu                   # CPU information
cat /proc/cpuinfo       # Detailed CPU info
mpstat                  # CPU statistics
uptime                  # System load averages

# Memory Information
free -h                 # Memory usage
cat /proc/meminfo       # Detailed memory info
vmstat                  # Virtual memory statistics
swapon --show          # Show swap usage

# Disk Information
df -h                   # Disk space usage
du -sh *               # Directory sizes
lsblk                  # Block devices
fdisk -l               # Partition information
blkid                  # Block device attributes
```

### Process Management
```bash
# Process Monitoring
top                     # Real-time process monitoring
htop                    # Interactive process viewer
ps aux                 # List all processes
pstree                 # Process tree
pidof [process]        # Find process ID

# Process Control
kill [PID]             # Kill process by ID
pkill [name]           # Kill process by name
killall [name]         # Kill all processes by name
nice [value] [command] # Start process with priority
renice [value] [PID]   # Change process priority
```

### System Monitoring
```bash
# Resource Monitoring
sar                     # System activity reporter
iostat                 # I/O statistics
netstat                # Network statistics
ss                     # Socket statistics
iftop                  # Network bandwidth monitor
nmon                   # Performance monitor

# Log Monitoring
tail -f /var/log/syslog # Real-time log monitoring
journalctl             # Query systemd journal
dmesg                  # Kernel ring buffer
last                   # Login history
who                    # Current logins
```

## User and Group Management

### User Management
```bash
# User Operations
useradd [username]      # Create user
usermod [options] [user]# Modify user
userdel [username]      # Delete user
passwd [username]       # Set password
chage [options] [user]  # Change user password expiry

# User Information
id [username]           # User/group IDs
whoami                 # Current user
w                      # Who is logged in
last                   # Login history
finger [username]       # User information
```

### Group Management
```bash
# Group Operations
groupadd [group]        # Create group
groupmod [options] [group] # Modify group
groupdel [group]        # Delete group
gpasswd [options] [group] # Administer group
usermod -aG [group] [user] # Add user to group

# Group Information
groups [user]           # List user groups
getent group           # List all groups
```

## File System Management

### File Operations
```bash
# File Management
ls -la                  # List files with details
cp [options] src dest   # Copy files
mv src dest            # Move/rename files
rm [options] file      # Remove files
chmod [permissions] file # Change permissions
chown user:group file  # Change ownership
chattr [+-=] file      # Change file attributes
lsattr file            # List file attributes

# File Search
find / -name filename  # Find files
locate filename        # Quick file search
which command          # Show command location
whereis command        # Show binary/manual locations
```

### File System Operations
```bash
# File System Management
mount device mountpoint # Mount file system
umount device          # Unmount file system
fsck device            # Check file system
mkfs.type device       # Create file system
tune2fs [options] device # Adjust file system parameters

# Disk Operations
parted                 # Partition editor
gdisk                  # GPT partition table manipulator
fdisk                  # MBR partition editor
resize2fs device       # Resize file system
```

## Network Administration

### Network Configuration
```bash
# Interface Configuration
ip addr                # Show IP addresses
ip link                # Network interface operations
ip route               # Routing table
ifconfig              # Interface configuration (legacy)
route                 # Routing table (legacy)
iwconfig              # Wireless interface configuration

# Network Tools
ping host             # Test connectivity
traceroute host       # Trace packet route
mtr host              # Network diagnostic tool
dig domain            # DNS lookup
nslookup domain       # DNS lookup (interactive)
whois domain          # Domain information
```

### Network Services
```bash
# Service Management
netstat -tulpn         # Show listening ports
ss -tulpn             # Show socket statistics
iptables -L           # List firewall rules
ufw status            # UFW firewall status
nmap [options] target # Network scanner
tcpdump               # Packet analyzer
```

## Package Management

### APT (Debian/Ubuntu)
```bash
# Package Operations
apt update             # Update package list
apt upgrade            # Upgrade packages
apt install package    # Install package
apt remove package     # Remove package
apt purge package      # Remove package and config
apt autoremove         # Remove unused dependencies
apt search keyword     # Search packages
apt show package       # Show package details
```

### YUM/DNF (RHEL/CentOS/Fedora)
```bash
# Package Operations
yum update             # Update packages
yum install package    # Install package
yum remove package     # Remove package
yum search keyword     # Search packages
yum info package       # Show package info
dnf update            # Update packages (newer)
dnf install package   # Install package (newer)
```

## Service Management

### Systemd
```bash
# Service Control
systemctl start service    # Start service
systemctl stop service     # Stop service
systemctl restart service  # Restart service
systemctl status service   # Check service status
systemctl enable service   # Enable at boot
systemctl disable service  # Disable at boot

# System Control
systemctl list-units      # List units
systemctl list-unit-files # List unit files
systemctl daemon-reload   # Reload systemd
journalctl -u service    # View service logs
```

## Backup and Recovery

### Backup Commands
```bash
# Backup Tools
tar -czvf backup.tar.gz dir  # Create compressed archive
tar -xzvf backup.tar.gz     # Extract archive
rsync -av src dest          # Synchronize directories
dd if=/dev/sda of=disk.img  # Disk imaging
dump -0uf /backup /dev/sda1 # Filesystem backup
restore -rf /backup         # Restore from backup
```

## Security and Access Control

### Security Tools
```bash
# Access Control
chmod [permissions] file    # Change file permissions
chown user:group file      # Change ownership
setfacl -m u:user:rwx file # Set ACL
getfacl file               # Display ACL

# Security Monitoring
fail2ban-client status    # Show banned IPs
auditctl -l              # List audit rules
ausearch -k keyword      # Search audit logs
last                     # Show login history
lastb                    # Show bad login attempts
```

## Performance Tuning

### Performance Tools
```bash
# System Tuning
sysctl -a                # Show kernel parameters
nice -n value command    # Run with priority
ionice -c class command  # I/O scheduling class
ulimit -a               # Show resource limits
lsof                    # List open files
strace command          # Trace system calls
```

### Advanced Troubleshooting
```bash
# Debugging Tools
gdb program             # GNU debugger
ltrace command          # Library call tracer
valgrind program        # Memory debugger
perf stat command       # Performance statistics
perf record command     # Record performance data
perf report            # Report performance data
```

## Best Practices
1. Always make backups before major system changes
2. Use sudo instead of root login when possible
3. Keep system and packages updated regularly
4. Monitor system logs for issues
5. Implement proper security measures
6. Document all system changes
7. Test changes in non-production environment first
8. Maintain current system documentation
9. Set up automated monitoring and alerting
10. Regularly review system performance and security