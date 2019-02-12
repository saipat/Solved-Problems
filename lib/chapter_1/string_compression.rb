# *** Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaa would become a2b1c5a3. If the compressed string would not become smaller than the original staring, your method should return the original string. You can assume the string has only uppercase and the lowercase letters(a-z)

def string_compression(str)
    compressed = ''
    count = 1

    str.each_char.with_index do |ch, idx|
        if ch == str[idx+1]
            count += 1
        else
            compressed << "#{ch}#{count}"
            count = 1
        end
    end

    compressed.length > str.length ? str : compressed
end 