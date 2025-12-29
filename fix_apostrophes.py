import re

with open('src/App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace &apos; with {`'`} which React will render correctly
# This avoids JSX string escaping issues
content = content.replace('&apos;', '{`\'`}')

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed apostrophes for React rendering")
