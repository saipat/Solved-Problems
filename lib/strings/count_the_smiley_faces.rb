# Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

# Rules for a smiling face:
# Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
# A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
# Every smiling face must have a smiling mouth that should be marked with either ) or D.
# No additional characters are allowed except for those mentioned.

# O(n^3)
def count_smileys(arr)
    return 'Array can\'t be empty if the array is empty' if arr.empty?

    count = 0
    eyes = [';', ':']
    nose = ['~',  '-']
    mouth = [')', 'D']

    arr.each do |face|
        face.each_char.with_index do |ch, idx|
            count += 1 if (eyes.include?(ch) && nose.include?(face[idx+1]) && mouth.include?(face[idx+2])) || (eyes.include?(ch) && mouth.include?(face[idx+1]))
        end
    end

    count
end
