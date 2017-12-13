- Feature Name: Functionality Requirements
- Start Date: 2017-12-05
- RFC PR: (leave this empty)
- Kamina Issue: (leave this empty)

# Summary
[summary]: #summary

A web project needs requirements in order to ensure that all development remains on the right track and doesn't stray far from the goal of the project. This RFC outlines some of the potential features of a social network that Kamina could/should include.

# Motivation
[motivation]: #motivation

To aid Kamina contributors in maintaining a list of requirements which Kamina must support in order to be functional.

# Guide-level explanation
[guide-level-explanation]: #guide-level-explanation

This proposal outlines simple categories and small uses cases within these categories that relate to the functinality of a social network.

For this RFC, the following terms are defined:
- _Category_: A higher level group of _features_ that are all relevant to a major section of functionality of the site. Some examples may incldue profiles, threads, messaging, etc.
- _Feature_: A low level piece of functionality that contributes towards Kamina being a functional social network. For example, the ability to upload an image attached to a post.
- _Component_: A flexible, interchangable piece of a feature that extends the feature's functionality/usability. This could be a new field in someones profile (Name, DOB, email) or a supported format for an upload (png, jpg, svg).

This RFC should be used as a guide towards thinking what kind of capabilities we want Kamina to have as a social network. After peer review, this RFC aims to be a high level specification of functionality that Kamina will support. Every developer _should_ have a clear image of what will/will not be included in Kamina, and this RFC along with a more detailed specification should allow contributors to know exactly what they should/shouldn't be working on.

Keep in mind that this RFC aims to be an overshot on functionality. There are many features here that Kamina perhaps shouldn't have, but it would be wise to bring them up and discuss them instead of never considering them at all/ignoring them.

# Reference-level explanation
[reference-level-explanation]: #reference-level-explanation

The structure of the following section will be:
- Category
  - Feature(s)
    - Component(s) of a feature

- Threads:
  - _Post_ a text thread
  - _Attach a file_ to a text thread thread
  - _Reply_ to a thread
  - Make a _nested reply_ to a reply
  - _Attach a file_ to a reply
  - _Delete_ a reply
  - _Delete_ a thread

- Messaging:
  - _Send_ a privte message to another Kamina user
  - _Receive_ a private message to another Kamina user
  - _Attach_ a file to a private message
  - _Create_ a group chat with the same functionality of regular private messages, but with multiple users
  - _Leave_ a group chat
  - _Add_ people to a group chat
  - _Block_ a user's private messages
  - _View_ an inbox of your messages

- Friends:
  - _Add_ a friend
  - _Delete_ a friend
  - See a _list of friends_
  - _Accept/decline_ a friend request

- Profiles:
  - _Create_ a profile/account
  - _Record_ personal information on your profile:
    - Name
    - Date of Birth
    - Country
    - Email
    - Description
  - _Add_ a profile picture
  - _Delete_ a profile picture

- Search:
  - _Search_ for a thread with a query string
  - _Search_ for a user with a query string
  - Perform an _advanced search_ with a detailed form
  - _Edit_ the current search

- Receive a Notification When ...:
  - I _receive a message_
  - Someone _replies_ to a _thread/reply_ I made
  - Someone adds me as a _friend_
  - Someone accepts my _friend request_

# Drawbacks
[drawbacks]: #drawbacks

A lot of time can be wasted over discussing too many features/functionalities of a project. 

The idea of the project may diverge from the original purpose slightly.

# Rationale and alternatives
[alternatives]: #alternatives

- Why is this design the best in the space of possible designs?
  - This design approach allows everyone to contribute their ideas and vision of Kamina before major development begins. 
  - Allows others to point out features that are irrelevant/missing from Kamina
  - All users have a vision of what Kamina will become
- What other designs have been considered and what is the rationale for not choosing them?
  - A heavy alternative is having the 'owner' of Kamina write a specification
- What is the impact of not doing this?
  - The contributors of Kamina have little means to view/discuss the potential functionalities of Kamina
  - The contributors may be unsure of what they can work on in order to contribute to the project

# Unresolved questions
[unresolved]: #unresolved-questions

- Will a concrete Kamina specification be released before major development begins?
- Which of the above features belong in Kamina, and which should be excluded?
- If we exclude a feature, do we have the opportunity to re-include it in the future after Kamina has stabalised?
