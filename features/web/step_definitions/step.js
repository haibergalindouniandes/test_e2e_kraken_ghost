const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require("chai").expect;

When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$("#ember6");
  return await element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$("#ember8");
  return await element.setValue(password);
});

When("I click login", async function () {
  let element = await this.driver.$('button[type="submit"]');
  return await element.click();
});

When("I go to posts", async function () {
  let element = await this.driver.$("#ember24");
  element.click();
});

When("I click to new post", async function () {
  let element = await this.driver.$(
    'a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]'
  );
  element.click();
});

When("I enter title {kraken-string}", async function (title) {
  let element = await this.driver.$(
    'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]'
  );
  return await element.setValue(title);
});

When("I write the post {kraken-string}", async function (content) {
  let element = await this.driver.$(
    'div[class="koenig-editor__editor __mobiledoc-editor __has-no-content"]'
  );
  return await element.setValue(content);
});

When("I click review", async function () {
  let element = await this.driver.$(
    'button[class="gh-btn gh-btn-editor gh-editor-preview-trigger"]'
  );
  return await element.click();
});

When("I navigate to settings", async function () {
  let element = await this.driver.$(
    'a[class="ember-view gh-nav-bottom-tabicon"]'
  );
  return element.click();
});

When("I go to staff", async function () {
  await this.driver.refresh();
  let element = await this.driver.$("#ember29");
  return await element.click();
});

When("I click button invitePeople", async function () {
  await this.driver.refresh();
  let element = await this.driver.$('button[class="gh-btn gh-btn-primary"]');
  return await element.click();
});

When("I enter email invite {kraken-string}", async function (email) {
  let element = await this.driver.$('input[name="email"]');
  return await element.setValue(email);
});

When("I click radioButton1", async function () {
  let element = await this.driver.$('div[class="gh-radio active"]');
  return await element.click();
});

When("I click button SendInvitation", async function () {
  let element = await this.driver.$(
    'button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]'
  );
  return await element.click();
});

When("I click in members", async function () {
  await this.driver.refresh();
  let element = await this.driver.$("#ember20");
  return await element.click();
});

When("I click in new member", async function () {
  await this.driver.refresh();
  let element = await this.driver.$("#ember31");
  return await element.click();
});

When(
  "I imput a new member {kraken-string}, {kraken-string}, {kraken-string}, {kraken-string}",
  async function (name, email, label, note) {
    await this.driver.refresh();
    let element1 = await this.driver.$('input[name="name"]');
    let element2 = await this.driver.$('input[name="email"]');
    let element3 = await this.driver.$(
      'input[class="ember-power-select-trigger-multiple-input"]'
    );
    let element4 = await this.driver.$('textarea[name="note"]');
    let element = await this.driver.$(
      'button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]'
    );
    await element1.setValue(name);
    await element2.setValue(email);
    await element3.setValue(label);
    await element4.setValue(note);
    return await element.click();
  }
);

When("I click in first member exist", async function () {
  await this.driver.refresh();
  let element = await this.driver.$(
    'h3[class="ma0 pa0 gh-members-list-name "]'
  );
  return await element.click();
});

/*let element = await this.driver.$('a[id="ember54"] h3[class="ma0 pa0 gh-members-list-name "]');
a[id='ember56'] h3[class='ma0 pa0 gh-members-list-name ']*/

When(
  "I edit an exists member {kraken-string}, {kraken-string}, {kraken-string}",
  async function (name, label, note) {
    await this.driver.refresh();
    let element1 = await this.driver.$("#member-name");
    let element2 = await this.driver.$(
      "#ember-power-select-trigger-multiple-input-ember35"
    );
    let element3 = await this.driver.$("#member-note");
    let element = await this.driver.$('button[id="ember31"] span');
    await element1.setValue(name);
    await element2.setValue(label);
    await element3.setValue(note);
    return await element.click();
  }
);

When("I click in Membersettings", async function () {
  await this.driver.refresh();
  let element = await this.driver.$("#ember29");
  return await element.click();
});

When("I click in DeleteMember", async function () {
  let element = await this.driver.$("li:nth-child(2) button:nth-child(1)");
  return await element.click();
});

When("I confirm Delete Member", async function () {
  let element = await this.driver.$("#ember55");
  return await element.click();
});

When("I select first Active user", async function () {
  await this.driver.refresh();
  let element = await this.driver.$(
    'a[id="ember45"] article[class="apps-card-app"]'
  );
  return await element.click();
});

