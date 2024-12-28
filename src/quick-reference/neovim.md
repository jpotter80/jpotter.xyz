---
theme: [deep-space, wide]
title: Gallery of Work
toc: true,
---

<body>

# Neovim Text Editor Cheatsheet

<a href="https://neovim.io/">Visit neovim.io</a> or the repo at <a href="https://github.com/neovim/neovim">GitHub</a>

---

## Essential Commands (Most Frequently Used)

### Basic Navigation
- `h/j/k/l` - Left/Down/Up/Right
- `w` - Jump to start of next word
- `b` - Jump to start of previous word
- `0` - Jump to start of line
- `$` - Jump to end of line
- `gg` - Go to first line of document
- `G` - Go to last line of document
- `{number}G` - Go to line number
- `ctrl+f` - Page down
- `ctrl+b` - Page up

### Essential Editing
- `i` - Insert mode before cursor
- `a` - Insert mode after cursor
- `o` - Insert new line below current line
- `O` - Insert new line above current line
- `x` - Delete character under cursor
- `dd` - Delete current line
- `yy` - Copy (yank) current line
- `p` - Paste after cursor
- `P` - Paste before cursor
- `u` - Undo
- `ctrl+r` - Redo

### Save and Exit
- `:w` - Save file
- `:q` - Quit (fails if unsaved changes)
- `:q!` - Force quit (discards changes)
- `:wq` or `ZZ` - Save and quit
- `:wa` - Save all buffers

---

## Intermediate Commands

### Text Objects and Motions
- `e` - Jump to end of word
- `ge` - Jump to end of previous word
- `}` - Jump to next paragraph
- `{` - Jump to previous paragraph
- `%` - Jump to matching bracket
- `*` - Search forward for word under cursor
- `#` - Search backward for word under cursor

### Advanced Editing
- `cc` or `S` - Delete line and enter insert mode
- `C` - Delete from cursor to end of line and enter insert mode
- `cw` - Delete word and enter insert mode
- `ciw` - Change inner word
- `ci"` - Change inside quotes
- `ci(` - Change inside parentheses
- `dd` - Delete line
- `D` - Delete from cursor to end of line
- `yiw` - Yank inner word
- `.` - Repeat last command

### Visual Mode
- `v` - Enter character-wise visual mode
- `V` - Enter line-wise visual mode
- `ctrl+v` - Enter block-wise visual mode
- `gv` - Reselect last visual selection
- `o` - Move to other end of selection

### Search and Replace
- `/pattern` - Search forward for pattern
- `?pattern` - Search backward for pattern
- `n` - Repeat search in same direction
- `N` - Repeat search in opposite direction
- `:%s/old/new/g` - Replace all occurrences in file
- `:%s/old/new/gc` - Replace all occurrences with confirmation

---

## Advanced Features

### Buffer Management
- `:ls` - List all buffers
- `:bn` - Next buffer
- `:bp` - Previous buffer
- `:b {number}` - Go to specific buffer
- `:bd` - Delete current buffer

### Window Management
- `:sp` - Split horizontally
- `:vsp` - Split vertically
- `ctrl+w h/j/k/l` - Navigate between windows
- `ctrl+w =` - Make all windows equal size
- `ctrl+w _` - Maximize current window height
- `ctrl+w |` - Maximize current window width
- `:q` - Close current window

### Tab Management
- `:tabnew` - Create new tab
- `:tabn` or `gt` - Next tab
- `:tabp` or `gT` - Previous tab
- `:tabclose` - Close current tab

### Marks
- `ma` - Set mark 'a' at current position
- `'a` - Jump to line of mark 'a'
- `` `a `` - Jump to position of mark 'a'
- `:marks` - List all marks

### Registers
- `"ay` - Yank into register 'a'
- `"ap` - Paste from register 'a'
- `:reg` - List registers
- `"+y` - Copy to system clipboard
- `"+p` - Paste from system clipboard

### Macros
- `qa` - Record macro 'a'
- `q` - Stop recording macro
- `@a` - Run macro 'a'
- `@@` - Repeat last macro

### File Operations
- `:e filename` - Edit a file
- `:r filename` - Insert file content
- `:!command` - Run shell command
- `:r !command` - Insert command output

### Code Folding
- `zf` - Create fold
- `zo` - Open fold
- `zc` - Close fold
- `zR` - Open all folds
- `zM` - Close all folds

### Terminal
- `:term` - Open terminal
- `ctrl+\ ctrl+n` - Exit terminal mode

### Configuration
- `:set number` - Show line numbers
- `:set relativenumber` - Show relative line numbers
- `:set wrap` - Enable line wrapping
- `:set expandtab` - Use spaces instead of tabs
- `:set tabstop=4` - Set tab width
- `:help {topic}` - Get help on topic

---

</body>

<style>

a[href] {
  color: #7fc8b6;
}

</style>