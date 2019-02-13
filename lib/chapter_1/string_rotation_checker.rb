#  *** Assume you have a method isSubstring which checks if one word is a substring od another. Given 2 strings s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g) "waterbottle" is a rotation of "erbottlewat".

def is_string_rotation?(s1, s2)
    if s1.length != s2.length
        return false
    else
        return isSubstring?(s1+s1, s2)
    end
end

def isSubstring?(str1, str2)
    str1.include?(str2)
end