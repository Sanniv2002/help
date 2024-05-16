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

async function delay(time){
    return new Promise((res) => setTimeout(res, time))
}

function checkbox(selector) {
    const element = document.querySelector(selector);
    if (element && element.type === 'checkbox') {
        element.click();
        return true;
    } else {
        return false;
    }
}

function clickButton(selector) {
    const button = document.querySelector(selector);
    if (button && button.tagName === 'BUTTON') {
        button.click();
        return true;
    } else {
        return false;
    }
}

function selectDropdownOption(selector, optionValue) {
    const dropdown = document.querySelector(selector);
    dropdown.value = optionValue;
    dropdown.dispatchEvent(new Event("input", { bubbles: true }));
    dropdown.dispatchEvent(new Event("change", { bubbles: true }));
}

function fillInputBox(selector, inputValue){
    const element = document.querySelector(selector)
    element.value = inputValue
    element.dispatchEvent(new Event("input", { bubbles: true }));
    element.dispatchEvent(new Event("change", { bubbles: true }));
}

function selectDropdownOptionByInnerHTML(selector, innerHTML) {
    const dropdown = document.querySelector(selector);
    const options = dropdown.querySelectorAll('option');
    options.forEach(option => {
        if (option.innerHTML.trim() === innerHTML.trim()) {
            option.selected = true;
        } else {
            option.selected = false;
        }
    });
    dropdown.dispatchEvent(new Event("input", { bubbles: true }));
    dropdown.dispatchEvent(new Event("change", { bubbles: true }));
}
