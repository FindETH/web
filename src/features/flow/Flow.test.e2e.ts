import 'testcafe';
import { findByLabelText, findByText } from '@testing-library/testcafe';

const EXTENDED_KEY =
  'xpub6DreGKvTo5gf1tXu5N86sz922cFfACvEj8oUrL1nJAbngaMriFQDYk3vA1vpXXGyD5MtH2tbQ8JJScFki5TNSJtRF9T2Qq6ZNLSDhRk2bqc';

fixture`Flow`.page`http://127.0.0.1:9000/`;

test('it can go through the address flow', async (t) => {
  await t.navigateTo('http://127.0.0.1:9000/flow/address');

  const addressInput = await findByLabelText('Address');
  const addButton = await findByText('Add');
  await t.expect(addressInput.exists).ok();
  await t.expect(addButton.exists).ok();

  await t.typeText(addressInput, '0xc6D5a3c98EC9073B54FA0969957Bd582e8D874bf');
  await t.click(addButton);

  await t.typeText(addressInput, '0x59A897A2dbd55D20bCC9B52d5eaA14E2859Dc467');
  await t.click(addButton);

  const next = await findByText('Next');
  await t.expect(next.exists).ok();
  await t.click(next);

  const extendedKey = await findByText('Extended Key');
  await t.expect(extendedKey.exists).ok();
  await t.click(extendedKey);

  const extendedKeyInput = await findByLabelText('Extended key');
  await t.expect(extendedKeyInput.exists).ok();
  await t.typeText(extendedKeyInput, EXTENDED_KEY);

  const extendedKeyNext = await findByText('Next');
  await t.expect(extendedKeyNext.exists).ok();
  await t.click(extendedKeyNext);

  const searching = await findByText('Searching');
  await t.expect(searching.exists).ok();
});

test('it can go through the assets flow', async (t) => {
  await t.navigateTo('http://127.0.0.1:9000/flow/assets');

  const title = await findByText('Select a network');
  await t.expect(title.exists).ok();

  const next = await findByText('Next');
  await t.expect(next.exists).ok();
  await t.click(next);

  const extendedKey = await findByText('Extended Key');
  await t.expect(extendedKey.exists).ok();
  await t.click(extendedKey);

  const input = await findByLabelText('Extended key');
  await t.expect(input.exists).ok();
  await t.typeText(input, EXTENDED_KEY);

  const extendedKeyNext = await findByText('Next');
  await t.expect(extendedKeyNext.exists).ok();
  await t.click(extendedKeyNext);

  const searching = await findByText('Searching');
  await t.expect(searching.exists).ok();
});
