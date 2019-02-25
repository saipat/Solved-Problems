require 'strings/count_the_smiley_faces'

describe "Count the smiley faces" do 
    it "returns the no:of:count of smiley faces" do 
        expect(count_smileys([':)', ';(', ';}', ':-D'])).to eq(2)
    end

    it "returns the no:of:count of smiley faces" do 
        expect(count_smileys([';D', ':-(', ':-)', ';~)'])).to eq(3)
    end

    it "returns the no:of:count of smiley faces" do 
        expect(count_smileys([';]', ':[', ';*', ':$', ';-D'])).to eq(1)
    end

    it "returns Array can\'t be empty if the array is empty" do 
        expect(count_smileys('')).to eq("Array can\'t be empty if the array is empty")
    end
   
end