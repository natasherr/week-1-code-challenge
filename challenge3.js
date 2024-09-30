let monthlyIncome = 50000
let annualIncome = 600000

// PAYE rates
let monthlyPaye = () => {
    if(monthlyIncome>=0 && monthlyIncome<=24000) {
        monthlyTaxablePay = 0.1 * monthlyIncome
        return monthlyTaxablePay
    }
    
    else if (monthlyIncome>=24001 && monthlyIncome<=32333) {
        monthlyTaxablePay = 0.25 * monthlyIncome
        return monthlyTaxablePay
    }

    else if (monthlyIncome>=32334 && monthlyIncome<=500000) {
        monthlyTaxablePay = 0.3 * monthlyIncome
        return monthlyTaxablePay
    }

    else if (monthlyIncome>=500001 && monthlyIncome<=800000) {
        monthlyTaxablePay = 0.325 * monthlyIncome
        return monthlyTaxablePay
    }

    else if (monthlyIncome>=800001) {
        monthlyTaxablePay = 0.35 * monthlyIncome
        return monthlyTaxablePay
    }

}






