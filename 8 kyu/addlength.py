#What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

def add_length(str_):
    arr = str_.split()
    arr2 = []
    for x in arr:
        arr2.append('{} {}'.format(x, len(x)))
    return arr2
