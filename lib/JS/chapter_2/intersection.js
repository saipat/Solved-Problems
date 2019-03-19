// Given 2 singly linkedLists, determine if the 2 lists intersect. Return the intersecting node. Note that the intersection id defined based on reference, not value.
// That is, if the kth node of the first linked list is the exact same as the jth node of the second list, then they are intersecting.

// IOCE
// I => 7->1->6->1->2->3->4
// O => 5->9>2->3->4
// C => the intersection should based on the redeference instead of the value
// E => the 2 lists may not have same length, could be empty.

// Find the length of the 2 linked lists by traversing through the entire list.
// if the tail is different, then return immediately
// set 2 pointers -  long and short. 
// move the long pointer to the difference in the lenght so that they both start at the same time.
// Now traverser th' both the list until the pointers are the same.

function intersection(list1, list2){
    let count1 = 0, ahead = list1.head;
    let count2 = 0, bhead = list2.head;

    while (ahead != null || bhead != null){
        // if (ahead === null && bhead === null && ahead != bhead) {
        //     return null;
        // }
        if(ahead){
            count1 ++;
            ahead = ahead.next;
        }
        if (bhead) {
            count2 ++;
            bhead = bhead.next;
        }
        
    }


    let diff = Math.abs(count1 - count2);
    // console.log(diff);
    
    let shorter = count1 < count2 ? list1.head : list2.head;
    let longer = count1 > count2 ? list1.head : list2.head;

    while (diff > 0 && longer !=  null){
        longer = longer.next;
        diff --;
    }

    // console.log(shorter);
    // console.log(longer);

    while(shorter.value != longer.value){
        shorter = shorter.next;
        longer = longer.next;
    }

    // console.log(shorter);
	// console.log(longer);

    return JSON.stringify(longer);
}


// test
const List = require('./linkedList');
let list = new List();
list.append(7);
list.append(1);
list.append(6);
list.append(1);
list.append(2);
list.append(3);
list.append(4);
// console.log(list.head);

list2 = new List();
list2.append(5);
list2.append(9);
list2.append(2);
list2.append(3);
list2.append(4);

console.log(`intersection(list, list2) => ${intersection(list, list2)}`)