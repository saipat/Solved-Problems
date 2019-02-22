#  *** Write a method that takes in a string. Your method should return the most common letter in the array, and a count of how many times it appears.

# O(nlogn)
def most_common_letter(str)
    return 'Can\'t count if the srting is empty' if str.empty?

    hash = Hash.new(0)

    str.chars.each do |ch|
        hash[ch] += 1
    end

    most_common = hash.sort_by {|k,v| v}.last
    
    [most_common.first, most_common.last]
end

# O(n^2)

# def most_common_letter(str)
#     return 'Can\'t count if the srting is empty' if str.empty?
#     mcl = 0
#     mclc = 0

#     i = 0
#     while i < str.length
#         l = str[i]
#         c = 0

#         j=0
#         while j < str.length
#             c += 1 if str[j] == l
#             j += 1
#         end

#         if (mclc == nil || mclc < c)
#             mcl = l
#             mclc = c
#         end
        
#         i += 1
#     end 

#     [mcl, mclc]
# end