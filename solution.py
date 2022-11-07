def solution(spell, dic):
    ## default answer
    answer = 2

    # spell 알바벳의 배열
    # dic   단어의 배열
    
    # 합격 조건
    condition = [False] * len(spell)

    for word in dic:
        for al in range(len(spell)):
            if spell[al] in word:
                condition[al] = True    
    
    print(all(condition))
    
    
    return answer