When(
  "I change password {kraken-string} and {kraken-string}",
  async function (old_pass, new_pass) {
    await this.driver.refresh();
    let element1 = await this.driver.$("#user-password-old");
    let element2 = await this.driver.$("#user-password-new");
    let element3 = await this.driver.$("#user-new-password-verification");
    await element1.setValue(old_pass);
    await element2.setValue(new_pass);
    await element3.setValue(new_pass);
    let element = await this.driver.$('button[id="ember60"] span');
    return await element.click();
  }
);



When("I navigate to settings", async function () {
    let element = await this.driver.$(
      'a[class="ember-view gh-nav-bottom-tabicon"]'
    );
    return element.click();
  });
  
  When("I go to staff", async function () {
    await this.driver.refresh();
    let element = await this.driver.$("#ember29");
    return await element.click();
  });
  
  When("I click button invitePeople", async function () {
    await this.driver.refresh();
    let element = await this.driver.$('button[class="gh-btn gh-btn-primary"]');
    return await element.click();
  });
  
  When("I enter email invite {kraken-string}", async function (email) {
    let element = await this.driver.$('input[name="email"]');
    return await element.setValue(email);
  });
  
  When("I click radioButton1", async function () {
    let element = await this.driver.$('div[class="gh-radio active"]');
    return await element.click();
  });
  
  When("I click button SendInvitation", async function () {
    let element = await this.driver.$(
      'button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]'
    );
    return await element.click();
  });
  
  When("I click in members", async function () {
    await this.driver.refresh();
    let element = await this.driver.$("#ember20");
    return await element.click();
  });
  
  When("I click in new member", async function () {
    await this.driver.refresh();
    let element = await this.driver.$("#ember31");
    return await element.click();
  });
  
  When(
    "I imput a new member {kraken-string}, {kraken-string}, {kraken-string}, {kraken-string}",
    async function (name, email, label, note) {
      await this.driver.refresh();
      let element1 = await this.driver.$('input[name="name"]');
      let element2 = await this.driver.$('input[name="email"]');
      let element3 = await this.driver.$(
        'input[class="ember-power-select-trigger-multiple-input"]'
      );
      let element4 = await this.driver.$('textarea[name="note"]');
      let element = await this.driver.$(
        'button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]'
      );
      await element1.setValue(name);
      await element2.setValue(email);
      await element3.setValue(label);
      await element4.setValue(note);
      return await element.click();
    }
  );
  
  When("I click in first member exist", async function () {
    await this.driver.refresh();
    let element = await this.driver.$(
      'h3[class="ma0 pa0 gh-members-list-name "]'
    );
    return await element.click();
  });
  
  /*let element = await this.driver.$('a[id="ember54"] h3[class="ma0 pa0 gh-members-list-name "]');
  a[id='ember56'] h3[class='ma0 pa0 gh-members-list-name ']*/
  
  When(
    "I edit an exists member {kraken-string}, {kraken-string}, {kraken-string}",
    async function (name, label, note) {
      await this.driver.refresh();
      let element1 = await this.driver.$("#member-name");
      let element2 = await this.driver.$(
        "#ember-power-select-trigger-multiple-input-ember35"
      );
      let element3 = await this.driver.$("#member-note");
      let element = await this.driver.$('button[id="ember31"] span');
      await element1.setValue(name);
      await element2.setValue(label);
      await element3.setValue(note);
      return await element.click();
    }
  );
  
  When("I click in Membersettings", async function () {
    await this.driver.refresh();
    let element = await this.driver.$("#ember29");
    return await element.click();
  });
  
  When("I click in DeleteMember", async function () {
    let element = await this.driver.$("li:nth-child(2) button:nth-child(1)");
    return await element.click();
  });
  
  When("I confirm Delete Member", async function () {
    let element = await this.driver.$("#ember55");
    return await element.click();
  });
  
  When("I select first Active user", async function () {
    await this.driver.refresh();
    let element = await this.driver.$(
      'a[id="ember45"] article[class="apps-card-app"]'
    );
    return await element.click();
  });
  
  When(
    "I change password {kraken-string} and {kraken-string}",
    async function (old_pass, new_pass) {
      await this.driver.refresh();
      let element1 = await this.driver.$("#user-password-old");
      let element2 = await this.driver.$("#user-password-new");
      let element3 = await this.driver.$("#user-new-password-verification");
      await element1.setValue(old_pass);
      await element2.setValue(new_pass);
      await element3.setValue(new_pass);
      let element = await this.driver.$('button[id="ember60"] span');
      return await element.click();
    }
  );
  
  