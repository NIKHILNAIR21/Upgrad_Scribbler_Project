 function displayAllPosts() {
     window.location.href = "./html/postslist.html";
 }

 function createPost() {
     document.getElementById('newPostModal').style.display = 'block';
 }

 function closeNewPostDialog() {
     document.getElementById('newPostModal').style.display = 'none';
 }