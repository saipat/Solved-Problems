def missing_number(nums)
    return 'nil' if nums.count <= 1
    return 'nil' if nums.count == 2 && nums[0]+1 == nums[1]

    if nums.include?(0)
        arithmetic_sum = (nums.length ) * (nums.length + 1) / 2
        actual_sum = nums.reduce(:+)
        arithmetic_sum - actual_sum
    else
        arithmetic_sum = (nums.length + 1 ) * (nums.length + 2) / 2
        actual_sum = nums.reduce(:+)
        arithmetic_sum - actual_sum
    end

    # hash = {}
    #  range = [min..max]

    # (min..max).each do |no|
    #     if nums.include?(no)
    #         hash[no] = true 
    #     else
    #         hash[no] = false
    #     end
    # end
    
    # hash.select {|k, v| v == false}.first.first
    
end

puts "missing_number([3,0,1]): #{missing_number([3,0,1])}"
puts "missing_number([3,2,5,1]): #{missing_number([3,2,5,1])}"
puts "missing_number([3]): #{missing_number([3])}"
puts "missing_number([0,1]): #{missing_number([0,1])}"
