interface Button {
  name: string;
  onClick: () => void;
  disabled: boolean;
}

interface Factory {
  createButton: (name: string) => Button;
}

enum ButtonType {
  Confirm = 'confirm',
  Cancel = 'cancel',
}

enum FactoryType {
  Windows = 'windows',
  Mac = 'mac',
}

interface AbstractFactory {
  createButton: (name: string) => Button;
}

class WindowsButton implements Button {
  name: string;
  disabled: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  onClick(): void {
    console.log(`Windows ${this.name} button clicked`);
  }  
}

class MacButton implements Button {
  name: string;
  disabled: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  onClick(): void {
    console.log(`Mac ${this.name} button clicked`);
  }
}

class MacFactory implements AbstractFactory {
  createButton(name: string): Button {
    return new MacButton(name);
  }
}

class WindowsFactory implements AbstractFactory {
  createButton(name: string): Button {
    return new WindowsButton(name);
  }
}

const createFactory = (type: FactoryType): AbstractFactory => {
  if (type === FactoryType.Windows) {
    return new WindowsFactory();
  }

  if (type === FactoryType.Mac) {
    return new MacFactory();
  }

  throw new Error('Invalid factory type');
}; 

const factory = createFactory(FactoryType.Windows);
const button = factory.createButton('confirm');
console.log(button);