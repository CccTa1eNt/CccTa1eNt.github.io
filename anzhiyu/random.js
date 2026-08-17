var posts=["2026/08/16/hello-world/","2026/08/16/“我的第一篇技术文章”/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };