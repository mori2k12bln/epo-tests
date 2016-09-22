window.epoarm = (function() {
    var transactions = {

    };

    var armstart = function(appName, transactionName) {
        var handle = "TRANSACTION" + Math.random();
        transactions[handle] = {
            start: new Date().getTime(),
            name: transactionName
        };
        return handle;
    };

    var armstop = function(handle, status) {
        var transaction = transactions[handle];
        var duration = new Date().getTime() - transaction.start;
        if (!status) {
            console.log("Transaction " + transaction.name + " took " + duration + " ms.");
        } else {
            console.log("Transaction " + transaction.name + " failed after " + duration + " ms.");
        }
    };
    return {
        armstart: armstart,
        armstop: armstop
    }
})();