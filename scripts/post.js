function toggleEditSave() {
    if (document.getElementById('postText').getAttribute("contentEditable") === "true") {
        document.getElementById('postText').setAttribute("contentEditable", "false");
        document.getElementById('postTitle').setAttribute("contentEditable", "false");
        document.getElementById('postText').style.border = "none";
        document.getElementById('postTitle').style.border = "none";
        document.getElementById('editPostButton').innerHTML = "Edit<i class='fa fa-edit'></i>";
    } else {
        document.getElementById('postText').setAttribute("contentEditable", "true");
        document.getElementById('postTitle').setAttribute("contentEditable", "true");
        document.getElementById('postText').style.border = "2px solid pink";
        document.getElementById('postTitle').style.border = "2px solid pink";
        document.getElementById('editPostButton').innerHTML = "Save<i class='fa fa-save'></i>";
    }
}

var numberOfClicks = 0;

function likePost() {
    document.getElementById("likePostBtn").innerHTML = "<i class='fa fa-thumbs-up'></i>Liked";
    numberOfClicks += 1;
    if (numberOfClicks !== 0) {
        if (numberOfClicks == 1) {
            document.getElementById('likesCount').innerHTML = numberOfClicks + " person likes this!";
        } else {
            document.getElementById('likesCount').innerHTML = numberOfClicks + " people like this!";
        }
    }
}

function addComment() {
    var comment = document.getElementById('commentText').value;
    var node = document.createElement("div");
    node.innerHTML = "<br>"
    node.style.backgroundColor = "#fff";
    node.style.margin = "10px 10px 10px 10px";
    node.style.padding = "0 20px 20px 10px";
    var textnode = document.createTextNode(comment);
    node.appendChild(textnode);

    if (comment === "") {
        alert("Please add a comment!");
    } else {
        var latestComment = document.getElementById("allCommentsBox");
        latestComment.style.display = "block";
        latestComment.insertBefore(node, latestComment.childNodes[0]);
        document.getElementById('commentText').value = "";
    }
}