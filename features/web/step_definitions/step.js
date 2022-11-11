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
