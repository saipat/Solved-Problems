# Write code to do binary search iteratively.

# O(log n) => n * 1/2 * 1/2 * 1/2 => n *(1/2)^x => n * (1/2^x) => n = 2^x => log n = log 2 ^ x => x = log n
def b_search(arr, target)
    floor_index = -1
    ceiling_index = arr.length

    while(floor_index + 1 < ceiling_index)
        distance = ceiling_index - floor_index
        half_distance = distance / 2

        guess_index = floor_index + half_distance
        guess_value = arr[guess_index]

        case target <=> guess_value
        when 0
            return guess_index
        when -1
            ceiling_index = guess_index
        when 1
            floor_index = guess_index
        end
    end

    return nil
end

puts b_search([2,3,4,5,6,7,8,9], 6) == 4 

puts b_search([2,3,4,5,6,7,8,9], 4) == 2