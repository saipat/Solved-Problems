# *** Write a method to replace all the spaces in a string with '%20'. you may assume that the string has sufficient space at the end to hold the adiitional characters and that you are given the true length of the string.
require 'byebug'

def urlify?(str, length)
    str.include?(' ') ? str.strip.gsub!(' ', '%20') : str

    # result = ''
    # # debugger
    # str.each_char.with_index do |ch, idx|
    #     if ch == ' ' && idx < 13
    #         result += '%20'
    #     else
    #         result += ch
    #     end
    # end

    # result.strip()
end