class RegisterElements {

    inputFirstName = () => { return '[placeholder="First Name"]'}
    inputLastName = () => { return '[placeholder="Last Name"]'}
    inputAddress = () => { return 'textarea[ng-model="Adress"]'}
    inputAddresEmail = () => { return '#eid'}
    inputPhoneNumber = () => { return '[ng-model="Phone"]'}
    selectFile = () => { return '#imagesrc'}
    checkRadioGender = () => { return '[type="radio"]'}
    checkHobbies = () => { return '[type="checkbox"]'}
    inputLanguages = () => { return '#msdd'}
    selectSkills = () => { return '#Skills'}
    selectCountry = () => { return '.select2-selection--single'}
    selectYear = () => { return '#yearbox'}
    selectMonth = () => { return '[placeholder="Month"]'}
    selectDay = () => { return '#daybox'}
    inputPassword = () => { return '#firstpassword'}
    inputConfirmPassword = () => { return '#secondpassword'}
    submitBtn = () => { return '#submitbtn'}

} export default RegisterElements