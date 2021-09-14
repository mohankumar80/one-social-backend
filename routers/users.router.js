const express = require('express');
const usersRouter = express.Router();
const { loginUser, signupUser, getFeed, searchUser, myPosts, addPost, deletePost, getAllLikedPosts, likePost, unlikePost, getAllFollowing, followUser, unfollowUser, getComments, commentOnPost, deleteComment } = require('../controllers/index')

/* user login */
usersRouter.route('/login')
.post(loginUser)

/* user signup */
usersRouter.route('/signup')
.post(signupUser);

/*
FEED
*/
usersRouter.route('/:userId/feed')
.get(getFeed)

usersRouter.route('/:userId/search-user')
.post(searchUser)

/* follow user & unfollow user */
usersRouter.route('/:userId/follow-user')
.get(getAllFollowing)
.post(followUser)
.delete(unfollowUser)

/*
POSTS 
*/
usersRouter.route('/:userId/post')
.get(myPosts)
.post(addPost)

usersRouter.route('/:userId/post/:postId')
.delete(deletePost)

/*
LIKES
*/
usersRouter.route('/:userId/post/like-post')
.get(getAllLikedPosts)

usersRouter.route('/:userId/post/like-post/:postId')
.put(likePost)
.patch(unlikePost)

/*
COMMMENTS
*/
usersRouter.route('/:userId/post/comment')
.get(getComments)

usersRouter.route('/:userId/post/comment/:postId')
.post(commentOnPost)
.delete(deleteComment)


module.exports = usersRouter;