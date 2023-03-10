#Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

#move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]

def move_zeros(lst):
    zero_count = 0
    arr = []
    
    for x in lst:
        if x>0:
            arr.append(x)
        else: 
            zero_count += 1
    
    for y in range(zero_count):
        arr.append(0)
        
    return arr
