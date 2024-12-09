"use strict";
var ButtonType;
(function (ButtonType) {
    ButtonType["Confirm"] = "confirm";
    ButtonType["Cancel"] = "cancel";
})(ButtonType || (ButtonType = {}));
const createButton = (name) => {
    return {
        name,
        onClick: () => {
            console.log(`${name} clicked`);
        },
        disabled: false,
    };
};
const buttonFactory = (type) => {
    if (type === ButtonType.Confirm) {
        return createButton('confirm');
    }
    if (type === ButtonType.Cancel) {
        return createButton('cancel');
    }
    throw new Error('Invalid button type');
};
const confirmButton = buttonFactory(ButtonType.Confirm);
const cancelButton = buttonFactory(ButtonType.Cancel);
console.log(confirmButton);
console.log(cancelButton);
//# sourceMappingURL=index.js.map