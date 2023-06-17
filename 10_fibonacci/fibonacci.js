const fibonacci = function(memberIndex) {
    const memberIndexInt = parseInt(memberIndex);
    if (memberIndexInt < 0) return "OOPS";
    
    let firstMember = 1;
    let secondMember = 1;
    for (let i = 2; i < memberIndexInt; i++) {
        const temp = firstMember;
        firstMember = secondMember;
        secondMember += temp;
    }
    return secondMember;
};

// Do not edit below this line
module.exports = fibonacci;
