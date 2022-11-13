const { Given, When, Then } = require('@cucumber/cucumber');

const Login = require('../pageObjects/login');
//const login = require("../pageObjects/login");

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('input[class="gh-input email"]');
    return await element.setValue(email);
  });
  
When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('input[class="gh-input password"]');
    return await element.setValue(password);
});

When('I click login', async function () {
    let element = await this.driver.$('button[type="submit"]');
    return await element.click();
});

When('I go to posts', async function () {
    let element = await this.driver.$('a[href="#/posts/"]');
    element.click();
});

When('I click to new post', async function() {
    let element = await this.driver.$('a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]');
    element.click();
});

When('I enter title {kraken-string}', async function (title) {
    let element = await this.driver.$('textarea[placeholder="Post title"]');
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

When('I click publish', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]');
    return await element.click();
});

When('I click final review', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-black gh-btn-large"]');
    return await element.click();
});

When('I click publish post', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-large gh-btn-pulse ember-view"]');
    return await element.click();
});

When('I surf by the post', async function () {
    let element = await this.driver.$('a[class="gh-post-bookmark-wrapper"]');
    return await element.click();
});