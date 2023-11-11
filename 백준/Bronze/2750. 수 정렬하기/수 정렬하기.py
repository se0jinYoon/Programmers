
N = int(input())
num_list = []
for i in range(N):
    num = int(input())
    num_list.append(num)
for j in sorted(num_list):
    print(j)