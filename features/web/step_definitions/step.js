const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember6');
    return await element.setValue(email);
  });
  
When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember8');
    return await element.setValue(password);
});

When('I click login', async function () {
    let element = await this.driver.$('button[type="submit"]');
    return await element.click();
});

When('I go to posts', async function () {
    let element = await this.driver.$('#ember24');
    element.click();
});

When('I click to new post', async function() {
    let element = await this.driver.$('a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]');
    element.click();
});

When('I enter title {kraken-string}', async function (title) {
    let element = await this.driver.$('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]');
    return await element.setValue(title);
});

When('I write the post {kraken-string}', async function (content) {
    let element = await this.driver.$('div[class="koenig-editor__editor __mobiledoc-editor __has-no-content"]');
    return await element.setValue(content);
});

When('I click review', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-editor gh-editor-preview-trigger"]');
    return await element.click();
});