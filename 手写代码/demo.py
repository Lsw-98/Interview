import re
s = 'we are humans'
m = re.match(r'(.*)(.*?)(.*)', s)
print(m.group(2))
