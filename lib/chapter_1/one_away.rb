# *** There are three types of edits that can be performed on strings: inserts a character, remove a character, or replace a character. Given 2 strings, write a function to check if they are one edit or zero edits away.

def one_away?(s1,s2)
    if s1 == s2
        return true
    elsif (s1.length - s2.length) > 1
        return false
    end

    string1 = s1.length > s2.length ? s1 : s2
    string2 = s2.length <= s2.length ? s1 : s2

    chars_1, chars_2 = string1.split(''), string2.split('')

    idx1, idx2 = 0, 0
    no_of_edits = 0

    while(idx1 < string1.length)
        if chars_1[idx1] != chars_2[idx2]
            no_of_edits += 1
            idx2 += 1 if string1.length == string2.length
        else
            idx2 += 1
        end

        idx1 += 1

        return false if no_of_edits > 1
    end

    true
end