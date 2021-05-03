# UX prototpye 2/2
[Manually-filled multi-authorship](https://isabellawang0108.github.io/Multi-authorship-UX-testing-Iteration/).

# User testing
User testing is the process of evaluating a product by testing it with representative users. Ten participants are assigned to each prototype to complete tasks while the researcher and observers watch, listen, and take notes. This test aims to identify any usability problems and determine the participant's satisfaction level with adding multiple authors with custom credit shares.

In this testing, we offered two prototypes, [Autofilled multi-authorship](https://isabellawang0108.github.io/Multi-authorship-UX-testing-autoFill/) and [Manually filled multi authorship](https://isabellawang0108.github.io/Multi-authorship-UX-testing-Iteration/).

### auto-filled UX
The logic set up is that people can modify the % ownership for the co-authors, but not for themselves. For themselves, it automatically updates to 100 minus the total of all co-authors.

### manual UX
The field is free to edit. There will be a count to notify users whether they need to add or subtract credits. The submit button will only be activated once all the fields are added up to 100.


# scenario
You have uploaded your art to the Voice marketplace and are adding several contributors that have collaborated on this artwork. You are trying to attribute a specific amount of royalties to each contributor.

# Tasks


### Task 1: Adding two more creators to the page.

Goal: To find out whether the why that credits attributed to a new collaborator makes sense.
### Task 2: Allocating the royalty credits so that cryptogod receives 20% of the credit, cupcake receives 20% of the credit, and cryptopur receives 60% of the credit.
Goal: To identify any potential problems in customizing creator credits.
### Task 3: Adding one more collaborator, so there is a total of four creators.
Get prepare for task 4.
### Task 4: Allocating the credits so that cryptogod receives 10% of the credits, cupcake receives 15% of the credits, cryptopur receives 15% of the credits, and bluecrab receives 60% of the credits.
Goal: Identify any potential problems when the task is more complex.
### Task 5: Delete a collaborator
Goal: whether users know how to delete a collaborator. 
### Task 6: splitting the credits evenly between the three collaborators.
Goal: whether users know how to split the credits when the Math involves an infinite number. 

# Matrix
| Task     | Prototype auto-fill                          | Prototype manual-fill
| -------- | -------------------------------------------- | -------------------------------------------- |
| #1     |  100% success rate<br/> 8/10 dislike<br/> 2/10 think there are 2 users by default| 100% success rate<br/> 1/10 dislike<br/>1/10 thinks there are 2 users|
| #2       | 100% success<br/>58 seconds on average<br/>51.1 interactions/user| 100% success<br/>34 seconds on average<br/>14.7 interactions/user|
| #4       | 61 seconds on average<br/> 60 interactions/user |32 seconds on average<br/> 16 interactions/user|
| #5       | 100% success<br/> 0/10 dislike                   | 100% success<br/> 0/10 dislike                   |
| #6       | 100% success                                | 100% success                  |



# Takeaway
- The manual input is more accessible to the user based on a significantly less amount(73%) of interactions and time.
- Users get upset when fields are not deletable.
- The default username is a confusion point for users to mistaken themselves is other users. 
- Some users think that the creator(s) section doesn't include themselves.


# Bias
- In the user testing, we assign users the percentage number, which is a different thinking process in the actual case that users do not know the percentage they want to enter. The difference in thinking process may impact the level of difficulty and satisfaction using manual vs. auto input.
- In user testing, the user does not have the context that they have a username, so the confusion of whether they are included in the field may be less when they know what they are called.


