var posts=["2024/04/29/hello-world/","2024/05/02/hexo初步搭建完成/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };