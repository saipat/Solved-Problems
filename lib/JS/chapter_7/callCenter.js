// 3 levels of employees => respondent, manager and director

// Thing I need
// Employee class - Use this as an abstract class as we dont need to instantiate it directly.
    // pass in the handler
    // methods - find the rank of that employee(who is he/she in the company?)
    // Did he recieve the call?
    // took the call?
    // what if he is bust to take the call?
// 3 emplyees classes extend from main employee class
// Rank Class
    // get responder's, manager's and director's rank.
// Call class
    // get the minimal rank of the employee who can take it
    // Person who is calling
    // Employee who is handling
    // set the handlet
    // replay the message
    // get rank
    // set rank
    // increment the rank
    // disconnect the call once done;
// CallHandler class
    // array of employees
    // call queues
    // create the 3 employee kinds
    // get the first available employer who can handle tha call
    // dispatch/route the call to that employee or saves in the queue if no employee is found
    // to do that, find the employee with the minimum rank
    // As an employee got free, look for the waiting call in the queue that he/she can serve


class Employee{
    constructor(handler){
        this.callHandler = handler;
        this.currentCall = null;
        this.rank;
    }

    getRank(){
        return this.rank;
    }

    receiveCall(call){
        this.currentCall = call;
        this.setTimeout(() => this.callCompleted(), 3000);
    }

    callCompleted(){
        if(this.currentCall != null){
            this.currentCall.disconnect();
            this.currentCall = null;
        }
        this.assignNewCall();
    }

    assignNewCall(){
        if(!this.isFree()){
            return false;
        }else{
            return this.callHandler.assignNewCall(this)
        }
    }

    isFree(){
        return this.currentCall === null;
    }

    escalateAndReassignCall(){
        if(this.currentCall != null){
            this.currentCall.incrementRank();
            this.callHandler.dispatchCall(this.currentCall);

            this.currentCall = null;
        }

        this.assignNewCall();
    }
}

class Respondent extends Employee{
    constructor(callHandler){
        super(callHandler);
        this.rank = Rank.Respondent;
    }
}
class Manager extends Employee{
    constructor(callHandler){
        super(callHandler);
        this.rank = Rank.Manager;
    }
}
class Director extends Employee{
    constructor(callHandler){
        super(callHandler);
        this.rank = Rank.Director;
    }
}


class Call{

}