def missing_number(nums)
    return nil if nums.count <= 1
    return nil if nums.count == 2 && nums[0]+1 == nums[1]

    arithmetic_sum = (nums.length) * (nums.length + 1) / 2
    actual_sum = nums.reduce(:+)
    arithmetic_sum - actual_sum


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

p missing_number([0, 1])
p missing_number([3,0,1])
p missing_number([3])