#1
my_string = "Hello, World!"
print(my_string)

#2
n = int(input())
if n % 2 == 1:
    print("Weird")
elif 2 <= n <= 5:
    print("Not Weird")
elif 6 <= n <= 20: 
    print("Weird")
else:
    print("Not Weird")

#3
a = int(input())
b = int(input())
print(a + b)
print(a - b)
print(a * b)

#4
a = int(input())
b = int(input())
print(a // b)
print(a / b)

#5
n = int(input())
for i in range(n):
    print(i ** 2)

#6
def is_leap(year):
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)
year = int(input())
print(is_leap(year))

#7
n = int(input())
for i in range(1, n + 1):
    print(i, end="")

#8
n = int(input())  
t = tuple(map(int, input().split())) 
print(hash(t)) 

#9
thickness = int(input())  
c = 'H'
for i in range(thickness):
    print((c * i).rjust(thickness - 1) + c + (c * i).ljust(thickness - 1))
for i in range(thickness + 1):
    print((c * thickness).center(thickness * 2) + (c * thickness).center(thickness * 6))
for i in range((thickness + 1) // 2):
    print((c * thickness * 5).center(thickness * 6))
for i in range(thickness + 1):
    print((c * thickness).center(thickness * 2) + (c * thickness).center(thickness * 6))
for i in range(thickness):
    print(
        ((c * (thickness - i - 1)).rjust(thickness) + c + (c * (thickness - i - 1)).ljust(thickness)).rjust(
            thickness * 6
        )
    )

#10
def capitalize_name(name):
    return ' '.join(word.capitalize() for word in name.split())
full_name = input()
print(capitalize_name(full_name))





