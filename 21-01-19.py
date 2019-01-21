def my_function():
  a = []
  for i in range(1,101,2):
      a.append(i)
  print(a)

my_function()

def my_pr(odin, dva):
    print(odin*dva)

my_pr(5,6)

def my_pal(slovo):
    slovo = list(slovo)
    slovo2 = []
    for i in slovo:
        slovo2.append(i)
    spisok = []
    lol = True
    for i in range(1,len(slovo)//2+1):
        spisok.append(slovo2[-i])
        slovo.pop()
    if len(slovo)!=len(spisok):
        slovo.pop()
    for i in range(0,len(spisok)):
        if slovo[i] != spisok[i]:
            lol = False
    print(lol)
    
my_pal("qqwertyuioqiq")
    
def my_fun(lol, kek):
    count = 0
    for i in lol:
        if i == kek:
            count += 1
    print(count)

my_fun ([True, False, True, True], False)
