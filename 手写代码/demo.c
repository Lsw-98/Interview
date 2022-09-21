/*判断一个数据序列是否构成小根堆*/
#include <stdio.h>

int IsMinHeap(int a[], int len)
{
  int parent;
  int child;

  int i;
  for (i = len / 2 - 1; i >= 0; i--)
  {
    parent = i;
    child = parent * 2 + 1;
    if (a[child] > a[child + 1] && child + 1 < len)
      child++;
    if (a[parent] > a[child])
      return 0;
  }
  return 1;
}

int main(void)
{
  int a[9] = {3, 6, 19, 7, 29, 30, 15, 22, 13};
  int res = IsMinHeap(a, 9);
  if (res == 1)
    printf("yes");
  if (res == 0)
    printf("no");
  return 0;
}
