# *** Write code to rotate a string.

def rotated_string?(s1, s2)
    is_match = false

    return false unless s1.length == s2.length

    count = 0
    
    until count == s1.length
        temp = s1.split('')
        s1 = temp.push(temp.shift).join('')
        return true if s1 == s2
        count += 1
    end

end