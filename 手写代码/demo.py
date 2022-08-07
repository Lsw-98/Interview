def demo(n, arr):
    res = 0
    for i in range(len(arr)):
        temp = 0
        for j in range(len(arr)):
            if j == i:
                continue
            if arr[j] == 0:
                temp += 1
                continue
            if j < i:
                if arr[j] > 0:
                    temp += 1
            elif j > i:
                if arr[j] < 0:
                    temp += 1
    return res


print(demo(5, [0, -1, 1, 1, -1]))
