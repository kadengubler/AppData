This page contains settings for configuring SilverBullet and its plugs. Any changes outside of the yaml block will be overwritten.
A list of built-in settings [[!silverbullet.md/SETTINGS|can be found here]].

```yaml
indexPage: Entrata

# Load custom CSS styles from the following page, can also be an array
customStyles: "[[STYLES]]"

# Hide the sync button
hideSyncButton: false

# Configure the shown action buttons (top right bar)
actionButtons:
- icon: home # Use any icon from https://feathericons.com
  command: "{[Navigate: Home]}"
  description: "Go to the index page"
- icon: briefcase # Use any icon from https://feathericons.com
  command: '{[Navigate: To Page]("Projects")}'
  description: "Go to the projects page"
- icon: check-square
  command: '{[Navigate: To Page]("Tasks")}'
- icon: book
  command: "{[Navigate: Page Picker]}"
  description: Open page
- icon: sidebar
  command: "{[Tree View: Toggle]}"
  description: "Toggle Tree View"
- icon: terminal
  command: "{[Open Command Palette]}"
  description: Run command
- icon: arrow-left
  command: "{[Navigate: Back in History]}"
  description: "Go to the previous page"
  mobile: true # Only show on mobile devices, set to false to show only on desktop


# Override keyboard shortcuts and command priority
shortcuts:
- command: "{[Stats: Show]}" # Using the command link syntax here
  mac: "Cmd-s" # Mac-specific keyboard shortcut
  key: "Ctrl-s" # Windows/Linux specific keyboard shortcut
- command: "Navigate: Center Cursor" # But a command name is also supported
  key: "Alt-x"
- command: "{[Upload: File]}"
  priority: 1 # Make sure this appears at the top of the list in the command palette
- command: "{[Open Command Palette]}"
  key: "Ctrl-."


# Defines files to ignore in a format compatible with .gitignore
spaceIgnore: |
   dist
   largefolder
   *.mp4

# Add alternative names to emoji picker
emoji:
  aliases:
    smile: 😀
    sweat_smile: 😅


# This plugs adds a tree view that allows you to navigate your SilverBullet pages Hierarchically.
treeview:
  # Determines where the panel is displayed:
  # - "lhs" - left hand side
  # - "rhs" - right hand side
  # - "bhs" - bottom
  # - "modal" - in a modal
  position: lhs 

  # Must be > 0. 
  # position = "lhs" | "rhs": determines the width of the panel.
  # position = "modal": sets the margin around the modal window. 
  # position = "bhs": No effect
  size: 1 

  dragAndDrop:
    # Set to false to disable drag-and-drop
    enabled: true

    # Set to false to disable the confirmation prompt shown when dragging and 
    # dropping pages that causes them to be renamed/moved.
    confirmOnRename: true

```
