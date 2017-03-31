const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/userSchema');
const BlogPost = require('../src/blogPostSchema');

describe('Middleware', () => {
  let joe, blogPost;
  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    blogPost = new BlogPost({ title: 'JS is Great' });

    joe.blogPosts.push(blogPost);

    Promise.all([joe.save(), blogPost.save()])
      .then(() => done());
  });

  it('users clean up dangling blogposts on remove', (done) => {
    joe.remove() // UserSchema.pre('remove', function -- now called!
    .then(() => BlogPost.count())
    .then((count) => {
      assert(count === 0);
      done();
    });
  });
});