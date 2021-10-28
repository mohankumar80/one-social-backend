const loginUser = require('./login-user.controller');
const signupUser = require('./signup-user.controller');
const getFeed = require('./feed.controller');
const searchUser = require('./search-user.controller');
const getAllFollowing = require('./get-all-following.controller');
const followUser = require('./follow-user.controller');
const unfollowUser = require('./unfollow-user.controller');
const myPosts = require('./my-posts.controller');
const addPost = require('./add-post.controller');
const deletePost = require('./delete-post.controller');
const getAllLikedPosts = require('./all-liked-posts.controller');
const likePost = require('./like-post.controller');
const unlikePost = require('./unlike-post.controller');
const getComments = require('./get-comments.controller');
const getAllPostComments = require('./get-all-post-comments.controller')
const commentOnPost = require('./comment-on-post.controller');
const deleteComment = require('./delete-comment.controller');

module.exports = {
	loginUser, signupUser, getFeed, searchUser, 
	myPosts, addPost, deletePost, getAllLikedPosts, 
	likePost, unlikePost, getAllFollowing, followUser, 
	unfollowUser, getComments, commentOnPost, deleteComment, getAllPostComments
}