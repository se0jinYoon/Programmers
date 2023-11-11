import sys

test_num = int(input())
result = []
for i in range(test_num):
    result.append(int(sys.stdin.readline()))

result.sort(reverse=False)
for i in result:
    print(i)