l = input().split(" ")
n = list(l[0])
s = 0
e = 0
dicts = {}
for i in n:
    dicts[i] = 0
for i in range(0, len(n)):
    if n[i] != l[1]:
        s += 1
    else:
        break
for i in range(0, len(n)):
    if n[i] != l[2]:
        e += 1
    else:
        break
if s > len(l[0])-1:
    s = 0
if e > len(l[0])-1:
    e = len(l)-1
if (l[1] in dicts.keys()) & (l[2] in dicts.keys()):
    m = list(l[0][s:e+1])
    m.reverse()
    sub = ''.join(m)
    t = l[0].replace(l[0][s:e+1], sub)
print(t)
