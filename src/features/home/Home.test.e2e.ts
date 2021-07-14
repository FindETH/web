import 'testcafe';
import { findByText } from '@testing-library/testcafe';

fixture`Home`.page`http://127.0.0.1:9000`;

test('it renders the homepage', async (t) => {
  await t.navigateTo('http://127.0.0.1:9000');

  const title = await findByText('What are you looking for?');
  await t.expect(title.exists).ok();
});
