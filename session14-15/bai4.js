"use strict";
class User {
    constructor(id) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }

    createPost(content) {
        const newPost = new Post(this.id, content);
        this.posts.push(newPost);
    }

    comment(postId, content) {
        const post = this.posts.find((p) => p.id === postId);
        if (post) {
            post.addComment(this.id, content);
        }
    }

    follow(userId) {
        const userToFollow = new User(userId);
        this.followers.push(userToFollow);
    }

    likePost(postId) {
        const post = this.posts.find((p) => p.id === postId);
        if (post) {
            post.addLike(this.id);
        }
    }
}

class Post {
    constructor(userId, content) {
        this.id = generateUniqueId(); // Implement your own unique ID generator
        this.likes = [];
        this.comments = [];
        this.userId = userId;
        this.content = content;
    }

    addLike(userId) {
        this.likes.push(userId);
    }

    addComment(userId, commentContent) {
        const newComment = new Comment(userId, commentContent);
        this.comments.push(newComment);
    }
}

class Comment {
    constructor(userId, content) {
        this.id = generateUniqueId();
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }

    addReply(userId, replyContent) {
        const newReply = new Comment(userId, replyContent);
        this.replies.push(newReply);
    }
}

const user1 = new User("user123");
user1.createPost("Hello, world!");
user1.comment("post456", "Great post!");
user1.follow("user789");
user1.likePost("post789");