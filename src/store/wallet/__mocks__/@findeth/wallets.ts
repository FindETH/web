export class Trezor {
  isHardwareWallet = jest.fn().mockImplementation(() => true);
  connect = jest.fn();
}

export class MnemonicPhrase {
  isHardwareWallet = jest.fn().mockImplementation(() => false);
}
