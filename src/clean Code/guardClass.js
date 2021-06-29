function getInsuranceDeductible(insurance) {
    if (insurance.covered) {
        if (insurance.majorRepair) {
            return 500
        } else if (insurance.mediumRepair) {
            return 300
        } else {
            return 100
        }
    } else {
        return 0
    }
}

function getInsuranceDeductible1(insurance) {

    if (!insurance.covered) return 0;
    if (insurance.majorRepair) return 500;
    if (insurance.mediumRepair) return 300;

    return 100;

}