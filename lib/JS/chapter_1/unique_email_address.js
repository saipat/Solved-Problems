// Every email consists of a local name and a domain name, separated by the @ sign.
// For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name. Besides lowercase letters, these emails may contain '.'s or '+'s.

const uniqueEmailAddress = emails => {
    if (emails.length === 0) return 'Array can\'t be empty' 
    return new Set(emails.map( email => validateEmail(email))).size
};

let validateEmail = email => {
    let result = '';
    let domain = false;
    let plus = false;

    for(let i=0; i<email.length; i++){
        if (email[i] === '@') domain = true;
        if (email[i] === '+') plus = true;
        if (!plus && email[i] !== '.' || domain){
            result += email[i];
        }
    }
    return result
}


//Testing

console.log(uniqueEmailAddress(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]) === 2);

console.log(uniqueEmailAddress(["sai.email+alex@leetcode.com", "sai.e.mail+bob.cathy@leetcode.com", "saiemail+david@leetcode.com"]) === 1);

console.log(uniqueEmailAddress([]) === 'Array can\'t be empty');

console.log(uniqueEmailAddress(["+alex@leetcode.com", "+bob.cathy@leetcode.com", "+david@leetcode.com"]) === 1);



