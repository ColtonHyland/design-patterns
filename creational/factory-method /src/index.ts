interface Button {
  name: string;
  onClick: () => void;
  disabled: boolean;
}

enum ButtonType {
  Confirm = 'confirm',
  Cancel = 'cancel',
}

const createButton = (name: string): Button => {
  return {
    name,
    onClick: () => {
      console.log(`${name} clicked`);
    },
    disabled: false,
  };
};

const buttonFactory = (type: ButtonType): Button => {
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
