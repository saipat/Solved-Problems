# *** Write a method that takes in a string and an array of indices in the string. Produce a new string, which contains letters from the input string in the order specified by the indices of the array of indices.

def scramble_string(str, arr)
    return str if arr.empty?
    return 'String can\'t be empty' if str.empty?

    result = ''
    idx = 0

    while idx < str.length
        result += str[arr[idx]]
        idx += 1
    end

    result
end