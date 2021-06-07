function getHostName() {
    let host = '' ; 
    try {
        host = NativeFlutterInterface.getHostName() ; 
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
    console.log(`JS : Returning HOST : ${host}`);
    return host;
}

function openMyTransactions() {
    try {
        NativeFlutterInterface.openMyTransactions() ;
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
}

function openCalendar(date) {
    try {
        NativeFlutterInterface.openCalendar(date) ;
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
}

function onAppInit() {
    try {
        host = NativeFlutterInterface.onAppInit() ;
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
}

function openCustomerSupport() {
    try {
        host = NativeFlutterInterface.openCustomerSupport() ;
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
}


function closeFlutterView() {
    try {
        NativeFlutterInterface.closeFlutterView() ;
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
}

function partnerMenuOptionClicked(menuTitle) {
    try {
        host = NativeFlutterInterface.partnerMenuOptionClicked(menuTitle) ;
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
}



function getPartnerMenuOptions() {
    let result = '[]' ;
    try {
        result = (NativeFlutterInterface.getPartnerMenuOptions()) ;
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
    return result;
}


function getRequestHeaders() {
    let result = "{}";
    try {
        result = NativeFlutterInterface.getRequestHeaders() ; 
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
    return result ;
}

function getThemeData() {
    let result = '{}' ;
    try {
        result = (NativeFlutterInterface.getThemeData()) ; 
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
    return result;
}

function makePaymentCallbackToPartner(paymentInitData) {
    let result = '{}' ;
     try {
            result = NativeFlutterInterface.makePaymentCallbackToPartner(paymentInitData);
        }
        catch (e) {
            console.log(`NativeFlutterInterface not found !`);
        }
     return result;
}

