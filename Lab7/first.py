#1.1
import math
a = int(input())
b = int(input())
c = math.sqrt(a**2 + b**2)
print(c)

#1.2
n = int(input())
print("The next number for the number", n, "is", n + 1, end=".\n")
print("The previous number for the number", n, "is", n - 1, end=".")

#1.3
a = int(input())
b = int(input())
c = b//a
print(c)

#1.4
a = int(input())
b = int(input())
c = b%a
print(c)

#1.5
v = int(input())
t = int(input())
s = (v * t) % 109  
print(s)

#2.1
a = int(input())
b = int(input())
if a > b:
    print(a)
else:
    print(b)

#2.2
year = int(input())
if (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):
    print("YES")
else:
    print("NO")

#2.3
def is_symmetric(num):
    num_str = str(num)
    return len(num_str) == 4 and num_str == num_str[::-1]
correct_answer = int(input())
student_answer = int(input())
expected_answer = 1 if is_symmetric(correct_answer) else -1
if student_answer == expected_answer:
    print("YES")
else:
    print("NO")

#2.4
x = int(input())
if x > 0:
    print(1)
elif x < 0:
    print(-1)
else:
    print(0)

#2.5
a = int(input())
b = int(input())
if a > b:
    print(a)
else:
    print(b)

#3.1
a = int(input())
b = int(input())
for i in range(a, b + 1):
    if i % 2 == 0: 
        print(i, end=" ")

#3.2
a = int(input())
b = int(input())
c = int(input())
d = int(input())
found = False
for i in range(a, b + 1):
    if i % d == c: 
        print(i, end=" ")
        found = True

#3.3
a = int(input())
b = int(input())

for i in range(a, b + 1):
    if math.isqrt(i) ** 2 == i:
        print(i, end=" ")

#3.4
x = int(input())
for i in range(2, x + 1):
    if x % i == 0:
        print(i)
        break 

#3.5
x = int(input())
for i in range(1, x + 1):
    if x % i == 0:
        print(i, end=" ") 

#3.6
x = int(input())
count = 0
sqrt_x = int(math.sqrt(x))
for i in range(1, sqrt_x + 1):
    if x % i == 0:  
        count += 1  
        if i != x // i: 
            count += 1
print(count)

#3.7
N = int(input())
total_sum = sum(int(input()) for _ in range(N))
print(total_sum)

#3.8
N = int(input())
zero_count = sum(1 for _ in range(N) if int(input()) == 0)
print(zero_count)

#4.1
N = int(input())
arr = list(map(int, input().split()))
print(*arr[::2])

#4.2
N = int(input())
arr = list(map(int, input().split()))
print(*[num for num in arr if num % 2 == 0])

#4.3
N = int(input())
arr = list(map(int, input().split()))
count = sum(1 for num in arr if num > 0)
print(count)

#4.4
N = int(input())
arr = list(map(int, input().split()))
count = sum(1 for i in range(1, N) if arr[i] > arr[i - 1])
print(count)

#4.5
N = int(input())
arr = list(map(int, input().split()))
for i in range(N - 1):
    if arr[i] * arr[i + 1] > 0:
        print("YES")
        break
else:
    print("NO")

#4.6
N = int(input())
arr = list(map(int, input().split()))
count = 0
for i in range(1, N - 1):
    if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]:
        count += 1
print(count)

#4.7
N = int(input())
arr = list(map(int, input().split()))
for i in range(N // 2):
    arr[i], arr[N - i - 1] = arr[N - i - 1], arr[i]
print(*arr)






