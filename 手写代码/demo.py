from multiprocessing.sharedctypes import RawArray


def singlv(signal):
    index = signal.find("=")
    if(not (signal[0] >= "a" and signal[0] <= 'z')):

        return False
    preStr = signal[0:index]
    lastStr = signal[index+1:]
    if(index > 1):
        return False
    if lastStr[0] == ' ':
        return False
    for i in range(len(lastStr)):
        if not((lastStr[i] >= 'a' and lastStr[i] <= 'z') or (lastStr[i] <= '9') and lastStr[i] >= '0'):
            return False

    return True


print(singlv('t=0 0'))
