(function () {

    class FormValidation {
        constructor(form, validationRules) {
            // let parser = new DOMParser();
            this.form = form
            this.validationRules = validationRules;
            this.elements = {};
            this.inputIds = Object.keys(this.validationRules);

            this.getValidationElements();
            this.parseValidationRules();
        }

        getValidationElements() {
            for (let inputId of this.inputIds) {
                this.elements[inputId] = this.form.querySelector(`[name='${inputId}']`);
            }
        }

        parseValidationRules() {
            let rules = this.validationRules;
            let parsedRulesObject = {};
            Object.keys(rules).forEach(function (key) {
                let split = rules[key].split("|");
                parsedRulesObject[key] = {};
                for (let element of split) {
                    if (element.includes(':')) {
                        let rule = element.split(':');

                        if (rule[1].includes(';')) {
                            let options = rule[1].split(';');
                            parsedRulesObject[key][rule[0]] = {
                                'value': options
                            };
                        } else {
                            parsedRulesObject[key][rule[0]] = {
                                'value': rule[1]
                            };
                        }

                    } else {
                        parsedRulesObject[key][element] = {};
                    }
                }
            })
            this.parsedRules = parsedRulesObject;
        }

        validate(element) {

            let elements = element !== undefined ? [this.elements[element]] : this.elements;
            let rules = this.parsedRules;
            let currentObject = this;
            Object.keys(elements).forEach(function (key) {
                let element = elements[key];
                let elementRules = rules[key];
                Object.keys(elementRules).forEach(function (ruleName) {
                    let rule = elementRules[ruleName];

                    console.log(element);
                    if (currentObject[ruleName](element, rule.value) === false) {
                        element.classList.add('text-danger');
                        element.classList.add('border');
                        element.classList.add('border-danger');
                    } else {
                        element.classList.remove('text-danger');
                        element.classList.remove('border');
                        element.classList.remove('border-danger');
                    }
                })

            })


        }

        required(element) {
            let value = element.value;
            return value.length > 0;
        }

        string(element) {
            let value = element.value;
            return typeof value === 'string';
        }

        number(element) {
            let value = element.value;
            return typeof value === 'number';
        }

        min(element, minValue) {
            let value = element.value;
            return this.number(element) && parseInt(value) >= minValue;
        }

        options(element, options) {
            let value = element.value;
            return options.includes(value);
        }

        email(element) {
            let value = element.value;
            let emailParts = value.split('@');

            return emailParts.length === 2 ?
                emailParts[1].includes('.') :
                false;
        }

        max(element, maxValue) {
            let value = element.value;
            return this.number(element) && parseInt(value) <= maxValue;
        }

    }


    let rules = {
        'username': 'required|string|min:5',
        'email': 'required|string|email',
        'age': 'required|number|min:1|max:120',
        'gender': 'required|options:M;F'
    }


    let formValidator = new FormValidation(
        document.getElementsByTagName('form')[0],
        rules
    );


    window.formValidator = formValidator;

})();