const discount = (amount) => {

    let two_d = new RegExp(/^\d\d$/g);
    if (two_d.test(amount)) {
        console.log(amount);
    }

}

discount('12');