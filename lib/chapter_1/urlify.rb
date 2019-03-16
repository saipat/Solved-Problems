
require 'byebug'

def urlify?(str, length)
    str.include?(' ') ? str.strip.gsub!(' ', '%20') : str

    # result = ''
    # # debugger
    # str.each_char.with_index do |ch, idx|
    #     if ch == ' ' && idx < length
    #         result += '%20'
    #     else
    #         result += ch
    #     end
    # end

    # result.strip()
end