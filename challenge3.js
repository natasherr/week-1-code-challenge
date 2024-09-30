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

// Other PAYE Parameters(reliefs)
let personalRelief = 2000
let insuranceRelief = 3000
let affordableHousingRelief = 2500

if(personalRelief>=0 && personalRelief<=2400){personalRelief = personalRelief} 
else if(insuranceRelief>=0 && insuranceRelief<=5000){insuranceRelief = insuranceRelief}  
else if(affordableHousingRelief>=0 && affordableHousingRelief<=9000) {affordableHousingRelief = affordableHousingRelief}
else {
    personalRelief = "Personal Relief Error!"
    insuranceRelief = "Insurance Relief Error"
    affordableHousingRelief = "Affordable Housing Relief Error!"
}

// Other PAYE Parameters(contributions)
let allowablePensionFundContribution = 25000
let allowable_HOSP_Contribution = 0
if (allowablePensionFundContribution>=0 && allowablePensionFundContribution<=20000) {allowablePensionFundContribution = allowablePensionFundContribution}
else if (allowable_HOSP_Contribution===0){allowable_HOSP_Contribution=allowable_HOSP_Contribution}
else {
    allowablePensionFundContribution = "Contribution Error!"
    allowable_HOSP_Contribution = "Contribution Error!"
}

// Other PAYE Parameters 
let allowableOwnerOccupierInterest = 2000
let disabilityExemption = 20000

if (allowableOwnerOccupierInterest>=0 && allowableOwnerOccupierInterest<=25000) {allowableOwnerOccupierInterest = allowableOwnerOccupierInterest}
else if (disabilityExemption>=0 && disabilityExemption<=150000){disabilityExemption = disabilityExemption}
else {
    allowableOwnerOccupierInterest = "Interest Error!"
    disabilityExemption = "Disability Exemptio Erroe!"
}








