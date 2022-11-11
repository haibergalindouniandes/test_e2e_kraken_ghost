Feature: My feature

@user1 @mobile
Scenario: My scenario 1
  Given I wait
  When I send a signal to user 2 containing "hi"

@user2 @web
Scenario: My scenario 2
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
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
  And I enter title "Desde Kraken Creando Post"
  And I wait
  And I write the post "Contenido del post a crear y publicar"
  And I wait
  And I click review
  And I wait