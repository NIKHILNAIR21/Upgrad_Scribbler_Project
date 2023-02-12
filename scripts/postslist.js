function viewDeletePostModal(id) {
    document.getElementById('deletePostModal').style.display = 'block';
    document.getElementById('deletePostModal').setAttribute('idToDelete', id);
}

function closeDeletePostModal() {
    document.getElementById('deletePostModal').style.display = 'none';
    event.preventDefault(); // prevents page from refreshing
}

function viewFullPost() {
    window.location.href = "./post.html";
}

function deletePost(e) {
    event.preventDefault(); // prevents page from refreshing
    document.getElementById('deletePostModal').style.display = 'none';
    var idToDelete = document.getElementById('deletePostModal').getAttribute('idToDelete');
    document.getElementById(idToDelete).remove();
}