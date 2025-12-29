import re

with open('src/App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace &apos; with escaped apostrophe for JSX
content = content.replace("&apos;", "\\'")

# Also replace any smart quotes that might exist
content = content.replace("'", "\\'")  # Right smart quote
content = content.replace("'", "\\'")  # Left smart quote  
content = content.replace(""", '\\"')  # Left smart double quote
content = content.replace(""", '\\"')  # Right smart double quote

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed all quotes")
