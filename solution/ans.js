//Initialized array with given quarterly data of transactions

var quarteralyData = [
    {
        'TransactionId': 'T0175896345',
        'TransactionDate': '10-Jan-20',
        'FromAccount': 10010589,
        'ToAccount': 80074567,
        'Amount': 100000
    }, {
        'TransactionId': 'T0175896346',
        'TransactionDate': '15-Jan-20',
        'FromAccount': 68748963,
        'ToAccount': 30045721,
        'Amount': 500
    }, {
        'TransactionId': 'T0175896347',
        'TransactionDate': '21-Jan-20',
        'FromAccount': '78524169',
        'ToAccount': '30045721',
        'Amount': 6500
    }, {
        'TransactionId': 'T0175896348',
        'TransactionDate': '26-Jan-20',
        'FromAccount': 80074567,
        'ToAccount': 68748963,
        'Amount': 8700
    }, {
        'TransactionId': 'T0175896349',
        'TransactionDate': '31-Jan-20',
        'FromAccount': 30045721,
        'ToAccount': 78524169,
        'Amount': 4200
    },
    {
        'TransactionId': 'T0175896350',
        'TransactionDate': '4-Feb-20',
        'FromAccount': 80074567,
        'ToAccount': 10010589,
        'Amount': 8950
    },
    {
        'TransactionId': 'T0175896351',
        'TransactionDate': '11-Feb-20',
        'FromAccount': 78524169,
        'ToAccount': 68748963,
        'Amount': 20000
    }, {
        'TransactionId': 'T0175896352',
        'TransactionDate': '15-Feb-20',
        'FromAccount': 68748963,
        'ToAccount': 10010589,
        'Amount': 50000
    },
    {
        'TransactionId': 'T0175896353',
        'TransactionDate': '18-Feb-20',
        'FromAccount': 30045721,
        'ToAccount': 78524169,
        'Amount': 28000
    },
    {
        'TransactionId': 'T0175896354',
        'TransactionDate': '23-Feb-20',
        'FromAccount': 10010589,
        'ToAccount': 78524169,
        'Amount': 34000
    },

    {
        'TransactionId': 'T0175896355',
        'TransactionDate': '3-Mar-20',
        'FromAccount': 68748963,
        'ToAccount': 10010589,
        'Amount': 75000
    },
    {
        'TransactionId': 'T0175896356',
        'TransactionDate': '9-Mar-20',
        'FromAccount': 78524169,
        'ToAccount': 30045721,
        'Amount': 64000
    },
    {
        'TransactionId': 'T0175896357',
        'TransactionDate': '19-Mar-20',
        'FromAccount': 78524169,
        'ToAccount': 10010589,
        'Amount': 23000
    },
    {
        'TransactionId': 'T0175896358',
        'TransactionDate': '25-Mar-20',
        'FromAccount': 10010589,
        'ToAccount': 80074567,
        'Amount': 89000
    }];

//Initialized array of customer data
var customerData = [{ 'Account': 10010589, 'Name': 'Mr. S Kumar', 'Address': 'Flat no. 501, Green View Park,Hinjewandi, Pune', 'PhoneNumber': 9001045238 },
{ 'Account': 30045721, 'Name': 'Mr. A Gupta', 'Address': 'Flat no. 103, Ganaga nagari, Kharadi, Pune', 'PhoneNumber': 7521457896 }, { 'Account': 68748963, 'Name': 'Miss K Rao', 'Address': 'Flat no. 703, Platinum Plazza, Dhanori, Pune', 'PhoneNumber': 8201475689 }, { 'Account': 80074567, 'Name': 'Mr. O Vilas', 'Address': 'Flat no. 501, Green View Park,Hinjewandi, Pune', 'PhoneNumber': 9001045238 },
{ 'Account': 78524169, 'Name': 'Mrs. N Akira', 'Address': 'Flat no. 103, Ganaga nagari, Kharadi, Pune', 'PhoneNumber': 7521457896 }, { 'Account': 40010973, 'Name': 'Mr. S Tyagi', 'Address': 'Flat no. 501, Green View Park,Hinjewandi, Pune', 'PhoneNumber': 9001045238 },
{ 'Account': 35748909, 'Name': 'Mrs. M Sharma', 'Address': 'Flat no. 703, Platinum Plazza, Dhanori, Pune', 'PhoneNumber': 8201475689 }
]

//Function to retrive Suspicious accounts

function GetSuspiciousAccounts () {
    //define empty array to store Suspicious accounts
    var suspessiousAcc = []
    for (let i = 0; i < customerData.length; i++) {
        if (i + 1 <= customerData.length) {
            for (let j = i + 1; j < customerData.length; j++) {
                if ((customerData[i].Address == customerData[j].Address) && (customerData[i].PhoneNumber == customerData[j].PhoneNumber)) {
                    if (!suspessiousAcc.includes(customerData[i].Account)) {
                        suspessiousAcc.push(customerData[i].Account)//push match account 
                    }
                    if (!suspessiousAcc.includes(customerData[j].Account)) {
                        suspessiousAcc.push(customerData[j].Account)//push match account
                    }
                }
            }
        }
    }
    return suspessiousAcc
}

var suspessiousAccResult = GetSuspiciousAccounts()//get all suspesious accounts
console.log("Suspesious Accounts\n", suspessiousAccResult)

//Function to retrive suspesious transactions
function GetSuspiciousTransactions () {
    var monthOfJanTransc = []
    var monthOfFebTransc = []
    var monthOfMarTransc = []
    quarteralyData.forEach(transaction => {
        //retrive object from customer data base on account
        var res = customerData.filter(data => (data.Account == transaction.ToAccount)
        )[0]

        var res2 = customerData.filter(data => (data.Account == transaction.FromAccount)
        )[0]

        if ((res.Address == res2.Address) && (res.PhoneNumber == res2.PhoneNumber)) {
            var monthLen = transaction.TransactionDate.length
            var dt = new Date(transaction.TransactionDate);
            if (dt.getMonth() == 0) {
                monthOfJanTransc.push(transaction.TransactionId)
            } else if (dt.getMonth() == 1) {
                monthOfFebTransc.push(transaction.TransactionId)
            } else if (dt.getMonth() == 2) {
                monthOfMarTransc.push(transaction.TransactionId)
            }

        }
    });
    console.log("For The Month of Jan:\nSuspicious Transactions :\n", monthOfJanTransc)
    console.log("For The Month of Feb:\nSuspicious Transactions :\n", monthOfFebTransc)
    console.log("For The Month of Mar:\nSuspicious Transactions :\n", monthOfMarTransc)

}
GetSuspiciousTransactions()//get all suspesious transactions
//Test cases 
//1.To validate empty array
const validateArrayLength = (customerData, quarteralyData) => {
    if (customerData.length < 0 && quarteralyData.length < 0) {
        return false
    }
    return true
}
//2.To validate account number
const validateAccountNumber = (AccountNumber) => {
    if (AccountNumber !== '') {
        if (typeof AccountNumber === 'number') {
            return true
        } else {

            return false
        }
    } else {
        return false
    }

}
//To validate phone number
const validatePhoneNumber = (PhoneNumber) => {
    if (PhoneNumber !== '') {
        if (typeof PhoneNumber === 'number') {
            return true
        } else {
            return false
        }
    } else {
        return false
    }

}


//Export functions
module.exports = {
    validateArrayLength,
    validateAccountNumber,
    validatePhoneNumber
}