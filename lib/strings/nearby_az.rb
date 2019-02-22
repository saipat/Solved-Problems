#  *** Write a method that takes a string in and returns true if the letter "z" appears within three letters **after** an "a". You may assume that the string contains only lowercase letters.

def nearby_az(str)
    return false unless str.include?('a')

    str.each_char.with_index do |ch, idx|
        return true if ch == 'a' && (str[idx+1] == 'z' || str[idx+2] == 'z' || str[idx+3] == 'z') 
    end
    
    false
end