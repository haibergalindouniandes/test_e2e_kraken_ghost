Feature: My feature

@user2 @web
Scenario: Crear Post
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait
  And I enter password "<PASSWORD>"
  And I wait
  And I click login
  And I wait for 3 seconds
  And I go to posts
  And I wait
  And I click to new post
  And I wait
  And I enter title "<TITLE_NEW_POST>"
  And I wait
  And I write the post "<CONTENT_NEW_POST>"
  And I wait
  And I click review
  And I wait
  And I click publish
  And I wait
  And I click final review
  And I wait
  And I click publish post
  And I wait for 3 seconds
  And I surf by the post
  And I wait for 5 seconds