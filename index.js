//Run this whole file once at the beginning of your session

//Get all options on a select tag
//Pass the querySelecter string
const getOptions = (querySelectorTag) => {
    const select = document.querySelector(querySelectorTag)
    const options = select.options
    const optionValues = [];
    const optionTexts = []

    // Loop through the options and push their values into the array
    for (let i = 0; i < options.length; i++) {
        const optionValue = options[i].value;
        optionValues.push(optionValue);
    }
    for (let i = 0; i < options.length; i++) {
        const optionText = options[i].innerHTML;
        optionTexts.push(optionText);
    }
    return { optionValues, optionTexts }
}