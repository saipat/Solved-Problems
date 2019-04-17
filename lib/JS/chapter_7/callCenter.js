// 3 levels of employees => respondednt, manager and director

// Thing I need
// Employee class 
    // methods - find the rank of that employee(who is he/she in the company?)
    // Did he recieve the call?
    // took the call?
    // what if he is bust to take the call?
// 3 emplyees classes extend from main employee class
// Rank Class
    // get responder's, manager's and director's rank.
// Call class
    // get the minimal rank of the emploee who can take it
    // Person who is calling
    // Employee who is handling
    // set the handlet
    // replay the message
    // get rank
    // set rank
    // increment the rank
    // isconnect the call once done;
// CallHandler class
    // array of employees
    // call queues
    // create the 3 employee kinds
    // get the first available employer who can handle tha call
    // dispatch/route the call to that employee or saves in the queue if no employee is found
    // to do that, find the employee with the minimum rank
    // As an employee got free, look for the waiting call in the queue that he/she can serve
