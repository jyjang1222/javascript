import random
'''
    [문제]
        랜덤으로 3~5 사이의 숫자를 저장후 다음과 같은 규칙으로 출력하시오. 
        [1] 배열의 맨앞에서 부터 랜덤숫자만큼씩 만 임시배열에 담아서 출력한다.
        [2] 한칸씩 전진하면서 1번을 반복한다.      
        [3] 단 출력할숫자가 랜덤숫자보다 부족하면 종료한다. 
        해당되는 값을 임시배열에 담아서 출력하면된다.
    [예시]
        r = 4

        [1,3,3,6]
        [3,3,6,5]
        [3,6,5,6]
        [6,5,6,1]
'''

arrList = []

arr = [1, 3, 3, 6, 5, 6, 1]

r = random.randint(3, 5)

for i in range(len(arr)):
    if i + r > len(arr):
        continue
    tmp = []
    for j in range(r):
        tmp.append(arr[i + j])
    arrList.append(tmp)

for i in arrList:
    print(i)
    

    





