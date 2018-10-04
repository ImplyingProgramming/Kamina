- Feature Name: Simple posting interface 
- Start Date: 2017-11-03 
- RFC PR: (leave this empty)
- Kamina Issue: (leave this empty)

# Summary
[summary]: #summary

A simple interface for creating posts, and potentially adding attachments to posts.

# Motivation
[motivation]: #motivation

For starting this platform, I believe a simple interface for posting is enticing to the potential users. Should the platform evolve, additional features can be implemented to the interface, such as formatted text and attachments.

# Guide-level explanation
[guide-level-explanation]: #guide-level-explanation

Should this feature be implemented, it will have pros and cons:

## Pros

- Simple interfaces save time and effort in discussions
- The platform will be readily usable by all users

## Cons

- The platform will look underfeatured
- In addition, new users would not be moving immediately to the platform

The cons however are more of caveats at this point since we are only formulating how a proof-of-concept implementation of the platform will be.

# Reference-level explanation
[reference-level-explanation]: #reference-level-explanation

The posting interface is inspired by chatrooms and several bulletin boards through their "quick reply" feature. In order to get to the point of creating content for the platform, we should be implementing the interface as if it is a call-to-action (i.e. the primary action of the platform).

# Drawbacks
[drawbacks]: #drawbacks

As mentioned at the [guide-level explanation](#guide-level-explanation), there are pros and cons for implementing this feature. However, should the platform's userbase grow to an extent, it might be necessary to iterate the development of the posting interface.

# Rationale and alternatives
[alternatives]: #alternatives

If the implementors opt to have a relatively-complex content for the platform to begin with, then an appropriate interface is to be implemented.

# Unresolved questions
[unresolved]: #unresolved-questions

This feature does not take into account content, so it should leave the implementors the following questions:

- How should the content look like?
- How should content be structured?
- Should the platform focus with offering attachments?
- How should the attachments be managed?
