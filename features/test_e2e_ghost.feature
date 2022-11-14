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

@user3 @web
Scenario: My scenario 3
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  And I enter email "<EMAIL>"
  And I wait
  And I enter password "<PASSWORD>"
  And I wait
  And I click login
  And I wait for 3 seconds
  And I navigate to settings
  And I wait for 3 seconds
  And I go to staff
  And I wait for 3 seconds
  And I click button invitePeople
  And I wait for 3 seconds
  And I enter email invite "$email_1"
  And I wait for 3 seconds
  And I click radioButton1
  And I wait for 3 seconds
  And I click button SendInvitation
  And I wait for 20 seconds

@user4 @web
Scenario: My scenario 4
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  And I enter email "<EMAIL>"
  And I wait
  And I enter password "<PASSWORD>"
  And I wait
  And I click login
  And I wait for 3 seconds
  And I click in members
  And I wait for 3 seconds
  And I click in new member
  And I wait for 3 seconds
  And I imput a new member "$name_2", "$email_2", "$string_2", "$string_3"
  And I wait for 3 seconds

@user5 @web
Scenario: My scenario 5
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  And I enter email "<EMAIL>"
  And I wait
  And I enter password "<PASSWORD>"
  And I wait
  And I click login
  And I wait for 3 seconds
  And I click in members
  And I wait for 3 seconds
  And I click in first member exist
  And I wait for 3 seconds
  And I edit an exists member "$name_2", "$string_4", "$string_5"
  And I wait for 3 seconds

@user6 @web
Scenario: My scenario 6
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  And I enter email "<EMAIL>"
  And I wait
  And I enter password "<PASSWORD>"
  And I wait
  And I click login
  And I wait for 3 seconds
  And I click in members
  And I wait for 3 seconds
  And I click in first member exist
  And I wait for 3 seconds
  And I click in Membersettings
  And I wait for 3 seconds
  And I click in DeleteMember
  And I wait for 3 seconds
  And I confirm Delete Member
  And I wait for 3 seconds

@user7 @web
Scenario: My scenario 7  
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  And I enter email "<EMAIL>"
  And I wait
  And I enter password "<PASSWORD>"
  And I wait
  And I click login
  And I wait for 3 seconds
  And I navigate to settings
  And I wait for 3 seconds
  And I go to staff
  And I wait for 3 seconds
  And I select first Active user
  And I wait for 3 seconds
  And I change password "<OLDPASSWORD>" and "<NEWPASSWORD>"
  And I wait for 7 seconds

@user11 @web
Scenario: Eliminar Post
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
  And I click on a published post
  And I wait
  And I click settings button
  And I wait
  And I click delete button
  And I wait
  And I click confirmation button
  And I wait for 3 seconds
  And I surf by the post
  And I wait for 5 seconds

