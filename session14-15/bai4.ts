class User {
    id: string;
    posts: Post[];
    followers: User[];

    constructor(id: string) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }

    createPost(content: string): void {
        const newPost = new Post(this.id, content);
        this.posts.push(newPost);
    }

    comment(postId: string, content: string): void {
        const post = this.posts.find((p) => p.id === postId);
        if (post) {
            post.addComment(this.id, content);
        }
    }

    follow(userId: string): void {
        const userToFollow = new User(userId);
        this.followers.push(userToFollow);
    }

    likePost(postId: string): void {
        const post = this.posts.find((p) => p.id === postId);
        if (post) {
            post.addLike(this.id);
        }
    }
}

class Post {
    id: string;
    likes: string[];
    comments: Comment[];
    userId: string;
    content: string;

    constructor(userId: string, content: string) {
        this.id = generateUniqueId(); // Implement your own unique ID generator
        this.likes = [];
        this.comments = [];
        this.userId = userId;
        this.content = content;
    }

    addLike(userId: string): void {
        this.likes.push(userId);
    }

    addComment(userId: string, commentContent: string): void {
        const newComment = new Comment1(userId, commentContent);
        this.comments.push(newComment);
    }
}

class Comment1 {
    id: string;
    userId: string;
    content: string;
    replies: Comment[];

    constructor(userId: string, content: string) {
        this.id = generateUniqueId(); 
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }

    addReply(userId: string, replyContent: string): void {
        const newReply1 = new Comment1(userId, replyContent);
        this.replies.push(newReply);
    }
}

const user1 = new User("user123");
user1.createPost("Hello, world!");
user1.comment("post456", "Great post!");
user1.follow("user789");
user1.likePost("post789");